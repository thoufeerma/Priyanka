export default function KeyNumbers() {
  const stats = [
    { number: "25+", label: "Scientific Publications" },
    { number: "80+", label: "Cumulative Impact Factor" },
    { number: "02", label: "Patents Filed" },
    { number: "100+", label: "Ovine Heart Experiments" }
  ];

  return (
    <section className="w-full py-24 px-8 bg-teal text-cream flex justify-center" >
      <div className="max-w-[1400px] w-full text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
          Research <span className="font-light italic text-cream">Impact</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter text-cream">{stat.number}</span>
              <span className="text-sm font-medium tracking-widest text-body-cream uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
