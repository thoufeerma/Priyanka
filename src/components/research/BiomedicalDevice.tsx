import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";

export default function BiomedicalDevice() {
  return (
    <section className="w-full py-32 px-8 bg-offwhite text-espresso flex justify-center relative overflow-hidden" >
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row gap-16 items-center relative z-10">
        
        <div className="md:w-1/2">
          <FadeIn direction="right">
            <GlassCard variant="light" className="!p-10 shadow-lg relative overflow-hidden border-muted/30">
              <div className="absolute top-0 right-0 p-8 text-terracotta/5">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <span className="text-sm font-bold tracking-widest text-terracotta uppercase block mb-4">Patent App 202441074722</span>
              <h3 className="text-3xl font-bold mb-6 tracking-tight relative z-10">Indigenous Encapsulated Chamber</h3>
              <p className="text-espresso/80 leading-relaxed text-lg mb-8 relative z-10">
                Developed an indigenous device housing an encapsulated chamber for the integration of sensors. This facilitates the real-time quantification of multiple analytes within biological specimens, such as mitochondrial oxygen consumption.
              </p>
              <div className="inline-flex items-center gap-3 text-espresso font-semibold px-6 py-3 rounded-full bg-cream/50 border border-muted/30 relative z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-terracotta animate-pulse"></span> Patent Filed Oct 2024
              </div>
            </GlassCard>
          </FadeIn>
        </div>

        <div className="md:w-1/2">
          <FadeIn direction="left">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6">
              Biomedical Device <br /> <span className="font-light italic text-terracotta">Development</span>
            </h2>
            <p className="text-xl text-espresso/80 leading-relaxed mb-6">
              Translating biological understanding into engineering solutions. My recent work bridges the gap between physiological needs and mechanical design, focusing on creating functional prototypes that solve real-world clinical challenges.
            </p>
            <p className="text-base text-espresso/70 leading-relaxed">
              From assisting in the design and development of five proof-of-concept systems, to iterating towards a portable MVP for cardiac graft transportation, my role involves extensive documentation, regulatory compliance, and cross-disciplinary collaboration.
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
