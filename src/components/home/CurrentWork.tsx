import { ArrowUpRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function CurrentWork() {
  const works = [
    {
      title: "Biomaterials for Vascular Grafts",
      category: "Tissue Engineering",
      status: "In Progress",
      description: "Investigating novel biodegradable polymers for creating off-the-shelf small diameter vascular grafts."
    },
    {
      title: "AI-Driven Echocardiogram Analysis",
      category: "Digital Health",
      status: "Data Collection",
      description: "Developing machine learning models to predict early onset of heart failure from standard echo images."
    },
    {
      title: "Targeted Drug Delivery in Myocardial Infarction",
      category: "Nanomedicine",
      status: "In Vivo Testing",
      description: "Designing nanoparticle-based systems to deliver regenerative factors specifically to infarcted cardiac tissue."
    }
  ];

  return (
    <section className="min-h-screen w-full py-24 px-8 flex flex-col items-center justify-center bg-cream text-espresso" >
      <div className="max-w-[1400px] w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Current Work
            </h2>
            <p className="text-espresso/80 max-w-lg leading-relaxed">
              Ongoing projects bridging the gap between benchside discovery and bedside application in cardiovascular medicine.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work, idx) => (
            <GlassCard 
              key={idx} 
              variant="light"
              className="group border border-blush/30 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-semibold tracking-widest uppercase text-terracotta">
                  {work.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-offwhite border border-blush/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-terracotta" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 leading-snug">
                {work.title}
              </h3>
              
              <p className="text-sm text-espresso/80 leading-relaxed mb-8 flex-grow">
                {work.description}
              </p>
              
              <div className="mt-auto">
                <div className="inline-flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-terracotta animate-pulse"></div>
                  <span className="text-xs font-medium tracking-wide uppercase text-terracotta">
                    {work.status}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
