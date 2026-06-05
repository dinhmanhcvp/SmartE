"use client"
import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/use-app-store';
import { Headphones, Coffee, X } from '@phosphor-icons/react';
import Link from 'next/link';

export default function FocusRoomPage() {
  const { setImmersiveMode } = useAppStore();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Ép Immersive Mode để ẩn Compass & AIDock
    setImmersiveMode(true);
    return () => setImmersiveMode(false);
  }, [setImmersiveMode]);

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] text-stone-300 font-serif overflow-y-auto selection:bg-stone-800 selection:text-stone-100 flex flex-col z-[200]">
      {/* Nút thoát */}
      <Link href="/" className="fixed top-8 left-8 text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-2 group">
        <X className="w-5 h-5 group-hover:-rotate-90 transition-transform duration-300" />
        <span className="text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Rời phòng</span>
      </Link>

      <main className="max-w-2xl mx-auto w-full py-32 px-8">
        <div className="mb-16 flex justify-between items-center border-b border-stone-800 pb-8">
          <h1 className="text-4xl font-normal tracking-wide text-stone-200">The Solitude Room</h1>
          <Coffee className="w-6 h-6 text-stone-600" />
        </div>

        <article className="prose prose-invert prose-stone max-w-none text-lg leading-loose space-y-8 prose-p:text-stone-400 prose-headings:font-normal prose-headings:text-stone-200">
          <p>
            Văn bản dài đòi hỏi một sự tập trung sâu sắc. Đây là không gian dành cho những suy tư chậm rãi, không có thông báo, không có gamification, chỉ có bạn và con chữ.
          </p>
          <p>
            The concept of "deep work," introduced by Cal Newport, refers to professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit. These efforts create new value, improve your skill, and are hard to replicate.
          </p>
          <p>
            In an age of network tools and endless scrolling, the ability to focus without distraction is becoming increasingly rare. Yet, it is precisely this ability that allows individuals to master hard things quickly and produce at an elite level.
          </p>
          <blockquote>
            "To build your working life around the experience of flow produced by deep work is a proven path to deep satisfaction."
          </blockquote>
          <p>
            To cultivate this state, one must embrace boredom. The brain, accustomed to constant novel stimuli, must be retrained to tolerate the quiet spaces where profound thought occurs. This room is a digital sanctuary for such endeavors.
          </p>
        </article>
      </main>

      {/* Lofi Player Widget */}
      <div className="fixed bottom-8 right-8 flex items-center gap-4">
        {isPlaying && (
          <div className="w-[300px] h-20 bg-stone-900/80 backdrop-blur-md rounded-xl border border-stone-800 p-4 flex items-center shadow-2xl animate-in slide-in-from-right overflow-hidden">
            <div className="flex-1">
              <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">Đang phát</p>
              <p className="text-sm text-stone-300">Lofi Girl - chill beats to study to</p>
            </div>
            {/* Hidden YouTube Iframe */}
            <iframe 
              width="0" 
              height="0" 
              src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&controls=0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              className="hidden"
            ></iframe>
            {/* Equalizer animation */}
            <div className="flex items-end gap-1 h-6 ml-4">
              <div className="w-1 bg-emerald-700/50 animate-pulse h-full"></div>
              <div className="w-1 bg-emerald-700/50 animate-pulse h-3/4" style={{ animationDelay: '100ms' }}></div>
              <div className="w-1 bg-emerald-700/50 animate-pulse h-1/2" style={{ animationDelay: '200ms' }}></div>
            </div>
          </div>
        )}
        
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${isPlaying ? 'bg-stone-800 text-emerald-400 border border-stone-700' : 'bg-stone-900 text-stone-500 hover:text-stone-300 hover:bg-stone-800'}`}
        >
          <Headphones weight={isPlaying ? "fill" : "duotone"} className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
