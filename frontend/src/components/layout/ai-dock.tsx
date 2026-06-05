"use client"
import { useState, useRef, useEffect } from 'react';
import { Robot, UploadSimple, Sparkle } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/store/use-app-store';

export function AIDock() {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();
  const dockRef = useRef<HTMLDivElement>(null);
  const { isImmersiveMode } = useAppStore();

  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      setIsDragging(true);
    };
    
    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      // Only set dragging to false if we're leaving the window, not just child elements
      if (e.clientX === 0 || e.clientY === 0) {
        setIsDragging(false);
      }
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      
      if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
        // Play "tentacles/particle" animation locally, then route
        setIsProcessing(true);
        setTimeout(() => {
          setIsProcessing(false);
          router.push('/upload?autoAnalyze=true');
        }, 1500); // 1.5s for the magic effect
      }
    };

    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('drop', handleDrop);

    return () => {
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('drop', handleDrop);
    };
  }, [router]);

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] pointer-events-none flex justify-center transition-all duration-700 ${isImmersiveMode && !isDragging ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'}`}>
      <div 
        ref={dockRef}
        className={`pointer-events-auto flex items-center gap-3 px-6 py-3 rounded-full premium-glass transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          ${isDragging ? 'scale-[1.5] bg-pink-50 border-pink-200 shadow-[0_0_50px_rgba(236,72,153,0.3)] -translate-y-20' : 'scale-100 hover:scale-105 hover:bg-pink-50'}
          ${isProcessing ? 'animate-pulse scale-[1.2] shadow-[0_0_100px_rgba(var(--primary),0.8)]' : ''}
        `}
      >
        <div className="relative">
          {/* Magic Light Particles when dragging */}
          {isDragging && (
            <div className="absolute inset-0 -m-10">
              <div className="absolute top-0 left-1/2 w-1 h-16 bg-primary/80 blur-sm rounded-full origin-bottom animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute top-1/2 left-0 w-16 h-1 bg-purple-500/80 blur-sm rounded-full origin-right animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
              <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full blur-md animate-ping"></div>
            </div>
          )}
          
          <Robot weight={isProcessing ? "fill" : "duotone"} className={`w-8 h-8 ${isDragging || isProcessing ? 'text-primary animate-bounce' : 'text-foreground/80'}`} />
          {isProcessing && <Sparkle weight="fill" className="absolute -top-2 -right-2 w-4 h-4 text-emerald-400 animate-spin" />}
        </div>
        
        <div className="flex flex-col">
          <span className={`text-sm font-semibold transition-colors duration-300 ${isDragging ? 'text-primary gradient-text' : 'text-foreground/90'}`}>
            {isProcessing ? 'Đang hấp thụ dữ liệu...' : isDragging ? 'Thả File vào đây!' : 'Trợ lý AI'}
          </span>
          <span className="text-[10px] text-muted-foreground">Kéo thả tài liệu để phân tích</span>
        </div>
      </div>
    </div>
  );
}
