"use client";

import { SearchInput } from "@/components/search-input";
import { useQueryState } from "nuqs";

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useQueryState("q", {
    defaultValue: "",
  });

  return (
    <section className="mb-6" aria-label="Search contacts">
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
    </section>
  );
}
