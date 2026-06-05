"use client"
import { useState } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sparkle, PaintBrush, Wind } from '@phosphor-icons/react';
import { useAppStore } from '@/store/use-app-store';

export default function SandboxPage() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { setImmersiveMode } = useAppStore();

  const handleParaphrase = () => {
    if (!input.trim()) return;
    setIsProcessing(true);
    
    // Giả lập AI xử lý
    setTimeout(() => {
      setIsProcessing(false);
      setResult("The gentle patter of rain against the windowpane wrapped me in a profound sense of tranquility, though a subtle undercurrent of melancholy still lingered in the air.");
    }, 2000);
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-full animate-in fade-in duration-500 max-w-4xl mx-auto w-full pt-10">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary drop-shadow-sm font-heading mb-4 flex items-center justify-center gap-3">
            <Wind weight="duotone" className="w-8 h-8 text-primary" />
            Nhật Ký Lộn Xộn (Messy Journal)
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">Vùng an toàn (Safe Harbor). Hãy viết tiếng Anh pha tiếng Việt, viết sai chính tả, viết bất cứ thứ gì. Ở đây hệ thống SRS và chấm điểm bị tắt hoàn toàn. Chúng tôi chỉ lắng nghe và vẽ lại cảm xúc của bạn.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Input Panel */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-heading text-foreground/80 flex items-center gap-2">
              <PaintBrush weight="duotone" className="w-5 h-5" /> Nét phác thảo của bạn
            </h2>
            <div className="relative flex flex-col w-full premium-glass rounded-3xl overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 transition-all h-[300px]">
              <Textarea 
                value={input} 
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
                onFocus={() => setImmersiveMode(true)}
                onBlur={() => setImmersiveMode(false)}
                placeholder="VD: Hôm nay tôi feel rất là sad vì trời mưa..." 
                className="flex-1 w-full resize-none bg-transparent border-none px-6 py-6 text-[16px] focus-visible:ring-0 placeholder:text-muted-foreground/40 leading-relaxed"
              />
              <div className="p-4 bg-background/20 border-t border-white/5">
                <Button 
                  onClick={handleParaphrase} 
                  disabled={!input.trim() || isProcessing}
                  className="w-full rounded-full shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground"
                >
                  {isProcessing ? (
                    <><Sparkle className="w-4 h-4 mr-2 animate-spin" /> Đang dệt lại ngôn từ...</>
                  ) : (
                    <><Sparkle weight="fill" className="w-4 h-4 mr-2" /> Vẽ lại bức tranh này</>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Result Panel */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-heading text-purple-400 flex items-center gap-2">
              <Sparkle weight="duotone" className="w-5 h-5" /> Bức tranh hoàn thiện
            </h2>
            <Card className={`premium-glass border-none shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-1000 h-[300px] overflow-hidden relative
              ${result ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-10 blur-sm pointer-events-none'}
            `}>
              <div className="absolute -inset-10 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent blur-3xl rounded-full"></div>
              
              <CardContent className="p-8 h-full flex items-center justify-center relative z-10">
                {result ? (
                  <p className="text-xl font-serif text-slate-200 leading-relaxed italic text-center drop-shadow-md">
                    "{result}"
                  </p>
                ) : (
                  <p className="text-muted-foreground/40 font-serif italic text-center">
                    Tác phẩm đang chờ được vẽ...
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
