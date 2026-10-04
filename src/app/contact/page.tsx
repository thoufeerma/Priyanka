import ContactHero from "@/components/contact/ContactHero";
import ContactInformation from "@/components/contact/ContactInformation";
import ProfessionalProfiles from "@/components/contact/ProfessionalProfiles";

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <ContactHero />
      <ContactInformation />
      <ProfessionalProfiles />
    </main>
  );
}
