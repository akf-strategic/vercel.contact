import { ContactsPopover } from "@/components/contacts-popover";
import { CopyButton } from "@/components/copy-button";

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

interface SectionsListProps {
  sections: Section[];
  searchQuery: string;
}

export function SectionsList({ sections, searchQuery }: SectionsListProps) {
  const filteredSections = sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => {
        if (!searchQuery.trim()) {
          return true;
        }

        const query = searchQuery.toLowerCase();

        // Search in item name
        if (item.name.toLowerCase().includes(query)) {
          return true;
        }

        // Search in contact names
        const contacts = Array.isArray(item.contacts)
          ? item.contacts
          : [item.contacts];

        return contacts.some((contact) =>
          contact.name.toLowerCase().includes(query)
        );
      }),
    }))
    .filter((section) => section.items.length > 0);

  if (filteredSections.length === 0) {
    return (
      <div className="text-center py-12" role="status" aria-live="polite">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          No results found for &ldquo;{searchQuery}&rdquo;
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8" role="region" aria-label="Contact sections">
      {filteredSections.map((section) => (
        <section key={section.name} aria-labelledby={`section-${section.name}`}>
          <h2
            id={`section-${section.name}`}
            className="text-xs font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-4"
          >
            {section.name}
          </h2>
          <ul className="space-y-0 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
            {section.items.map((item, index) => {
              const contacts = Array.isArray(item.contacts)
                ? item.contacts
                : [item.contacts];
              const allContactNames = contacts.map((c) => c.name).join(" ");

              return (
                <li
                  key={item.name}
                  className={`group flex items-center justify-between px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors ${
                    index !== section.items.length - 1
                      ? "border-b border-zinc-200 dark:border-zinc-800"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <div className="text-sm font-medium text-black dark:text-white">
                      {item.name}
                    </div>
                    <CopyButton text={allContactNames} />
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <ContactsPopover contacts={contacts} />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
