"use client"
import { AppLayout } from '@/components/layout/app-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Quotes, Sparkle, User, Heart } from '@phosphor-icons/react';
import { useState } from 'react';

const MOCK_GALLERY = [
  { id: 1, author: "Aurelia", text: "The ocean is a poem we cannot fully translate, but merely feel its rhythm against our shores.", likes: 24, isLiked: false, tag: "Poetic" },
  { id: 2, author: "Zane", text: "To master a language is to acquire a second soul.", likes: 89, isLiked: true, tag: "Philosophy" },
  { id: 3, author: "Lumina", text: "Ephemeral moments caught in the amber of well-chosen words.", likes: 12, isLiked: false, tag: "Observation" },
  { id: 4, author: "Kael", text: "We build bridges of syntax across rivers of misunderstanding.", likes: 56, isLiked: false, tag: "Metaphor" },
  { id: 5, author: "Elara", text: "In the architecture of grammar, silence is the space between the pillars.", likes: 41, isLiked: false, tag: "Deep Thought" }
];

export default function CommunityPage() {
  const [items, setItems] = useState(MOCK_GALLERY);

  const handleLike = (id: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, likes: item.isLiked ? item.likes - 1 : item.likes + 1, isLiked: !item.isLiked };
      }
      return item;
    }));
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-full animate-in fade-in duration-1000 max-w-6xl mx-auto w-full pt-10">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-sm font-heading mb-4">
            Triển Lãm Ý Tưởng
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-serif italic">
            "Không ồn ào. Không bình luận độc hại. Chỉ có những tâm hồn đồng điệu trao đổi những câu chữ lấp lánh."
          </p>
        </div>

        {/* Gallery Grid (Masonry style look) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pb-20">
          {items.map((item, i) => (
            <Card 
              key={item.id} 
              className="premium-glass border-none break-inside-avoid overflow-hidden group hover:scale-[1.02] transition-transform duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(167,139,250,0.15)]"
            >
              <CardContent className="p-8 relative">
                <Quotes weight="fill" className="absolute top-6 left-6 w-12 h-12 text-primary/10 -z-10 group-hover:scale-110 transition-transform duration-500" />
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-slate-300">{item.author}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-primary/70 bg-primary/10 px-2 py-1 rounded-sm border border-primary/20">
                    {item.tag}
                  </span>
                </div>

                <p className="text-lg font-serif text-slate-200 leading-relaxed italic mb-8">
                  "{item.text}"
                </p>

                <div className="flex justify-end">
                  <button 
                    onClick={() => handleLike(item.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors ${item.isLiked ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'}`}
                  >
                    <Heart weight={item.isLiked ? "fill" : "regular"} className="w-4 h-4" />
                    <span className="text-xs font-medium">{item.likes}</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
