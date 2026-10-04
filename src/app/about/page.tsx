import AboutHero from "@/components/about/AboutHero";
import CareerTimeline from "@/components/about/CareerTimeline";
import Education from "@/components/about/Education";
import FellowshipsAwards from "@/components/about/FellowshipsAwards";
import TeachingMentoring from "@/components/about/TeachingMentoring";
import Conferences from "@/components/about/Conferences";
import ContactCTA from "@/components/home/ContactCTA";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      <AboutHero />
      <CareerTimeline />
      <Education />
      <FellowshipsAwards />
      <TeachingMentoring />
      <Conferences />
      <ContactCTA />
    </main>
  );
}
