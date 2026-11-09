// PharmaHype - Brief notes for all remaining subjects (PCI ER-2020). Load AFTER notes.js
// S(title, 'point|point|point', 'important line'); *word* becomes a highlighted <mark>
const S = (title, pts, imp) => {
  const p = pts.split('|').map(x => x.trim().replace(/\*(.+?)\*/g, '<mark>$1</mark>'));
  const plain = p.map(x => x.replace(/<\/?mark>/g, ''));
  return { title, content: plain.join('. '), important: imp || '', contentHtml: '<ul>' + p.map(x => `<li>${x}</li>`).join('') + '</ul>' };
};
Object.assign(pharmaNotesBatch.firstYear, {
  'pharmaceutical-chemistry': [
    S('1. Introduction, Errors & Impurities', 'Scope: chemistry, quality and uses of drugs|*Accuracy* = closeness to true value; *precision* = reproducibility; significant figures|Impurity sources: raw materials, manufacturing process, storage|*Limit tests*: chlorides, sulphates (turbidity), iron (colour), heavy metals (sulphide colour), arsenic (Gutzeit stain)', 'Limit test = compare sample against a standard to check impurity is within the limit.'),
    S('2. Volumetric & Gravimetric Analysis', 'Titrations: *acid-base*, *non-aqueous* (weak bases; perchloric acid in glacial acetic acid), *precipitation* (Mohr, Volhard), *complexometric* (EDTA), *redox* (KMnO4, iodometry)|*Gravimetric*: weigh a pure precipitate of known composition', 'Complexometric titration uses EDTA for Ca, Mg.'),
    S('3. Inorganic Pharmaceuticals', '*Haematinics*: ferrous sulphate, ferrous fumarate, ferric ammonium citrate, ferrous ascorbate, carbonyl iron|*Antacids*: aluminium hydroxide gel, magnesium hydroxide, magaldrate, sodium bicarbonate, calcium carbonate; acidifying agents, adsorbents, protectives, cathartics|*Topical*: silver nitrate, ionic silver, chlorhexidine, hydrogen peroxide, boric acid, bleaching powder, KMnO4|*Dental*: calcium carbonate, sodium fluoride, denture cleaners/adhesives, mouthwashes|*Medicinal gases*: CO2, nitrous oxide, oxygen'),
    S('4. Nomenclature of Heterocycles (up to 3 rings)', 'Heterocycle = ring with N, O or S|Examples: *pyrrole, furan, thiophene, pyridine, indole, quinoline, purine, phenothiazine*|Numbering starts at the heteroatom'),
    S('5. Drugs Acting on CNS', '*Anaesthetics*: thiopental sodium*, ketamine*, propofol|*Sedative-hypnotics*: diazepam*, alprazolam*, nitrazepam, phenobarbital*|*Antipsychotics*: chlorpromazine*, haloperidol*, risperidone*, sulpiride*, olanzapine, quetiapine, lurasidone|*Anticonvulsants*: phenytoin*, carbamazepine*, clonazepam, valproic acid*, gabapentin*, topiramate, vigabatrin, lamotrigine|*Antidepressants*: amitriptyline*, imipramine*, fluoxetine*, venlafaxine, duloxetine, sertraline, citalopram, escitalopram, fluvoxamine, paroxetine', 'Drugs marked * need chemical structure.'),
    S('6. Drugs Acting on ANS', '*Sympathomimetics*: norepinephrine*, epinephrine, phenylephrine, dopamine*, terbutaline, salbutamol, naphazoline*, pseudoephedrine, ephedrine, metaraminol|*Adrenergic blockers*: tolazoline, phentolamine, phenoxybenzamine, prazosin; beta: propranolol*, atenolol*, carvedilol|*Cholinergics*: acetylcholine*, carbachol, pilocarpine; *cholinesterase inhibitors*: neostigmine*, edrophonium, tacrine, pralidoxime, echothiopate|*Anticholinergics*: atropine*, ipratropium, tropicamide, cyclopentolate, clidinium, dicyclomine*'),
    S('7. Cardiovascular Drugs', '*Anti-arrhythmics*: quinidine, procainamide, verapamil, phenytoin*, lidocaine, lorcainide, amiodarone, sotalol|*Antihypertensives*: propranolol*, captopril*, ramipril, methyldopate, clonidine, hydralazine, nifedipine|*Antianginal*: isosorbide dinitrate'),
    S('8. Diuretics', 'Acetazolamide, *frusemide**, bumetanide, chlorthalidone, benzthiazide, metolazone, xipamide, spironolactone'),
    S('9. Hypoglycemic Agents', '*Insulin* and its preparations|Metformin*, glibenclamide*, glimepiride, pioglitazone, repaglinide, gliflozins, gliptins'),
    S('10. Analgesics & Anti-inflammatory', 'Morphine analogues, narcotic antagonists|*NSAIDs*: aspirin*, diclofenac, ibuprofen*, piroxicam, celecoxib, mefenamic acid, paracetamol*, aceclofenac'),
    S('11. Anti-Infective Agents', '*Antifungal*: amphotericin-B, griseofulvin, miconazole, ketoconazole*, itraconazole, fluconazole*, naftifine|*Urinary anti-infectives*: norfloxacin, ciprofloxacin, ofloxacin*, moxifloxacin|*Anti-TB*: INH*, ethambutol, PAS, pyrazinamide, rifampicin, bedaquiline, delamanid, pretomanid*|*Antiviral*: amantadine, idoxuridine, acyclovir*, foscarnet, zidovudine, ribavirin, remdesivir, favipiravir|*Antimalarials*: quinine, chloroquine*, primaquine, mefloquine*, cycloguanil, pyrimethamine, artemisinin|*Sulfonamides*: sulfanilamide, sulfadiazine, sulfamethoxazole, sulfacetamide*, mafenide, cotrimoxazole, dapsone*'),
    S('12. Antibiotics', 'Penicillin G, amoxicillin*, cloxacillin|Streptomycin|*Tetracyclines*: doxycycline, minocycline|*Macrolides*: erythromycin, azithromycin|Chloramphenicol*, clindamycin'),
    S('13. Anti-Neoplastic Agents', 'Cyclophosphamide*, busulfan, mercaptopurine, fluorouracil*, methotrexate, dactinomycin, doxorubicin, vinblastine, cisplatin*, dromostanolone propionate')
  ],
  'pharmacognosy': [
    S('1. Definition, History & Scope', '*Pharmacognosy* = study of crude drugs from plants, animals, minerals|Term coined by *Seydler* (1815)|Scope: drug discovery, herbal medicine, quality control'),
    S('2. Classification of Drugs', '*Alphabetical*, *taxonomical*, *morphological*, *pharmacological*, *chemical*, *chemo-taxonomical*'),
    S('3. Quality Control of Crude Drugs', '*Adulteration* methods: substitution, addition of inferior/spent/artificial material, harmful substances|*Evaluation*: organoleptic, microscopic, physical (moisture, ash, extractive values), chemical, biological'),
    S('4. Phytoconstituents', '*Alkaloids* (N-containing, basic; e.g. atropine)|*Terpenoids*, *glycosides* (sugar + aglycone), *volatile oils* (steam distilled), *tannins* (astringent), *resins*|Study occurrence, isolation, identification tests, therapeutic use'),
    S('5. Crude Drugs by Category', '*Laxatives*: aloe, castor oil, ispaghula, senna|*Cardiotonic*: digitalis, arjuna|*Carminatives/GI*: coriander, fennel, cardamom, ginger, clove, black pepper, asafoetida, nutmeg, cinnamon|*Astringents*: myrobalan, black & pale catechu|*Nervous system*: hyoscyamus, belladonna, ephedra, opium, tea, coffee, coca|*Antihypertensive*: rauwolfia|*Antitussive*: vasaka, tolu balsam|*Anti-rheumatic*: colchicum|*Antitumour*: vinca, podophyllum|*Antidiabetic*: pterocarpus, gymnema|*Diuretic*: gokhru, punarnava|*Antidysenteric*: ipecacuanha|*Antiseptic*: benzoin, myrrh, neem, turmeric|*Antimalarial*: cinchona, artemisia|*Oxytocic*: ergot|*Vitamins*: cod/shark liver oil|*Enzymes*: papaya, diastase, pancreatin, yeast|*Pharma aids*: kaolin, lanolin, beeswax, acacia, tragacanth, sodium alginate, agar, guar gum, gelatine|*Misc*: squill, galls, ashwagandha, tulsi, guggul', 'Learn for each: biological source, chemical constituents, uses.'),
    S('6. Surgical Dressings & Sutures', 'Fibres: *cotton, silk, wool, regenerated (rayon)*|Sutures: surgical *catgut* (absorbable), ligatures'),
    S('7. Traditional Systems of Medicine', 'Principles of *Ayurveda, Siddha, Unani, Homeopathy*|Ayurvedic preparations: *Arista* and *Asava* (fermented), *Gutika* (pills), *Taila* (oils), *Churna* (powders), *Lehya* (confection), *Bhasma* (calcined ash)'),
    S('8. Medicinal & Aromatic Plants in Economy', 'Role in national economy, employment, export potential of herbal raw materials and extracts'),
    S('9. Herbs as Health Food', '*Nutraceuticals*, *antioxidants*, *probiotics* (live bacteria), *prebiotics* (feed bacteria), dietary fibres, *omega-3 fatty acids*, spirulina, carotenoids, soya, garlic'),
    S('10. Herbal Formulations', 'Introduction to herbal dosage forms: churna, tablets, syrups, extracts, creams; standardisation and labelling'),
    S('11. Herbal Cosmetics', 'Aloe vera gel, almond oil, lavender oil, olive oil, rosemary oil, sandalwood oil: source, constituents, cosmetic and therapeutic uses'),
    S('12. Phytochemical Investigation', 'Extraction, separation, purification and identification (chromatography, spectroscopy) of plant constituents')
  ],
  'hap': [
    S('1. Scope & Terminology', '*Anatomy* = structure; *physiology* = function|Anatomical terms: superior/inferior, anterior/posterior, medial/lateral, proximal/distal; planes (sagittal, coronal, transverse)'),
    S('2. Structure of Cell', 'Cell membrane, *nucleus* (DNA), *mitochondria* (ATP, powerhouse), ER, Golgi, ribosomes (proteins), lysosomes (digestion)', 'Mitochondria = powerhouse of the cell.'),
    S('3. Tissues', '*Epithelial* (covering, lining), *connective* (support), *muscular* (movement), *nervous* (conduction)|Learn sub-types and characteristics of each'),
    S('4. Osseous System & Joints', '*Axial* skeleton (skull, vertebral column, ribs, sternum) and *appendicular* (limbs, girdles); adult has 206 bones|*Joints*: fibrous, cartilaginous, synovial; movements (flexion, extension, abduction, adduction, rotation)|Disorders: arthritis, gout, dislocation', '206 bones in adult human body.'),
    S('5. Haemopoietic System (Blood)', 'Blood = plasma + cells; *haemopoiesis* in bone marrow|*RBC* (carry O2, Hb), *WBC* (defence), *platelets* (clotting)|*Blood clotting*: injury, platelet plug, thromboplastin, prothrombin to thrombin, fibrinogen to fibrin|*Blood groups* ABO and Rh: matter for transfusion', 'Universal donor O-negative; universal recipient AB-positive.'),
    S('6. Lymphatic System', 'Lymph formation, composition and functions|*Spleen* (RBC destruction, immunity) and *lymph nodes* (filter lymph)'),
    S('7. Cardiovascular System', 'Heart: 4 chambers, valves|Circulation: *pulmonary, coronary, systemic*|*Cardiac cycle*, heart sounds (lub-dub), basics of *ECG*|*Blood pressure* regulation (normal 120/80 mmHg)'),
    S('8. Respiratory System', 'Nose, pharynx, larynx, trachea, bronchi, lungs, alveoli|Mechanism: inspiration/expiration, control by medulla|*Volumes & capacities*: tidal volume, vital capacity, residual volume'),
    S('9. Digestive System', 'GIT: mouth, oesophagus, stomach, small and large intestine|Accessory glands: *liver, pancreas, salivary glands*|Digestion and *absorption* (mostly in small intestine)'),
    S('10. Skeletal Muscles', 'Histology of muscle|*Contraction*: sliding filament theory (actin, myosin, Ca2+)|Disorders: myasthenia gravis, muscular dystrophy'),
    S('11. Nervous System', '*CNS* (brain, spinal cord) and *PNS*|Cerebrum, cerebellum, mid brain; hypothalamus, medulla, basal ganglia|Spinal cord and *reflexes*|*12 pairs* of cranial nerves|*ANS*: sympathetic (fight/flight) and parasympathetic (rest/digest)'),
    S('12. Sense Organs', '*Eye* (vision, retina), *ear* (hearing, balance), *skin* (touch, protection, temperature), *tongue* (taste), *nose* (smell)'),
    S('13. Urinary System', 'Kidney, ureter, bladder, urethra; *nephron* = functional unit|*Urine formation*: filtration, reabsorption, secretion|*Renin-angiotensin system* regulates BP|Clearance tests, micturition'),
    S('14. Endocrine System', '*Pituitary* (master gland), *adrenal*, *thyroid & parathyroid*, *pancreas* (insulin, glucagon), *gonads*|Know hormones and their functions'),
    S('15. Reproductive System', 'Male and female anatomy|*Menstruation* (28-day cycle)|*Spermatogenesis* and *oogenesis*|Pregnancy and parturition')
  ],
  'social-pharmacy': [
    S('1. Introduction to Social Pharmacy', 'Definition, scope and role of pharmacist in public health|*WHO health*: complete physical, mental and social well-being, not merely absence of disease|Determinants and indicators of health|National Health Policy, public and private system, National Health Mission|*MDGs, SDGs, FIP Development Goals*'),
    S('2. Preventive Healthcare', 'Demography and *family planning*|Mother and child health, *breastfeeding*, ill effects of infant milk substitutes|*Vaccines*, types of immunity (active/passive), immunization|*Environment*: water/air/noise pollution, safe drinking water, waterborne diseases, sewage and solid waste, occupational illness, pharma pollution|*Psychosocial pharmacy*: drugs of abuse, alcohol, tobacco, suicidal behaviour'),
    S('3. Nutrition & Health', '*Macronutrients* (carbs, proteins, fats) and *micronutrients*|Water and fibre|Balanced diet, malnutrition, deficiency diseases, junk food, fortification|Food safety, adulteration, artificial ripening, pesticides, GM foods|Dietary supplements, nutraceuticals, drug-food interactions'),
    S('4. Microbiology & Communicable Diseases', 'Microbiology basics|*Epidemiology terms*: epidemic, pandemic, endemic, outbreak, quarantine, isolation, incubation period, contact tracing, morbidity, mortality|*Respiratory*: chickenpox, measles, rubella, mumps, influenza (H1N1, SARS, MERS, COVID-19), diphtheria, whooping cough, meningitis, ARI, TB, Ebola|*Intestinal*: polio, hepatitis, cholera, diarrhoea, typhoid, amoebiasis, worms, food poisoning|*Arthropod-borne*: dengue, malaria, filariasis, chikungunya|*Surface*: trachoma, tetanus, leprosy|*STDs and HIV/AIDS*'),
    S('5. National Health Programs', 'Health systems in India and all ongoing national programs: objectives, functioning, outcomes and pharmacist role (e.g., NTEP, immunization, NHM)'),
    S('6. Pharmacoeconomics', 'Introduction, basic terminology and importance of pharmacoeconomics (cost-effectiveness, cost-benefit)')
  ]
});
Object.assign(pharmaNotesBatch, { secondYear: {
  'pharmacology': [
    S('1. General Pharmacology', '*Routes* of administration with pros/cons|*Absorption* and factors; *bioavailability*|*Distribution*, *biotransformation* (phase I, II), *excretion*|Mechanisms of drug action; factors modifying drug action', 'Pharmacokinetics = body acts on drug; pharmacodynamics = drug acts on body.'),
    S('2. Peripheral Nervous System Drugs', 'Neurohumoral transmission|*Cholinergic, anticholinergic, adrenergic, anti-adrenergic*|*Neuromuscular blockers*, drugs for *myasthenia gravis*, *local anaesthetics*, *NSAIDs*'),
    S('3. Drugs Acting on Eye', '*Miotics* (pilocarpine), *mydriatics* (atropine), anti-glaucoma drugs (timolol, latanoprost)'),
    S('4. Drugs Acting on CNS', 'General anaesthetics, hypnotics/sedatives, anticonvulsants, anti-anxiety, antidepressants, antipsychotics, *nootropics*, centrally acting muscle relaxants, *opioid analgesics*'),
    S('5. Cardiovascular Drugs', 'Antihypertensives, antianginal, antiarrhythmics, drugs for atherosclerosis and *CHF*, therapy for *shock*'),
    S('6. Blood & Blood-Forming Organs', '*Haematinics* (iron, B12, folic acid), *anticoagulants* (heparin, warfarin), *antiplatelets* (aspirin, clopidogrel), *thrombolytics* (streptokinase)'),
    S('7. Respiratory Drugs', '*Bronchodilators*, *expectorants*, *antitussives*, *mucolytics*'),
    S('8. Gastrointestinal Drugs', '*Anti-ulcer* (PPIs, H2 blockers, antacids), *antiemetics*, *laxatives/purgatives*, *antidiarrhoeals*'),
    S('9. Drugs Acting on Kidney', '*Diuretics* (frusemide, thiazides, spironolactone) and *anti-diuretics* (vasopressin)'),
    S('10. Hormones & Antagonists', 'Thyroid hormones, anti-thyroid drugs, parathormone, calcitonin, vitamin D|*Insulin*, oral hypoglycemics|Oestrogen, progesterone, oxytocin, corticosteroids'),
    S('11. Autacoids', 'Role of *histamine, 5-HT, prostaglandins*|Antihistamines and 5-HT antagonists: uses, adverse effects'),
    S('12. Chemotherapeutic Agents', 'Principles of chemotherapy|*Penicillins, cephalosporins, aminoglycosides, fluoroquinolones, macrolides, tetracyclines, sulphonamides*|Anti-TB, antifungal, antiviral, anti-amoebic, anthelmintics, antimalarials, anti-neoplastics'),
    S('13. Biologicals', 'Definition, types and indications of biological agents with examples (vaccines, sera, monoclonal antibodies)')
  ],
  'community-pharmacy': [
    S('1. Community Pharmacy Practice', 'Definition, history and development: international and Indian scenario'),
    S('2. Professional Responsibilities', 'Duties of community pharmacist|*Good Pharmacy Practice (GPP)* and *SOPs*'),
    S('3. Prescription & Dispensing', '*Parts of prescription*: superscription, inscription, subscription, signa|Legality, handling|*Labelling*: main label, ancillary label, pictograms|*Good Dispensing Practices*, dispensing errors and prevention'),
    S('4. Communication Skills', 'Types: verbal, written, body language|Talking with professionals and patients, telephone|*Patient interview techniques*'),
    S('5. Patient Counselling', 'Stages: introduction, content, process, closing|*Barriers* and how to overcome|Counselling points: *hypertension, diabetes, asthma, TB, COPD, AIDS*|*Patient Package Inserts* and information leaflets'),
    S('6. Medication Adherence', 'Definition, factors for non-adherence, strategies to improve'),
    S('7. Health Screening Services', 'Scope and importance: BP, blood glucose, peak flow, BMI; early detection and referral'),
    S('8. OTC Medications', 'Definition, role of pharmacist, OTC in India|*Self-medication* and safe practice|Minor ailments: pain, cough, cold, diarrhoea, constipation, vomiting, fever, sore throat, skin disorders, oral health'),
    S('9. Community Pharmacy Management', 'Legal requirements, site selection, design and interiors|Vendor selection, ordering, procurement, *inventory control*|Financial planning; accounts: *day book, cash book*|Pharmacy software, *CRM*, audits, SOPs|*Digital health, mHealth, online pharmacies*')
  ],
  'biochemistry': [
    S('1. Introduction & Cell', 'Scope of biochemistry in pharmacy|Biochemical organisation of the cell'),
    S('2. Carbohydrates', 'Classification: mono, di, polysaccharides|Structures: *glucose, fructose, galactose*; *maltose, lactose, sucrose*; starch and glycogen|Qualitative tests (Molisch, Benedict, Fehling) and biological role'),
    S('3. Proteins', 'Classification by composition and solubility; amino acids (essential vs non-essential)|*Four levels* of structure: primary, secondary, tertiary, quaternary|Tests (Biuret, Ninhydrin); malnutrition diseases (kwashiorkor, marasmus)'),
    S('4. Lipids', 'Classification; triglycerides; fatty acids (saturated, unsaturated, essential)|*Cholesterol* structure and functions|*Lipoproteins*: chylomicrons, VLDL, LDL (bad), HDL (good)', 'HDL = good cholesterol; LDL = bad cholesterol.'),
    S('5. Nucleic Acids', 'Purine (A, G) and pyrimidine (C, T, U) bases; nucleosides and nucleotides|*Watson-Crick DNA* double helix; RNA types (mRNA, tRNA, rRNA)'),
    S('6. Enzymes', 'Properties; *IUB classification* (6 classes)|Factors: temperature, pH, substrate|Mechanism, *inhibitors* (competitive, non-competitive)|Therapeutic importance'),
    S('7. Vitamins', 'Fat-soluble *A, D, E, K*; water-soluble *B-complex, C*|Sources, coenzyme forms, requirement, *deficiency diseases* (night blindness, rickets, scurvy, beriberi)'),
    S('8. Metabolism', '*Carbohydrate*: glycolysis, TCA cycle, glycogen metabolism, blood glucose regulation|*Lipid*: lipolysis, beta-oxidation (palmitic acid), ketogenesis; ketoacidosis, fatty liver|*Amino acids*: transamination, deamination, urea cycle, decarboxylation; PKU, alkaptonuria, jaundice|*Biological oxidation*: ETC, oxidative phosphorylation', 'Glycolysis occurs in cytoplasm; TCA cycle in mitochondria.'),
    S('9. Minerals', 'Types, functions, deficiency diseases and daily requirements (Ca, Fe, I, Zn, etc.)'),
    S('10. Water & Electrolytes', 'Distribution, water balance|Electrolyte composition (Na+, K+, Cl-)|*Dehydration* and *ORS* (oral rehydration therapy)'),
    S('11. Introduction to Biotechnology', 'Basics: recombinant DNA, genetic engineering, products like insulin, vaccines'),
    S('12. Organ Function Tests', '*Kidney* (urea, creatinine), *liver* (bilirubin, SGOT/SGPT, ALP), *lipid profile* and clinical significance'),
    S('13. Pathology of Blood & Urine', 'Lymphocytes and platelets in health and disease|*Abnormal erythrocytes*|Normal and abnormal constituents of *urine* (glucose, protein, ketones, bile)')
  ],
  'pharmacotherapeutics': [
    S('1. Introduction & Rational Use of Medicines', 'Scope and objectives|*Rational use of medicines*, *Evidence Based Medicine*, *Essential Medicines List*, *Standard Treatment Guidelines (STGs)*'),
    S('2a. Cardiovascular Diseases', 'Definition, etiopathogenesis, clinical features, non-drug and drug management of *hypertension*, *angina and MI*, *hyperlipidaemia*, *congestive heart failure*'),
    S('2b. Respiratory Diseases', '*Asthma* and *COPD*'),
    S('2c. Endocrine Diseases', '*Diabetes* and *thyroid disorders* (hypo- and hyperthyroidism)'),
    S('2d. Central Nervous System', '*Epilepsy, Parkinson\'s, Alzheimer\'s, stroke, migraine*'),
    S('2e. GI Disorders', '*GERD, peptic ulcer, alcoholic liver disease, IBD* (Crohn\'s, ulcerative colitis)'),
    S('2f. Haematological Disorders', '*Iron deficiency anaemia* and *megaloblastic anaemia*'),
    S('2g. Infectious Diseases', '*TB, pneumonia, UTI, hepatitis, gonorrhoea and syphilis, malaria, HIV and opportunistic infections, viral infections (SARS-CoV-2)*'),
    S('2h. Musculoskeletal', '*Rheumatoid arthritis* and *osteoarthritis*'),
    S('2i. Dermatology', '*Psoriasis, scabies, eczema*'),
    S('2j. Psychiatric Disorders', '*Depression, anxiety, psychosis*'),
    S('2k. Ophthalmology', '*Conjunctivitis* (bacterial, viral) and *glaucoma*'),
    S('2l. Antimicrobial Resistance', 'Causes, consequences and prevention of AMR; role of pharmacist'),
    S('2m. Women\'s Health', '*PCOS, dysmenorrhea, premenstrual syndrome*')
  ],
  'hospital-pharmacy': [
    S('1. Hospital Pharmacy', 'Definition, scope, national/international scenario|Organisational structure, responsibilities, qualifications, workload|*GPP in hospital*; standards (*FIP Basel Statements, AHSP*)|*NAQS guidelines, NABH* accreditation'),
    S('2. Hospital Committees', '*Pharmacy & Therapeutics Committee*: objectives, composition, functions|*Hospital formulary*: development and use|*Infection Control Committee*: pharmacist role in AMR'),
    S('3. Supply Chain & Inventory Control', 'Drug lists: *high-risk, emergency, Schedule H1, NDPS, reserved antibiotics*|Purchase: short/long term, *tender/e-tender*, quotations|*EOQ*, reorder level, inventory turnover|Central drug store: storage, *cold chain* (refrigerator, ILR, walk-in cold rooms)|*FEFO, FIFO*; expiry removal and disposal (narcotics, cytotoxics); documentation'),
    S('4. Drug Distribution', '*Individual prescription order*, *floor stock*, *unit dose*, *drug basket* methods|ICU/ICCU/NICU/emergency distribution|Automated dispensing|Narcotic and psychotropic storage'),
    S('5. Compounding in Hospitals', 'Bulk compounding, *IV admixture* and incompatibilities, *TPN* (total parenteral nutrition)'),
    S('6. Radiopharmaceuticals', 'Storage, dispensing and disposal of radiopharmaceuticals'),
    S('7. Computers in Hospital Pharmacy', 'Electronic health records, hospital pharmacy software'),
    S('8. Clinical Pharmacy', 'Definition, scope, development; terms: paediatrics, geriatrics, antenatal, postnatal|Daily activities: *ward rounds, chart review, ADR monitoring, drug and poison information, medication history, counselling*|*Pharmaceutical care* and drug-related problems|*MTM*, home medication review'),
    S('9. Clinical Laboratory Tests', 'Haematological, *liver, renal, thyroid* function tests|Cardiac tests|Fluid and electrolyte balance|*Pulmonary function tests*'),
    S('10. Poisoning', 'Types, clinical features and *antidotes*|Drug and Poison Information Centres: requirements, resources, merits and demerits'),
    S('11. Pharmacovigilance', 'Definition, aim, scope and overview; ADR reporting (IPC form)'),
    S('12. Medication Errors', 'Types, consequences, prevention|*LASA drugs* and *Tallman lettering* (ISMP)'),
    S('13. Drug Interactions', 'Definition, types (pharmacokinetic, pharmacodynamic), clinical significance')
  ],
  'law-ethics': [
    S('1. General Principles of Law', 'History and various Acts related to drugs and the pharmacy profession'),
    S('2. Pharmacy Act 1948', 'Objectives, definitions, *PCI* constitution and functions|Education Regulations, State/Joint State Pharmacy Councils|*Registration of pharmacists*, offences and penalties|*Pharmacy Practice Regulations 2015*'),
    S('3. Drugs & Cosmetics Act 1940 and Rules 1945', 'Objectives, definitions, schedules|*Import*: prohibited classes, licence/permit|*Manufacture*: prohibition, licence conditions, test/examination, new drug, *loan and repacking licence*|*Schedules*: C & C1, G, H, H1, K, P, M, N, X|*Sale*: wholesale, retail, restricted licence, records|Prohibited drugs in India|*Administration*: DTAB, Central Drugs Laboratory, DCC, Government analysts, licensing authorities, Drug Inspectors', 'Schedule H = prescription only; H1 = strict records (antibiotics); X = narcotics/psychotropics with strict control; M = GMP.'),
    S('4. NDPS Act 1985', 'Objectives, definitions, authorities, prohibition, control, offences and penalties'),
    S('5. Drugs & Magic Remedies Act 1954', 'Prohibited advertisements, exempted classes, offences and penalties'),
    S('6. Prevention of Cruelty to Animals Act 1960', '*CPCSEA*, *Institutional Animal Ethics Committee*, breeding, experiments, records, penalties'),
    S('7. Poisons Act 1919', 'Possession, sale, import of poisons'),
    S('8. FSSAI Act', 'Manufacture, storage, sale and labelling of food supplements'),
    S('9. NPPA & DPCO 2013', 'Objectives, *ceiling price* of scheduled formulations, retail price, Pharmaceutical Policy 2002, *NLEM*'),
    S('10. Code of Pharmaceutical Ethics', 'Ethical principles and problem solving|Code in relation to job, trade, medical profession and own profession|*Pharmacist\'s oath*'),
    S('11. MTP Act', 'Basic understanding, salient features and amendments'),
    S('12. Regulatory Bodies', '*CDSCO* and *Indian Pharmacopoeia Commission (IPC)*'),
    S('13. Good Regulatory Practices', 'Documentation, licences, renewals, e-governance in community, hospital, manufacturing, wholesale; inspections, import/export'),
    S('14. Drug Development & IPR', '*BCS* classification, clinical trials, *ANDA, NDA*, *New Drugs and Clinical Trials Rules 2019*|Brand vs generic, trade name|Patent law, IPR, *Emergency Use Authorization*'),
    S('15. Blood Bank', 'Basic requirements and functions'),
    S('16. Clinical Establishment Act', 'Aspects related to pharmacy'),
    S('17. Biomedical Waste Rules 2016', 'Basics, handling and disposal of pharma/medical waste at homes, pharmacies, hospitals'),
    S('18. Bioethics', 'Concepts, history, principles; *ICMR* National Ethical Guidelines for human participants'),
    S('19. Consumer Protection Act', 'Introduction'),
    S('20. Disaster Management Act', 'Introduction'),
    S('21. Medical Devices', 'Categorisation, manufacture and sale basics')
  ]
}});