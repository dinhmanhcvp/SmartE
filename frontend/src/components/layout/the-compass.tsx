"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Compass, House, ChartBar, UploadSimple, Gear, X, Sparkle, Headphones, Users, Chalkboard, PencilLine, MicrophoneStage, Atom } from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';
import { useAppStore } from '@/store/use-app-store';
import { useAuthStore } from '@/store/use-auth-store';

export function TheCompass() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isImmersiveMode } = useAppStore();
  const { user } = useAuthStore();

  const isBeginner = user?.learning_track === 'beginner';

  let menuItems = [
    { href: '/dashboard', icon: House, label: 'Trạm Chính' },
    { href: '/study-room', icon: Chalkboard, label: 'Phòng Học Hai Đứa' },
    { href: '/skill-tree', icon: ChartBar, label: 'Bản Đồ Kỹ Năng' },
    { href: '/upload', icon: UploadSimple, label: 'Thư Viện Dữ Liệu' },
    { href: '/co-op-writing', icon: PencilLine, label: 'Sàn Đấu Viết Luận' },
    { href: '/echo-room', icon: MicrophoneStage, label: 'Phòng Thu Âm' },
    { href: '/grammar-core', icon: Atom, label: 'Ngữ Pháp Lõi' },
    { href: '/sandbox', icon: Sparkle, label: 'Sân Chơi (Sandbox)' },
    { href: '/focus', icon: Headphones, label: 'Phòng Tập Trung' },
    { href: '/community', icon: Users, label: 'Triển Lãm Ý Tưởng' },
    { href: '/settings', icon: Gear, label: 'Đặc Điểm AI' },
  ];

  if (isBeginner) {
    // Ẩn Skill Tree và Upload đối với Beginner để tránh ngợp
    menuItems = menuItems.filter(item => item.href !== '/skill-tree' && item.href !== '/upload');
  }

  return (
    <div className={`fixed bottom-8 left-8 z-[100] transition-all duration-700 ${isImmersiveMode ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
      {/* Radial Menu Background / Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[-1] animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Items (Dải quạt) */}
      <div className={`absolute bottom-16 left-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'}`}>
        <div className="flex flex-col gap-4 mb-4">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            const delay = index * 50;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-4 animate-in slide-in-from-bottom-5"
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className={`p-4 rounded-full premium-glass shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 ${isActive ? 'bg-primary/30 border-primary/50 text-primary glow-box' : 'text-foreground/70'}`}>
                  <item.icon weight={isActive ? "fill" : "duotone"} className="w-6 h-6" />
                </div>
                <span className={`text-sm font-medium tracking-wide bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:text-primary ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} ${isActive ? 'text-primary' : 'text-white'}`} style={{ transitionDelay: `${delay + 100}ms` }}>
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Main Compass Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-14 h-14 rounded-full premium-glass flex items-center justify-center hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(var(--primary),0.3)] z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-primary/20 rounded-full blur-md group-hover:opacity-100 transition-opacity"></div>
        {isOpen ? (
          <X weight="bold" className="w-6 h-6 text-primary animate-in spin-in-90 duration-300" />
        ) : (
          <Compass weight="duotone" className="w-8 h-8 text-primary animate-in spin-in-[-90deg] duration-500 drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
        )}
      </button>
    </div>
  );
}
