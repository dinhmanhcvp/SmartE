import { create } from 'zustand';

export type Track = {
  title: string;
  artist: string;
  ytId?: string;
  ytQuery: string;
};

const playlist: Track[] = [
  { title: 'Biển, Đảo Và Em', artist: 'Mã Dã (Crabbit)', ytId: 'z3ghXHs7qGI', ytQuery: 'Biển Đảo Và Em Mã Dã Crabbit' },
  { title: 'Người Im Lặng Gặp Người Hay Nói', artist: 'HIEUTHUHAI', ytId: '8sVtL0o-v7U', ytQuery: 'Người Im Lặng Gặp Người Hay Nói HIEUTHUHAI' },
  { title: 'em ơi anh phải làm sao', artist: '↗ Hđ Quân', ytId: 'CMIrBSZTrhw', ytQuery: 'em ơi anh phải làm sao Hđ Quân' },
  { title: 'i know u wanna kiss me', artist: 'LuckyMuzzic, shubham', ytId: 'vMPWcG02wG0', ytQuery: 'i know u wanna kiss me LuckyMuzzic' },
  { title: 'Thành Đô x Anh Vui (BB Remix)', artist: 'MeMe Media', ytId: 'D6e9lOW9aTA', ytQuery: 'Thành Đô x Anh Vui BB Remix' },
  { title: "Can't Believe It Could Be", artist: 'Nadira Ayuningrum', ytId: 'pWx-_7V24Yc', ytQuery: "Can't Believe It Could Be Nadira Ayuningrum" },
  { title: 'từng là của nhau', artist: 'Đức Minh', ytId: 'TIJrDhA8nh0', ytQuery: 'từng là của nhau Đức Minh' },
  { title: 'Chang Con Nguoi Luon Canh Ben', artist: 'Đào Duy Khánh', ytId: '9bEqy9SHd1E', ytQuery: 'Chẳng Còn Người Luôn Cạnh Bên Đào Duy Khánh' },
  { title: 'có nước mắt em giấu đi làm gì', artist: 'dminh', ytId: 'UczyKIVjuNo', ytQuery: 'có nước mắt em giấu đi làm gì dminh' },
  { title: 'Cuộc Đời Được Mấy Khi Yêu Nhau', artist: 'Lê Huỳnh Phước Sang', ytId: 'oLEhNVryFhY', ytQuery: 'Cuộc Đời Được Mấy Khi Yêu Nhau Lê Huỳnh Phước Sang' },
  { title: 'Hero (Instrumental)', artist: 'Meego', ytId: 'o2OD9viHZaY', ytQuery: 'Hero Instrumental Meego' },
  { title: 'Good For You X One Of The Girls', artist: 'Remix', ytId: 'zCeF3heB8V8', ytQuery: 'Good For You X One Of The Girls remix tiktok' },
];

interface MusicState {
  playlist: Track[];
  currentTrack: number;
  isPlaying: boolean;
  volume: number; // 0-100
  play: (index?: number) => void;
  pause: () => void;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  setVolume: (vol: number) => void;
  getEmbedUrl: () => string;
}

export const useMusicStore = create<MusicState>((set, get) => ({
  playlist,
  currentTrack: 0,
  isPlaying: false,
  volume: 50,

  play: (index?: number) => {
    if (index !== undefined) {
      set({ currentTrack: index, isPlaying: true });
    } else {
      set({ isPlaying: true });
    }
  },

  pause: () => set({ isPlaying: false }),

  toggle: () => set((s) => ({ isPlaying: !s.isPlaying })),

  next: () => set((s) => ({ currentTrack: (s.currentTrack + 1) % s.playlist.length, isPlaying: true })),

  prev: () => set((s) => ({ currentTrack: s.currentTrack === 0 ? s.playlist.length - 1 : s.currentTrack - 1, isPlaying: true })),

  setVolume: (vol: number) => set({ volume: Math.max(0, Math.min(100, vol)) }),

  getEmbedUrl: () => {
    const { playlist, currentTrack, volume } = get();
    const track = playlist[currentTrack];
    // enablejsapi=1 cho phép điều khiển volume qua postMessage
    if (track.ytId) {
      return `https://www.youtube.com/embed/${track.ytId}?autoplay=1&loop=1&enablejsapi=1`;
    }
    return `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(track.ytQuery)}&autoplay=1&enablejsapi=1`;
  },
}));
