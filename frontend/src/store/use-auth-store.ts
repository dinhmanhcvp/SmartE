import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type LearningTrack = 'beginner' | 'advanced' | null;

export type User = {
  id: string;
  username: string;
  is_first_login: boolean;
  learning_track: LearningTrack;
  account_status: string;
};

// Hardcoded Accounts Database (Mock)
export const MOCK_USERS: Record<string, User> = {
  'ngocanhdangiu': {
    id: 'u_1',
    username: 'ngocanhdangiu',
    is_first_login: true,
    learning_track: null, // Sẽ được gán sau Prologue
    account_status: 'active',
  },
  'dinhmanh': {
    id: 'u_2',
    username: 'dinhmanh',
    is_first_login: true,
    learning_track: null,
    account_status: 'active',
  }
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string) => boolean;
  logout: () => void;
  setLearningTrack: (track: LearningTrack) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      
      login: (username: string) => {
        const normalized = username.toLowerCase().trim();
        if (MOCK_USERS[normalized]) {
          // Trả về bản sao của user trong DB
          set({ user: { ...MOCK_USERS[normalized] }, isAuthenticated: true });
          return true;
        }
        return false;
      },
      
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      
      setLearningTrack: (track: LearningTrack) => {
        const currentUser = get().user;
        if (currentUser) {
          set({ 
            user: { 
              ...currentUser, 
              learning_track: track, 
              is_first_login: false // Đánh dấu đã qua màn hình Prologue
            } 
          });
        }
      }
    }),
    {
      name: 'ngocanh-auth-storage',
    }
  )
);
