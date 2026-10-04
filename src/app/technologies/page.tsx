import InnovationHero from "@/components/innovations/InnovationHero";
import CardiacGraftTransportation from "@/components/innovations/CardiacGraftTransportation";
import ViabilityMonitoring from "@/components/innovations/ViabilityMonitoring";
import ResearchToPrototype from "@/components/innovations/ResearchToPrototype";
import Patents from "@/components/innovations/Patents";
import ContactCTA from "@/components/home/ContactCTA";

export default function InnovationsPage() {
  return (
    <main className="flex flex-col w-full">
      <InnovationHero />
      <CardiacGraftTransportation />
      <ViabilityMonitoring />
      <ResearchToPrototype />
      <Patents />
      <ContactCTA />
    </main>
  );
}
