"use client"
import { useEffect, useState, useRef } from 'react';
import { Translate, X, SpinnerGap } from '@phosphor-icons/react';
import { apiClient } from '@/lib/api-client';

export function GlobalTranslator() {
  const [selectedText, setSelectedText] = useState('');
  const [buttonPos, setButtonPos] = useState<{ x: number, y: number } | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      // Don't trigger if clicking inside popup
      if (popupRef.current && popupRef.current.contains(e.target as Node)) {
        return;
      }

      setTimeout(() => {
        const selection = window.getSelection();
        const text = selection?.toString().trim();

        if (text && text.length > 0 && text.length < 300) { // Limit length
          const range = selection?.getRangeAt(0);
          const rect = range?.getBoundingClientRect();
          if (rect) {
            setButtonPos({
              x: rect.left + rect.width / 2,
              y: rect.top - 10,
            });
            setSelectedText(text);
          }
        } else {
          // Clicked outside and no selection -> hide button, but don't hide popup if already open
          if (!showPopup) {
            setButtonPos(null);
            setSelectedText('');
          }
        }
      }, 10);
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (popupRef.current && popupRef.current.contains(e.target as Node)) {
        return; // Click inside popup -> do nothing
      }
      // Click outside popup -> hide popup
      setShowPopup(false);
      setButtonPos(null);
      setResult(null);
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [showPopup]);

  const handleTranslate = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(true);
    setButtonPos(null); // Hide button
    setLoading(true);
    try {
      const data = await apiClient.analyzeTranslation(selectedText);
      setResult(data);
    } catch (error) {
      setResult({ error: 'Không thể dịch lúc này.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {buttonPos && !showPopup && (
        <button
          onClick={handleTranslate}
          className="fixed z-[100] -translate-x-1/2 -translate-y-full bg-pink-500 hover:bg-pink-400 text-white shadow-xl rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-200"
          style={{ left: buttonPos.x, top: buttonPos.y }}
        >
          <Translate weight="bold" className="w-3.5 h-3.5" />
          Dịch
        </button>
      )}

      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            ref={popupRef}
            className="w-full max-w-sm bg-[#0B1120] border border-pink-500/30 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <Translate weight="duotone" className="w-5 h-5 text-pink-400" />
                <span className="font-medium text-sm text-white">Dịch thuật AI</span>
              </div>
              <button onClick={() => setShowPopup(false)} className="text-muted-foreground hover:text-white p-1 rounded-md">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-5">
              <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-1">Cậu đang hỏi:</p>
                <p className="text-sm text-white font-medium italic">"{selectedText}"</p>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-6 gap-3">
                  <SpinnerGap className="w-6 h-6 text-pink-400 animate-spin" />
                  <p className="text-xs text-muted-foreground animate-pulse">Gemini đang dịch...</p>
                </div>
              ) : result?.error ? (
                <p className="text-sm text-red-400">{result.error}</p>
              ) : result ? (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-lg font-bold text-pink-300">{result.contextual_translation_vi}</span>
                      <span className="text-xs text-purple-300 font-mono">{result.ipa_pronunciation}</span>
                    </div>
                    <span className="inline-block px-2 py-0.5 rounded-md bg-white/10 text-[10px] text-white/70">{result.part_of_speech}</span>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <p className="text-xs text-amber-300/80 mb-1">💡 Tips từ tớ:</p>
                    <p className="text-sm text-white/90">{result.teaching_note_vi}</p>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Ví dụ:</p>
                    <p className="text-sm text-white">"{result.example_sentence_en}"</p>
                    <p className="text-xs text-white/60 mt-0.5">{result.example_sentence_vi}</p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
