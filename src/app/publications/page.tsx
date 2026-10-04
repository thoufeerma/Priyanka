import PublicationHero from "@/components/publications/PublicationHero";
import PublicationHighlights from "@/components/publications/PublicationHighlights";
import FullPublicationsList from "@/components/publications/FullPublicationsList";
import BookChapters from "@/components/publications/BookChapters";
import GoogleScholarLink from "@/components/publications/GoogleScholarLink";
import ContactCTA from "@/components/home/ContactCTA";

export default function PublicationsPage() {
  return (
    <main className="flex flex-col w-full">
      <PublicationHero />
      <PublicationHighlights />
      <FullPublicationsList />
      <BookChapters />
      <GoogleScholarLink />
      <ContactCTA />
    </main>
  );
}
