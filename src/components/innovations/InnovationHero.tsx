export default function InnovationHero() {
  return (
    <section className="relative w-full pt-28 pb-12 px-8 flex flex-col items-center justify-center bg-terracotta text-cream overflow-hidden" >
      {/* Elegant Background Design */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-terracotta/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-black/20 blur-[100px] rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-[1000px] w-full text-center mt-8">
        <span className="text-sm font-semibold tracking-widest uppercase text-body-cream mb-6 block">HTIC-IITM Research Park</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Biomedical <span className="font-light italic text-body-cream">Innovation</span>
        </h1>
        <p className="text-xl text-body-cream leading-relaxed max-w-2xl mx-auto">
          Bridging the gap between physiological science and mechanical engineering to develop the next generation of cardiovascular devices.
        </p>
      </div>
    </section>
  );
}
