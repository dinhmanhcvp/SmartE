"use client"
import { useState } from 'react';
import { useAuthStore } from '@/store/use-auth-store';
import { Plant } from '@phosphor-icons/react';
import { Core3DObject } from '@/components/ui/core-3d-object';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { user, login, setLearningTrack } = useAuthStore();
  const [rippleActive, setRippleActive] = useState(false);
  const router = useRouter();

  const handleEnter = () => {
    setRippleActive(true);
    if (typeof window !== 'undefined' && (window as any).triggerCore3DBurst) {
      (window as any).triggerCore3DBurst();
    }
    setTimeout(() => {
      login('ngocanhdangiu');
      setLearningTrack('beginner');
      setRippleActive(false);
      router.push('/dashboard');
    }, 1200);
  };

  if (user && !user.is_first_login) return null;

  return (
    <div className="fixed inset-0 bg-[#0B1120] text-white flex flex-col items-center justify-center overflow-hidden z-[100]">
      {/* Subtle ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Soft gradient orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* 3D Object — behind everything, subtle */}
      <Core3DObject className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] opacity-30 mix-blend-screen pointer-events-none" />
      
      {/* Ripple Overlay */}
      {rippleActive && (
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary rounded-full animate-ripple z-50 pointer-events-none"></div>
      )}

      <div className={`relative z-10 max-w-2xl mx-auto text-center px-6 transition-all duration-1000 ${rippleActive ? 'opacity-0 scale-95 blur-md' : 'opacity-100 scale-100'}`}>

        <h1 className="text-2xl md:text-3xl font-heading font-normal tracking-wide leading-relaxed mb-4 text-white/85">
          Chào <span className="text-pink-300/90 font-medium">Ngọc Anh</span>,
        </h1>
        <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed mb-3">
          ngôn ngữ là một bức tranh.
        </p>
        <p className="text-primary/80 italic text-base md:text-lg font-light mb-14 animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-500 fill-mode-both">
          Cậu muốn vẽ bức tranh tiếng Anh của mình như thế nào?
        </p>
        
        {/* Single entry button — elegant */}
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-700 fill-mode-both">
          <button 
            onClick={handleEnter}
            className="group relative flex flex-col items-center p-8 w-full max-w-sm mx-auto rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-pink-500/20 transition-all duration-500 overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <Plant weight="duotone" className="w-10 h-10 text-pink-300/80 mb-4 group-hover:scale-110 transition-transform duration-500" />
            <span className="text-lg font-medium text-white/90 mb-2">Bắt đầu nào</span>
            <span className="text-xs text-slate-500 group-hover:text-slate-400 leading-relaxed">"Tớ đã chuẩn bị mọi thứ cho cậu rồi."</span>
          </button>
        </div>

        {/* Subtle footer quote */}
        <p className="mt-12 text-[11px] text-white/15 italic tracking-wide animate-in fade-in duration-1000 delay-1000 fill-mode-both">
          "Every love story is beautiful, but ours is my favorite."
        </p>
      </div>
    </div>
  );
}
