import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useAuthStore } from './use-auth-store';

export type KnowledgeState = {
  item_key: string;
  mastery_score: number;
  easiness_factor: number;
};

export type SRSItem = {
  item_key: string;
  next_review_due: number; // Timestamp
  interval_days: number;
};

type UserData = {
  knowledge_states: Record<string, KnowledgeState>;
  srs_items: Record<string, SRSItem>;
};

type SRSStoreState = {
  database: Record<string, UserData>; // Key là user_id
  submitProgress: (item_key: string, is_correct: boolean, time_spent_seconds: number) => void;
  getDueItems: () => SRSItem[];
};

export const useSRSStore = create<SRSStoreState>()(
  persist(
    (set, get) => ({
      database: {},
      
      submitProgress: (item_key, is_correct, time_spent_seconds) => {
        // MÔ PHỎNG POST /api/learning/progress
        const user = useAuthStore.getState().user;
        if (!user) return; // Bảo mật: Không có JWT thì từ chối

        set((state) => {
          const db = { ...state.database };
          if (!db[user.id]) {
            db[user.id] = { knowledge_states: {}, srs_items: {} };
          }

          const userDb = db[user.id];
          
          // Thuật toán SM-2 siêu cơ bản
          const prevEF = userDb.knowledge_states[item_key]?.easiness_factor || 2.5;
          const newEF = is_correct ? Math.max(1.3, prevEF + 0.1) : Math.max(1.3, prevEF - 0.2);
          
          const prevInterval = userDb.srs_items[item_key]?.interval_days || 0;
          let newInterval = is_correct ? (prevInterval === 0 ? 1 : prevInterval === 1 ? 6 : Math.round(prevInterval * newEF)) : 1;

          userDb.knowledge_states[item_key] = {
            item_key,
            mastery_score: (userDb.knowledge_states[item_key]?.mastery_score || 0) + (is_correct ? 1 : 0),
            easiness_factor: newEF,
          };

          const nextDue = Date.now() + newInterval * 24 * 60 * 60 * 1000;
          userDb.srs_items[item_key] = {
            item_key,
            interval_days: newInterval,
            next_review_due: nextDue,
          };

          console.log(`[API MOCK] Đã lưu tiến trình cho ${user.username}: ${item_key}. Next review in ${newInterval} days.`);

          return { database: db };
        });
      },

      getDueItems: () => {
        // MÔ PHỎNG GET /api/learning/dashboard
        const user = useAuthStore.getState().user;
        if (!user) return [];

        const db = get().database;
        const userDb = db[user.id];
        if (!userDb) return [];

        const now = Date.now();
        return Object.values(userDb.srs_items).filter(item => item.next_review_due <= now);
      }
    }),
    {
      name: 'ngocanh-srs-database',
    }
  )
);
