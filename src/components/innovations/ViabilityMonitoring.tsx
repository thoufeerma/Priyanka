import { Activity, Gauge, HeartPulse, TestTube2, Database } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function ViabilityMonitoring() {
  return (
    <section className="w-full py-24 px-8 bg-teal text-cream flex justify-center" >
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row gap-16 items-center">
        
        <div className="md:w-1/2 order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <GlassCard variant="dark" bgClass="bg-teal/70" className="!p-6 cursor-pointer hover:!bg-teal-light hover:!border-gold/60 transition-all duration-500">
            <div className="w-12 h-12 rounded-full bg-teal group-hover:bg-gold border border-blush/30 group-hover:border-transparent text-cream group-hover:text-espresso flex items-center justify-center mb-4 transition-all duration-500">
              <Gauge className="w-6 h-6 text-current transition-colors duration-500" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-bold mb-3">Pressure Tracking</h4>
            <p className="text-sm text-body-cream">Real-time dynamic tracking of perfusion pressures to ensure ideal physiological environments.</p>
          </GlassCard>
          
          <GlassCard variant="dark" bgClass="bg-teal/70" className="!p-6 mt-0 sm:mt-12 cursor-pointer hover:!bg-teal-light hover:!border-gold/60 transition-all duration-500">
            <div className="w-12 h-12 rounded-full bg-teal group-hover:bg-gold border border-blush/30 group-hover:border-transparent text-cream group-hover:text-espresso flex items-center justify-center mb-4 transition-all duration-500">
              <HeartPulse className="w-6 h-6 text-current transition-colors duration-500" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-bold mb-3">ECG Monitoring</h4>
            <p className="text-sm text-body-cream">Continuous electrocardiogram interpretation to detect arrhythmias, bradycardia, or flutter.</p>
          </GlassCard>
          
          <GlassCard variant="dark" bgClass="bg-teal/70" className="!p-6 cursor-pointer hover:!bg-teal-light hover:!border-gold/60 transition-all duration-500">
            <div className="w-12 h-12 rounded-full bg-teal group-hover:bg-gold border border-blush/30 group-hover:border-transparent text-cream group-hover:text-espresso flex items-center justify-center mb-4 transition-all duration-500">
              <TestTube2 className="w-6 h-6 text-current transition-colors duration-500" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-bold mb-3">Biochemical Markers</h4>
            <p className="text-sm text-body-cream">Integration of sensors to quantify multiple analytes within biological specimens.</p>
          </GlassCard>
          
          <GlassCard variant="dark" bgClass="bg-teal/70" className="!p-6 mt-0 sm:mt-12 cursor-pointer hover:!bg-teal-light hover:!border-gold/60 transition-all duration-500">
            <div className="w-12 h-12 rounded-full bg-teal group-hover:bg-gold border border-blush/30 group-hover:border-transparent text-cream group-hover:text-espresso flex items-center justify-center mb-4 transition-all duration-500">
              <Database className="w-6 h-6 text-current transition-colors duration-500" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-bold mb-3">Data Acquisition</h4>
            <p className="text-sm text-body-cream">Seamless continuous data acquisition, evaluation, and system modification protocols.</p>
          </GlassCard>
        </div>

        <div className="md:w-1/2 order-1 md:order-2">
          <div className="flex items-center gap-4 mb-6">
            <Activity className="w-8 h-8 text-cream" />
            <span className="text-sm font-semibold tracking-widest uppercase text-cream">Data Integration</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Continuous Viability <br /> <span className="font-light italic text-cream">Monitoring</span>
          </h2>
          <p className="text-lg text-body-cream leading-relaxed">
            Contributed significantly to the development of a continuous viability monitoring system. By tracking critical parameters in real-time, the system ensures robust evaluation of device efficacy and provides unprecedented insight into cellular-level changes during ex-vivo perfusion.
          </p>
        </div>

      </div>
    </section>
  );
}
