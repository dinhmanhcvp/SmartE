"use client"
import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { Play, Pause, Repeat, Headphones } from '@phosphor-icons/react';

export function MicroAudioShadowing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Khởi tạo WaveSurfer
    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor: 'rgba(167, 139, 250, 0.4)', // Mute purple
      progressColor: '#a78bfa', // Bright purple
      cursorColor: '#f472b6', // Pink
      barWidth: 3,
      barGap: 3,
      barRadius: 3,
      height: 60,
      url: 'https://actions.google.com/sounds/v1/water/rain_on_roof.ogg', // Mock audio
    });

    ws.on('play', () => setIsPlaying(true));
    ws.on('pause', () => setIsPlaying(false));
    
    wavesurferRef.current = ws;

    return () => {
      ws.destroy();
    };
  }, []);

  const handlePlayPause = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };

  const handlePointerDown = () => {
    // Giả lập tính năng Loop đoạn nhỏ (Micro-segment looping)
    setIsLooping(true);
    if (wavesurferRef.current) {
      wavesurferRef.current.play();
      // Logic loop phức tạp sẽ set region. Ở đây ta mock loop visual.
    }
  };

  const handlePointerUp = () => {
    setIsLooping(false);
    if (wavesurferRef.current) {
      wavesurferRef.current.pause();
    }
  };

  return (
    <div className="p-6 rounded-3xl bg-black/40 border border-white/10 premium-glass relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-10 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>
      
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-purple-500/20 rounded-full text-purple-400">
          <Headphones weight="duotone" className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-white">Micro-Audio Shadowing</h3>
          <p className="text-xs text-muted-foreground">Nhấn giữ dải sóng để lặp lại một âm tiết liên tục.</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={handlePlayPause}
          className="w-12 h-12 shrink-0 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_15px_rgba(var(--primary),0.5)]"
        >
          {isPlaying ? <Pause weight="fill" /> : <Play weight="fill" className="ml-1" />}
        </button>

        <div 
          className={`flex-1 cursor-crosshair transition-all duration-300 ${isLooping ? 'ring-2 ring-pink-500/50 rounded-xl bg-pink-500/5' : ''}`}
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        ></div>

        <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${isLooping ? 'text-pink-400 bg-pink-500/20' : 'text-slate-500'}`}>
          <Repeat weight="bold" className={`w-4 h-4 ${isLooping ? 'animate-spin' : ''}`} />
        </div>
      </div>
      
      {isLooping && (
        <div className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-pink-400 bg-pink-500/10 px-2 py-1 rounded border border-pink-500/20 animate-pulse">
          Looping Micro-Segment...
        </div>
      )}
    </div>
  );
}
