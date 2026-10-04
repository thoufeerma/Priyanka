import ResearchHero from "@/components/research/ResearchHero";
import ResearchOverview from "@/components/research/ResearchOverview";
import ResearchFocus from "@/components/research/ResearchFocus";
import CardiovascularResearch from "@/components/research/CardiovascularResearch";
import RenalResearch from "@/components/research/RenalResearch";
import MitochondrialBiology from "@/components/research/MitochondrialBiology";
import BiomedicalDevice from "@/components/research/BiomedicalDevice";
import FeaturedProjects from "@/components/research/FeaturedProjects";
import ResearchExpertise from "@/components/research/ResearchExpertise";
import KeyNumbers from "@/components/research/KeyNumbers";
import ContactCTA from "@/components/home/ContactCTA";

export default function ResearchPage() {
  return (
    <main className="flex flex-col w-full">
      <ResearchHero />
      <ResearchOverview />
      <ResearchFocus />
      <CardiovascularResearch />
      <RenalResearch />
      <MitochondrialBiology />
      <BiomedicalDevice />
      <FeaturedProjects />
      <ResearchExpertise />
      <KeyNumbers />
      <ContactCTA />
    </main>
  );
}
