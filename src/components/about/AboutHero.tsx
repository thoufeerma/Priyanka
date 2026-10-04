import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full pt-28 pb-12 px-8 bg-terracotta text-cream flex justify-center overflow-hidden" >
      {/* Elegant Background Design */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-terracotta/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-black/20 blur-[100px] rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] w-full flex flex-col md:flex-row gap-16 items-center mt-8">
        
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-cream shadow-2xl">
            <Image src="/potrait.jpeg" alt="Dr. Priyanka N P" fill className="object-cover" priority />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col">
          <span className="text-sm font-semibold tracking-widest uppercase text-cream mb-4">Professional Biography</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
            Dr. Priyanka <span className="font-light italic text-body-cream">N P</span>
          </h1>
          <div className="space-y-6 text-body-cream leading-relaxed text-lg">
            <p>
              A dedicated and resourceful researcher with more than 8+ years of experience in an institutional research lab specializing in conducting animal studies in the area of cardiovascular, renal, metabolic diseases and pharmacokinetics.
            </p>
            <p>
              Currently, a lead research scientist in the cardiovascular division of the Healthcare Technology Innovation Centre (HTIC) at IITM Research Park – a Research & Development Centre of IIT Madras.
            </p>
            <p>
              Possesses strong management expertise evidenced by successful management of multiple pre-clinical and clinical projects from Government and private agencies, guiding all functions relating to research studies, analysis and reporting.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
