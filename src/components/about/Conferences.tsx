import { Globe2 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function Conferences() {
  const conferences = [
    {
      role: "Poster & Oral Presentation",
      event: "ESOT-2025",
      org: "European Society of Organ Transplantation (ESOT)",
      date: "June 29 - July 2",
      loc: "ExCeL, London, United Kingdom"
    },
    {
      role: "Oral Presentation",
      event: "ICBB 2022",
      org: "International Conference of Bioscience and Bioinformatics (E-Palli International Conferences)",
      date: "Dec 23, 2022",
      loc: "Impiana KLCC, Kuala Lumpur, Malaysia"
    }
  ];

  return (
    <section className="w-full py-24 px-8 bg-sage text-espresso flex justify-center" >
      <div className="max-w-[1000px] w-full text-center">
        <div className="flex items-center justify-center gap-4 mb-16">
          <Globe2 className="w-8 h-8 text-terracotta" />
          <h2 className="text-4xl font-semibold tracking-tight">Conferences</h2>
        </div>

        <div className="flex flex-col gap-8 text-left">
          {conferences.map((conf, idx) => (
            <GlassCard key={idx} variant="light" className="flex flex-col md:flex-row md:items-center justify-between gap-6 !p-8">
              <div>
                <span className="text-terracotta font-bold text-xs tracking-widest uppercase block mb-2">{conf.role}</span>
                <h3 className="text-2xl font-bold mb-2">{conf.event}</h3>
                <p className="text-espresso/80 font-medium mb-1">{conf.org}</p>
                <p className="text-sm text-espresso/60">{conf.date} &mdash; {conf.loc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
