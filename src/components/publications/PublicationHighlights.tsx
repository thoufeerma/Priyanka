import GlassCard from "@/components/ui/GlassCard";

export default function PublicationHighlights() {
  const highlights = [
    {
      title: "Does cardiac impairment develop in ischemic renal surgery in rats depending on the reperfusion time?",
      journal: "Heliyon",
      year: "2024",
      authors: "Prem PN, Kurian GA."
    },
    {
      title: "Preparation of fisetin loaded mesoporous silica nanocarrier to attenuate ischemia reperfusion injury.",
      journal: "Journal of Materials Research",
      year: "2023",
      authors: "Prem PN, Balu KK, Gandhi S, Kurian GA."
    },
    {
      title: "High-fat diet increased oxidative stress and mitochondrial dysfunction induced by renal ischemia-reperfusion injury in rat.",
      journal: "Frontiers in Physiology",
      year: "2021",
      authors: "Prem PN, Kurian GA."
    }
  ];

  return (
    <section className="w-full py-20 px-8 bg-offwhite text-espresso flex justify-center" >
      <div className="max-w-[1400px] w-full">
        <h2 className="text-2xl font-semibold mb-10 border-b border-muted/30 pb-4">Selected Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <GlassCard key={idx} variant="light" className="!p-8 hover:bg-offwhite transition-colors border-muted/30">
              <span className="text-xs font-bold tracking-widest text-terracotta block mb-3">{item.year} // {item.journal}</span>
              <h3 className="text-lg font-bold mb-4 leading-snug">{item.title}</h3>
              <p className="text-sm text-espresso/80">{item.authors}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
