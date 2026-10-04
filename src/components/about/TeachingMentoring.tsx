import { Users } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function TeachingMentoring() {
  return (
    <section className="w-full py-24 px-8 bg-espresso text-cream flex justify-center" >
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row gap-16 items-center">
        
        <div className="md:w-1/2 order-2 md:order-1">
          <GlassCard variant="dark" bgClass="bg-espresso/70" className="!p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <Users className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Student Mentorship</h4>
                    <p className="text-sm text-body-cream leading-relaxed">Mentored more than 50 graduate and undergraduate students with their academic project requirements.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Workshop Facilitation</h4>
                    <p className="text-sm text-body-cream leading-relaxed">Conducted national hands-on training workshops and annual internal workshops on Experimental Cardiology, Mammalian cell culture, and cell biology techniques.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Curriculum Delivery</h4>
                    <p className="text-sm text-body-cream leading-relaxed">Prepared engaging lectures on Developmental Biology, Genetics, Evolution, and Plant Physiology. Designed course materials, administered examinations, and evaluated student performances.</p>
                  </div>
                </li>
              </ul>
            </div>
          </GlassCard>
        </div>

        <div className="md:w-1/2 order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Teaching & <span className="font-light italic text-body-cream">Mentoring</span>
          </h2>
          <p className="text-lg text-body-cream leading-relaxed mb-6">
            Beyond the bench, I am deeply committed to cultivating the next generation of scientific minds. My approach to teaching blends rigorous theoretical understanding with practical, hands-on laboratory experience.
          </p>
          <p className="text-sm text-body-cream leading-relaxed">
            Whether serving as a Teaching Assistant supporting practical classes in Biochemistry and Immunology, or operating as a Junior Lecturer developing comprehensive course materials, communication and constructive feedback remain the cornerstones of my mentorship philosophy.
          </p>
        </div>

      </div>
    </section>
  );
}
