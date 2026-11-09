// PharmaHype - "Simple mein" explanations for new students. Load AFTER notes.js and notes2.js
// Order of lines = order of chapters in each subject.
const simpleNotes = {
  firstYear: {
    'pharmaceutics-i': [
      'Pharmacy ka itihaas aur dawaiyon ke official standard wali kitabein (IP, BP, USP).',
      'Dawa ko surakshit rakhne wali packing: glass, plastic, metal, rubber.',
      'Dawa ko sundar, swadisht aur kharab hone se bachane wali cheezein (colour, flavour, preservative).',
      'Machine se dawa banane ke basic kaam: peesna, chhanna, milana, chhaanna (filter), sukhana.',
      'Dawa ke alag roop: goli, capsule, syrup, cream, injection, vaccine.',
      'Factory ka layout aur quality ke niyam (QC, QA, cGMP).',
      'Naye tareeke jisse dawa dheere ya sahi jagah par asar kare.'
    ],
    'pharmaceutical-chemistry': [
      'Dawa ki chemistry aur purity check. Limit test batata hai impurity kitni allowed hai.',
      'Titration = ek solution se doosre ko react karwa kar dawa ki matra naapna.',
      'Minerals/chemicals se bani dawaiyan: iron ki goli, antacid, antiseptic, gases.',
      'Heterocycle = ring jisme carbon ke saath N, O ya S bhi ho. Inke naam yaad karo.',
      'Dimaag par kaam karne wali dawaiyan: behoshi, neend, mirgi, depression, psychosis.',
      'Nervous system ke auto part (dil, pupil, saans) ko control karne wali dawaiyan.',
      'BP, dil ki dhadkan aur seene ke dard ki dawaiyan.',
      'Diuretic = peshab badhane wali dawa; BP aur sujan mein kaam aati hai.',
      'Sugar kam karne wali dawaiyan: insulin aur goliyan.',
      'Dard aur sujan ki dawaiyan, jaise paracetamol, ibuprofen.',
      'Infection ke khilaf dawaiyan: fungus, TB, virus, malaria, UTI.',
      'Antibiotic bacteria ko maarte ya badhne se rokte hain.',
      'Cancer cells ko maarne wali dawaiyan.'
    ],
    'pharmacognosy': [
      'Pharmacognosy = paudhon aur janwaron se milne wali dawaiyon ka study.',
      'Dawaiyon ko groups mein baantna: A-Z, paudhe ke parivar ya chemical ke hisaab se.',
      'Kachchi dawa asli hai ya milawati, ye jaanchna.',
      'Paudhon ke active chemicals: alkaloid, glycoside, tel, tannin.',
      'Kaun si jadi-booti kis bimari mein kaam aati hai. Source, chemical aur use yaad karo.',
      'Ghav ki patti aur tanke ke dhage: cotton, silk, catgut.',
      'Ayurveda, Unani, Siddha, Homeopathy ki basic soch aur unki dawa banane ke tareeke.',
      'Dawa wale paudhe desh ki kamai aur export badhate hain.',
      'Sehat badhane wale khane: probiotic, omega-3, antioxidant.',
      'Herbal dawa ke roop: churna, syrup, tablet.',
      'Aloe vera, almond, lavender jaise tel/gel se bane cosmetics.',
      'Paudhe se chemical nikaal kar pehchanna.'
    ],
    'hap': [
      'Anatomy = shareer ki banawat; physiology = wo kaise kaam karta hai.',
      'Cell shareer ki sabse chhoti unit hai. Mitochondria uska powerhouse hai.',
      'Tissue = ek jaise cells ka group. 4 prakar: epithelial, connective, muscle, nerve.',
      'Haddiyan dhancha deti hain; joint se haddiyan judti hain.',
      'Khoon oxygen pahunchata hai, bachav karta hai aur jamta hai (RBC, WBC, platelets).',
      'Lymph shareer ko infection se bachata hai; spleen aur nodes filter karte hain.',
      'Dil khoon pump karta hai. BP aur ECG isi se jude hain.',
      'Phephde saans lete hain: oxygen andar, CO2 bahar.',
      'Khana pachana aur nutrients absorb karna.',
      'Muscles sikud kar movement karte hain.',
      'Dimaag, spinal cord aur nasen poore shareer ko control karti hain.',
      'Aankh, kaan, skin, jeebh, naak: paanch indriyan.',
      'Kidney khoon saaf karke peshab banati hain.',
      'Glands hormones banati hain jo shareer ko control karte hain.',
      'Prajanan ang, periods aur garbhavastha ki basic jaankari.'
    ],
    'social-pharmacy': [
      'Samaj mein pharmacist ka role. WHO ke hisaab se health = poori sharirik, mansik aur samajik sehat.',
      'Bimari se pehle bachav: teeka, family planning, saaf paani, nasha-mukti.',
      'Sahi khana aur nutrition: balanced diet aur kuposhan.',
      'Failne wali bimariyan, unke karan aur bachav ke tareeke.',
      'Sarkar ke health programs jaise TB, teekakaran.',
      'Dawa ki kimat aur uske fayde ka hisaab.'
    ]
  },
  secondYear: {
    'pharmacology': [
      'Dawa shareer mein kaise jaati, phailti, tootti aur nikalti hai.',
      'Nerves se jude kaam: nasen dawa se kaise control hoti hain.',
      'Aankh ki dawaiyan: pupil chhota/bada karna, glaucoma.',
      'Dimaag ki dawaiyan: neend, mirgi, depression, dard.',
      'Dil aur BP ki dawaiyan.',
      'Khoon patla karne aur khoon badhane wali dawaiyan.',
      'Khansi aur dama ki dawaiyan.',
      'Pet ki dawaiyan: ulcer, ulti, dast, kabz.',
      'Peshab ko control karne wali dawaiyan.',
      'Hormones (thyroid, insulin, steroid) ka kaam aur dawaiyan.',
      'Histamine allergy karta hai; antihistamine use rokta hai.',
      'Infection aur cancer ki dawaiyan: antibiotic, antiviral, antifungal.',
      'Jeevit cells/proteins se bani dawaiyan, jaise vaccine.'
    ],
    'community-pharmacy': [
      'Community pharmacy = aam logon ki medical shop jahan dawa aur salah milti hai.',
      'Pharmacist ki zimmedari aur sahi kaam ke niyam (GPP).',
      'Prescription padhna, dawa dena aur sahi label lagana. Galti nahi honi chahiye.',
      'Mareez se saaf aur sahi tarah baat karna.',
      'Mareez ko dawa lene ka tareeka samjhana (counselling).',
      'Mareez dawa regularly le, isliye use samjhana.',
      'Medical shop par BP, sugar jaisi basic jaanch.',
      'Bina prescription ki dawaiyan aur chhoti bimariyon ki salah.',
      'Medical shop kholna aur chalana: license, stock, hisaab, software.'
    ],
    'biochemistry': [
      'Jeevit cells mein hone wale chemical reactions ka study.',
      'Carbohydrate shareer ko energy dete hain: glucose, starch.',
      'Protein shareer banate hain; amino acid unki chhoti units hain.',
      'Fats energy store karte hain. HDL achha, LDL bura cholesterol.',
      'DNA/RNA genetic jaankari rakhte hain.',
      'Enzyme reactions ko tez karte hain.',
      'Vitamins thodi matra mein zaruri hain; kami se bimari hoti hai.',
      'Metabolism = khane se energy banane ke steps.',
      'Minerals jaise calcium, iron shareer ke liye zaruri hain.',
      'Shareer mein paani aur salts ka santulan. ORS dehydration mein kaam aata hai.',
      'Biotechnology = jeevon se dawa banana (jaise insulin).',
      'Kidney aur liver sahi kaam kar rahe hain ya nahi, khoon test se pata chalta hai.',
      'Khoon aur peshab ki jaanch se bimari ka pata chalta hai.'
    ],
    'pharmacotherapeutics': [
      'Sahi mareez ko sahi dawa, sahi matra mein dena.',
      'Dil aur BP ki bimariyan aur unka ilaaj.',
      'Saans ki bimariyan: dama, COPD.',
      'Sugar aur thyroid ka ilaaj.',
      'Dimaag ki bimariyan: mirgi, Parkinson, Alzheimer, stroke, migraine.',
      'Pet aur aant ki bimariyan.',
      'Khoon ki kami (anaemia).',
      'Infections: TB, malaria, HIV, COVID, hepatitis waghera.',
      'Jodon ki bimariyan: arthritis.',
      'Skin ki bimariyan: psoriasis, scabies, eczema.',
      'Mansik rog: depression, anxiety, psychosis.',
      'Aankh ki bimariyan: conjunctivitis, glaucoma.',
      'Antibiotic ka asar khatam hona (AMR).',
      'Mahilao ki sehat: PCOS, periods ka dard, PMS.'
    ],
    'hospital-pharmacy': [
      'Hospital ki dawai dukaan aur uske niyam.',
      'Hospital committees jo dawaiyon ka faisla karti hain.',
      'Dawa kharidna, store karna aur stock sambhalna.',
      'Dawa ward aur mareez tak pahunchane ke tareeke.',
      'Hospital mein dawa taiyar karna, IV drip aur TPN.',
      'Radioactive dawaiyon ka safe use.',
      'Computer aur records se hospital ka kaam asaan.',
      'Clinical pharmacist mareez ke ilaaj mein doctor ki madad karta hai.',
      'Lab reports samajh kar dawa theek karna.',
      'Zeher ke lakshan aur uske antidote.',
      'Dawa ke side effects par nazar rakhna aur report karna.',
      'Dawa dene mein galti se bachna.',
      'Do dawaiyan milkar kaise asar badalti hain.'
    ],
    'law-ethics': [
      'Dawa se jude kanoon ki basic samajh.',
      'Pharmacy Act: pharmacist ki padhai aur registration ke niyam.',
      'Dawa banane, bechne aur import ke kanoon, aur schedules.',
      'Nashili dawaiyon par kanoon (NDPS).',
      'Jhoothe dawa vigyapan par roak.',
      'Janwaron par experiment ke niyam.',
      'Zeher bechne ke niyam.',
      'Khane ke supplements ke niyam.',
      'Dawaiyon ki kimat par sarkari control.',
      'Pharmacist ke naitik niyam aur shapath.',
      'Abortion (MTP) se jude kanoon.',
      'Dawa regulate karne wali sansthayen: CDSCO, IPC.',
      'License aur records sahi rakhne ke niyam.',
      'Nayi dawa banane aur patent ki basic samajh.',
      'Blood bank ke niyam.',
      'Hospital/clinic registration ka kanoon.',
      'Medical kachre ka safe nipatara.',
      'Research mein naitikta (bioethics).',
      'Grahak ke adhikaar.',
      'Aapda prabandhan ka kanoon.',
      'Medical devices ke niyam.'
    ]
  }
};

// Call AFTER applyPharmaNotes(dPharmContent): applySimpleNotes(dPharmContent);
function applySimpleNotes(content) {
  Object.entries(simpleNotes).forEach(([year, subjects]) => {
    Object.entries(subjects).forEach(([id, lines]) => {
      const subject = content[year].subjects.find(s => s.id === id);
      if (!subject) return;
      subject.sections.forEach((s, i) => {
        if (!lines[i] || s.simple) return;
        s.simple = true;
        s.content = lines[i] + ' ' + s.content;
        s.contentHtml = `<div class="simple">💡 <strong>Simple mein:</strong> ${lines[i]}</div>` + (s.contentHtml || '');
      });
    });
  });
}