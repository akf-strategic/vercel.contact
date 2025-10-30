"use client";

import { SearchInput } from "@/components/search-input";
import { useQueryState } from "nuqs";

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useQueryState("q", {
    defaultValue: "",
  });

  return (
    <div className="mb-6">
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
    </div>
  );
}
