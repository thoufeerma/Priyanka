"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import GlassCard from "@/components/ui/GlassCard";

export default function CareerTimeline() {
  const experiences = [
    {
      year: "2024-Present",
      role: "Lead Research Scientist - Cardiovascular Device Development Team",
      org: "Health Technology Innovation Centre-IITM, Chennai, India",
      desc: "Playing a key role in the development of innovative transportation systems for cardiac graft transplantation with continuous perfusion, and developing continuous viability monitoring systems."
    },
    {
      year: "2017-2024",
      role: "CSIR- Research Fellow",
      org: "SASTRA Deemed University, Thanjavur, India",
      desc: "Explored molecular insights of mitochondrial changes during myocardial IR injury. Handled collaborative projects involving novel mitochondria-based circulatory markers and nano-cardio medicine. Mentored 50+ students."
    },
    {
      year: "2015-2017",
      role: "Junior Lecturer",
      org: "Research World, Ernakulam, Kerala, India",
      desc: "Prepared engaging lectures on Developmental Biology, Genetics, Evolution and Plant physiology. Designed and developed course materials from learning objectives."
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="w-full py-24 px-8 bg-offwhite text-espresso flex justify-center" >
      <div className="max-w-[1000px] w-full">
        <h2 className="text-4xl font-semibold tracking-tight mb-16 text-center border-b border-muted pb-8">
          Career <span className="font-light italic text-terracotta">Timeline</span>
        </h2>

        <div ref={containerRef} className="flex flex-col gap-12 relative pb-4">
          {/* Faint Background Track Line */}
          <div className="absolute top-0 bottom-0 w-0.5 bg-muted left-0 sm:left-[120px] md:left-1/2 -translate-x-1/2 z-0"></div>
          
          {/* Animated Maroon Fill Line */}
          <motion.div 
            className="absolute top-0 bottom-0 w-0.5 bg-terracotta left-0 sm:left-[120px] md:left-1/2 -translate-x-1/2 z-0 origin-top"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>

          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50% 0px" }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group z-10"
            >
              
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-offwhite bg-terracotta absolute left-0 sm:left-[120px] md:left-1/2 -translate-x-1/2 shadow z-20 transition-transform duration-300 group-hover:scale-125"></div>
              
              {/* Timeline Card */}
              <GlassCard variant="light" className="w-[calc(100%-3rem)] sm:w-[calc(100%-140px)] md:w-[calc(50%-2.5rem)] ml-auto sm:ml-auto md:ml-0 md:odd:ml-auto hover:shadow-lg transition-shadow border-muted/30 !p-6">
                <span className="text-terracotta font-bold text-sm tracking-widest block mb-2">{exp.year}</span>
                <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                <span className="text-espresso/80 text-sm block mb-4 italic">{exp.org}</span>
                <p className="text-espresso/80 text-sm leading-relaxed">{exp.desc}</p>
              </GlassCard>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
