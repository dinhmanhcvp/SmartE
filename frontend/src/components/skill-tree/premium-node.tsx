import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Sparkle, BookOpen, Brain, Star } from '@phosphor-icons/react';

const icons = {
  Sparkle,
  BookOpen,
  Brain,
  Star
};

type PremiumNodeProps = {
  data: {
    label: string;
    iconName?: keyof typeof icons;
    status: 'locked' | 'active' | 'completed';
    colorStr?: string;
  };
};

export function PremiumLessonNode({ data }: PremiumNodeProps) {
  const IconComponent = data.iconName ? icons[data.iconName] : Sparkle;
  
  // Mở khóa các trạng thái CSS dựa trên status
  const isLocked = data.status === 'locked';
  const isCompleted = data.status === 'completed';
  
  return (
    <div className={`flex flex-col items-center justify-center p-4 ${isLocked ? 'opacity-50 grayscale' : ''}`}>
      <Handle type="target" position={Position.Top} className="opacity-0" />
      
      <div className="relative group cursor-pointer">
        {/* 1. Vòng tròn hào quang phía sau - Tự động xoay nhẹ khi hover */}
        {!isLocked && (
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 rounded-full blur-md opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out animate-pulse"></div>
        )}
        
        {/* 2. Khối Node chính dạng Kính mờ siêu mịn */}
        <button className={`relative w-16 h-16 flex items-center justify-center backdrop-blur-lg border rounded-full shadow-2xl transition-transform duration-500 ease-out 
          ${isLocked 
            ? 'bg-black/40 border-white/5' 
            : 'bg-black/60 border-white/20 group-hover:-translate-y-1'}`}>
          {/* 3. Icon nét mảnh với hiệu ứng đổi màu chuyển sắc */}
          <IconComponent 
            size={28} 
            weight={isLocked ? "regular" : "thin"} 
            className={`transition-colors duration-300 transform duration-500
              ${isCompleted ? 'text-emerald-300 group-hover:text-emerald-200' : ''}
              ${data.status === 'active' ? 'text-purple-300 group-hover:text-pink-300 group-hover:rotate-12' : ''}
              ${isLocked ? 'text-muted-foreground' : ''}
            `}
          />
        </button>
      </div>
      
      {/* 4. Chữ sử dụng Font Serif thanh lịch cho tiêu đề bài học */}
      <span className={`mt-3 font-serif italic text-sm tracking-wide transition-colors
        ${isLocked ? 'text-muted-foreground' : 'text-slate-300 group-hover:text-white'}
      `}>
        {data.label}
      </span>
      
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </div>
  );
}
