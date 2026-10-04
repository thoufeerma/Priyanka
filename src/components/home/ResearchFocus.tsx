import { HeartPulse, TestTube2, Stethoscope, Microscope } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function ResearchFocus() {
  const focuses = [
    {
      title: "Cardiovascular Device Development",
      description: "Innovating devices for cardiac graft transportation and viability monitoring to improve transplant outcomes.",
      icon: <HeartPulse className="w-8 h-8 text-current transition-colors duration-500" strokeWidth={1.5} />,
    },
    {
      title: "Biomedical Engineering",
      description: "Bridging the gap between engineering and medicine to create scalable solutions for critical care.",
      icon: <TestTube2 className="w-8 h-8 text-current transition-colors duration-500" strokeWidth={1.5} />,
    },
    {
      title: "Translational Medicine",
      description: "Accelerating the journey of laboratory discoveries into clinical practice for immediate patient benefit.",
      icon: <Stethoscope className="w-8 h-8 text-current transition-colors duration-500" strokeWidth={1.5} />,
    },
    {
      title: "Experimental Science",
      description: "Rigorous scientific methodology applied to complex physiological problems in cardiovascular health.",
      icon: <Microscope className="w-8 h-8 text-current transition-colors duration-500" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="relative min-h-screen w-full py-24 px-8 flex flex-col items-center justify-center bg-teal text-cream overflow-hidden" >

      <div className="relative z-10 max-w-[1400px] w-full flex flex-col md:flex-row gap-16">
        {/* Left: Heading */}
        <div className="md:w-1/3 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-blush"></div>
            <span className="text-sm font-semibold tracking-widest uppercase text-cream">Core Pillars</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-6">
            Research <br /> <span className="font-light italic text-body-cream">Focus</span>
          </h2>
          <p className="text-body-cream leading-relaxed max-w-sm">
            Dedicated to advancing cardiovascular care through rigorous experimental science, innovative device development, and translational biomedical engineering.
          </p>
        </div>

        {/* Right: Grid */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {focuses.map((focus, idx) => (
            <GlassCard 
              key={idx}
              variant="dark"
              bgClass="bg-teal/70"
              className="cursor-pointer hover:!bg-teal-light hover:!border-gold/60 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-teal group-hover:bg-gold border border-blush/30 group-hover:border-transparent text-cream group-hover:text-espresso flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                {focus.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{focus.title}</h3>
              <p className="text-sm text-body-cream leading-relaxed">
                {focus.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>

    </section>
  );
}
