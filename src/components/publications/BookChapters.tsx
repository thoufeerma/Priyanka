import { BookOpen } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function BookChapters() {
  const chapters = [
    {
      authors: "Nabeel PM, Prem PN, Joseph J, Sivaprakasam M.",
      year: "2025",
      title: "Biomarkers for Cardiac Graft Assessment in Ex-vivo Machine Perfusion.",
      publisher: "InTech",
      doi: "10.5772/intechopen.1010740"
    },
    {
      authors: "Sudarsan N, Joseph J, Raj KV, Nabeel PM, Prem PN, Chandran DS, Sivaprakasam M.",
      year: "2025",
      title: "Mechanisms and Quantification of Endothelial Function: Physiology to Pathology.",
      publisher: "InTech",
      status: "Accepted for publication"
    }
  ];

  return (
    <section className="w-full py-20 px-8 bg-cream text-espresso flex justify-center" >
      <div className="max-w-[1400px] w-full">
        <div className="flex items-center gap-4 mb-10 border-b border-muted/30 pb-4">
          <BookOpen className="w-6 h-6 text-terracotta" />
          <h2 className="text-2xl font-semibold">Book Chapters</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chapters.map((chapter, idx) => (
            <GlassCard key={idx} variant="light" className="flex flex-col justify-between !p-8 border-muted/30">
              <div>
                <span className="text-xs font-bold tracking-widest text-terracotta block mb-3">{chapter.year} // {chapter.publisher}</span>
                <h3 className="text-xl font-bold mb-3 leading-snug">{chapter.title}</h3>
                <p className="text-sm text-espresso/80 leading-relaxed mb-6">{chapter.authors}</p>
              </div>
              <div className="inline-block px-4 py-2 rounded-full bg-terracotta/10 text-xs font-semibold text-espresso/80 w-max border border-terracotta/20">
                {chapter.doi ? `DOI: ${chapter.doi}` : chapter.status}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
