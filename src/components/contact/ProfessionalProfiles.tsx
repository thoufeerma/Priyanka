import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function ProfessionalProfiles() {
  return (
    <section className="w-full py-24 px-8 bg-espresso text-cream flex justify-center" >
      <GlassCard variant="dark" bgClass="bg-espresso/70" className="max-w-[800px] w-full !p-12 text-center shadow-2xl">
        <h2 className="text-3xl font-semibold mb-6">Connect Online</h2>
        <p className="text-body-cream mb-10 max-w-lg mx-auto leading-relaxed">
          Follow my research publications, citation metrics, and professional updates across academic and professional networks.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="https://scholar.google.com/citations?user=Qk19AYEAAAAJ&hl=en&oi=ao" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="accent" className="w-full flex items-center justify-center gap-3 px-8 py-4 font-bold text-sm shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8.956 8.956 0 0 1 12 9a8.956 8.956 0 0 1 7.162 4.44L24 9.5z"/></svg>
              Google Scholar
            </Button>
          </a>
          <a 
            href="#" 
          >
            <Button variant="secondary" className="w-full flex items-center justify-center gap-3 px-8 py-4 font-bold text-sm shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn Profile
            </Button>
          </a>
        </div>
      </GlassCard>
    </section>
  );
}
