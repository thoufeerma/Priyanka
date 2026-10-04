import { Mail } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="w-full pt-24 pb-12 px-8 flex flex-col items-center justify-center bg-espresso text-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-terracotta rounded-full blur-[120px] opacity-25 -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold rounded-full blur-[150px] opacity-20 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-[1000px] w-full relative z-10 text-center flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-heading-cream">
          Ready to <span className="font-light italic">collaborate?</span>
        </h2>
        
        <p className="text-xl text-body-cream leading-relaxed mb-12 max-w-2xl">
          Interested in research partnerships, speaking engagements, or learning more about ongoing projects in cardiovascular innovation?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button variant="primary" className="px-10 py-5 text-lg">
            <Mail className="w-6 h-6" />
            Get in Touch
          </Button>
          <Button variant="glass" className="px-10 py-5 text-lg">
            View LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}
