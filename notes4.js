// PharmaHype - Detailed simple notes, Pharmaceutical Chemistry (ER20-12T).
// D([['Heading', 'point|point']]); *word* becomes a highlighted <mark>.
const D = parts => parts.map(([heading, points]) =>
  `<h3>${heading}</h3><ul>` +
  points.split('|').map(point =>
    `<li>${point.trim().replace(/\*(.+?)\*/g, '<mark>$1</mark>')}</li>`
  ).join('') +
  '</ul>'
).join('');

const detailNotes = {
  firstYear: {
    'pharmaceutical-chemistry': [
      D([
        ['Errors', '*Accuracy* = result true value ke kitna paas hai. *Precision* = baar-baar karne par result kitna same aata hai. *Significant figures* = number ke wo digits jo bharosemand hain.'],
        ['Impurities (ashuddhiyan)', 'Aati kahan se hain: kachcha maal, banane ka process, storage. Zyada impurity = dawa unsafe. Isliye *limit test* hota hai.'],
        ['Limit tests (sample ko standard se compare karte hain)', '*Chloride*: AgNO3 + nitric acid, safed dhundhlapan (turbidity). *Sulphate*: BaCl2, safed turbidity. *Iron*: thioglycolic acid, bangani/purple rang. *Heavy metals*: sulphide se bhura-kala rang (lead standard se compare). *Arsenic*: *Gutzeit test*, arsine gas se paper par peela-bhura daag.']
      ]),
      D([
        ['Volumetric analysis', 'Known strength ke solution (titrant) se unknown ki matra naapna. *Acid-base*: acid + base, indicator se end point (phenolphthalein, methyl orange). *Non-aqueous*: kamzor acid/base ke liye, jaise perchloric acid + glacial acetic acid. *Precipitation*: AgNO3 se chloride. *Mohr* (indicator K2CrO4) aur *Volhard* (back titration, ferric alum). *Complexometric*: EDTA se metal ions (Ca, Mg); indicator Eriochrome Black T. *Redox*: KMnO4 (khud indicator) aur iodometry.'],
        ['Gravimetric analysis', 'Pure precipitate banao, filter karo, sukhao aur *tol lo*.']
      ]),
      D([
        ['Haematinics (khoon badhane wale)', 'Ferrous sulphate, ferrous fumarate, ferric ammonium citrate, ferrous ascorbate, carbonyl iron: *anaemia* mein.'],
        ['Antacids & GI agents', 'Pet ka acid neutralise karte hain: aluminium hydroxide gel, *magnesium hydroxide* (milk of magnesia), magaldrate, *sodium bicarbonate* (turant asar), calcium carbonate. Adsorbents, protectives aur cathartics (julab) bhi isi group mein.'],
        ['Topical agents', '*Silver nitrate* (cauterising), ionic silver (dressing), *chlorhexidine* (antiseptic), *hydrogen peroxide* (ghav ki safai), boric acid (halka antiseptic), bleaching powder (paani ko jeevanu-mukt karna), *KMnO4* (antiseptic).'],
        ['Dental aur gases', '*Sodium fluoride* daant ki sadan se bachata hai. Denture cleaners, adhesives, mouthwash. *Oxygen* (saans), *nitrous oxide* (laughing gas, anaesthetic), *CO2* (oxygen ke saath respiratory stimulant).']
      ]),
      D([
        ['Heterocyclic compounds', 'Ring jisme carbon ke alawa *N, O ya S* ho. *Pyrrole* (N), *furan* (O), *thiophene* (S) = 5-member ring. *Pyridine* (N) = 6-member ring. *Imidazole* = 2 N. *Indole* = benzene + pyrrole. *Quinoline* = benzene + pyridine. *Purine* = pyrimidine + imidazole. *Phenothiazine* = 3 ring (N aur S). Numbering *heteroatom se shuru*.']
      ]),
      D([
        ['CNS drugs (dimaag par asar)', '*Anaesthetics*: behoshi laate hain. Thiopental, propofol (IV), ketamine. *Sedative-hypnotics*: neend aur chinta kam. Diazepam, alprazolam, nitrazepam (benzodiazepines); *phenobarbital* (barbiturate, mirgi mein bhi). *Antipsychotics*: psychosis mein. Chlorpromazine, haloperidol (typical); risperidone, olanzapine, quetiapine (atypical). *Anticonvulsants* (mirgi): phenytoin, carbamazepine, valproic acid, gabapentin, clonazepam, topiramate, lamotrigine. *Antidepressants*: *TCAs* (amitriptyline, imipramine) aur *SSRIs* (fluoxetine, sertraline, citalopram, escitalopram, paroxetine).']
      ]),
      D([
        ['Sympathomimetics (adrenaline jaise)', '*Epinephrine* = emergency (anaphylaxis). *Salbutamol, terbutaline* = dama. *Phenylephrine, naphazoline* = naak band. *Dopamine* = shock. *Ephedrine, pseudoephedrine* = decongestant.'],
        ['Adrenergic blockers', '*Beta blockers* (propranolol, atenolol, carvedilol): BP, angina. *Alpha blockers* (prazosin, phentolamine, phenoxybenzamine): BP.'],
        ['Cholinergic drugs', '*Pilocarpine* = glaucoma. *Neostigmine* = myasthenia gravis. *Pralidoxime* = organophosphate zeher mein antidote.'],
        ['Anticholinergic (blockers)', '*Atropine* = secretions kam, pupil bada. *Ipratropium* = dama. *Dicyclomine, clidinium* = pet ki maroda. *Tropicamide, cyclopentolate* = aankh ki jaanch.']
      ]),
      D([
        ['CVS drugs', '*Anti-arrhythmic* (dhadkan theek): lidocaine, amiodarone, sotalol, verapamil, quinidine, procainamide. *Antihypertensive* (BP): *captopril, ramipril* (ACE inhibitors), *nifedipine* (calcium channel blocker), clonidine, methyldopa, hydralazine, propranolol. *Antianginal*: *isosorbide dinitrate* (vasodilator, seene ke dard mein).']
      ]),
      D([
        ['Diuretics (peshab badhane wale)', '*Frusemide* (strong loop diuretic), bumetanide. *Chlorthalidone, benzthiazide, metolazone, xipamide* (thiazide jaise). *Spironolactone* (potassium bachata hai). *Acetazolamide* (glaucoma, altitude sickness). Use: BP, sujan (oedema), dil ki kamzori.']
      ]),
      D([
        ['Diabetes ki dawaiyan', '*Insulin* (injection, type 1 mein zaruri). *Metformin* (type 2 ki pehli dawa). *Glibenclamide, glimepiride* insulin release badhate hain (sugar bahut kam hone ka khatra). *Pioglitazone* (insulin ka asar badhata hai), *repaglinide*. *Gliflozins* peshab se sugar nikalte hain; *gliptins* DPP-4 rokte hain.']
      ]),
      D([
        ['Dard aur sujan', '*Morphine* = bahut tez dard; *naloxone* = antagonist (zehar ka antidote). *NSAIDs*: *aspirin* (platelets bhi roke; bachchon mein bachna), *paracetamol* (bukhaar, dard; zyada dose se liver kharab), ibuprofen, diclofenac, piroxicam, mefenamic acid, aceclofenac, *celecoxib* (COX-2 selective).']
      ]),
      D([
        ['Anti-infectives', '*Antifungal*: amphotericin-B, griseofulvin, ketoconazole, fluconazole, itraconazole, miconazole. *UTI*: norfloxacin, ciprofloxacin, ofloxacin, moxifloxacin. *Anti-TB*: *INH, rifampicin, pyrazinamide, ethambutol*, PAS, bedaquiline. *Antiviral*: acyclovir (herpes), zidovudine (HIV), amantadine, ribavirin, remdesivir. *Antimalarial*: chloroquine, quinine, primaquine, artemisinin. *Sulfonamides*: sulfamethoxazole, sulfadiazine, cotrimoxazole; *dapsone* (leprosy).']
      ]),
      D([
        ['Antibiotics', '*Penicillin G, amoxicillin, cloxacillin* (beta-lactam). *Streptomycin* (aminoglycoside, TB). *Tetracyclines*: doxycycline, minocycline. *Macrolides*: erythromycin, azithromycin. *Chloramphenicol, clindamycin* (miscellaneous).']
      ]),
      D([
        ['Anti-cancer (neoplastic) drugs', '*Alkylating*: cyclophosphamide, busulfan. *Antimetabolites*: mercaptopurine, *fluorouracil, methotrexate*. *Antibiotics*: dactinomycin, doxorubicin. *Plant-derived*: vinblastine. *Platinum*: cisplatin. *Hormone*: dromostanolone propionate.']
      ])
    ]
  }
};

function applyDetailNotes(content) {
  Object.entries(detailNotes).forEach(([year, subjects]) => {
    Object.entries(subjects).forEach(([id, details]) => {
      const subject = content[year] && content[year].subjects.find(item => item.id === id);
      if (!subject) return;
      subject.sections.forEach((section, index) => {
        if (!details[index] || section.detailed) return;
        section.detailed = true;
        const simpleBox = (section.contentHtml || '').match(/^<div class="simple">[\s\S]*?<\/div>/);
        section.contentHtml = (simpleBox ? simpleBox[0] : '') + details[index];
      });
    });
  });
}
