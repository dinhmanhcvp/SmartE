"use client"

import { AppLayout } from '@/components/layout/app-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/use-auth-store';
import { useSocketStore } from '@/store/use-socket-store';
import { useMusicStore } from '@/store/use-music-store';
import { Plant, MagicWand, UploadSimple, MusicNote, Play, Pause, Heart, BookOpenText, Chalkboard, PencilLine } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const { user } = useAuthStore();
  const { connect, partnerStatus } = useSocketStore();
  const { playlist, currentTrack, isPlaying, play, pause } = useMusicStore();
  const router = useRouter();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    if (user?.username) {
      connect(user.username);
    }
  }, [user, connect]);

  // Greeting dựa theo thời gian
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting('Buổi sáng tốt lành nha');
    else if (hour >= 12 && hour < 18) setGreeting('Buổi chiều vui vẻ nha');
    else if (hour >= 18 && hour < 22) setGreeting('Tối nay học gì nè');
    else setGreeting('Khuya rồi, đừng thức khuya quá nha');
  }, []);

  if (!user) return null;

  const isBeginner = user.learning_track === 'beginner';
  const isNgocAnh = user.username === 'ngocanhdangiu';

  return (
    <AppLayout>
      <div className="flex flex-col min-h-[calc(100vh-120px)] gap-8 animate-in fade-in duration-1000 overflow-y-auto pb-24">
        
        {/* ===== LỜI CHÀO LÃNG MẠN ===== */}
        <div className="relative text-center pt-6 max-w-3xl mx-auto w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <p className="text-sm font-medium mb-2 tracking-widest uppercase animate-in fade-in slide-in-from-bottom-3 duration-700 text-pink-400/70">
            {greeting}
          </p>
          
          <h1 className="text-3xl md:text-4xl font-heading font-medium tracking-wide text-white/90 mb-3 animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <>Nàng ơi, <span className="gradient-text italic">hôm nay tớ chuẩn bị bài rồi nè!</span></>
          </h1>
          
          <p className="text-muted-foreground text-sm max-w-md mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200 fill-mode-both">
            Web này được tớ dành riêng cho cậu để trình độ tiếng Anh và mối quan hệ của hai đứa mình có thể phát triển cùng nhau ❤️
          </p>

          {/* Trạng thái Crush */}
          {partnerStatus === 'online' && (
            <div className="mt-4 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full animate-in fade-in zoom-in duration-500">
              <Heart weight="fill" className="w-4 h-4 text-pink-400 animate-pulse" />
              <span className="text-sm text-pink-300">
                {isNgocAnh ? 'Có người đang chờ cậu kìa...' : 'Ngọc Anh đang online...'}
              </span>
            </div>
          )}
        </div>

        {/* ===== CÁC KHÔNG GIAN CHÍNH ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto w-full px-4">

          {/* Card 1: Không gian Học tập */}
          <Card className="premium-glass p-1 border-none shadow-[0_20px_60px_rgba(0,0,0,0.3)] group cursor-pointer hover:scale-[1.03] transition-all duration-700 ease-out col-span-1 md:col-span-2 lg:col-span-2"
            onClick={() => router.push('/study-room')}
          >
            <CardContent className="p-8 relative bg-black/40 backdrop-blur-3xl rounded-2xl border border-white/10 overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-1000"></div>
              <div className="absolute top-4 right-8 w-2 h-2 bg-cyan-400 rounded-full blur-[2px] animate-bounce" style={{ animationDuration: '3s' }}></div>
              <div className="absolute bottom-6 left-10 w-1.5 h-1.5 bg-blue-400 rounded-full blur-[1px] animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
              
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    <Chalkboard weight="duotone" className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white">Phòng Học Của Tớ Và Cậu</h3>
                    <p className="text-sm text-muted-foreground">Whiteboard • Dịch thuật • Hỏi đáp AI</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm">
                  Tớ đã chuẩn bị giáo án cho từng buổi rồi nè. Cậu vào đây để mình cùng học, viết, dịch và trao đổi với trợ lý AI nhé!
                </p>
                
                <div className="flex gap-3 flex-wrap">
                  <span className="text-xs glass-panel px-3 py-1 rounded-full text-cyan-300">📝 Whiteboard</span>
                  <span className="text-xs glass-panel px-3 py-1 rounded-full text-blue-300">🌐 Dịch thuật</span>
                  <span className="text-xs glass-panel px-3 py-1 rounded-full text-purple-300">🤖 Hỏi AI</span>
                  <span className="text-xs glass-panel px-3 py-1 rounded-full text-emerald-300">📖 Giáo án</span>
                </div>

                <Button variant="ghost" className="w-full rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-500 mt-2">
                  Vào phòng học
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Vườn kiến thức / Studio */}
          <Card className="premium-glass p-1 border-none shadow-[0_20px_60px_rgba(0,0,0,0.3)] group cursor-pointer hover:scale-[1.03] transition-all duration-700 ease-out"
            onClick={() => router.push(isBeginner ? '/study' : '/upload')}
          >
            <CardContent className="p-6 relative bg-black/40 backdrop-blur-3xl rounded-2xl border border-white/10 overflow-hidden h-full">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${isBeginner ? 'from-emerald-500/20 to-teal-500/20' : 'from-purple-500/20 to-pink-500/20'} rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-1000`}></div>
              
              <div className="relative z-10 flex flex-col items-center text-center gap-4 h-full justify-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${isBeginner ? 'bg-emerald-500/20' : 'bg-purple-500/20'}`}>
                  {isBeginner 
                    ? <Plant weight="duotone" className="w-7 h-7 text-emerald-400" /> 
                    : <MagicWand weight="duotone" className="w-7 h-7 text-purple-400" />}
                </div>
                <h3 className="text-lg font-bold font-heading text-white">
                  {isBeginner ? 'Vườn Kiến Thức' : 'Trạm Phân Tích'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {isBeginner 
                    ? <>Có <strong className="text-emerald-400">5 mầm cây</strong> đang đợi tưới nước.</>
                    : 'Upload bài luận để AI hiệu đính.'}
                </p>
                <Button variant="ghost" className={`w-full rounded-full border transition-all duration-500 ${isBeginner ? 'border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white' : 'border-purple-500/30 text-purple-400 hover:bg-purple-500 hover:text-white'}`}>
                  {isBeginner ? 'Bắt đầu tưới nước' : 'Upload tài liệu'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ===== PLAYLIST LÃNG MẠN ===== */}
        {(
        <div className="max-w-5xl mx-auto w-full px-4">
          <Card className="premium-glass p-1 border-none shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
            <CardContent className="p-6 relative bg-black/30 backdrop-blur-3xl rounded-2xl border border-white/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-5 relative z-10">
                <MusicNote weight="fill" className="w-5 h-5 text-pink-400" />
                <h3 className="font-heading font-bold text-white text-lg">Nhạc nền cho tớ và cậu</h3>
              </div>

              <div className="relative z-10 space-y-1 max-h-[320px] overflow-y-auto pr-2 scrollbar-thin">
                {playlist.map((track, i) => (
                  <button
                    key={i}
                    onClick={() => { 
                      if (currentTrack === i && isPlaying) {
                        pause();
                      } else {
                        play(i);
                      }
                    }}
                    className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group text-left ${
                      currentTrack === i 
                        ? 'bg-pink-500/10 border border-pink-500/20' 
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      currentTrack === i ? 'bg-pink-500/30 text-pink-300' : 'bg-white/5 text-white/40 group-hover:text-white/70'
                    }`}>
                      {currentTrack === i && isPlaying 
                        ? <Pause weight="fill" className="w-3.5 h-3.5" />
                        : <Play weight="fill" className="w-3.5 h-3.5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${currentTrack === i ? 'text-pink-300' : 'text-white/80'}`}>
                        {i === 0 && '🌊 '}{track.title}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                    </div>
                    {i === 0 && <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded-full shrink-0">♡ Bài hát của chúng mình</span>}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        )}

        {/* ===== QUOTE CUỐI ===== */}
        <p className="text-center text-sm text-muted-foreground/60 italic font-serif pb-8">
          {isNgocAnh 
            ? '"Every love story is beautiful, but ours is my favorite."' 
            : '"Ngôn từ chính xác là nghệ thuật vĩ đại nhất."'}
        </p>
      </div>
    </AppLayout>
  );
}
