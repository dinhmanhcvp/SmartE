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
      {/* Background Ambience (Pastel Light Mode) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle at 50% -20%, #fbcfe8 0%, transparent 60%), radial-gradient(circle at -20% 50%, #bae6fd 0%, transparent 60%), radial-gradient(circle at 120% 120%, #fef08a 0%, transparent 60%)' }}></div>
      
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
