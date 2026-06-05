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
    <div className={`flex flex-col min-h-screen w-full relative overflow-hidden bg-[#0B1120] ${theme}`}>
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen" style={{ backgroundImage: 'radial-gradient(circle at 50% -20%, #4c1d95 0%, transparent 50%), radial-gradient(circle at -20% 50%, #1e3a8a 0%, transparent 50%), radial-gradient(circle at 120% 120%, #064e3b 0%, transparent 50%)' }}></div>
      
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
