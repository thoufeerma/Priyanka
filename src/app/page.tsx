import HeroSection from "@/components/hero/HeroSection";
import ResearchFocus from "@/components/home/ResearchFocus";
import ResearchAtAGlance from "@/components/home/ResearchAtAGlance";
import FeaturedResearch from "@/components/home/FeaturedResearch";
import CurrentWork from "@/components/home/CurrentWork";
import SelectedPublications from "@/components/home/SelectedPublications";
import AboutPreview from "@/components/home/AboutPreview";
import ContactCTA from "@/components/home/ContactCTA";
import ScrollDNA from "@/components/home/ScrollDNA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <ScrollDNA />
      <HeroSection />
      <ResearchAtAGlance />
      <ResearchFocus />
      <FeaturedResearch />
      <CurrentWork />
      <SelectedPublications />
      <AboutPreview />
      <ContactCTA />
    </main>
  );
}
