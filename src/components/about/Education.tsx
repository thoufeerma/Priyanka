import { GraduationCap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function Education() {
  const education = [
    {
      year: "2017-2024",
      degree: "Doctor of Philosophy (Biochemistry and Biotechnology)",
      inst: "SASTRA Deemed University, Thanjavur, India",
      details: "Successfully defended on 10/07/2024. Doctoral research focused on the Mitochondrial Role in the Pathology of Renal Ischemia Reperfusion Injury."
    },
    {
      year: "2013-2015",
      degree: "Master of Science (Zoology)",
      inst: "Nirmala College, Kerala, India (Affiliated to Mahatma Gandhi University)",
      details: "CGPA: 8.40. First class with distinction."
    },
    {
      year: "2010-2013",
      degree: "Bachelor of Science (Zoology)",
      inst: "Vimala College, Kerala, India (Affiliated to University of Calicut)",
      details: "CGPA: 9.40. First class with distinction."
    }
  ];

  return (
    <section className="w-full py-24 px-8 bg-teal text-cream flex justify-center" >
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-gold" />
              <h2 className="text-4xl font-semibold tracking-tight text-cream">Education</h2>
            </div>
            <p className="text-body-cream leading-relaxed mb-8">
              A solid academic foundation built across premier institutions in India, culminating in a Ph.D. in Biochemistry and Biotechnology.
            </p>
          </div>
        </div>

        <div className="md:w-2/3 flex flex-col gap-6">
          {education.map((edu, idx) => (
            <GlassCard key={idx} variant="dark" bgClass="bg-teal/70" className="!p-8 shadow-lg cursor-pointer hover:!bg-teal-light hover:!border-gold/60 transition-all duration-500 group relative">
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-teal group-hover:bg-gold border border-blush/30 group-hover:border-transparent text-cream group-hover:text-espresso flex items-center justify-center transition-all duration-500 hidden sm:flex">
                <GraduationCap className="w-6 h-6 text-current transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-bold tracking-widest text-gold uppercase block mb-3">{edu.year}</span>
              <h3 className="text-2xl font-bold mb-2 sm:pr-16">{edu.degree}</h3>
              <p className="text-body-cream font-medium mb-4">{edu.inst}</p>
              <p className="text-sm text-body-cream leading-relaxed">{edu.details}</p>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
