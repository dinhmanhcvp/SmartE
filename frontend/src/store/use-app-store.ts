import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type AIPersona = 'Artistic' | 'Romantic' | 'GenZ';

export const romanticLoadingTexts = [
  "Đang thu thập các vì sao...",
  "Đang pha một ly trà ấm...",
  "Đang dọn dẹp phòng học cho hai đứa...",
  "Đang gửi lời thì thầm vào gió...",
  "Đợi một chút nhé, sắp xong rồi..."
];

type AppState = {
  isOnboarded: boolean;
  hasUnlockedUpload: boolean;
  isImmersiveMode: boolean;
  aiPersona: AIPersona;
  setOnboarded: (val: boolean) => void;
  unlockUpload: () => void;
  setImmersiveMode: (val: boolean) => void;
  setAIPersona: (persona: AIPersona) => void;
  getRandomLoadingText: () => string;
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      isOnboarded: false,
      hasUnlockedUpload: false,
      isImmersiveMode: false,
      aiPersona: 'Artistic',
      setOnboarded: (val) => set({ isOnboarded: val }),
      unlockUpload: () => set({ hasUnlockedUpload: true }),
      setImmersiveMode: (val) => set({ isImmersiveMode: val }),
      setAIPersona: (persona) => set({ aiPersona: persona }),
      getRandomLoadingText: () => romanticLoadingTexts[Math.floor(Math.random() * romanticLoadingTexts.length)]
    }),
    {
      name: 'ngocanh-app-storage',
    }
  )
);
