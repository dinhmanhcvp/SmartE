"use client"
import { AppLayout } from '@/components/layout/app-layout';
import { useAppStore, AIPersona } from '@/store/use-app-store';
import { Card, CardContent } from '@/components/ui/card';
import { Robot, PaintBrush, Heart, Sparkle } from '@phosphor-icons/react';

export default function SettingsPage() {
  const { aiPersona, setAIPersona } = useAppStore();

  const personas: { id: AIPersona; title: string; desc: string; icon: any; color: string }[] = [
    { id: 'Artistic', title: 'Chuyên gia Nghệ thuật', desc: 'Từ ngữ sắc sảo, cấu trúc tinh tế. Phù hợp luyện thi IELTS band cao.', icon: PaintBrush, color: 'emerald' },
    { id: 'Romantic', title: 'Người kể chuyện Lãng mạn', desc: 'Sử dụng ngôn từ bay bổng, đầy chất thơ. Thích hợp để viết luận, thư tín.', icon: Heart, color: 'pink' },
    { id: 'GenZ', title: 'Bạn thân Gen Z', desc: 'Dùng slang, năng động, hài hước. Dành cho giao tiếp thực tế và văn hóa Pop.', icon: Sparkle, color: 'purple' },
  ];

  return (
    <AppLayout>
      <div className="flex flex-col h-full animate-in fade-in duration-500 max-w-4xl mx-auto w-full pt-10">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-primary w-fit drop-shadow-sm font-heading mb-2">Đặc điểm Nhận diện AI (Brand DNA)</h1>
          <p className="text-muted-foreground text-base">Chọn một "linh hồn" cho người bạn đồng hành của mình. AI sẽ tự động điều chỉnh văn phong, ví dụ và cách sửa lỗi cho khớp với tính cách này.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((p) => {
            const isActive = aiPersona === p.id;
            return (
              <Card 
                key={p.id}
                onClick={() => setAIPersona(p.id)}
                className={`premium-glass overflow-hidden cursor-pointer transition-all duration-500 group
                  ${isActive ? `ring-2 ring-${p.color}-500 shadow-[0_0_30px_rgba(var(--${p.color}-500),0.3)] -translate-y-2` : 'hover:-translate-y-1 hover:bg-white/5'}
                `}
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center transition-colors duration-500
                    ${isActive ? `bg-${p.color}-500/20 text-${p.color}-400 glow-box` : 'bg-black/20 text-muted-foreground group-hover:text-primary'}
                  `}>
                    <p.icon weight={isActive ? "fill" : "duotone"} className="w-8 h-8" />
                  </div>
                  <h3 className={`text-xl font-heading mb-3 ${isActive ? 'text-white' : 'text-foreground/80'}`}>{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  
                  {isActive && (
                    <div className="mt-6 flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full animate-in zoom-in">
                      <Robot weight="fill" className="w-3 h-3" /> Đang kích hoạt
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </AppLayout>
  );
}
