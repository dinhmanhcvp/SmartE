"use client"

import { AppLayout } from '@/components/layout/app-layout';
import { useSocketStore } from '@/store/use-socket-store';
import { useAuthStore } from '@/store/use-auth-store';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export default function CoopWritingPage() {
  const { user } = useAuthStore();
  const { connect, isMyTurn, partnerText, sendSyncText, sendPassTurn } = useSocketStore();
  const [myText, setMyText] = useState('');

  useEffect(() => {
    if (user?.username) {
      connect(user.username);
    }
  }, [user, connect]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setMyText(newText);
    sendSyncText(newText, 'typing');
  };

  const handlePassTurn = () => {
    sendPassTurn();
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-120px)] gap-6 max-w-5xl mx-auto w-full animate-in fade-in duration-500">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-heading text-primary gradient-text">Sàn Đấu Viết Luận (Co-op IELTS)</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Đề bài: "Some people think that the only purpose of working hard is to earn money. To what extent do you agree or disagree?"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          {/* Màn hình của Mình */}
          <Card className={`glass-panel p-6 flex flex-col gap-4 relative overflow-hidden transition-all duration-500 ${isMyTurn ? 'ring-2 ring-primary shadow-[0_0_30px_rgba(167,139,250,0.2)]' : 'opacity-50'}`}>
            <div className="flex justify-between items-center z-10">
              <h2 className="font-bold text-lg text-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Phần của bạn
              </h2>
              {isMyTurn && <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">Đang tới lượt</span>}
            </div>
            
            <Textarea 
              value={myText}
              onChange={handleChange}
              disabled={!isMyTurn}
              placeholder={isMyTurn ? "Bắt đầu viết Introduction và Body 1 tại đây..." : "Chờ đến lượt của bạn..."}
              className="flex-1 bg-transparent border-white/10 resize-none text-base leading-relaxed z-10 focus-visible:ring-1 focus-visible:ring-primary/50"
            />
            
            <div className="flex justify-end z-10">
              <Button 
                onClick={handlePassTurn} 
                disabled={!isMyTurn || !myText.trim()}
                className="bg-primary/20 hover:bg-primary/40 text-primary border border-primary/50 rounded-full"
              >
                Chuyển lượt cho Crush ✍️
              </Button>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-primary/5 rounded-full blur-[50px] pointer-events-none"></div>
          </Card>

          {/* Màn hình của Crush */}
          <Card className={`glass-panel p-6 flex flex-col gap-4 relative overflow-hidden transition-all duration-500 ${!isMyTurn ? 'ring-2 ring-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.2)]' : 'opacity-70'}`}>
            <div className="flex justify-between items-center z-10">
              <h2 className="font-bold text-lg text-pink-400 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full bg-pink-500 ${!isMyTurn ? 'animate-pulse' : ''}`}></span>
                Phần của Crush
              </h2>
              {!isMyTurn && <span className="text-xs text-pink-400 bg-pink-500/10 px-2 py-1 rounded-full">Đang viết...</span>}
            </div>
            
            <div className="flex-1 bg-black/20 rounded-xl border border-white/5 p-4 text-pink-100/80 font-mono text-sm leading-relaxed overflow-y-auto whitespace-pre-wrap z-10 relative">
              {partnerText || (isMyTurn ? "Crush đang chờ bạn viết xong..." : "Crush đang gõ...")}
              
              {!isMyTurn && (
                <span className="inline-block w-2 h-4 ml-1 bg-pink-400 animate-pulse"></span>
              )}
            </div>

            {/* Background decoration */}
            <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-pink-500/5 rounded-full blur-[50px] pointer-events-none"></div>
          </Card>
        </div>

        <div className="flex justify-center mt-2">
          <Button variant="outline" className="glass-panel border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 rounded-full px-8">
            Nộp bài & Chấm điểm IELTS Chung 🌟
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}
