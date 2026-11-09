// PharmaHype fixes.js v2 - ALL-IN-ONE patch. Load LAST (after the main script). No other edits to index.html needed.
(function () {
  const pad = n => String(n).padStart(2, '0');
  const dayKey = (d = new Date()) => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  const yesterday = () => { const y = new Date(); y.setDate(y.getDate() - 1); return dayKey(y); };

  // 0. Notes: merge all notes files and diagrams into dPharmContent
  ['applyPharmaNotes', 'applySimpleNotes', 'applyDetailNotes', 'applyDiagrams'].forEach(fn => { if (typeof window[fn] === 'function') window[fn](dPharmContent); });

  // 1. Style: missing colour, highlights, simple box, logo, focus ring
  const st = document.createElement('style');
  st.textContent = `:root{--cyan-400:#22d3ee}
.article-content mark{background:#fef08a;color:#1e293b;padding:0 3px;border-radius:3px}
.simple{background:#ecfeff;border-left:4px solid #0891b2;padding:12px 14px;border-radius:0 12px 12px 0;color:var(--medical-text)}
body.dark .simple{background:rgba(8,145,178,.15);color:var(--dark-text)}
body.dark .course-card,body.dark .subject-card,body.dark .chapter-card,body.dark .year-card,body.dark .disabled-card{color:var(--dark-text)}
.brand{display:flex;align-items:center;gap:16px}
.brand-mark{width:64px;height:64px;border-radius:50%;background:#fff;display:grid;place-items:center;flex-shrink:0}
.brand-mark img{width:44px;height:auto;display:block}
.hero-logo{display:block;width:min(100%,320px);height:auto;margin:0 auto 28px}
body.dark .hero-logo{background:#fff;border-radius:20px;padding:14px}
.chapter-card:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}`;
  document.head.appendChild(st);
  document.documentElement.lang = 'hi-Latn';
  const fav = document.createElement('link'); fav.rel = 'icon'; fav.type = 'image/png'; fav.href = 'favicon.png'; document.head.appendChild(fav);

  // 2. Logo in header (symbol) + header Bookmarks button
  const first = document.querySelector('.header-inner > div');
  const brand = document.createElement('div'); brand.className = 'brand';
  brand.innerHTML = '<span class="brand-mark"><img src="logo-icon.png" alt="PharmaHype logo"></span>';
  first.parentNode.insertBefore(brand, first); brand.appendChild(first);
  const acc = document.getElementById('accountToggle');
  const bmBtn = document.createElement('button'); bmBtn.className = 'account-btn'; bmBtn.id = 'bookmarksToggle'; bmBtn.textContent = '★ Bookmarks';
  acc.parentNode.insertBefore(bmBtn, acc);
  bmBtn.addEventListener('click', () => { state.view = 'bookmarks'; state.course = state.year = state.subject = state.section = null; render(); });
  const baseLanding = renderLanding;
  renderLanding = () => baseLanding().replace('<div class="container">', '<div class="container"><img class="hero-logo" src="logo.png" alt="PharmaHype - The Complete Pharma Hub">');

  // 3. Bookmarks: unique key (year|subject|title) + bookmarks page
  const yk = () => state.year === 'first-year' ? 'firstYear' : 'secondYear';
  const bkKey = t => yk() + '|' + state.subject.id + '|' + t;
  const toggleKey = key => { state.bookmarks = state.bookmarks.includes(key) ? state.bookmarks.filter(k => k !== key) : [...state.bookmarks, key]; saveBookmarks(); render(); };
  function findB(key) {
    const [y, id, ...r] = key.split('|'), t = r.join('|');
    const sub = dPharmContent[y] && dPharmContent[y].subjects.find(s => s.id === id);
    const sec = sub && sub.sections.find(s => s.title === t);
    return sec ? { key, y, sub, sec } : null;
  }
  state.bookmarks = [...new Set(state.bookmarks.flatMap(b => b.includes('|') ? [b] :
    ['firstYear', 'secondYear'].flatMap(y => dPharmContent[y].subjects.flatMap(s => s.sections.filter(x => x.title === b).map(() => y + '|' + s.id + '|' + b)))))];
  saveBookmarks();
  toggleBookmark = function (title) { toggleKey(bkKey(title)); };
  function bookmarksHtml() {
    const items = state.bookmarks.map(findB).filter(Boolean);
    return `<div class="container"><div class="section-title"><h2>My Bookmarks</h2><p style="color:var(--medical-muted);margin:0">${items.length} saved</p><div class="section-divider" style="margin-top:16px"></div></div><div style="max-width:900px;margin:0 auto">${items.length ? items.map(b => `<div class="chapter-card" role="button" tabindex="0" data-action="open-bookmark" data-bookmark-key="${escapeHtml(b.key)}" style="margin-bottom:18px;text-align:left"><div class="chapter-left"><div class="chapter-number">${b.sub.icon}</div><div class="chapter-text"><h3>${escapeHtml(b.sec.title)}</h3><p>${escapeHtml(b.sub.name)} · ${b.y === 'firstYear' ? 'First Year' : 'Second Year'}</p></div></div><div class="chapter-actions"><button class="bookmark-btn active" data-action="toggle-bookmark" data-bookmark-key="${escapeHtml(b.key)}" aria-label="Remove bookmark">★</button><span class="arrow">›</span></div></div>`).join('') : '<div class="empty-state"><div style="font-size:3rem;opacity:.5">⭐</div><p>Abhi koi bookmark nahi hai. Kisi chapter ke ★ par click karo.</p></div>'}</div></div>`;
  }

  // 4. render(): keep focus/cursor/scroll (search fix) + bookmarks page + active stars
  const baseRender = render;
  render = function () {
    const a = document.activeElement, id = a && a.id, pos = a && a.selectionStart, y = window.scrollY;
    baseRender();
    if (state.view === 'bookmarks' && !state.section) app.insertAdjacentHTML('beforeend', bookmarksHtml());
    if (state.subject) document.querySelectorAll('[data-bookmark-title]').forEach(el => el.classList.toggle('active', state.bookmarks.includes(bkKey(el.dataset.bookmarkTitle))));
    window.scrollTo(0, y);
    const el = id && document.getElementById(id);
    if (el) { el.focus(); try { el.setSelectionRange(pos, pos); } catch (e) {} }
  };

  // 5. Bookmark star: <span> instead of nested <button>
  const baseDetail = renderSubjectDetail;
  renderSubjectDetail = () => baseDetail().replace(/<button class="bookmark-btn([^>]*)>★<\/button>/g, '<span role="button" tabindex="0" class="bookmark-btn$1>★</span>');
  document.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('span.bookmark-btn, div.chapter-card')) { e.preventDefault(); e.target.click(); }
  });

  // 6. Timer (no full re-render each second), remove-note, bookmark clicks
  function showTime() {
    const el = document.getElementById('timerDisplay');
    if (el) el.textContent = pad(Math.floor(state.timerSeconds / 60)) + ':' + pad(state.timerSeconds % 60);
  }
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-action]');
    if (!t) return;
    const act = t.dataset.action;
    if (act === 'toggle-timer') {
      e.stopPropagation();
      if (state.timerRunning) { clearInterval(state.timerInterval); state.timerInterval = null; state.timerRunning = false; render(); return; }
      state.timerRunning = true;
      state.timerInterval = setInterval(() => {
        if (state.timerSeconds > 0) { state.timerSeconds -= 1; showTime(); return; }
        clearInterval(state.timerInterval); state.timerInterval = null; state.timerRunning = false;
        state.todayMinutes += state.timerMinutes; state.timerSeconds = state.timerMinutes * 60;
        saveStudyProgress(); render(); alert('Focus session complete!');
      }, 1000);
      render();
    }
    if (act === 'remove-note') { e.stopPropagation(); state.notes.splice(Number(t.dataset.noteIndex), 1); saveNotes(); render(); }
    if (act === 'toggle-bookmark' && t.dataset.bookmarkKey) { e.stopPropagation(); toggleKey(t.dataset.bookmarkKey); }
    if (act === 'open-bookmark') {
      e.stopPropagation();
      const b = findB(t.dataset.bookmarkKey); if (!b) return;
      state.course = 'd-pharm'; state.year = b.y === 'firstYear' ? 'first-year' : 'second-year';
      state.subject = b.sub; state.section = b.sec; state.view = 'reading-view'; render();
    }
  }, true);

  // 7. Account button works while reading a chapter
  acc.addEventListener('click', () => { state.section = null; render(); });

  // 8. Study time resets daily + real streak
  try {
    if (localStorage.getItem('pharmaStudyDate') !== dayKey()) {
      state.todayMinutes = 0; localStorage.setItem('pharmaTodayMinutes', '0'); localStorage.setItem('pharmaStudyDate', dayKey());
    }
  } catch (e) {}
  const getStreak = () => { try { return JSON.parse(localStorage.getItem('pharmaStreak')) || { last: '', count: 0 }; } catch (e) { return { last: '', count: 0 }; } };
  const shownStreak = () => { const s = getStreak(); return (s.last === dayKey() || s.last === yesterday()) ? s.count : 0; };
  const baseSave = saveStudyProgress;
  saveStudyProgress = function () {
    baseSave();
    try { localStorage.setItem('pharmaStudyDate', dayKey()); } catch (e) {}
    if (state.todayMinutes > 0) {
      const s = getStreak();
      if (s.last !== dayKey()) { s.count = s.last === yesterday() ? s.count + 1 : 1; s.last = dayKey(); try { localStorage.setItem('pharmaStreak', JSON.stringify(s)); } catch (e) {} }
    }
  };
  const baseDash = renderDashboard;
  renderDashboard = () => {
    try {
      if (localStorage.getItem('pharmaStudyDate') !== dayKey()) {
        state.todayMinutes = 0;
        localStorage.setItem('pharmaTodayMinutes', '0');
        localStorage.setItem('pharmaStudyDate', dayKey());
      }
    } catch (e) {}
    return baseDash().replace('<strong>5</strong>', '<strong>' + shownStreak() + '</strong>');
  };

  // 9. Dark mode remembered after refresh
  try { state.dark = localStorage.getItem('pharmaDark') === '1'; } catch (e) {}
  document.getElementById('themeToggle').addEventListener('click', () => { try { localStorage.setItem('pharmaDark', state.dark ? '1' : '0'); } catch (e) {} });

  // 10. Profile photo resized to 160x160 before saving
  document.addEventListener('change', e => {
    if (!e.target.matches('#profileUpload')) return;
    e.stopPropagation();
    const f = e.target.files && e.target.files[0];
    if (!f || !f.type.startsWith('image/')) return;
    if (f.size > 10 * 1024 * 1024) { alert('Photo bahut badi hai. 10 MB se chhoti photo chuno.'); return; }
    const oldPhoto = state.user.photo;
    const img = new Image(), url = URL.createObjectURL(f);
    img.onload = () => {
      try {
        const c = document.createElement('canvas'); c.width = c.height = 160;
        const s = Math.min(img.width, img.height);
        const context = c.getContext('2d');
        if (!context) throw new Error('Canvas context unavailable');
        context.drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, 160, 160);
        state.user.photo = c.toDataURL('image/jpeg', 0.8);
        localStorage.setItem('pharmaUser', JSON.stringify(state.user));
      } catch (err) {
        state.user.photo = oldPhoto;
        alert('Photo save nahi ho payi. Koi doosri photo try karo.');
        return;
      } finally {
        URL.revokeObjectURL(url);
      }
      render();
    };
    img.onerror = () => { URL.revokeObjectURL(url); state.user.photo = oldPhoto; alert('Photo khul nahi payi. JPG ya PNG try karo.'); };
    img.src = url;
  }, true);

  render();
})();
