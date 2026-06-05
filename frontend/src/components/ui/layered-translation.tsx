"use client"
import { useState } from 'react';
import { Reorder, motion, AnimatePresence } from 'framer-motion';
import { Translate, CheckCircle } from '@phosphor-icons/react';

export function LayeredTranslation() {
  // Initial scrambled order
  const [items, setItems] = useState(['Hungry', 'I']);
  
  // Check if correct order: "I" then "Hungry"
  const isCorrectOrder = items[0] === 'I' && items[1] === 'Hungry';

  return (
    <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 premium-glass">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-pink-500/20 rounded-xl text-pink-400">
          <Translate weight="duotone" className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-lg text-slate-200">Dịch thuật Bóc tách lớp</h3>
          <p className="text-sm text-muted-foreground">Kéo thả các khối từ để dịch câu: <strong className="text-white">"Tôi đói"</strong></p>
        </div>
      </div>

      <div className="bg-black/30 p-8 rounded-2xl border border-white/5 relative min-h-[160px] flex flex-col items-center justify-center">
        
        {/* Drop zone / Reorder Group */}
        <Reorder.Group 
          axis="x" 
          values={items} 
          onReorder={setItems} 
          className="flex items-center justify-center gap-4 w-full relative z-10"
        >
          {items.map((item, index) => (
            <Reorder.Item key={item} value={item} className="cursor-grab active:cursor-grabbing relative">
              <motion.div 
                className="px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-xl font-medium shadow-lg backdrop-blur-md hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
                  {item === 'I' ? 'Tôi (Chủ ngữ)' : 'Đói (Tính từ)'}
                </span>
              </motion.div>
            </Reorder.Item>
          ))}
        </Reorder.Group>

        {/* The missing "am" block that pops up when order is correct */}
        <AnimatePresence>
          {isCorrectOrder && (
            <motion.div
              initial={{ opacity: 0, scale: 0, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            >
              <div className="px-6 py-4 rounded-2xl bg-pink-500 text-white text-xl font-bold shadow-[0_0_30px_rgba(236,72,153,0.6)] animate-pulse border-2 border-white/30 flex items-center gap-2">
                am
                <span className="absolute -top-3 -right-3 flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-pink-500 border-2 border-white text-[10px] items-center justify-center font-black">!</span>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>

      <AnimatePresence>
        {isCorrectOrder && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex gap-3"
          >
            <CheckCircle weight="fill" className="w-5 h-5 shrink-0 mt-0.5" />
            <p>
              <strong>Lớp 1 (Nghĩa đen):</strong> "Tôi - thì - đói". <br/>
              Khác với tiếng Việt, tiếng Anh bắt buộc phải có động từ. Vì "Hungry" là tính từ, nên phải có động từ to-be <strong>"am"</strong> làm cầu nối!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
