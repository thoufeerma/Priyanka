import { ExternalLink } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function FeaturedProjects() {
  const projects = [
    {
      agency: "ICMR, New Delhi",
      title: "Sodium Thiosulphate as Novel Drug for Ischemia Reperfusion Injury in an Isolated Rat Heart Model",
      desc: "Identified the potential of STS in activating cardioprotective signalling pathways in myocardial ischemia reperfusion injury."
    },
    {
      agency: "DST-SERB, New Delhi",
      title: "Fisetin: A Novel Drug in the Management of Myocardial Ischemia Reperfusion Injury",
      desc: "Investigated cardioprotective signaling using in vitro, ex vivo isolated heart, in vivo LAD ligation, and myocardial infarction models."
    },
    {
      agency: "DST-SERB, New Delhi",
      title: "Molecular Insights of Mitochondrial Changes During Myocardial IR Injury",
      desc: "Studied the effect of intratracheal administration of SRM 1650b on myocardial ischemia reperfusion injury and recovery protocols."
    },
    {
      agency: "Meenakshi Hospital, Thanjavur",
      title: "Discovery of a Novel Mitochondria Based Circulatory Marker",
      desc: "Conducted a retrospective single center-based clinical trial processing blood and tissue samples to assess metabolic recovery from revascularization in CABG patients."
    }
  ];

  return (
    <section className="w-full py-24 px-8 bg-espresso text-cream flex justify-center" >
      <div className="max-w-[1400px] w-full">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-center">
          Funded <span className="font-light italic text-gold">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <GlassCard key={idx} variant="dark" bgClass="bg-espresso/70" className="group hover:bg-espresso transition-colors !p-8">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold tracking-widest text-gold uppercase">{proj.agency}</span>
                <ExternalLink className="w-5 h-5 text-muted-dark group-hover:text-cream transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
              <p className="text-body-cream text-sm leading-relaxed">{proj.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
