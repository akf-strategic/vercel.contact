import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SearchSection } from "@/components/search-section";
import { SectionsWrapper } from "@/components/sections-wrapper";
import data from "./data.json";

interface Contact {
  name: string;
  href: string;
  platform: string;
}

interface Item {
  name: string;
  contacts: Contact | Contact[];
}

interface Section {
  name: string;
  items: Item[];
}

export default function Home() {
  const sections = data.sections as Section[];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        {/* Search Box */}
        <SearchSection />

        {/* Sections List - Server Component */}
        <SectionsWrapper sections={sections} />
      </main>

      <Footer />
    </div>
  );
}
