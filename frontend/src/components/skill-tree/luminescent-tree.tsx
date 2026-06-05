import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Sparkle, Drop } from '@phosphor-icons/react';
import { useSocketStore } from '@/store/use-socket-store';

export const LuminescentTree = memo(({ data }: any) => {
  const { sendFlowerWatered } = useSocketStore();

  const handleWater = () => {
    sendFlowerWatered();
  };

  return (
    <div className="relative group flex flex-col items-center">
      {/* Glow effect behind the tree */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl group-hover:bg-pink-400/40 transition-all duration-1000"></div>
      
      {/* The Crystal Tree Representation */}
      <div className="w-24 h-24 premium-glass rounded-full border-2 border-pink-400/50 flex flex-col items-center justify-center relative z-10 shadow-[0_0_30px_rgba(236,72,153,0.3)] animate-float">
        <Sparkle weight="fill" className="w-10 h-10 text-pink-300 drop-shadow-[0_0_10px_#f9a8d4] animate-pulse" />
      </div>

      {/* Label and Interaction */}
      <div className="mt-4 text-center relative z-10">
        <h3 className="font-heading font-bold text-pink-300 drop-shadow-md text-lg">{data.label || 'Cây Ánh Sáng'}</h3>
        <p className="text-xs text-pink-200/80 mb-2">Cần 2 người cùng chăm sóc</p>
        <button 
          onClick={handleWater}
          className="flex items-center gap-1 mx-auto bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 text-xs px-3 py-1.5 rounded-full border border-blue-500/30 transition-all"
        >
          <Drop weight="fill" className="w-3 h-3" /> Tưới nước hôm nay
        </button>
      </div>

      {/* Handles to connect it to the graph if needed */}
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </div>
  );
});

LuminescentTree.displayName = 'LuminescentTree';
