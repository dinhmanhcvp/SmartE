"use client"

import { AppLayout } from '@/components/layout/app-layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Atom } from '@phosphor-icons/react';

export default function GrammarCorePage() {
  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-120px)] items-center justify-center gap-8 max-w-4xl mx-auto w-full animate-in fade-in duration-500">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold font-heading text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)] tracking-wider">Ngữ Pháp Lõi (Grammar Node-Clusters)</h1>
          <p className="text-emerald-500/70">Master C1/C2 Structures: Inversion, Cleft Sentences</p>
        </div>

        <Card className="w-full max-w-3xl glass-card border-none shadow-[0_0_50px_rgba(16,185,129,0.1)] flex flex-col relative overflow-hidden p-8 gap-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="flex items-center gap-3 text-emerald-400 mb-2">
            <Atom weight="fill" className="w-6 h-6 animate-spin-slow" />
            <h2 className="text-lg font-bold">Thử thách Đảo ngữ (Inversion)</h2>
          </div>

          <div className="space-y-6 z-10">
            <div className="bg-black/20 p-4 rounded-xl border border-white/5">
              <p className="text-sm text-muted-foreground mb-1">Câu gốc (Band 6.0):</p>
              <p className="text-lg text-white/90 font-medium">I had never seen such a beautiful sunset before.</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-emerald-500/80">Yêu cầu Paraphrase (Band 8.0+): Bắt đầu bằng "Never before..."</p>
              <Input 
                className="bg-emerald-950/20 border-emerald-500/30 text-emerald-100 placeholder:text-emerald-700 h-14 text-lg focus-visible:ring-emerald-500/50"
                placeholder="Gõ lại toàn bộ cấu trúc tại đây..."
              />
            </div>
          </div>

          <div className="flex justify-end mt-4 z-10">
            <Button className="bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-300 border border-emerald-500/50 rounded-full px-8">
              Kiểm tra Logic
            </Button>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
