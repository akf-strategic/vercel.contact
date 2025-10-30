"use client";

import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative">
      <label htmlFor="search-input" className="sr-only">
        Search products or topics
      </label>
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400"
        aria-hidden="true"
      />
      <input
        id="search-input"
        type="search"
        placeholder="search products or topics"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2.5 text-sm bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 text-black dark:text-white placeholder:text-zinc-400"
        aria-label="Search Vercel contacts by product or topic"
      />
    </div>
  );
}
