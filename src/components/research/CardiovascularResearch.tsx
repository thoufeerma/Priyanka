import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";

export default function CardiovascularResearch() {
  return (
    <section className="w-full py-32 px-8 bg-cream text-espresso flex justify-center relative overflow-hidden" >
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row gap-16 items-center relative z-10">
        
        <div className="md:w-1/2 order-2 md:order-1 flex flex-col gap-8">
          <FadeIn direction="right">
            <GlassCard variant="light" className="!p-10 shadow-lg">
              <h4 className="text-xl font-bold mb-3 tracking-tight">Pharmacological Management of IR Injury</h4>
              <p className="text-espresso/80 text-sm leading-relaxed">
                Extensive investigations into the potential of Sodium Thiosulphate and Fisetin in ameliorating myocardial ischemia reperfusion injury using in vitro cell-based models, ex vivo isolated rat heart models, and in vivo LAD ligation models.
              </p>
            </GlassCard>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <GlassCard variant="light" className="!p-10 shadow-lg">
              <h4 className="text-xl font-bold mb-3 tracking-tight">Cardioprotective Signaling Pathways</h4>
              <p className="text-espresso/80 text-sm leading-relaxed">
                Identified the potential of pharmacological agents in activating cardioprotective signaling pathways, studying the effects of intratracheal administration of diesel particulate matter on IR injury, and managing diabetic cardiomyopathy.
              </p>
            </GlassCard>
          </FadeIn>
        </div>

        <div className="md:w-1/2 order-1 md:order-2">
          <FadeIn direction="left">
            <div className="relative w-full aspect-square max-w-md mx-auto mb-10 rounded-full overflow-hidden border-4 border-blush shadow-lg">
              <Image 
                src="/cardiovascular_abstract.jpg" 
                alt="Cardiovascular Abstract" 
                fill 
                className="object-cover"
              />
            </div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6">
              Cardiovascular <br /> <span className="font-light italic text-terracotta">Research</span>
            </h2>
            <p className="text-lg text-espresso/80 leading-relaxed">
              My foundational research has been deeply rooted in understanding and mitigating myocardial ischemia reperfusion (IR) injury. Through rigorous experimental models, we have explored novel pharmacological interventions and identified key signaling pathways that offer cardioprotection under acute stress.
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
