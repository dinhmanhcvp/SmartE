"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Leaf, Drop, Sparkle, Wind } from '@phosphor-icons/react';
import { Badge } from './ui/badge';
import confetti from 'canvas-confetti';
import { useAudioStore } from '@/store/use-audio-store';
import { playAcousticChime } from '@/utils/acoustic-sound';

const FLOWERS = [
  { id: 1, word: 'ubiquitous', status: 'mastered', meaning: 'có mặt ở khắp nơi', icon: '🌸' },
  { id: 2, word: 'meticulous', status: 'due', meaning: 'tỉ mỉ, trau chuốt', icon: '🌹' },
  { id: 3, word: 'paradigm', status: 'learning', meaning: 'mô hình, hệ quy chiếu', icon: '🌱' },
  { id: 4, word: 'deteriorate', status: 'due', meaning: 'xuống cấp, tồi tệ đi', icon: '🌺' },
  { id: 5, word: 'consequently', status: 'mastered', meaning: 'hậu quả là, do đó', icon: '🌼' },
  { id: 6, word: 'ephemeral', status: 'due', meaning: 'phù du, chóng tàn', icon: '🌷' },
];

export function BotanicalGardenSRS() {
  const [flowers, setFlowers] = useState(FLOWERS);
  const { isMuted } = useAudioStore();

  const handleWaterFlower = (id: number) => {
    setFlowers(prev => prev.map(f => {
      if (f.id === id && f.status === 'due') {
        if (!isMuted) playAcousticChime();
        confetti({
          particleCount: 30,
          spread: 40,
          origin: { y: 0.8 },
          colors: ['#a78bfa', '#86efac', '#60a5fa']
        });
        return { ...f, status: 'mastered' };
      }
      return f;
    }));
  };

  return (
    <Card className="premium-glass overflow-hidden relative group">
      <div className="absolute top-0 right-0 p-32 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <CardHeader className="relative z-10 border-b border-white/5 bg-black/10">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold font-heading flex items-center gap-2 glow-text">
              <Leaf weight="duotone" className="w-7 h-7 text-emerald-400" />
              <span className="gradient-text">Khu Vườn Ký Ức (Botanical Garden)</span>
            </CardTitle>
            <CardDescription className="mt-1">Những từ vựng bạn đã "gieo mầm". Hãy "tưới nước" cho những bông hoa bị sương phủ nhé!</CardDescription>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20"><Sparkle weight="duotone" className="w-3 h-3 mr-1" /> Đã nở</Badge>
            <Badge variant="outline" className="bg-slate-500/10 text-slate-400 border-slate-500/20"><Wind weight="duotone" className="w-3 h-3 mr-1" /> Cần tưới</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {flowers.map((flower) => (
            <div 
              key={flower.id} 
              className={`relative flex flex-col items-center p-4 rounded-3xl transition-all duration-700
                ${flower.status === 'due' 
                  ? 'cursor-pointer hover:scale-105' 
                  : 'opacity-90'}
              `}
              onClick={() => handleWaterFlower(flower.id)}
            >
              {flower.status === 'due' && (
                <div className="absolute inset-0 premium-glass rounded-3xl z-20 flex items-center justify-center opacity-90 hover:opacity-70 transition-opacity">
                  <Drop weight="duotone" className="w-8 h-8 text-blue-400 animate-bounce drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                </div>
              )}
              
              <div className={`text-6xl mb-4 transition-all duration-1000 ${flower.status === 'mastered' ? 'drop-shadow-[0_0_20px_rgba(167,139,250,0.6)] scale-110' : flower.status === 'learning' ? 'scale-75 opacity-50 grayscale' : 'grayscale-0'}`}>
                {flower.icon}
              </div>
              <h4 className="font-bold text-center text-sm mb-1">{flower.word}</h4>
              <p className="text-xs text-muted-foreground text-center">{flower.meaning}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
