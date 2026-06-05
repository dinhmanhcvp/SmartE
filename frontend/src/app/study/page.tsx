"use client"
import { AppLayout } from '@/components/layout/app-layout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PaperPlaneRight, Robot, User, Microphone, Sparkle, CheckCircle, CaretRight } from '@phosphor-icons/react';
import { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { playAcousticChime } from '@/utils/acoustic-sound';
import { useAudioStore } from '@/store/use-audio-store';
import { useAppStore } from '@/store/use-app-store';
import { FogSentence, SentenceToken } from '@/components/ui/fog-sentence';
import { LayeredTranslation } from '@/components/ui/layered-translation';
import { MicroAudioShadowing } from '@/components/ui/micro-audio';
import { Heartbeat } from '@phosphor-icons/react';

import { apiClient } from '@/lib/api-client';

import { useSocketStore } from '@/store/use-socket-store';
import { useAuthStore } from '@/store/use-auth-store';

type Message = {
  role: 'ai' | 'user';
  content: string;
  correction?: {
    original: string;
    corrected: string;
    explanation: string;
  };
};

export default function StudyPage() {
  const { isMuted } = useAudioStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setImmersiveMode } = useAppStore();
  const [consecutiveErrors, setConsecutiveErrors] = useState(0);
  const [showCompanion, setShowCompanion] = useState(false);
  const [isGenerating, setIsGenerating] = useState(true);

  // WebSockets & Auth
  const { user } = useAuthStore();
  const { connect, disconnect, partnerStatus, sendPoke } = useSocketStore();

  useEffect(() => {
    if (user?.username) {
      connect(user.username);
    }
    return () => {
      // Tùy chọn: disconnect khi rời trang
    };
  }, [user, connect]);

  // Load lesson from Backend when page mounts
  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const data = await apiClient.generateAtomicLesson(['run out of', 'focus']);
        setMessages([
          { role: 'ai', content: `Chào cậu! Tớ là Gia sư Tiếng Anh 1-1 của cậu đây.\n\n${data.lesson_context}\n\n**Câu hỏi đầu tiên:** ${data.questions[0].question}\n${data.questions[0].options.join('\n')}` }
        ]);
        setIsGenerating(false);
      } catch (e) {
        setMessages([
          { role: 'ai', content: 'Chào cậu! Hệ thống Backend AI đang khởi động, cậu thử lại sau nha.' }
        ]);
        setIsGenerating(false);
      }
    };
    fetchLesson();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const triggerSuccessFeedback = () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([30, 50, 30]);
    }
    if (!isMuted) {
      playAcousticChime();
    }
    const duration = 2000;
    const end = Date.now() + duration;
    
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FDE047', '#86EFAC', '#A78BFA']
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FDE047', '#86EFAC', '#A78BFA']
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleSend = (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    
    // Simulate error tracking for Multi-Agent Companion
    const newErrors = consecutiveErrors + 1;
    setConsecutiveErrors(newErrors);

    if (newErrors === 3) {
      setTimeout(() => {
        setShowCompanion(true);
        triggerSuccessFeedback(); // Just for the chime
      }, 1000);
      return;
    }
    
    // Ở giai đoạn này, ta có thể gửi input lên AI Backend để chấm điểm. Tạm thời trả về Mock UI.
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: 'Bạn viết khá ổn, nhưng cấu trúc chưa được tự nhiên lắm. Mình sửa lại như sau nhé:',
        correction: {
          original: input,
          corrected: "The beautiful girl is reading a book quietly in the cafe.",
          explanation: "Hãy phân tích câu này qua góc nhìn Sương mù nhận thức để thấy rõ nòng cốt câu nhé."
        }
      }]);
      triggerSuccessFeedback();
    }, 1500);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-120px)] animate-in fade-in duration-500 max-w-5xl mx-auto w-full transition-all duration-700">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-primary w-fit drop-shadow-sm font-heading">Kiểm Tra Chẩn Đoán</h1>
            <p className="text-muted-foreground mt-1 text-sm">AI phân tích ngôn ngữ tự nhiên cấp độ chuyên gia.</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 glass-panel px-4 py-1.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10B981]"></span>
            Hệ thống Sẵn sàng
          </div>
        </div>

        {/* --- KHÔNG GIAN TỰ HỌC ĐỒNG BỘ - ẨN với omachi --- */}
        {user?.username !== 'omachi' && (
        <div className="flex items-center gap-4 mb-4">
          <div className="glass-panel px-4 py-2 rounded-2xl flex items-center gap-3">
            <div className="relative group cursor-pointer" onClick={() => sendPoke()}>
              <div className="w-10 h-10 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center relative z-10 hover:scale-110 transition-transform">
                <span className="text-blue-300 font-bold">{user?.username?.[0].toUpperCase()}</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border border-background"></div>
              {/* Tooltip chọc ghẹo */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-xs px-2 py-1 rounded text-white whitespace-nowrap pointer-events-none">
                Nhấn để chọc ghẹo!
              </div>
            </div>

            <div className="w-8 h-px bg-white/20 relative">
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full flex items-center justify-center ${partnerStatus === 'online' ? 'animate-pulse text-pink-400' : 'text-white/20'}`}>
                ❤️
              </div>
            </div>

            <div className={`w-10 h-10 rounded-full flex items-center justify-center relative transition-all ${partnerStatus === 'online' ? 'bg-pink-500/20 border-2 border-pink-500' : 'bg-white/5 border border-white/10 opacity-50'}`}>
              <span className={partnerStatus === 'online' ? 'text-pink-300 font-bold' : 'text-white/30'}>
                N
              </span>
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border border-background ${partnerStatus === 'online' ? 'bg-emerald-500' : 'bg-gray-500'}`}></div>
            </div>
          </div>
          {partnerStatus === 'online' && (
            <div className="text-sm font-medium text-pink-300 animate-in fade-in duration-500">
              Ngọc Anh đang học cùng bạn...
            </div>
          )}
        </div>
        )}

        <Card className="flex-1 flex flex-col overflow-hidden glass-card border-none shadow-2xl relative">
          {/* Background elements for Ethereal Glass */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

          <CardContent className="flex-1 p-0 overflow-hidden relative z-10 flex flex-col">
            <ScrollArea className="flex-1 w-full" ref={scrollRef}>
              <div className="flex flex-col w-full max-w-4xl mx-auto py-8 px-6 lg:px-12 gap-8">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-5 w-full animate-in slide-in-from-bottom-4 duration-500`}>
                    <div className="shrink-0 mt-1">
                      {msg.role === 'user' ? (
                        <div className="w-10 h-10 rounded-full flex items-center justify-center premium-glass bg-primary/10 text-primary border border-primary/30 shadow-[0_0_15px_rgba(var(--primary),0.2)]">
                          <User weight="duotone" className="w-5 h-5" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full flex items-center justify-center premium-glass text-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                          <Sparkle weight="duotone" className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-1.5">
                        <span className="font-semibold text-[15px]">{msg.role === 'user' ? 'Bạn' : 'SmartE AI Tutor'}</span>
                      </div>
                      
                      <div className={`text-[16px] leading-relaxed text-foreground/90 whitespace-pre-wrap ${msg.role === 'user' ? 'font-medium' : ''}`}>
                        {msg.content}
                      </div>

                      {msg.correction && (
                        <div className="mt-6 premium-glass rounded-2xl border-l-4 border-l-primary/60 overflow-hidden shadow-lg">
                          <div className="bg-primary/5 px-5 py-3 border-b border-white/5 flex items-center gap-2">
                            <Robot weight="duotone" className="w-5 h-5 text-primary" />
                            <span className="font-bold font-heading text-base text-primary">Phân tích chuyên sâu</span>
                          </div>
                          <div className="p-5 space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                              {/* Ink Blur Effect instead of Red Cross */}
                              <div className="p-4 relative">
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Ý tưởng ban đầu</p>
                                <p className="text-foreground/50 blur-[1.5px] transition-all duration-1000 animate-shake relative italic">
                                  {msg.correction.original}
                                  {/* Water droplet visual hint */}
                                  <span className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary/10 rounded-full blur-md drop-shadow-xl pointer-events-none mix-blend-overlay"></span>
                                </p>
                              </div>
                              <div className="bg-emerald-500/5 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-500/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 bg-emerald-500/10 blur-xl rounded-full"></div>
                                <p className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                                  Gợi ý của Gia sư <CheckCircle weight="fill" className="w-4 h-4" />
                                </p>
                                <p className="text-emerald-700 dark:text-emerald-400 font-medium">{msg.correction.corrected}</p>
                              </div>
                            </div>
                            <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-white/5 flex gap-3 items-start">
                              <CaretRight weight="bold" className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <p className="text-sm text-foreground/80 leading-relaxed">
                                {msg.correction.explanation}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Interactive Widgets for AI Message */}
                      {msg.role === 'ai' && msg.correction && msg.correction.corrected.includes('beautiful girl') && (
                        <div className="mt-6 flex flex-col gap-6">
                          <FogSentence tokens={[
                            { text: 'The ', isCore: false },
                            { text: 'beautiful ', isCore: false },
                            { text: 'girl ', isCore: true },
                            { text: 'is reading ', isCore: true },
                            { text: 'a book ', isCore: true },
                            { text: 'quietly ', isCore: false },
                            { text: 'in the cafe.', isCore: false }
                          ]} />
                          
                          <LayeredTranslation />
                          
                          <MicroAudioShadowing />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Companion Soft Toast */}
            {showCompanion && (
              <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 animate-in slide-in-from-bottom-10 fade-in duration-500">
                <div className="premium-glass bg-pink-500/10 border-pink-500/30 p-4 rounded-2xl flex items-start gap-4 shadow-[0_10px_40px_rgba(236,72,153,0.2)] max-w-lg">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0">
                    <Heartbeat weight="fill" className="w-6 h-6 text-pink-400 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-pink-400 mb-1">Companion Agent</h4>
                    <p className="text-sm text-pink-100/90 leading-relaxed">
                      "Tớ thấy cấu trúc này có vẻ hơi rắc rối làm cậu sai vài lần rồi. Đừng lo lắng nha, mình tạm gác lại uống ngụm nước, tớ sẽ đổi sang dạng kéo thả dễ hơn cho cậu làm quen dần nha!"
                    </p>
                    <div className="mt-3 flex gap-2">
                      <Button size="sm" variant="outline" className="rounded-full border-pink-500/30 text-pink-300 hover:bg-pink-500 hover:text-white" onClick={() => { setShowCompanion(false); setConsecutiveErrors(0); }}>
                        Thử dạng kéo thả
                      </Button>
                      <Button size="sm" variant="ghost" className="rounded-full text-muted-foreground hover:text-white" onClick={() => setShowCompanion(false)}>
                        Bỏ qua
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Input Area - Professional Floating Prompt Box */}
            <div className="p-4 md:p-6 lg:px-12 w-full max-w-4xl mx-auto relative z-20">
              <div className="relative flex flex-col w-full premium-glass rounded-3xl overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 transition-all shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                <Textarea 
                  value={input} 
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  onFocus={() => setImmersiveMode(true)}
                  onBlur={() => setImmersiveMode(false)}
                  placeholder="Nhập câu trả lời của cậu... (Nhấn Enter để gửi, Shift+Enter để xuống dòng)" 
                  className="min-h-[60px] max-h-[200px] w-full resize-none bg-transparent border-none px-6 py-4 text-[16px] focus-visible:ring-0 placeholder:text-muted-foreground/60 transition-all duration-500"
                  rows={1}
                />
                <div className="flex justify-between items-center px-4 py-3 bg-background/40 border-t border-white/5">
                  <Button type="button" variant="ghost" size="sm" className="rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                    <Microphone weight="duotone" className="w-4 h-4 mr-2" /> Nói để nhập (Dictation)
                  </Button>
                  <Button 
                    onClick={handleSend} 
                    disabled={!input.trim()}
                    size="sm" 
                    className="rounded-full px-5 shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground disabled:opacity-50 disabled:hover:scale-100"
                  >
                    Gửi <PaperPlaneRight weight="fill" className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
