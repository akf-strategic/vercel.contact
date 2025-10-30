"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { CopyIcon } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 py-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-black dark:text-white flex items-center gap-2">
              who to contact at{" "}
              <svg
                height="16"
                viewBox="0 0 16 16"
                width="16"
                className="inline-block"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 1L16 15H0L8 1Z"
                  fill="currentColor"
                />
              </svg>
            </h1>
            <ThemeSwitcher />
          </div>
          <nav aria-label="Site information">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              This is a community-maintained list and not officially affiliated
              with Vercel. For official support, use the{" "}
              <a
                href="https://community.vercel.com"
                className="underline hover:text-black dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vercel Community (opens in new tab)"
              >
                Vercel Community
              </a>
              .
            </p>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500 flex items-center">
              Click the <CopyIcon className="size-4 mx-2" aria-hidden="true" />
              any topic to copy all contacts
            </p>
          </nav>
        </div>
      </div>
    </header>
  );
}
