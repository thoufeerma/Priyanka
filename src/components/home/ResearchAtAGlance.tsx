export default function ResearchAtAGlance() {
  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "25+", label: "Publications" },
    { number: "10+", label: "Projects Lead" },
    { number: "3", label: "Patents Pending" },
  ];

  return (
    <section className="w-full py-20 px-8 flex flex-col items-center justify-center bg-offwhite text-espresso overflow-hidden relative" >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="var(--color-gold)" strokeWidth="0.5" />
          <path d="M0,60 Q25,30 50,60 T100,60" fill="none" stroke="var(--color-gold)" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="max-w-[1400px] w-full relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-terracotta">At a Glance</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <h3 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-terracotta">
                {stat.number}
              </h3>
              <p className="text-sm md:text-base text-espresso uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
