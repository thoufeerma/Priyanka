import { Settings, CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function ResearchToPrototype() {
  return (
    <section className="w-full py-24 px-8 bg-cream text-espresso flex justify-center" >
      <div className="max-w-[1000px] w-full">
        <div className="text-center mb-16">
          <Settings className="w-10 h-10 text-terracotta mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Research to <span className="font-light italic text-terracotta">Prototype</span>
          </h2>
          <p className="text-lg text-espresso/80 leading-relaxed">
            The journey from theoretical concepts to a functioning biomedical device requires rigorous testing, iteration, and validation.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <GlassCard variant="light" className="!p-8 flex flex-col md:flex-row items-start gap-6 border-muted/30">
            <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-terracotta">01</span>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Proof of Concept Iteration</h4>
              <p className="text-espresso/80 leading-relaxed text-sm">
                Assisted in the design and development of five proof-of-concept systems, continuously iterating and refining the mechanics to achieve the current portable Minimum Viable Product (MVP).
              </p>
            </div>
          </GlassCard>

          <GlassCard variant="light" className="!p-8 flex flex-col md:flex-row items-start gap-6 border-muted/30">
            <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-terracotta">02</span>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Slaughterhouse Experiments</h4>
              <p className="text-espresso/80 leading-relaxed text-sm">
                Conducted over 100 slaughterhouse experiments using ovine hearts. Successfully managed complex cardiac conditions such as bradycardia, tachycardia, arrhythmias, stunning, and flutter during testing.
              </p>
            </div>
          </GlassCard>

          <GlassCard variant="light" className="!p-8 flex flex-col md:flex-row items-start gap-6 border-muted/30">
            <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-terracotta">03</span>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Perfusion Optimization</h4>
              <p className="text-espresso/80 leading-relaxed text-sm">
                Researched and optimized perfusion solutions to simulate ideal physiological environments for heart function, significantly reducing ischemia reperfusion injury during transport.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
