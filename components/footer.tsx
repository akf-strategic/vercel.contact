export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 py-6">
        <p className="text-xs text-zinc-600 dark:text-zinc-400 text-center">
          Inspired by{" "}
          <a
            href="https://x.com/strehldev"
            className="underline hover:text-black dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            @strehldev on X
          </a>
          , and{" "}
          <a
            href="https://who-to-bother-at.vercel.app/"
            className="underline hover:text-black dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://who-to-bother-at.vercel.app/
          </a>
        </p>
      </div>
    </footer>
  );
}
