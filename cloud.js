// PharmaHype cloud.js - real login + private cloud notes (Supabase). Load AFTER fixes.js
const SUPABASE_URL = 'PASTE_PROJECT_URL_HERE';        // Supabase > Project Settings > API > Project URL
const SUPABASE_ANON_KEY = 'PASTE_ANON_PUBLIC_KEY_HERE'; // same page > anon public key (NEVER the service_role key)
(function () {
  if (!SUPABASE_URL || SUPABASE_URL.startsWith('PASTE') ||
      !SUPABASE_ANON_KEY || SUPABASE_ANON_KEY.startsWith('PASTE') ||
      !window.supabase) {
    console.warn('Cloud notes OFF: Supabase URL/key daalo aur Supabase script check karo.');
    return;
  }
  let sb;
  try {
    sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (error) {
    console.error('Cloud notes could not start:', error);
    return;
  }
  const BUCKET = 'notes', MAX = 10 * 1024 * 1024, OK = /\.(pdf|txt|docx|png|jpe?g)$/i;
  let cloudUser = null, notes = null, loading = false, status = '';
  const initials = n => (n || 'S').split(/\s+/).filter(Boolean).slice(0, 2).map(p => p[0].toUpperCase()).join('') || 'S';
  const shown = n => n.replace(/^\d+-/, '');
  const path = n => `${cloudUser.id}/${n}`;

  sb.auth.onAuthStateChange((_event, session) => {
    cloudUser = session ? session.user : null; notes = null;
    if (cloudUser) {
      const email = cloudUser.email || '';
      const name = (cloudUser.user_metadata && cloudUser.user_metadata.name) || email.split('@')[0] || 'Student';
      state.user = { ...state.user, name, email, initials: initials(name) }; saveUser();
    }
    render();
  });

  // Real signup / login (replaces the fake form handler)
  document.addEventListener('submit', async e => {
    if (e.target.dataset.action !== 'submit-auth') return;
    e.preventDefault(); e.stopPropagation();
    const f = new FormData(e.target), msg = e.target.querySelector('.auth-message');
    const email = String(f.get('email') || '').trim(), password = String(f.get('password') || ''), name = String(f.get('name') || '').trim();
    msg.textContent = 'Please wait...';
    const signup = state.authMode === 'signup';
    let result;
    try {
      result = signup
        ? await sb.auth.signUp({ email, password, options: { data: { name } } })
        : await sb.auth.signInWithPassword({ email, password });
    } catch (error) {
      msg.textContent = error.message || 'Login mein dikkat hui. Dobara try karo.';
      return;
    }
    const { data, error } = result;
    if (error) { msg.textContent = error.message; return; }
    if (signup && !data.session) { msg.textContent = 'Email par confirmation link bheja gaya hai. Confirm karke login karo.'; return; }
    state.view = 'dashboard'; render();
  }, true);

  async function loadNotes() {
    if (!cloudUser) return;
    try {
      const { data, error } = await sb.storage.from(BUCKET).list(cloudUser.id, { limit: 100, sortBy: { column: 'created_at', order: 'desc' } });
      if (error) status = error.message;
      notes = error ? [] : data.filter(x => x.id);
    } catch (error) {
      status = error.message || 'Notes load nahi ho paye.';
      notes = [];
    }
    render();
  }

  function paint() {
    const card = document.querySelector('.notes-card'); if (!card) return;
    if (!cloudUser) {
      card.innerHTML = '<h3>My Notes</h3><p style="color:var(--medical-muted)">Apne notes cloud mein save karne ke liye login karo.</p><button class="timer-btn primary" data-action="open-account">Login / Sign Up</button>';
      return;
    }
    if (notes === null && !loading) { loading = true; loadNotes().finally(() => { loading = false; }); }
    const rows = (notes || []).map(n => `<li class="note-item"><span class="note-name">📄 ${escapeHtml(shown(n.name))}</span><span><button class="timer-btn secondary" data-action="cloud-open" data-name="${escapeHtml(n.name)}">Open</button> <button class="note-remove" data-action="cloud-delete" data-name="${escapeHtml(n.name)}" aria-label="Delete note">✕</button></span></li>`).join('');
    card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><h3 style="margin:0">My Notes (Cloud)</h3><button class="timer-btn secondary" data-action="cloud-logout">Logout</button></div>
      <label class="notes-upload" for="cloudNoteUpload"><div style="font-size:2rem;color:var(--primary-color)">☁</div><strong>Upload Notes</strong><span>PDF, TXT, DOCX, PNG, JPG (max 10 MB)</span><input class="profile-upload" type="file" id="cloudNoteUpload" accept=".pdf,.txt,.docx,.png,.jpg,.jpeg"></label>
      <p style="min-height:20px;text-align:center;color:var(--medical-teal);font-weight:700">${escapeHtml(status)}</p>
      <ul class="notes-list">${notes === null ? '<li>Loading...</li>' : rows || '<li style="color:var(--medical-muted);font-style:italic">Abhi koi note save nahi hai.</li>'}</ul>`;
  }

  const baseRender = render;
  render = function () {
    baseRender();
    if (state.view === 'dashboard' && !state.section) paint();
    if (state.view === 'auth' && !state.section && cloudUser) {
      const c = document.querySelector('.auth-card');
      if (c) c.innerHTML = `<h2>Logged in</h2><p>${escapeHtml(cloudUser.email || '')}</p><div class="timer-actions"><button class="timer-btn primary" data-action="open-dashboard">Dashboard</button><button class="timer-btn secondary" data-action="cloud-logout">Logout</button></div>`;
    }
  };

  document.addEventListener('change', async e => {
    if (!e.target.matches('#cloudNoteUpload')) return;
    const f = e.target.files[0]; if (!f || !cloudUser) return;
    if (!OK.test(f.name)) { status = 'Ye file type allowed nahi hai.'; return render(); }
    if (f.size > MAX) { status = 'File 10 MB se badi hai.'; return render(); }
    status = 'Uploading...'; render();
    const safe = f.name.replace(/[^\w.\-]+/g, '_');
    try {
      const { error } = await sb.storage.from(BUCKET).upload(path(`${Date.now()}-${safe}`), f, { contentType: f.type || undefined });
      status = error ? 'Upload fail: ' + error.message : 'Upload ho gaya ✓';
    } catch (error) {
      status = 'Upload fail: ' + (error.message || 'Dobara try karo.');
    }
    await loadNotes();
  });

  document.addEventListener('click', async e => {
    const t = e.target.closest('[data-action]'); if (!t) return;
    const a = t.dataset.action;
    if (a === 'cloud-open' && cloudUser) {
      const w = window.open('', '_blank');   // tab pehle kholo, warna browser popup block kar deta hai
      if (!w) { status = 'Browser ne naya tab block kar diya.'; return render(); }
      try {
        const { data, error } = await sb.storage.from(BUCKET).createSignedUrl(path(t.dataset.name), 60);
        if (error || !data) throw error || new Error('File open nahi ho payi.');
        w.location = data.signedUrl;
      } catch (error) {
        w.close();
        status = 'Open fail: ' + (error.message || 'Dobara try karo.');
        render();
      }
    }
    if (a === 'cloud-delete' && cloudUser) {
      if (!confirm('Ye note delete karna hai?')) return;
      try {
        const { error } = await sb.storage.from(BUCKET).remove([path(t.dataset.name)]);
        if (error) throw error;
        status = 'Note delete ho gaya.';
      } catch (error) {
        status = 'Delete fail: ' + (error.message || 'Dobara try karo.');
      }
      await loadNotes();
    }
    if (a === 'cloud-logout') {
      try {
        const { error } = await sb.auth.signOut();
        if (error) throw error;
        status = ''; state.view = 'landing'; render();
      } catch (error) {
        status = 'Logout fail: ' + (error.message || 'Dobara try karo.');
        render();
      }
    }
  });

  render();
})();
