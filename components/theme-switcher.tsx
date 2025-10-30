"use client";

import { Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useLayoutEffect, useState } from "react";
import { Button } from "./ui/button";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true); // eslint-disable-line
  }, []);

  // Always render Moon icon during SSR and before hydration completes
  // to match server and client HTML exactly
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      disabled={!mounted}
    >
      <Moon className="h-4 w-4" />
    </Button>
  );
}
