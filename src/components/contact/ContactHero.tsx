export default function ContactHero() {
  return (
    <section className="relative w-full pt-28 pb-12 px-8 flex flex-col items-center justify-center bg-terracotta text-cream text-center overflow-hidden" >
      {/* Elegant Background Design */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-terracotta/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-black/20 blur-[100px] rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-[800px] w-full mt-8">
        <span className="text-sm font-semibold tracking-widest uppercase text-cream mb-6 block">Get in Touch</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Professional <span className="font-light italic text-body-cream">Enquiries</span>
        </h1>
        <p className="text-xl text-body-cream leading-relaxed mx-auto mb-8">
          I am always open to discussing research collaborations, consulting opportunities, speaking engagements, and biomedical innovation projects.
        </p>
      </div>
    </section>
  );
}
