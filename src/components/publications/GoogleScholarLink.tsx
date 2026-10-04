import Button from "@/components/ui/Button";

export default function GoogleScholarLink() {
  return (
    <section className="w-full py-24 px-8 bg-teal text-cream flex justify-center" >
      <div className="max-w-[1000px] w-full flex flex-col items-center text-center">
        <h2 className="text-4xl font-semibold tracking-tight mb-6">
          Explore My Complete Profile
        </h2>
        <p className="text-lg text-body-cream max-w-2xl mx-auto mb-10 leading-relaxed">
          For the most up-to-date publication record, citation metrics, and h-index details, please visit my official Google Scholar profile.
        </p>
        <a 
          href="https://scholar.google.com/citations?user=Qk19AYEAAAAJ&hl=en&oi=ao" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button variant="accent" className="px-10 py-5 font-bold text-lg shadow-2xl flex items-center gap-3">
            View on Google Scholar
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Button>
        </a>
      </div>
    </section>
  );
}
