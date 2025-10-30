"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Contact {
  name: string;
  href: string;
  platform: string;
}

interface ContactsPopoverProps {
  contacts: Contact[];
}

const getInitials = (name: string) => {
  // Remove @ symbol and get first two characters
  const cleanName = name.replace("@", "");
  return cleanName.slice(0, 2).toUpperCase();
};

const ContactLink = ({ contact }: { contact: Contact }) => {
  const username = contact.name.replace("@", "");
  const initials = getInitials(contact.name);

  return (
    <a
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
    >
      <Avatar className="size-5">
        <AvatarImage
          src={`https://unavatar.io/twitter/${username}`}
          alt={contact.name}
        />
        <AvatarFallback className="text-[10px] bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
          {initials}
        </AvatarFallback>
      </Avatar>
      <span>{contact.name}</span>
    </a>
  );
};

export function ContactsPopover({ contacts }: ContactsPopoverProps) {
  // Mobile: show 1 contact + popover, Tablet/Desktop: show 2 contacts + popover
  const desktopDisplayCount = 2;

  return (
    <div className="flex items-center gap-2">
      {/* Mobile: show only popover trigger */}
      <div className="md:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <button className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors font-medium">
              ▲ show
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-2">
            <div className="space-y-1">
              {contacts.map((contact, idx) => {
                const username = contact.name.replace("@", "");
                const initials = getInitials(contact.name);
                return (
                  <a
                    key={idx}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                  >
                    <Avatar className="size-5">
                      <AvatarImage
                        src={`https://unavatar.io/twitter/${username}`}
                        alt={contact.name}
                      />
                      <AvatarFallback className="text-[10px] bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-black dark:text-white">
                      {contact.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Tablet/Desktop: show 2 contacts */}
      <div className="hidden md:flex md:items-center md:gap-2">
        {contacts.slice(0, desktopDisplayCount).map((contact, idx) => (
          <ContactLink key={idx} contact={contact} />
        ))}
        {contacts.length > desktopDisplayCount && (
          <Popover>
            <PopoverTrigger asChild>
              <button className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors font-medium">
                ▲ show
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-2">
              <div className="space-y-1">
                {contacts.slice(desktopDisplayCount).map((contact, idx) => {
                  const username = contact.name.replace("@", "");
                  const initials = getInitials(contact.name);
                  return (
                    <a
                      key={idx}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-2 py-1.5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                    >
                      <Avatar className="size-5">
                        <AvatarImage
                          src={`https://unavatar.io/twitter/${username}`}
                          alt={contact.name}
                        />
                        <AvatarFallback className="text-[10px] bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                          {initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-black dark:text-white">
                        {contact.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
}
