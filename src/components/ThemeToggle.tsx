
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 glass hover:ring-2 ring-primary/50"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size={18} className="text-foreground" />
      ) : (
        <Sun size={18} className="text-foreground" />
      )}
    </button>
  );
}
