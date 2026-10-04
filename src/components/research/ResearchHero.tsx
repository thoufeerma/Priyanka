export default function ResearchHero() {
  return (
    <section className="relative w-full pt-28 pb-12 px-8 flex flex-col items-center justify-center bg-terracotta text-cream overflow-hidden" >
      {/* Elegant Background Design */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-terracotta/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-black/20 blur-[100px] rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] w-full flex flex-col items-center text-center mt-8">
        <span className="text-sm font-semibold tracking-widest uppercase text-body-cream mb-6">Current Innovation</span>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl">
          Pioneering <span className="font-light italic text-body-cream">Cardiac Graft</span> Transportation Systems
        </h2>
        <p className="text-lg text-body-cream max-w-2xl mb-12 leading-relaxed">
          Developing continuous perfusion and viability monitoring systems to expand the donor pool and redefine the future of seamless organ transplantation.
        </p>

        {/* Feature Cards / Diagram Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-terracotta/80 backdrop-blur-md rounded-3xl p-8 border border-blush/30 flex flex-col items-center text-center shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-terracotta border border-blush/30 flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h3 className="font-bold mb-2">Continuous Perfusion</h3>
            <p className="text-sm text-body-cream">Preventing warm/cold ischemic insults during transit.</p>
          </div>
          <div className="bg-terracotta/80 backdrop-blur-md rounded-3xl p-8 border border-blush/30 flex flex-col items-center text-center shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-terracotta border border-blush/30 flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="font-bold mb-2">Viability Monitoring</h3>
            <p className="text-sm text-body-cream">Real-time tracking of pressures, ECG, and biomarkers.</p>
          </div>
          <div className="bg-terracotta/80 backdrop-blur-md rounded-3xl p-8 border border-blush/30 flex flex-col items-center text-center shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-terracotta border border-blush/30 flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
            </div>
            <h3 className="font-bold mb-2">Portable MVP</h3>
            <p className="text-sm text-body-cream">Resuscitating and maintaining beating hearts for 4-9 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
