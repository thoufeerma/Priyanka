import { Award } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function FellowshipsAwards() {
  const awards = [
    {
      title: "CSIR SRF Fellowship",
      year: "2019-2022",
      desc: "Awarded the Council of Scientific and Industrial Research Senior Research Fellowship."
    },
    {
      title: "CSIR JRF Fellowship",
      year: "2017-2019",
      desc: "Awarded the Council of Scientific and Industrial Research Junior Research Fellowship."
    },
    {
      title: "GATE Qualified",
      year: "March 2016",
      desc: "Successfully cleared the Graduate Aptitude Test in Engineering."
    },
    {
      title: "Academic Distinctions",
      year: "2010-2015",
      desc: "Secured First Class with Distinction at both Undergraduate (BSc) and Postgraduate (MSc) level examinations."
    }
  ];

  return (
    <section className="w-full py-24 px-8 bg-cream text-espresso flex justify-center" >
      <div className="max-w-[1400px] w-full">
        <div className="flex items-center justify-center gap-4 mb-16">
          <Award className="w-8 h-8 text-terracotta" />
          <h2 className="text-4xl font-semibold tracking-tight text-center">Fellowships & Awards</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, idx) => (
            <GlassCard key={idx} variant="light" className="text-center hover:-translate-y-2 transition-transform duration-300 !p-8">
              <span className="text-terracotta font-bold text-sm tracking-widest block mb-4">{award.year}</span>
              <h4 className="text-xl font-bold mb-4">{award.title}</h4>
              <p className="text-espresso/80 text-sm leading-relaxed">{award.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
