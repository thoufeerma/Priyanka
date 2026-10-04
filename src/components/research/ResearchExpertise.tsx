export default function ResearchExpertise() {
  const skills = [
    {
      category: "In Vivo & Surgical",
      items: ["Handling lab animals & drug administration", "Cannulation (intra tracheal, jugular, carotid)", "Renal, Myocardial & Cerebral IR models", "Disease models (High fat diet, CKD, Diabetes)"]
    },
    {
      category: "Ex Vivo & In Vitro",
      items: ["Langendorff heart model (LabChart Pro)", "Ovine heart experiments & parameter tracking", "Cell-based disease models", "Toxicity, viability & pharmacological studies"]
    },
    {
      category: "Molecular & Biochemical",
      items: ["qPCR, Electrophoresis (Native/SDS)", "Western blot, ELISA, IHC, HPLC", "Spectroscopy (UV-Vis, Fluorescence)", "Network pharmacology & In silico targeting"]
    },
    {
      category: "Imaging & Nanotech",
      items: ["TEM, SEM, FT-IR, BET & Zeta sizer", "Fluorescence & Phase contrast microscopy", "Live cell imaging & drug internalization", "Synthesis of mesoporous silica nanocarriers"]
    }
  ];

  return (
    <section className="w-full py-24 px-8 bg-cream text-espresso flex justify-center" >
      <div className="max-w-[1400px] w-full">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-center">
          Technical <span className="font-light italic text-terracotta">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="text-lg font-bold mb-6 pb-2 border-b border-muted/30">{skillGroup.category}</h4>
              <ul className="space-y-4">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-espresso/80">
                    <span className="text-terracotta mt-0.5">▹</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
