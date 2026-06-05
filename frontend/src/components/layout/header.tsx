"use client"

import { Bell, User, MagnifyingGlass, Sun, Moon, SpeakerHigh, SpeakerSlash } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from 'next-themes';
import { ThemeColorSelector } from '@/components/theme-color-selector';
import { useAudioStore } from '@/store/use-audio-store';
import { useAuthStore } from '@/store/use-auth-store';
import { useRouter } from 'next/navigation';

export function Header() {
  const { setTheme, theme } = useTheme();
  const { isMuted, toggleMute } = useAudioStore();
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleSwitchUser = () => {
    logout();
    router.push('/');
  };

  return (
    <header className="flex h-14 items-center gap-4 border-b border-white/5 bg-background/60 backdrop-blur-xl px-6 lg:h-[60px] sticky top-0 z-50 shadow-sm">
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <MagnifyingGlass weight="thin" className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm khóa học, từ vựng..."
              className="w-full appearance-none bg-white/5 backdrop-blur-md pl-10 shadow-inner md:w-2/3 lg:w-1/3 rounded-full border-white/10 text-sm focus-visible:ring-1 focus-visible:ring-primary transition-all"
            />
          </div>
        </form>
      </div>
      <div className="flex items-center gap-2">
        <div className="neon-glow-wrapper">
          <div className="neon-glow-bg"></div>
          <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-primary/10 hover:text-primary transition-all" onClick={toggleMute} title={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}>
            {isMuted ? <SpeakerSlash weight="duotone" className="h-5 w-5" /> : <SpeakerHigh weight="duotone" className="h-5 w-5 text-purple-300" />}
          </Button>
        </div>
        <ThemeColorSelector />
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun weight="duotone" className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon weight="duotone" className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full relative">
          <Bell weight="duotone" className="h-5 w-5" />
          <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-red-600"></span>
          <span className="sr-only">Toggle notifications</span>
        </Button>
        <Button 
          variant="secondary" 
          size="icon" 
          className="rounded-full bg-primary/10 text-primary hover:bg-primary/20"
          onClick={handleSwitchUser}
          title="Đổi người dùng"
        >
          <User weight="duotone" className="h-5 w-5" />
          <span className="sr-only">Đổi người dùng</span>
        </Button>
      </div>
    </header>
  );
}
