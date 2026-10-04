import GlassCard from "@/components/ui/GlassCard";

export default function ResearchFocus() {
  const focusAreas = [
    {
      title: "Cardiovascular Devices",
      desc: "Developing transportation and viability monitoring systems for cardiac grafts.",
      number: "01"
    },
    {
      title: "Ischemia Reperfusion",
      desc: "Pathology and pharmacological management in renal, cardiac, and cerebral models.",
      number: "02"
    },
    {
      title: "Mitochondrial Biology",
      desc: "Analyzing mitochondrial quality, quantity, and targeted nano-medicine delivery.",
      number: "03"
    },
    {
      title: "Pre-clinical Models",
      desc: "Extensive experience with in vivo surgical models and ex vivo Langendorff systems.",
      number: "04"
    }
  ];

  return (
    <section className="w-full py-24 px-8 bg-espresso text-cream flex justify-center" >
      <div className="max-w-[1400px] w-full">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-center">
          Core <span className="font-light italic text-gold">Focus Areas</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, idx) => (
            <GlassCard key={idx} variant="dark" bgClass="bg-espresso/70" className="group !p-8 hover:bg-espresso transition-colors relative overflow-hidden">
              <div className="absolute -top-6 -right-6 text-8xl font-black text-gold/5 group-hover:text-gold/10 transition-colors">
                {area.number}
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">{area.title}</h3>
              <p className="text-body-cream text-sm leading-relaxed relative z-10">{area.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
