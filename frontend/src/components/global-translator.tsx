"use client"
import { useEffect, useState, useRef } from 'react';
import { Translate, X, SpinnerGap } from '@phosphor-icons/react';
import { apiClient } from '@/lib/api-client';

const playPopSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.02); // Very quiet because of bgm
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {}
};

const playChimeSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.2);

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.05); // Gentle volume
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.8);
  } catch (e) {}
};

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
            setButtonPos(prev => {
              if (!prev) playPopSound(); // Play sound only when button first appears
              return {
                x: rect.left + rect.width / 2,
                y: rect.top - 10,
              };
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
    playChimeSound(); // Play magical chime when AI starts
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            ref={popupRef}
            className="w-full max-w-sm bg-white border border-pink-200 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-pink-100 bg-pink-50">
              <div className="flex items-center gap-2">
                <Translate weight="duotone" className="w-5 h-5 text-pink-500" />
                <span className="font-medium text-sm text-slate-800">Dịch thuật AI</span>
              </div>
              <button onClick={() => setShowPopup(false)} className="text-slate-400 hover:text-slate-600 p-1 rounded-md">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-5">
              <div className="mb-4">
                <p className="text-xs text-slate-400 mb-1">Cậu đang hỏi:</p>
                <p className="text-sm text-slate-700 font-medium italic">"{selectedText}"</p>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-6 gap-3">
                  <SpinnerGap className="w-6 h-6 text-pink-500 animate-spin" />
                  <p className="text-xs text-slate-500 animate-pulse">Gemini đang dịch...</p>
                </div>
              ) : result?.error ? (
                <p className="text-sm text-red-500">{result.error}</p>
              ) : result ? (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-lg font-bold text-pink-600">{result.contextual_translation_vi}</span>
                      <span className="text-xs text-purple-600 font-mono">{result.ipa_pronunciation}</span>
                    </div>
                    <span className="inline-block px-2 py-0.5 rounded-md bg-slate-100 text-[10px] text-slate-500">{result.part_of_speech}</span>
                  </div>
                  
                  <div className="bg-amber-50 rounded-xl p-3 border border-amber-100 shadow-sm">
                    <p className="text-xs text-amber-700 font-medium mb-1">💡 Tips từ tớ:</p>
                    <p className="text-sm text-slate-700">{result.teaching_note_vi}</p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400 mb-1">Ví dụ:</p>
                    <p className="text-sm text-slate-800">"{result.example_sentence_en}"</p>
                    <p className="text-xs text-slate-500 mt-0.5">{result.example_sentence_vi}</p>
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
