"use client"
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Palette } from '@phosphor-icons/react';

const PREDEFINED_THEMES = [
  { name: 'Vàng Gà Con', value: 'oklch(0.89 0.12 95)', fg: 'oklch(0.25 0.05 60)' },
  { name: 'Hồng Dâu', value: 'oklch(0.75 0.15 350)', fg: 'oklch(0.98 0 0)' },
  { name: 'Đại Dương', value: 'oklch(0.65 0.15 250)', fg: 'oklch(0.98 0 0)' },
  { name: 'Tím Mộng Mơ', value: 'oklch(0.75 0.15 300)', fg: 'oklch(0.98 0 0)' },
  { name: 'Trà Xanh', value: 'oklch(0.85 0.12 150)', fg: 'oklch(0.2 0.05 150)' }
];

export function ThemeColorSelector() {
  const [open, setOpen] = useState(false);
  const [customColor, setCustomColor] = useState('');

  // Apply theme on load
  useEffect(() => {
    const savedTheme = localStorage.getItem('smarte_theme_primary');
    const savedFg = localStorage.getItem('smarte_theme_fg');
    if (savedTheme) {
      document.documentElement.style.setProperty('--primary', savedTheme);
    }
    if (savedFg) {
      document.documentElement.style.setProperty('--primary-foreground', savedFg);
    }
  }, []);

  const applyTheme = (primary: string, fg: string) => {
    document.documentElement.style.setProperty('--primary', primary);
    document.documentElement.style.setProperty('--primary-foreground', fg);
    localStorage.setItem('smarte_theme_primary', primary);
    localStorage.setItem('smarte_theme_fg', fg);
    setOpen(false);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const txt = customColor.toLowerCase();
    
    // Default fallback
    let primary = 'oklch(0.89 0.12 95)';
    let fg = 'oklch(0.25 0.05 60)';
    
    // Very simple mood mapping based on user input
    if (txt.includes('buồn') || txt.includes('xám') || txt.includes('gray')) {
      primary = 'oklch(0.6 0 250)'; fg = 'oklch(0.98 0 0)';
    } else if (txt.includes('vui') || txt.includes('cam')) {
      primary = 'oklch(0.75 0.15 45)'; fg = 'oklch(0.98 0 0)';
    } else if (txt.includes('nhẹ') || txt.includes('pastel')) {
      primary = 'oklch(0.9 0.05 200)'; fg = 'oklch(0.2 0 0)';
    } else if (txt.includes('xanh biển') || txt.includes('blue')) {
      primary = 'oklch(0.65 0.15 250)'; fg = 'oklch(0.98 0 0)';
    } else if (txt.includes('hồng') || txt.includes('pink') || txt.includes('tình yêu')) {
      primary = 'oklch(0.75 0.15 350)'; fg = 'oklch(0.98 0 0)';
    } else if (txt.includes('tím') || txt.includes('purple')) {
      primary = 'oklch(0.75 0.15 300)'; fg = 'oklch(0.98 0 0)';
    } else if (txt.includes('đỏ') || txt.includes('red') || txt.includes('mạnh')) {
      primary = 'oklch(0.6 0.2 25)'; fg = 'oklch(0.98 0 0)';
    } else if (txt.includes('xanh lá') || txt.includes('green') || txt.includes('mát')) {
      primary = 'oklch(0.75 0.15 150)'; fg = 'oklch(0.98 0 0)';
    }

    applyTheme(primary, fg);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-full border border-primary/20 bg-primary/5 text-sm font-medium transition-colors hover:bg-primary/10 hover:scale-110 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
        <Palette weight="duotone" className="h-5 w-5 text-primary" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-white/10 premium-glass">
        <DialogHeader>
          <DialogTitle className="text-xl font-heading gradient-text w-fit">Màu sắc hôm nay của bạn?</DialogTitle>
          <DialogDescription>
            Chọn màu sắc phù hợp với cảm xúc để cá nhân hóa giao diện học tập.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="flex flex-wrap gap-2.5">
            {PREDEFINED_THEMES.map((t) => (
              <Button 
                key={t.name} 
                variant="outline" 
                className="rounded-full shadow-sm hover:scale-105 transition-transform"
                onClick={() => applyTheme(t.value, t.fg)}
              >
                <span className="w-3.5 h-3.5 rounded-full mr-2 shadow-inner border border-black/10" style={{ backgroundColor: t.value }}></span>
                {t.name}
              </Button>
            ))}
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-muted-foreground/20" />
            </div>
            <div className="relative flex justify-center text-xs uppercase font-medium">
              <span className="bg-background px-3 text-muted-foreground">Hoặc tự mô tả cảm xúc</span>
            </div>
          </div>
          
          <form onSubmit={handleCustomSubmit} className="flex gap-2">
            <Input 
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              placeholder="VD: Hôm nay mình buồn, Mình thích màu hồng..." 
              className="rounded-xl shadow-sm focus-visible:ring-primary"
            />
            <Button type="submit" className="rounded-xl shadow-md">Biến hình 🪄</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
