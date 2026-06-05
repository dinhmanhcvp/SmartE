"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/use-auth-store';
import { Sparkle, Flower, Lightning } from '@phosphor-icons/react';
import { toast } from 'sonner';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const login = useAuthStore(state => state.login);
  const router = useRouter();

  const handleSelect = (username: string) => {
    setIsLoading(username);
    
    setTimeout(() => {
      const success = login(username);
      if (success) {
        router.push('/');
      } else {
        toast.error('Đã xảy ra lỗi.');
        setIsLoading(null);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-lg p-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <Sparkle weight="duotone" className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-heading font-medium tracking-wide text-white mb-2">SmartE</h1>
          <p className="text-muted-foreground">Chọn không gian học của bạn</p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {/* Ngọc Anh - Không gian chính */}
          <button
            onClick={() => handleSelect('ngocanhdangiu')}
            disabled={isLoading !== null}
            className={`group relative flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden ${isLoading === 'ngocanhdangiu' ? 'scale-95 opacity-70' : ''}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="w-16 h-16 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(236,72,153,0.15)]">
              <Flower weight="duotone" className="w-8 h-8 text-pink-300" />
            </div>
            <span className="text-lg font-medium text-white mb-1">Ngọc Anh</span>
            <span className="text-xs text-muted-foreground">Vườn kiến thức</span>
            {isLoading === 'ngocanhdangiu' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-3xl">
                <div className="w-6 h-6 border-2 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </button>

          {/* Omachi - Không gian nâng band */}
          <button
            onClick={() => handleSelect('omachi')}
            disabled={isLoading !== null}
            className={`group relative flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden ${isLoading === 'omachi' ? 'scale-95 opacity-70' : ''}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <Lightning weight="duotone" className="w-8 h-8 text-purple-300" />
            </div>
            <span className="text-lg font-medium text-white mb-1">Omachi</span>
            <span className="text-xs text-muted-foreground">Nâng band IELTS</span>
            {isLoading === 'omachi' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-3xl">
                <div className="w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </button>
        </div>

        <p className="text-center text-xs text-muted-foreground/40 mt-8">
          Private Learning Platform
        </p>
      </div>
    </div>
  );
}
