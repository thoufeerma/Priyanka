import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function RenalResearch() {
  return (
    <section className="w-full py-32 px-8 bg-teal text-cream flex justify-center relative overflow-hidden" >
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row gap-16 items-center relative z-10">
        
        <div className="md:w-1/2">
          <FadeIn direction="right">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6">
              Renal <br /> <span className="font-light italic text-cream">Research</span>
            </h2>
            <p className="text-xl text-body-cream leading-relaxed mb-8">
              My doctoral research focused comprehensively on the "Mitochondrial Role in the Pathology of Renal Ischemia Reperfusion Injury, associated cardiac distant organ dysfunction and management therapies."
            </p>
            <ul className="space-y-6 text-body-cream">
              <li className="flex items-start gap-4">
                <span className="text-cream mt-1 text-lg">▹</span>
                <span className="text-base leading-relaxed">Prepared rat models of bilateral renal ischemia reperfusion for pathological analysis and pharmacological studies.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-cream mt-1 text-lg">▹</span>
                <span className="text-base leading-relaxed">Developed and characterized disease models in rats for high fat diet and chronic kidney disease.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-cream mt-1 text-lg">▹</span>
                <span className="text-base leading-relaxed">Performed network pharmacology-based identification of the effect of drugs on renal ischemia reperfusion injury.</span>
              </li>
            </ul>
          </FadeIn>
        </div>

        <div className="md:w-1/2 w-full flex justify-center">
          <FadeIn direction="left" delay={0.2} className="relative w-full aspect-[4/5] max-w-md rounded-[3rem] overflow-hidden border border-blush/30 shadow-lg">
            <Image 
              src="/mitochondria_abstract.jpg" 
              alt="Mitochondria Render" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <div className="text-7xl font-black text-cream/20 mb-2">PhD</div>
              <p className="text-sm font-bold tracking-widest text-cream uppercase">Defended July 2024</p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
