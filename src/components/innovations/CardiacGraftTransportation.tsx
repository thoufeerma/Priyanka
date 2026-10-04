import Image from "next/image";
import { Heart } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";

export default function CardiacGraftTransportation() {
  return (
    <section className="w-full py-32 px-8 bg-offwhite text-espresso flex justify-center relative overflow-hidden" >
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row gap-16 items-center relative z-10">
        <div className="md:w-1/2">
          <FadeIn direction="right">
            <div className="flex items-center gap-4 mb-6">
              <Heart className="w-8 h-8 text-terracotta" />
              <span className="text-sm font-semibold tracking-widest uppercase text-terracotta">Core Project</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-8">
              Cardiac Graft <br /> <span className="font-light italic text-terracotta">Transportation</span>
            </h2>
            <p className="text-xl text-espresso/80 leading-relaxed mb-8">
              Played a key role in the development of an innovative transportation system for cardiac graft transplantation utilizing continuous perfusion. This critical advancement aims to prevent warm and cold ischemic insults during organ transit.
            </p>
            <GlassCard variant="light" className="!p-8 border-l-4 border-l-terracotta shadow-2xl">
              <h4 className="text-xl font-bold mb-3 tracking-tight">The Portable MVP</h4>
              <p className="text-espresso/80 leading-relaxed">
                Successfully created a portable MVP capable of resuscitating hearts after 10-20 minutes of warm ischemia, maintaining them in a healthy, beating state for 4-9 hours prior to transplant.
              </p>
            </GlassCard>
          </FadeIn>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <FadeIn direction="left" delay={0.2} className="relative w-full aspect-square max-w-lg rounded-[3rem] overflow-hidden border border-muted/30 shadow-lg">
            <Image 
              src="/biomedical_device_abstract.jpg" 
              alt="Biomedical Device Prototype" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80"></div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
