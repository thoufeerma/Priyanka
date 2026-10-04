import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

export default function FeaturedResearch() {
  return (
    <section className="min-h-screen w-full py-24 px-8 flex flex-col items-center justify-center bg-espresso text-cream" >
      <div className="max-w-[1400px] w-full flex flex-col items-center">
        <div className="w-full flex justify-between items-end mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-semibold tracking-widest uppercase text-gold">Featured Project</span>
              <div className="h-[1px] w-12 bg-blush"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Cardiac Graft Transportation
            </h2>
          </div>
          <Button variant="primary" className="hidden md:flex text-xs uppercase tracking-widest px-6 py-3">
            View Case Study <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="w-full bg-oxblood/70 backdrop-blur-md rounded-[3rem] border border-blush/30 overflow-hidden flex flex-col md:flex-row">
          {/* Content */}
          <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-oxblood/70 text-xs font-semibold tracking-widest uppercase mb-8">
                Device Development
              </div>
              <h3 className="text-3xl font-semibold mb-6 leading-tight">
                Viability Monitoring System for Ex-Vivo Hearts
              </h3>
              <p className="text-body-cream leading-relaxed mb-8">
                Developed a novel transportation system that continuously monitors the viability of cardiac grafts during transit. This innovation extends the preservation window and improves post-transplant outcomes by providing real-time metabolic and functional data.
              </p>
              
              <ul className="space-y-4 mb-12">
                {[
                  "Continuous Perfusion Technology",
                  "Real-time Metabolic Assessment",
                  "Automated Temperature Control"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-body-cream">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <Button variant="primary" className="md:hidden flex text-xs uppercase tracking-widest mb-8">
              View Case Study <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Image Area (Abstract Dashboard Graphic) */}
          <div className="md:w-1/2 relative min-h-[400px] bg-gradient-to-br from-terracotta/20 to-espresso/40 flex items-center justify-center p-8">
            
            <GlassCard variant="dark" bgClass="bg-oxblood/70" className="relative w-full max-w-[320px] aspect-square flex flex-col items-center justify-center overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,white_8%,transparent)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Central Heart Monitor */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-terracotta border border-blush/30 flex items-center justify-center mb-8 shadow-[0_0_40px_color-mix(in_srgb,white_10%,transparent)]">
                <div className="absolute inset-0 rounded-full border border-gold animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cream">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>
                </svg>
              </div>

              {/* Data Metrics */}
              <div className="relative z-10 w-full flex flex-col gap-5">
                {/* Metric 1 */}
                <div className="w-full flex items-center gap-3">
                  <span className="text-[10px] font-bold tracking-wider text-muted-dark w-10">SpO2</span>
                  <div className="flex-1 h-1.5 bg-terracotta border border-blush/30 rounded-full overflow-hidden">
                    <div className="h-full bg-terracotta/90 w-[98%] rounded-full shadow-[0_0_10px_color-mix(in_srgb,white_80%,transparent)]"></div>
                  </div>
                  <span className="text-xs font-semibold text-body-cream w-8 text-right">98%</span>
                </div>
                {/* Metric 2 */}
                <div className="w-full flex items-center gap-3">
                  <span className="text-[10px] font-bold tracking-wider text-muted-dark w-10">BPM</span>
                  <div className="flex-1 h-1.5 bg-terracotta border border-blush/30 rounded-full overflow-hidden">
                    <div className="h-full bg-terracotta/70 w-[72%] rounded-full"></div>
                  </div>
                  <span className="text-xs font-semibold text-body-cream w-8 text-right">72</span>
                </div>
                {/* Metric 3 */}
                <div className="w-full flex items-center gap-3">
                  <span className="text-[10px] font-bold tracking-wider text-muted-dark w-10">TEMP</span>
                  <div className="flex-1 h-1.5 bg-terracotta border border-blush/30 rounded-full overflow-hidden">
                    <div className="h-full bg-terracotta/60 w-[34%] rounded-full"></div>
                  </div>
                  <span className="text-xs font-semibold text-body-cream w-8 text-right">34°C</span>
                </div>
              </div>
            </GlassCard>
            
          </div>
        </div>
      </div>
    </section>
  );
}
