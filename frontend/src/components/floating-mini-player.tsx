"use client"

import { useMusicStore } from '@/store/use-music-store';
import { useAuthStore } from '@/store/use-auth-store';
import { MusicNote, Play, Pause, SkipForward, SkipBack, X, SpeakerHigh, SpeakerLow, SpeakerNone } from '@phosphor-icons/react';
import { useState, useRef, useEffect, useCallback } from 'react';

export function FloatingMiniPlayer() {
  const { user } = useAuthStore();
  const { playlist, currentTrack, isPlaying, toggle, next, prev, volume, setVolume, getEmbedUrl } = useMusicStore();
  const [minimized, setMinimized] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Ẩn hoàn toàn với omachi
  if (!user || user.username === 'omachi') return null;
  // Chưa bật nhạc và đã thu nhỏ thì ẩn
  if (!isPlaying && minimized) return null;

  const track = playlist[currentTrack];

  // Gửi lệnh volume tới YouTube iframe qua postMessage
  const sendVolumeToYT = useCallback((vol: number) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'setVolume', args: [vol] }),
        '*'
      );
    }
  }, []);

  // Cập nhật volume khi thay đổi
  useEffect(() => {
    sendVolumeToYT(volume);
  }, [volume, sendVolumeToYT]);

  // Gửi volume ban đầu khi iframe load xong
  const handleIframeLoad = () => {
    setTimeout(() => sendVolumeToYT(volume), 1000);
  };

  const VolumeIcon = volume === 0 ? SpeakerNone : volume < 50 ? SpeakerLow : SpeakerHigh;

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-8 right-8 z-[90] w-12 h-12 rounded-full bg-pink-500/20 backdrop-blur-xl border border-pink-500/30 flex items-center justify-center text-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.2)] hover:scale-110 transition-all animate-in fade-in zoom-in duration-300"
      >
        <MusicNote weight="fill" className={`w-5 h-5 ${isPlaying ? 'animate-pulse' : ''}`} />
      </button>
    );
  }

  return (
    <>
      {/* YouTube iframe ẩn — chỉ phát audio */}
      {isPlaying && (
        <iframe
          ref={iframeRef}
          key={`yt-${currentTrack}`}
          src={getEmbedUrl()}
          allow="autoplay; encrypted-media"
          onLoad={handleIframeLoad}
          className="fixed w-0 h-0 opacity-0 pointer-events-none"
          style={{ position: 'fixed', top: -9999, left: -9999 }}
        />
      )}

      {/* Mini Player UI */}
      <div className="fixed bottom-8 right-8 z-[90] animate-in slide-in-from-bottom-5 fade-in duration-500">
        {/* Volume Slider Popup */}
        {showVolume && (
          <div className="absolute bottom-full right-0 mb-3 glass-panel p-3 rounded-2xl shadow-xl border-pink-500/20 animate-in fade-in slide-in-from-bottom-2 duration-200 w-[200px]">
            <div className="flex items-center gap-3">
              <VolumeIcon weight="fill" className="w-4 h-4 text-pink-300 shrink-0" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="flex-1 h-1.5 rounded-full appearance-none bg-white/10 cursor-pointer accent-pink-400
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pink-400 [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(236,72,153,0.5)] [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-pink-400 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
              <span className="text-[11px] text-muted-foreground w-7 text-right">{volume}</span>
            </div>
          </div>
        )}

        <div className="glass-panel px-4 py-3 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-pink-500/20 flex items-center gap-3 max-w-[360px]">
          {/* Album art placeholder */}
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isPlaying ? 'bg-pink-500/20' : 'bg-white/5'}`}>
            <MusicNote weight="fill" className={`w-5 h-5 ${isPlaying ? 'text-pink-400 animate-pulse' : 'text-white/40'}`} />
          </div>

          {/* Track info */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{track.title}</p>
            <p className="text-[11px] text-muted-foreground truncate">{track.artist}</p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1 shrink-0">
            <button onClick={prev} className="w-7 h-7 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors">
              <SkipBack weight="fill" className="w-3.5 h-3.5" />
            </button>
            <button onClick={toggle} className="w-9 h-9 rounded-full bg-pink-500/20 hover:bg-pink-500/40 flex items-center justify-center text-pink-300 transition-all">
              {isPlaying ? <Pause weight="fill" className="w-4 h-4" /> : <Play weight="fill" className="w-4 h-4" />}
            </button>
            <button onClick={next} className="w-7 h-7 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors">
              <SkipForward weight="fill" className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Volume button */}
          <button
            onClick={() => setShowVolume(!showVolume)}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${showVolume ? 'text-pink-300 bg-pink-500/10' : 'text-white/40 hover:text-white/70'}`}
          >
            <VolumeIcon weight="fill" className="w-4 h-4" />
          </button>

          {/* Minimize button */}
          <button onClick={() => { setMinimized(true); setShowVolume(false); }} className="w-6 h-6 rounded-full flex items-center justify-center text-white/30 hover:text-white/70 transition-colors">
            <X weight="bold" className="w-3 h-3" />
          </button>
        </div>
      </div>
    </>
  );
}
