// PharmaHype - Inline SVG study diagrams.
const flow = steps => {
  let svg = `<svg viewBox="0 0 300 ${steps.length * 54}" style="max-width:340px;width:100%;display:block;margin:auto" font-family="Arial" font-size="12" text-anchor="middle"><defs><marker id="ar" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#0e7490"/></marker></defs>`;
  steps.forEach((text, index) => {
    const y = index * 54 + 4;
    svg += `<rect x="10" y="${y}" width="280" height="34" rx="9" fill="#ecfeff" stroke="#0e7490"/><text x="150" y="${y + 21}" fill="#1e293b">${text}</text>`;
    if (index < steps.length - 1) {
      svg += `<line x1="150" y1="${y + 34}" x2="150" y2="${y + 52}" stroke="#0e7490" stroke-width="2" marker-end="url(#ar)"/>`;
    }
  });
  return svg + '</svg>';
};

const cellSvg = `<svg viewBox="0 0 320 230" style="max-width:360px;width:100%;display:block;margin:auto" font-family="Arial" font-size="10" text-anchor="middle">
<ellipse cx="160" cy="115" rx="148" ry="100" fill="#f0fdfa" stroke="#0e7490" stroke-width="4"/>
<circle cx="160" cy="105" r="36" fill="#cffafe" stroke="#0e7490" stroke-width="2"/><circle cx="168" cy="98" r="9" fill="#0e7490"/>
<text x="160" y="152" fill="#1e293b" font-weight="bold">Nucleus (DNA)</text>
<ellipse cx="75" cy="85" rx="26" ry="12" fill="#fde68a" stroke="#b45309"/><text x="75" y="70" fill="#1e293b">Mitochondria</text>
<ellipse cx="248" cy="150" rx="26" ry="12" fill="#fde68a" stroke="#b45309"/><text x="248" y="177" fill="#1e293b">Mitochondria</text>
<path d="M215 60q20-10 40 0M215 68q20-10 40 0M215 76q20-10 40 0" fill="none" stroke="#7c3aed" stroke-width="3"/><text x="235" y="52" fill="#1e293b">Golgi body</text>
<path d="M95 150q15-14 30 0t30 0" fill="none" stroke="#059669" stroke-width="3"/><text x="115" y="176" fill="#1e293b">ER</text>
<circle cx="60" cy="140" r="3" fill="#dc2626"/><circle cx="72" cy="150" r="3" fill="#dc2626"/><circle cx="55" cy="155" r="3" fill="#dc2626"/><text x="62" y="172" fill="#1e293b">Ribosomes</text>
<circle cx="260" cy="95" r="9" fill="#fecaca" stroke="#dc2626"/><text x="262" y="120" fill="#1e293b">Lysosome</text>
<text x="160" y="212" fill="#0e7490" font-weight="bold">Cell membrane (bahar ki parat)</text></svg>`;

const diagramNotes = {
  firstYear: {
    'pharmaceutics-i': {
      3: ['Freeze Drying (Lyophilization)', flow(['Product ko freeze karo', 'Vacuum lagao', 'Primary drying: barf seedha bhaap (sublimation)', 'Secondary drying: bacha paani nikalo', 'Dry powder vial mein seal karo'])],
      4: ['Tablet Banane ka Process (Wet Granulation)', flow(['Powder weigh karke mix karo', 'Binder dal kar wet mass banao', 'Sieve se granules banao', 'Dry karo (fluidized bed dryer)', 'Lubricant milao', 'Compress karke goli banao', 'Coating aur packing'])]
    },
    hap: {
      1: ['Cell ka Diagram', cellSvg],
      4: ['Blood Clotting ke Steps', flow(['Chot lagi, khoon bahna', 'Platelets chipak kar plug banate hain', 'Clotting factors activate hote hain', 'Thromboplastin banta hai', 'Prothrombin se Thrombin (Ca2+ ki madad)', 'Fibrinogen se Fibrin (jaal)', 'Blood clot ban gaya'])],
      6: ['Dil mein Khoon ka Raasta', flow(['Body se O2 kam khoon aata hai', 'Right atrium (tricuspid valve se)', 'Right ventricle (pulmonary valve se)', 'Phephde: O2 milti hai, CO2 nikalti hai', 'Left atrium (mitral valve se)', 'Left ventricle (aortic valve se)', 'Aorta se poore shareer mein O2 wala khoon'])],
      12: ['Peshab Banne ka Process', flow(['Glomerulus: filtration', 'Proximal tubule: glucose, paani wapas', 'Loop of Henle: paani aur salts', 'Distal tubule: secretion + reabsorption', 'Collecting duct', 'Peshab (urine)'])]
    }
  },
  secondYear: {
    pharmacology: {
      0: ['Dawa ka Safar (ADME)', flow(['Absorption: dawa khoon mein jaati hai', 'Distribution: tissues tak pahunchti hai', 'Metabolism: liver mein tootti hai', 'Excretion: kidney se bahar'])]
    },
    biochemistry: {
      7: ['Energy Banane ka Overview', flow(['Carbohydrate se Glucose', 'Glycolysis (cytoplasm): Glucose se Pyruvate', 'Pyruvate se Acetyl CoA', 'TCA cycle (mitochondria)', 'ETC + oxidative phosphorylation', 'ATP (energy) + CO2 + H2O'])]
    }
  }
};

function applyDiagrams(content) {
  Object.entries(diagramNotes).forEach(([year, subjects]) => {
    Object.entries(subjects).forEach(([id, diagrams]) => {
      const subject = content[year].subjects.find(item => item.id === id);
      if (!subject) return;
      Object.entries(diagrams).forEach(([index, [title, svg]]) => {
        const section = subject.sections[Number(index)];
        if (!section || section.hasDiagram) return;
        section.hasDiagram = true;
        section.contentHtml = (section.contentHtml || '') + `<h3>📊 ${title}</h3>` + svg;
      });
    });
  });
}
