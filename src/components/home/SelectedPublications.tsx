import { FileText, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

export default function SelectedPublications() {
  const publications = [
    {
      year: "2025",
      title: "Advanced Preservation Techniques for Ex-Vivo Cardiac Grafts: A Review of Current Modalities",
      journal: "Journal of Cardiovascular Translational Research",
      authors: "Priyanka N P, et al.",
      link: "#"
    },
    {
      year: "2024",
      title: "Real-time Metabolic Monitoring Systems in Organ Transplantation",
      journal: "Biomedical Engineering Online",
      authors: "Priyanka N P, Smith J.",
      link: "#"
    },
    {
      year: "2023",
      title: "Novel Biomaterials for Enhanced Viability of Cardiovascular Tissue Scaffolds",
      journal: "Tissue Engineering Part A",
      authors: "Doe A, Priyanka N P, et al.",
      link: "#"
    }
  ];

  return (
    <section className="min-h-screen w-full py-24 px-8 flex flex-col items-center justify-center bg-offwhite text-espresso" >
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row gap-16">
        
        {/* Left Column */}
        <div className="md:w-1/3">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Selected <br /> <span className="font-light italic text-espresso/70">Publications</span>
            </h2>
            <p className="text-espresso/80 leading-relaxed mb-8 max-w-sm">
              A curated selection of recent peer-reviewed articles contributing to the advancement of biomedical engineering and cardiovascular research.
            </p>
            <Button variant="primary" className="px-6 py-3 text-sm">
              <FileText className="w-4 h-4" />
              View All Publications
            </Button>
          </div>
        </div>

        {/* Right Column: List */}
        <div className="md:w-2/3 flex flex-col gap-6">
          {publications.map((pub, idx) => (
            <a 
              key={idx} 
              href={pub.link}
              className="group block"
            >
              <GlassCard variant="light" className="transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-2xl font-bold text-muted-light group-hover:text-terracotta transition-colors">
                    {pub.year}
                  </span>
                  <ExternalLink className="w-5 h-5 text-muted-light group-hover:text-terracotta transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 leading-snug group-hover:text-terracotta transition-colors">
                  {pub.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-espresso/80">
                  <span className="font-medium">{pub.journal}</span>
                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-blush"></span>
                  <span>{pub.authors}</span>
                </div>
              </GlassCard>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
