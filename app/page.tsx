import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SearchSection } from "@/components/search-section";
import { SectionsWrapper } from "@/components/sections-wrapper";
import type { Metadata } from "next";
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

// Force static generation since data is static
export const dynamic = "force-static";
export const revalidate = false;

// Enhanced page metadata
export const metadata: Metadata = {
  title: "Vercel Contacts Directory | Find Vercel Technology Contacts",
  description:
    "Search and discover contacts for Vercel technologies including Next.js, Turbopack, v0, AI SDK, and more. Community-maintained directory of framework and product experts.",
  openGraph: {
    title: "Vercel Contacts Directory | Find Vercel Technology Contacts",
    description:
      "Search and discover contacts for Vercel technologies including Next.js, Turbopack, v0, AI SDK, and more.",
  },
};

export default function Home() {
  const sections = data.sections as Section[];

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vercel Contacts Directory",
    url: "https://vercel.contact",
    description:
      "A community-maintained directory of contacts for Vercel technologies and products",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://vercel.contact?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
    </>
  );
}
