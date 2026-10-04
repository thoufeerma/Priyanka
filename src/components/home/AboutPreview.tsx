import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function AboutPreview() {
  return (
    <section className="min-h-screen w-full py-24 px-8 flex flex-col items-center justify-center bg-sage text-espresso" >
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row items-center gap-16">
        
        {/* Left: Image (Placeholder) */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-oxblood shadow-2xl">
            <Image src="/potrait.jpeg" alt="Dr. Priyanka N P" fill className="object-cover" priority />
          </div>
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest uppercase text-terracotta">About The Researcher</span>
            <div className="h-[1px] w-12 bg-blush"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 leading-tight">
            Bridging the gap between <span className="font-light italic text-espresso/70">benchside science</span> and clinical application.
          </h2>
          
          <div className="space-y-6 text-espresso/80 leading-relaxed mb-10 text-lg">
            <p>
              Dr. Priyanka N P is a dedicated researcher specializing in cardiovascular device development and biomedical engineering. With over 8 years of experience in experimental science, her work focuses on creating innovative solutions that directly impact patient care.
            </p>
            <p>
              Her approach combines rigorous laboratory methodology with a deep understanding of clinical needs, particularly in the realm of cardiac graft viability and tissue engineering.
            </p>
          </div>
          
          <Button variant="solid" className="px-8 py-4">
            Read Full Biography <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

      </div>
    </section>
  );
}
