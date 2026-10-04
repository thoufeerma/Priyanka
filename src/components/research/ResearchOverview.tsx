import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function ResearchOverview() {
  return (
    <section className="w-full py-32 px-8 bg-offwhite text-espresso flex justify-center relative overflow-hidden" >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blush rounded-full blur-[150px] opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-[1200px] w-full flex flex-col items-center text-center relative z-10">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-terracotta/30"></div>
            <span className="text-sm font-semibold tracking-widest uppercase text-terracotta">Research Overview</span>
            <div className="h-[1px] w-12 bg-terracotta/30"></div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h3 className="text-3xl md:text-5xl font-light leading-tight mb-12 max-w-[1000px] tracking-tight">
            A dedicated researcher with <span className="font-semibold text-terracotta">8+ years</span> in an institutional lab specializing in cardiovascular, renal, and metabolic diseases.
          </h3>
        </FadeIn>

        <FadeIn delay={0.4} className="w-full relative aspect-video max-w-4xl rounded-[2rem] overflow-hidden border border-blush shadow-lg mb-12">
          <Image 
            src="/lab_research_abstract.jpg" 
            alt="Laboratory Research" 
            fill 
            className="object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80"></div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-xl text-espresso/80 leading-relaxed max-w-3xl">
            Currently serving as a Lead Research Scientist in the cardiovascular division of the Healthcare Technology Innovation Centre (HTIC) at IITM Research Park. My work bridges rigorous pre-clinical science with cutting-edge biomedical device development.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
