import { ShieldCheck } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function Patents() {
  const patents = [
    {
      title: "An apparatus for marshalling analytes",
      inventors: "Swaminathan H, Prem PN, Kurian GA.",
      patentNo: "202441074722",
      date: "Oct. 3, 2024"
    },
    {
      title: "Preserving an Organ in Near-Physiological Environment",
      inventors: "Nabeel PM, Prem PN, Joseph J, Sivaprakasam M.",
      patentNo: "202541097933",
      date: "Oct. 10, 2025"
    }
  ];

  return (
    <section className="w-full py-24 px-8 bg-teal text-cream flex justify-center" >
      <div className="max-w-[1400px] w-full">
        <div className="flex items-center gap-4 mb-12 border-b border-blush/30 pb-4">
          <ShieldCheck className="w-8 h-8 text-gold" />
          <h2 className="text-3xl font-semibold">Filed Patents</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {patents.map((patent, idx) => (
            <GlassCard key={idx} variant="dark" bgClass="bg-teal/70" className="!p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:!bg-teal-light hover:!border-gold/60 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal rounded-bl-[100px] transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-xs font-bold tracking-widest text-gold mb-6">
                  Indian Patent
                </span>
                <h3 className="text-2xl font-bold mb-4">{patent.title}</h3>
                <p className="text-body-cream text-sm leading-relaxed mb-8">{patent.inventors}</p>
                <div className="flex justify-between items-center border-t border-blush/30 pt-6">
                  <span className="font-mono text-sm text-gold">#{patent.patentNo}</span>
                  <span className="text-sm font-semibold">{patent.date}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
