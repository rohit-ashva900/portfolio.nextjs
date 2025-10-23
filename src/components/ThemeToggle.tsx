'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid SSR/CSR mismatch by only rendering after mount
  if (!mounted) {
    return (
      <button className="btn" aria-label="Toggle theme" disabled>
        <Moon className="size-4 opacity-0" />
        <span className="ml-2 hidden sm:inline opacity-0">Theme</span>
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';
  return (
    <button
      className="btn"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      <span className="ml-2 hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}
