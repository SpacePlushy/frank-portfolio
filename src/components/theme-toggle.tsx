"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className="h-4 w-4" />
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative overflow-hidden"
    >
      <div className="relative h-4 w-4">
        <Sun 
          className={`absolute inset-0 h-4 w-4 rotate-0 transition-all duration-300 ease-in-out ${
            theme === "light" 
              ? "scale-100 opacity-100" 
              : "rotate-90 scale-0 opacity-0"
          }`}
        />
        <Moon 
          className={`absolute inset-0 h-4 w-4 rotate-90 transition-all duration-300 ease-in-out ${
            theme === "light" 
              ? "scale-0 opacity-0" 
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
