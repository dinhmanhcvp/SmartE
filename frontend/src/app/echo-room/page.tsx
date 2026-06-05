"use client"

import { AppLayout } from '@/components/layout/app-layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MicrophoneStage, Waveform } from '@phosphor-icons/react';

export default function EchoRoomPage() {
  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-120px)] items-center justify-center gap-8 max-w-4xl mx-auto w-full animate-in fade-in duration-500">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold font-heading text-primary gradient-text tracking-wider">The Echo Room</h1>
          <p className="text-muted-foreground">Phân tích Phổ âm (Phoneme Analysis) & IELTS Shadowing</p>
        </div>

        <Card className="w-full max-w-2xl aspect-video glass-card border-none shadow-[0_0_50px_rgba(167,139,250,0.15)] flex flex-col items-center justify-center relative overflow-hidden p-8">
          {/* Abstract Audio Waves Background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>

          <div className="z-10 flex flex-col items-center gap-8 w-full">
            <div className="text-center space-y-4 w-full">
              <h3 className="text-xl font-medium text-white/90 font-serif italic">
                "It’s not just about what you say, but <span className="text-primary font-bold">how</span> you say it."
              </h3>
              
              {/* Mockup Waveform UI */}
              <div className="h-24 w-full premium-glass rounded-xl flex items-center justify-center gap-1 px-4">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-1.5 rounded-full ${i === 24 || i === 25 ? 'bg-red-500 animate-pulse' : 'bg-primary/50'}`}
                    style={{ height: `${Math.max(20, Math.random() * 100)}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground px-4">
                <span>0:00</span>
                <span className="text-red-400">Thiếu âm đuôi /s/ ở "environments"</span>
                <span>0:15</span>
              </div>
            </div>

            <Button size="lg" className="rounded-full w-20 h-20 bg-primary/20 hover:bg-primary/40 border border-primary/50 text-primary transition-all hover:scale-105 group relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping group-hover:animate-none"></div>
              <MicrophoneStage weight="fill" className="w-8 h-8 relative z-10" />
            </Button>
            <p className="text-sm text-primary/70">Nhấn để bắt đầu ghi âm</p>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
