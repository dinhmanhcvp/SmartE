"use client"
import { Header } from './header';
import { TheCompass } from './the-compass';
import { AIDock } from './ai-dock';
import { GlobalTranslator } from '@/components/global-translator';
import { FloatingMiniPlayer } from '@/components/floating-mini-player';
import { useAuthStore } from '@/store/use-auth-store';
import { useEffect, useState } from 'react';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuthStore();
  const [theme, setTheme] = useState('');

  useEffect(() => {
    if (user?.learning_track === 'advanced') {
      setTheme('obsidian-theme');
      document.body.classList.add('obsidian-theme');
    } else {
      setTheme('');
      document.body.classList.remove('obsidian-theme');
    }
    
    return () => document.body.classList.remove('obsidian-theme');
  }, [user]);

  return (
    <div className={`flex flex-col min-h-screen w-full relative overflow-hidden bg-background text-foreground transition-colors duration-500 ${theme}`}>
      {/* Background Ambience (Pure White / Soft) */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100/40 rounded-full blur-[120px] mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-50/50 rounded-full blur-[120px] mix-blend-multiply"></div>
      </div>
      
      {/* The floating ultra-minimal header */}
      <div className="relative z-50">
        <Header />
      </div>

      <main className="flex flex-1 flex-col p-4 md:p-8 relative z-10 h-full w-full max-w-7xl mx-auto">
        {children}
      </main>

      {/* Invisible Navigation & Global Elements */}
      <TheCompass />
      <AIDock />
      <FloatingMiniPlayer />
      <GlobalTranslator />
    </div>
  );
}
