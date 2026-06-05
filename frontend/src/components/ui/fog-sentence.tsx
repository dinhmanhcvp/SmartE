"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { EyeSlash } from '@phosphor-icons/react';

export type SentenceToken = {
  text: string;
  isCore: boolean;
};

export function FogSentence({ tokens }: { tokens: SentenceToken[] }) {
  const [unblurredIndex, setUnblurredIndex] = useState<number[]>([]);

  const handleReveal = (index: number) => {
    if (!unblurredIndex.includes(index)) {
      setUnblurredIndex([...unblurredIndex, index]);
    }
  };

  const isAllRevealed = unblurredIndex.length === tokens.filter(t => !t.isCore).length;

  return (
    <div className="relative p-6 rounded-2xl bg-black/20 border border-white/5 premium-glass">
      <div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-muted-foreground bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
        <EyeSlash weight="duotone" className="w-4 h-4" />
        Sương mù nhận thức
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">Nhấp vào vùng sương mù để khám phá các từ bổ nghĩa sau khi bạn đã hiểu nòng cốt câu.</p>
      
      <div className="flex flex-wrap gap-x-2 gap-y-3 text-2xl font-serif text-slate-200 leading-loose">
        {tokens.map((token, idx) => {
          if (token.isCore) {
            return (
              <span key={idx} className="font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                {token.text}
              </span>
            );
          }

          const isRevealed = unblurredIndex.includes(idx);
          
          return (
            <motion.span
              key={idx}
              layout
              onClick={() => handleReveal(idx)}
              className={`cursor-pointer transition-colors duration-500 rounded-md px-1 ${isRevealed ? 'text-blue-300 bg-transparent' : 'bg-white/10 hover:bg-white/20'}`}
              initial={false}
              animate={{
                filter: isRevealed ? 'blur(0px)' : 'blur(5px)',
                opacity: isRevealed ? 1 : 0.6,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {token.text}
            </motion.span>
          );
        })}
      </div>

      {isAllRevealed && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-sm text-emerald-400 flex items-center gap-2 bg-emerald-500/10 w-fit px-4 py-2 rounded-full border border-emerald-500/20"
        >
          <SparklesIcon /> Tuyệt vời! Bạn đã ghép hoàn chỉnh bức tranh ngôn ngữ.
        </motion.div>
      )}
    </div>
  );
}

function SparklesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0C10 5.52285 5.52285 10 0 10C5.52285 10 10 14.4772 10 20C10 14.4772 14.4772 10 20 10C14.4772 10 10 5.52285 10 0Z" fill="currentColor"/>
      <path d="M20 16C20 18.2091 18.2091 20 16 20C18.2091 20 20 21.7909 20 24C20 21.7909 21.7909 20 24 20C21.7909 20 20 18.2091 20 16Z" fill="currentColor"/>
    </svg>
  );
}
