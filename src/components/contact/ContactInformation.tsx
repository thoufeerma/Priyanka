import { Phone, Mail, MapPin } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function ContactInformation() {
  return (
    <section className="w-full py-20 px-8 bg-offwhite text-espresso flex justify-center" >
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <a href="mailto:priyanka.prem201@gmail.com" className="group">
          <GlassCard variant="light" className="!p-10 flex flex-col items-center text-center hover:bg-offwhite transition-colors border-muted/30">
            <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-terracotta" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Address</h3>
            <p className="text-espresso/80 text-sm">priyanka.prem201@gmail.com</p>
          </GlassCard>
        </a>

        <a href="tel:+919567589584" className="group">
          <GlassCard variant="light" className="!p-10 flex flex-col items-center text-center hover:bg-offwhite transition-colors border-muted/30">
            <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 text-terracotta" />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone Number</h3>
            <p className="text-espresso/80 text-sm">+91-9567589584</p>
          </GlassCard>
        </a>

        <GlassCard variant="light" className="!p-10 flex flex-col items-center text-center border-muted/30">
          <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mb-6">
            <MapPin className="w-8 h-8 text-terracotta" />
          </div>
          <h3 className="text-xl font-bold mb-2">Current Location</h3>
          <p className="text-espresso/80 text-sm leading-relaxed">
            Health Technology Innovation Centre-IITM<br />
            Chennai, Tamil Nadu, India
          </p>
        </GlassCard>

      </div>
    </section>
  );
}
