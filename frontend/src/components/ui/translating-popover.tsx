"use client"
import { useState, useEffect } from 'react';
import { SpeakerHigh, X, PlusCircle, CheckCircle, SpinnerGap } from '@phosphor-icons/react';
import { useAuthStore } from '@/store/use-auth-store';
import { useSRSStore } from '@/store/use-srs-store';

interface TranslatingPopoverProps {
  selectedText: string;
  posX: number;
  posY: number;
  onClose: () => void;
}

type TranslationResult = {
  contextual_translation_vi: string;
  ipa_pronunciation: string;
  part_of_speech: string;
  teaching_note_vi: string;
  example_sentence_en: string;
  example_sentence_vi: string;
};

export function TranslatingPopover({ selectedText, posX, posY, onClose }: TranslatingPopoverProps) {
  const [data, setData] = useState<TranslationResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  
  const { user } = useAuthStore();
  const { submitProgress } = useSRSStore();

  useEffect(() => {
    // Mock API Call cho Translating Tutor
    setIsLoading(true);
    const timeout = setTimeout(() => {
      const isAdvanced = user?.learning_track === 'advanced';
      
      setData({
        contextual_translation_vi: "cạn kiệt, hết sạch (sữa, tiền, thời gian...)",
        ipa_pronunciation: "/rʌn aʊt əv/",
        part_of_speech: "Phrasal Verb",
        teaching_note_vi: isAdvanced 
          ? "Collocation: Run out of + Noun (money, ideas, patience). Từ đồng nghĩa: exhaust, deplete." 
          : "'Run out of' luôn đi kèm với thứ bạn vừa dùng hết. Ví dụ: Run out of money (Hết tiền).",
        example_sentence_en: "We have run out of milk, so I need to go to the store.",
        example_sentence_vi: "Chúng ta hết sữa rồi, nên tôi cần ra cửa hàng."
      });
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [selectedText, user?.learning_track]);

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(selectedText);
      utterance.lang = 'en-US';
      utterance.rate = 0.9; // Đọc chậm một chút
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleAddToSRS = () => {
    submitProgress(selectedText.toLowerCase(), false, 0); // Thêm vào SRS (is_correct = false để ép học)
    setIsAdded(true);
    setTimeout(() => {
      onClose(); // Đóng popup sau khi thêm thành công
    }, 1500);
  };

  return (
    <div 
      className="fixed z-[1000] animate-in fade-in zoom-in-95 duration-200 shadow-2xl"
      style={{ left: posX, top: posY, transform: 'translate(-50%, calc(-100% - 15px))' }}
      onClick={(e) => e.stopPropagation()} // Chặn event nổi bọt gây tắt popup
    >
      <div className="w-[320px] bg-black/80 backdrop-blur-3xl premium-glass border border-white/20 rounded-2xl overflow-hidden relative">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-emerald-500"></div>
        
        {/* Header */}
        <div className="p-4 flex justify-between items-start border-b border-white/10">
          <div>
            <h3 className="font-heading font-semibold text-white text-lg tracking-wide">{selectedText}</h3>
            {data && (
              <div className="flex items-center gap-2 text-sm text-primary/80 mt-1">
                <span>{data.ipa_pronunciation}</span>
                <span className="text-white/20">•</span>
                <span className="italic">{data.part_of_speech}</span>
                <button onClick={handleSpeak} className="ml-1 p-1 rounded-full bg-white/5 hover:bg-primary/20 text-primary transition-colors">
                  <SpeakerHigh weight="fill" className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
          <button onClick={onClose} className="p-1.5 text-white/40 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors">
            <X weight="bold" className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-6 text-white/50 gap-3">
              <SpinnerGap weight="bold" className="w-6 h-6 animate-spin text-primary" />
              <span className="text-sm">AI đang phân tích ngữ cảnh...</span>
            </div>
          ) : data ? (
            <div className="space-y-4">
              {/* Lớp 1: Dịch Nghĩa */}
              <div>
                <p className="text-white font-medium mb-1">Dịch nghĩa:</p>
                <p className="text-emerald-300 text-sm">{data.contextual_translation_vi}</p>
              </div>
              
              {/* Lớp 2: Cấu Trúc Ngữ Pháp Ngầm */}
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1 font-semibold">Ghi chú từ Giáo viên AI</p>
                <p className="text-white/90 text-sm leading-relaxed">{data.teaching_note_vi}</p>
              </div>

              {/* Ví dụ */}
              <div>
                <p className="text-sm text-white/80 italic">"{data.example_sentence_en}"</p>
                <p className="text-sm text-white/40">{data.example_sentence_vi}</p>
              </div>

              {/* Lớp 3: Hành Động Nhanh (SRS) */}
              <button 
                onClick={handleAddToSRS}
                disabled={isAdded}
                className={`w-full mt-2 py-2.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${isAdded ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-primary/20 text-primary border border-primary/30 hover:bg-primary hover:text-white'}`}
              >
                {isAdded ? (
                  <><CheckCircle weight="fill" className="w-5 h-5" /> Đã lưu vào Cây Kiến Thức</>
                ) : (
                  <><PlusCircle weight="fill" className="w-5 h-5" /> Thêm vào Cây Kiến Thức</>
                )}
              </button>
            </div>
          ) : null}
        </div>
        
        {/* Mũi tên trỏ xuống */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/80 border-b border-r border-white/20 rotate-45 backdrop-blur-3xl"></div>
      </div>
    </div>
  );
}
