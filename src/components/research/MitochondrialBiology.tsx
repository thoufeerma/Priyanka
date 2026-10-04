import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";

export default function MitochondrialBiology() {
  return (
    <section className="w-full py-32 px-8 bg-sage text-espresso flex justify-center relative overflow-hidden" >
      <div className="max-w-[1400px] w-full flex flex-col items-center text-center relative z-10">
        <FadeIn direction="up">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6">
            Mitochondrial <span className="font-light italic text-terracotta">Biology</span>
          </h2>
          <p className="text-xl text-espresso/80 leading-relaxed max-w-4xl mx-auto mb-20">
            Investigating the core engine of cellular function. From understanding ischemia-induced mitochondrial changes to developing targeted nanocarriers, mitochondrial biology has been a consistent thread across my pre-clinical and clinical trials.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
          <FadeIn delay={0.2} direction="up" className="w-full h-full flex">
            <GlassCard variant="light" className="!p-10 shadow-2xl flex flex-col w-full">
              <span className="text-sm font-bold tracking-widest text-terracotta uppercase block mb-4">01 // Analysis</span>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">Quality & Quantity Analysis</h4>
              <p className="text-espresso/80 leading-relaxed">
                Extensive biochemical profiling using UV-Vis, fluorescence, and luminescence spectroscopy. Molecular validation via qPCR, SDS-PAGE, Western blot, ELISA, IHC, and HPLC. Structural confirmation using Transmission Electron Microscopy.
              </p>
            </GlassCard>
          </FadeIn>
          
          <FadeIn delay={0.4} direction="up" className="w-full h-full flex">
            <GlassCard variant="light" className="!p-10 shadow-2xl flex flex-col w-full">
              <span className="text-sm font-bold tracking-widest text-terracotta uppercase block mb-4">02 // Clinical Trials</span>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">Circulatory Markers</h4>
              <p className="text-espresso/80 leading-relaxed">
                Conducted a retrospective single-center clinical trial to discover a novel mitochondria-based circulatory marker for assessing metabolic recovery from revascularization injury in CABG patients.
              </p>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={0.6} direction="up" className="w-full h-full flex">
            <GlassCard variant="light" className="!p-10 shadow-2xl flex flex-col w-full">
              <span className="text-sm font-bold tracking-widest text-terracotta uppercase block mb-4">03 // Nanomedicine</span>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">Targeted Drug Delivery</h4>
              <p className="text-espresso/80 leading-relaxed">
                Synthesized and characterized mitochondria-targeted mesoporous silica nanoparticles. Conducted targeted drug delivery studies in cell and animal models to manage myocardial ischemia-reperfusion injury.
              </p>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
