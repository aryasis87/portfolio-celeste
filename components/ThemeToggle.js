'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = resolvedTheme === 'dark';
  return (
    <button
      type="button"
      aria-label="Ganti tema"
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className="fixed bottom-5 right-5 z-[60] grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-gray-700 shadow-lg transition hover:scale-105 dark:border-white/15 dark:bg-white/10 dark:text-amber-300"
    >
      {mounted && dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
