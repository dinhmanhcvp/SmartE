import { create } from 'zustand';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

interface SocketStore {
  socket: WebSocket | null;
  isConnected: boolean;
  partnerStatus: 'online' | 'offline';
  partnerText: string;
  isMyTurn: boolean;
  connect: (username: string) => void;
  disconnect: () => void;
  sendPoke: () => void;
  sendSyncMusic: (trackUrl: string) => void;
  sendFlowerWatered: () => void;
  sendSyncText: (text: string, section: string) => void;
  sendPassTurn: () => void;
}

export const useSocketStore = create<SocketStore>((set, get) => ({
  socket: null,
  isConnected: false,
  partnerStatus: 'offline',
  partnerText: '',
  isMyTurn: true,

  connect: (username: string) => {
    if (get().socket) return;
    
    // Using simple ws:// for local development
    const ws = new WebSocket(`ws://localhost:8000/ws/${username}`);

    ws.onopen = () => {
      set({ isConnected: true, socket: ws });
      console.log('Connected to Romantic WebSocket');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      if (data.type === 'status') {
        set({ partnerStatus: data.status });
        if (data.status === 'online') {
          toast.info(`Crush của bạn (${data.user}) vừa online!`, {
            icon: '❤️'
          });
        }
      } else if (data.type === 'poke') {
        // Haptic feedback & Visuals
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
          navigator.vibrate([100, 50, 100]);
        }
        
        // Fireflies effect
        confetti({
          particleCount: 15,
          spread: 100,
          origin: { y: 0.5 },
          colors: ['#FDE047', '#FEF08A'],
          shapes: ['circle'],
          ticks: 200,
          gravity: 0.2,
          scalar: 0.5
        });
        
        toast.success(`${data.from} vừa chọc ghẹo bạn!`, { icon: '✨' });
      } else if (data.type === 'sync_music') {
        toast.success(`${data.from} đang muốn cùng nghe một bản nhạc.`, { icon: '🎧' });
        // Lẽ ra ở đây gọi useAudioStore để set nhạc, tạm thời log
      } else if (data.type === 'flower_watered') {
        toast.success(`Crush của cậu (${data.from}) đã tưới cây rồi đấy!`, {
          description: 'Mảnh vườn bên cậu đang khát nước kìa 🌱',
          icon: '💦'
        });
      } else if (data.type === 'sync_text') {
        set({ partnerText: data.text });
      } else if (data.type === 'pass_turn') {
        set({ isMyTurn: true });
        toast.info(`Đến lượt của bạn!`, { icon: '✍️' });
      }
    };

    ws.onclose = () => {
      set({ isConnected: false, socket: null, partnerStatus: 'offline' });
      console.log('Disconnected from Romantic WebSocket');
    };
  },

  disconnect: () => {
    const { socket } = get();
    if (socket) {
      socket.close();
    }
  },

  sendPoke: () => {
    const { socket } = get();
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type: 'poke' }));
    }
  },

  sendSyncMusic: (trackUrl: string) => {
    const { socket } = get();
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type: 'sync_music', track: trackUrl }));
    }
  },

  sendFlowerWatered: () => {
    const { socket } = get();
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type: 'flower_watered' }));
    }
  },

  sendSyncText: (text: string, section: string) => {
    const { socket } = get();
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type: 'sync_text', text, section }));
    }
  },

  sendPassTurn: () => {
    const { socket } = get();
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type: 'pass_turn' }));
      set({ isMyTurn: false });
    }
  }
}));
