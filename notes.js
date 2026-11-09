// PharmaHype notes - Batch 1: Pharmaceutics (ER20-11T), all 7 chapters of the PCI ER-2020 syllabus
const pharmaNotesBatch = {
  firstYear: {
    'pharmaceutics-i': [
      {
        title: '1. History of Pharmacy, Career & Pharmacopoeia',
        content: 'History of pharmacy in India (education, industry, practice, associations), pharmacy as a career, and pharmacopoeias: IP, BP, USP, NF, Extra Pharmacopoeia.',
        important: 'IP = Indian Pharmacopoeia, published by Indian Pharmacopoeia Commission (IPC), Ghaziabad. M.L. Schroff = father of pharmacy education in India.',
        contentHtml: `
          <h3>History of Pharmacy in India</h3>
          <ul>
            <li><mark>Mahadeva Lal Schroff</mark> started pharmacy education at BHU and is called the father of pharmacy education in India.</li>
            <li>Regulation: <mark>Pharmacy Act 1948</mark> created the <mark>Pharmacy Council of India (PCI)</mark>; PCI frames Education Regulations (current: <mark>ER-2020</mark>).</li>
            <li>Areas: education, industry, community and hospital practice; associations like IPA, IHPA, APTI.</li>
          </ul>
          <h3>Pharmacy as a Career</h3>
          <p>Community pharmacist, hospital pharmacist, drug inspector, manufacturing and QC/QA, medical representative, regulatory affairs, entrepreneur (own medical store), higher studies (B.Pharm).</p>
          <h3>Pharmacopoeia</h3>
          <p>Official book of <mark>drug standards</mark> (identity, purity, strength, assay methods).</p>
          <ul>
            <li><mark>IP</mark> - India (IPC). First edition 1955; recent edition IP 2022.</li>
            <li><mark>BP</mark> - Britain; <mark>USP</mark> - USA; <mark>NF</mark> - National Formulary (USA, now combined as USP-NF).</li>
            <li><mark>Extra Pharmacopoeia</mark> (Martindale) - reference on drugs not covered in official pharmacopoeias.</li>
          </ul>
          <h3>Salient Features of IP</h3>
          <p>Legal standards under the Drugs & Cosmetics Act; monographs for drugs and dosage forms; general notices, tests, reagents and appendices; updated through addenda.</p>`
      },
      {
        title: '2. Packaging Materials',
        content: 'Types, selection criteria, advantages and disadvantages of glass, plastic, metal and rubber as packaging materials.',
        important: 'Type I glass (borosilicate) is used for injections. Amber glass protects light-sensitive drugs.',
        contentHtml: `
          <p><mark>Selection criteria:</mark> protects from light, moisture, air and microbes; non-reactive; no leaching; cost-effective; easy to handle and label; child-resistant where needed.</p>
          <h3>Glass</h3>
          <ul>
            <li><mark>Type I - borosilicate:</mark> most resistant; injections.</li>
            <li><mark>Type II - treated soda-lime:</mark> acidic/neutral aqueous products.</li>
            <li><mark>Type III - soda-lime:</mark> oral, topical, dry powders. <mark>Type NP:</mark> general purpose, non-parenteral.</li>
            <li>Advantages: inert, transparent, good barrier, reusable. Disadvantages: breakable, heavy, alkali release. <mark>Amber glass</mark> cuts UV light.</li>
          </ul>
          <h3>Plastic</h3>
          <ul>
            <li><mark>Thermoplastics</mark> (polyethylene, polypropylene, PVC, PET) soften on heating; <mark>thermosets</mark> (bakelite) do not.</li>
            <li>Advantages: light, unbreakable, cheap. Disadvantages: <mark>leaching, adsorption, permeability to gases/moisture</mark>.</li>
          </ul>
          <h3>Metal</h3>
          <p>Aluminium (collapsible tubes, strips, foils), tin, steel. Excellent barrier and unbreakable; can corrode or react, so internal coating is needed.</p>
          <h3>Rubber</h3>
          <p>Natural and synthetic (neoprene, butyl, silicone) used for <mark>vial closures and plungers</mark>. Disadvantages: absorbs preservatives, may leach extractables.</p>`
      },
      {
        title: '3. Pharmaceutical Aids & Preservatives',
        content: 'Organoleptic agents (colouring, flavouring, sweetening) and preservatives: definition, types with examples and uses.',
        important: 'Organoleptic = colour, taste, smell. Parabens (methyl, propyl) are the most common preservatives in liquid orals.',
        contentHtml: `
          <h3>Colouring Agents</h3>
          <ul>
            <li><mark>Natural:</mark> caramel, carotene, chlorophyll, cochineal.</li>
            <li><mark>Synthetic:</mark> tartrazine, sunset yellow, amaranth, erythrosine. Only certified colours are allowed.</li>
            <li>Uses: identification, patient acceptance, prevent mix-ups.</li>
          </ul>
          <h3>Flavouring Agents</h3>
          <p>Mask bitter/salty taste. Natural (peppermint oil, orange, lemon) and artificial (vanilla, cherry, raspberry). Matching: salty - apricot/peach; bitter - cocoa/mint; sour - citrus.</p>
          <h3>Sweetening Agents</h3>
          <ul>
            <li><mark>Nutritive:</mark> sucrose, glucose, sorbitol, glycerin.</li>
            <li><mark>Non-nutritive (artificial):</mark> saccharin, aspartame, sucralose - for diabetics.</li>
          </ul>
          <h3>Preservatives</h3>
          <p><mark>Definition:</mark> substances that prevent microbial growth/spoilage and increase shelf life.</p>
          <ul>
            <li><mark>Acids:</mark> benzoic acid, sorbic acid. <mark>Esters:</mark> methyl and propyl paraben.</li>
            <li><mark>Phenols:</mark> phenol, chlorocresol. <mark>Alcohols:</mark> ethanol, benzyl alcohol, chlorbutol.</li>
            <li><mark>Quaternary compounds:</mark> benzalkonium chloride, cetrimide. <mark>Mercurials:</mark> thiomersal.</li>
          </ul>`
      },
      {
        title: '4. Unit Operations',
        content: 'Size reduction (hammer mill, ball mill), size separation (sieves, cyclone), mixing, filtration, drying (fluidized bed, freeze drying) and extraction.',
        important: 'Hammer mill = impact; ball mill = impact + attrition; freeze drying = sublimation under vacuum.',
        contentHtml: `
          <h3>Size Reduction</h3>
          <ul>
            <li><mark>Hammer mill:</mark> high-speed rotating hammers; principle <mark>impact</mark>; for dry, brittle, fibrous drugs.</li>
            <li><mark>Ball mill:</mark> rotating cylinder with balls; principle <mark>impact and attrition</mark>; works best at 60-70% of critical speed; used for fine powders and sterile grinding.</li>
          </ul>
          <h3>Size Separation</h3>
          <ul>
            <li><mark>IP powder classes:</mark> coarse, moderately coarse, moderately fine, fine, very fine (by sieve numbers).</li>
            <li><mark>Sieve number</mark> = meshes per linear inch; higher number = finer powder.</li>
            <li><mark>Cyclone separator:</mark> separates fine particles from air by centrifugal force.</li>
          </ul>
          <h3>Mixing</h3>
          <ul>
            <li><mark>Double cone blender:</mark> tumbling of dry powders.</li>
            <li><mark>Turbine mixer:</mark> low-viscosity liquids. <mark>Triple roller mill:</mark> ointments/pastes by shear.</li>
            <li><mark>Silverson mixer homogenizer:</mark> rotor-stator high shear; emulsions, suspensions.</li>
          </ul>
          <h3>Filtration</h3>
          <p>Theory: rate depends on pressure difference, area, and viscosity (Darcy's law). <mark>Membrane filter</mark> (0.22 micron = sterilizing, 0.45 micron = clarifying). <mark>Sintered glass filter:</mark> graded porosity, reusable.</p>
          <h3>Drying</h3>
          <ul>
            <li><mark>Fluidized bed dryer:</mark> hot air fluidizes the granules; fast, uniform drying.</li>
            <li><mark>Freeze drying (lyophilization):</mark> freezing, then primary drying by sublimation under vacuum, then secondary drying; for heat-sensitive products (vaccines, biologicals).</li>
          </ul>
          <h3>Extraction</h3>
          <p>Separating active constituents using a solvent. Classification and methods: <mark>maceration, percolation, infusion, decoction, digestion, Soxhlet</mark>. Applications: herbal drugs, alkaloids, glycosides.</p>`
      },
      {
        title: '5. Dosage Forms',
        content: 'Tablets, capsules, liquid orals, topicals, nasal/ear preparations, powders and granules, sterile formulations, immunological products.',
        important: 'Friability limit is not more than 1%. Simple syrup is about 66.7% w/w sucrose. Sera give passive immunity; vaccines give active immunity.',
        contentHtml: `
          <h3>Tablets</h3>
          <ul>
            <li><mark>Uncoated (compressed)</mark> and <mark>coated</mark> (sugar, film, enteric).</li>
            <li>Modified: <mark>sustained release, extended release, fast dissolving (ODT), multi-layered</mark>.</li>
            <li>Methods: wet granulation, dry granulation, direct compression. Excipients: diluent, binder, disintegrant, lubricant, glidant.</li>
            <li>Defects: capping, lamination, sticking, picking, mottling. QC: hardness, <mark>friability</mark>, disintegration, dissolution, weight variation.</li>
          </ul>
          <h3>Capsules</h3>
          <p><mark>Hard gelatin:</mark> two-piece shells, sizes 000 to 5. <mark>Soft gelatin:</mark> one-piece, plasticized with glycerin/sorbitol, for liquids and oils.</p>
          <h3>Liquid Orals</h3>
          <ul>
            <li><mark>Solution</mark> (true), <mark>syrup</mark> (concentrated sugar solution), <mark>elixir</mark> (sweet hydro-alcoholic).</li>
            <li><mark>Emulsion:</mark> O/W or W/O; needs emulsifier; dry gum and wet gum methods.</li>
            <li><mark>Suspension:</mark> insoluble solid in liquid; "shake well"; suspending agents.</li>
            <li><mark>Dry powder for reconstitution:</mark> unstable drugs (e.g., antibiotics) mixed with water before use.</li>
          </ul>
          <h3>Topical Preparations</h3>
          <p><mark>Ointments</mark> (greasy semisolid), <mark>creams</mark> (emulsion type), <mark>pastes</mark> (high solid content), <mark>gels</mark>, <mark>liniments</mark> (rubbed on skin), <mark>lotions</mark>, <mark>suppositories</mark> (rectal; cocoa butter base), <mark>pessaries</mark> (vaginal).</p>
          <h3>Nasal & Ear Preparations</h3>
          <p>Nasal drops/sprays (isotonic, pH 5.5-6.5, decongestants); ear drops (glycerin/propylene glycol base for antibiotics, wax softeners).</p>
          <h3>Powders & Granules</h3>
          <p><mark>Insufflations</mark> (blown into body cavities), <mark>dusting powders</mark> (external, sterile for wounds), <mark>effervescent powders/granules</mark> (citric + tartaric acid + sodium bicarbonate release CO2 in water).</p>
          <h3>Sterile Formulations</h3>
          <ul>
            <li><mark>Injectables:</mark> sterile, pyrogen-free, particle-free; routes IV, IM, SC, ID.</li>
            <li><mark>Eye drops:</mark> sterile, isotonic, buffered, preserved. <mark>Eye ointments:</mark> sterile ointment base, longer contact time.</li>
          </ul>
          <h3>Immunological Products</h3>
          <ul>
            <li><mark>Sera</mark> (antitoxins, antibodies; passive immunity) - from immunized animals.</li>
            <li><mark>Vaccines</mark> (live attenuated, killed, subunit) and <mark>toxoids</mark> (detoxified toxins) - active immunity.</li>
            <li>Manufacturing: culture of organism/toxin, inactivation or attenuation, purification, adjuvant, filling, QC and sterility testing.</li>
          </ul>`
      },
      {
        title: '6. Manufacturing Plants, Quality Control & QA',
        content: 'Structure, layout, sections and activities of manufacturing plants; QC and QA concepts, cGMP, calibration and validation.',
        important: 'QC tests the product (reactive); QA builds quality into the system (preventive). cGMP in India is Schedule M.',
        contentHtml: `
          <h3>Manufacturing Plant</h3>
          <p>Layout ensures one-way flow of material and people. Sections: <mark>raw material store, quarantine, production (dispensing, granulation, compression, coating, filling), packaging, QC lab, finished goods store, utilities, effluent treatment</mark>.</p>
          <h3>Quality Control vs Quality Assurance</h3>
          <ul>
            <li><mark>QC:</mark> testing of raw materials, in-process and finished products.</li>
            <li><mark>QA:</mark> overall system, documentation, audits so that quality is built in.</li>
          </ul>
          <h3>cGMP</h3>
          <p>Current Good Manufacturing Practice: premises, equipment, personnel, hygiene, documentation, batch records, complaints and recalls. In India: <mark>Schedule M</mark> of Drugs & Cosmetics Rules.</p>
          <h3>Calibration & Validation</h3>
          <ul>
            <li><mark>Calibration:</mark> comparing an instrument against a standard to ensure accuracy.</li>
            <li><mark>Validation:</mark> documented proof that a process/equipment consistently gives the expected result.</li>
          </ul>`
      },
      {
        title: '7. Novel Drug Delivery Systems (NDDS)',
        content: 'Introduction, classification with examples, advantages and challenges of novel drug delivery systems.',
        important: 'NDDS give controlled/targeted release, fewer doses, lower side effects; challenge is high cost and complex manufacturing.',
        contentHtml: `
          <p>NDDS deliver the drug at a <mark>controlled rate or to a specific site</mark> to improve effect and compliance.</p>
          <h3>Classification with Examples</h3>
          <ul>
            <li><mark>Oral controlled release:</mark> sustained/extended-release tablets, osmotic pumps.</li>
            <li><mark>Transdermal:</mark> patches (e.g., nicotine, fentanyl).</li>
            <li><mark>Particulate/vesicular:</mark> liposomes, niosomes, microspheres, nanoparticles.</li>
            <li><mark>Implants and inserts:</mark> subcutaneous implants, ocular inserts, intrauterine systems.</li>
            <li><mark>Inhalation and others:</mark> metered dose inhalers, nasal systems.</li>
          </ul>
          <h3>Advantages</h3>
          <p>Steady blood level, reduced dosing frequency, better patient compliance, targeted action, fewer side effects, protection of unstable drugs.</p>
          <h3>Challenges</h3>
          <p>High cost, complex technology, stability issues, dose dumping risk, regulatory and scale-up difficulty.</p>`
      }
    ]
  }
};

// Merge the detailed batch into your existing content
function applyPharmaNotes(content) {
  Object.entries(pharmaNotesBatch).forEach(([year, subjects]) => {
    Object.entries(subjects).forEach(([id, sections]) => {
      const subject = content[year]?.subjects?.find(s => s.id === id);
      if (subject) subject.sections = sections;
    });
  });
}

// Call once after the dPharmContent definition
applyPharmaNotes(dPharmContent);