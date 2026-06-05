"use client"
import { useState } from 'react';
import { useAuthStore, LearningTrack } from '@/store/use-auth-store';
import { PaintBrush, Plant } from '@phosphor-icons/react';
import { Core3DObject } from '@/components/ui/core-3d-object';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { user, login, setLearningTrack } = useAuthStore();
  const [rippleActive, setRippleActive] = useState(false);
  const router = useRouter();

  const handleSelect = (track: LearningTrack) => {
    setRippleActive(true);
    if (typeof window !== 'undefined' && (window as any).triggerCore3DBurst) {
      (window as any).triggerCore3DBurst();
    }
    setTimeout(() => {
      if (track === 'beginner') {
        // Ngọc Anh — Xây Nền Móng
        login('ngocanhdangiu');
        setLearningTrack('beginner');
      } else {
        // Chị Omachi — Tinh Chỉnh Nghệ Thuật  
        login('omachi');
        setLearningTrack('advanced');
      }
      setRippleActive(false);
      router.push('/dashboard');
    }, 1200);
  };

  // Nếu đã đăng nhập rồi → AuthProvider sẽ redirect sang /dashboard
  if (user && !user.is_first_login) return null;

  return (
    <div className="fixed inset-0 bg-[#0B1120] text-white flex flex-col items-center justify-center overflow-hidden z-[100]">
      {/* Glowing Orb & 3D Core Object */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
      <Core3DObject className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] w-[500px] h-[500px] opacity-60 mix-blend-screen pointer-events-none" />
      
      {/* Ripple Overlay */}
      {rippleActive && (
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary rounded-full animate-ripple z-50 pointer-events-none"></div>
      )}

      <div className={`relative z-10 max-w-3xl mx-auto text-center px-6 transition-all duration-1000 ${rippleActive ? 'opacity-0 scale-95 blur-md' : 'opacity-100 scale-100'}`}>
        <h1 className="text-3xl md:text-5xl font-heading font-medium tracking-wide leading-tight mb-16 glow-text text-white/90">
          Chào ngocanhdangiu, ngôn ngữ là một bức tranh. <br/><span className="text-primary italic mt-4 block">Cậu muốn vẽ bức tranh tiếng Anh của mình như thế nào?</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto animate-in slide-in-from-bottom-10 duration-1000 delay-300 fill-mode-both">
          <button 
            onClick={() => handleSelect('beginner')}
            className="group relative flex flex-col items-center p-8 w-full rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <Plant weight="duotone" className="w-12 h-12 text-emerald-300 mb-6 group-hover:scale-110 transition-transform duration-500" />
            <span className="text-xl font-medium text-white mb-3">Xây Nền Móng</span>
            <span className="text-sm text-slate-400 group-hover:text-slate-300">"Tôi mất gốc. Tôi muốn bắt đầu xây dựng nền móng từ những viên gạch đầu tiên một cách tĩnh lặng nhất."</span>
          </button>

          <button 
            onClick={() => handleSelect('advanced')}
            className="group relative flex flex-col items-center p-8 w-full rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <PaintBrush weight="duotone" className="w-12 h-12 text-purple-300 mb-6 group-hover:scale-110 transition-transform duration-500" />
            <span className="text-xl font-medium text-white mb-3">Tinh Chỉnh Nghệ Thuật</span>
            <span className="text-sm text-slate-400 group-hover:text-slate-300">"Tôi đã có nền tảng. Tôi muốn mài giũa và tinh chỉnh lại cấu trúc câu phức tạp và từ vựng nâng cao."</span>
          </button>
        </div>
      </div>
    </div>
  );
}
