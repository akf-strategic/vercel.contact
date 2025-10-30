"use client";

import { SectionsList } from "@/components/sections-list";
import { useQueryState } from "nuqs";

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

interface SectionsWrapperProps {
  sections: Section[];
}

export function SectionsWrapper({ sections }: SectionsWrapperProps) {
  const [searchQuery] = useQueryState("q", {
    defaultValue: "",
  });

  return <SectionsList sections={sections} searchQuery={searchQuery} />;
}
