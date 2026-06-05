"use client";
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

// Require react-force-graph-2d client-side only
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

export default function ConstellationGraph() {
  const fgRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom theme colors for nodes
  const THEME = {
    completed: '#a78bfa', // Lavender
    learning: '#86efac',  // Sage Green
    srs: '#fb7185',       // Dusty Rose
    locked: '#475569'     // Slate
  };

  const gData = {
    nodes: [
      { id: '1', name: 'Hiện tại Đơn', status: 'completed', val: 20 },
      { id: '2', name: 'Động từ Tobe', status: 'learning', val: 15 },
      { id: '3', name: 'Động từ thường', status: 'srs', val: 15 },
      { id: '4', name: 'Hiện tại Tiếp diễn', status: 'locked', val: 15 },
      { id: '5', name: 'Tương lai Gần', status: 'locked', val: 10 },
      { id: '6', name: 'Phát âm /s/ /es/', status: 'completed', val: 12 },
      { id: '7', name: 'Trạng từ chỉ Tần suất', status: 'learning', val: 12 },
    ],
    links: [
      { source: '1', target: '2' },
      { source: '1', target: '3' },
      { source: '1', target: '6' },
      { source: '1', target: '7' },
      { source: '2', target: '4' },
      { source: '3', target: '4' },
      { source: '4', target: '5' }
    ]
  };

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight
      });
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <ForceGraph2D
        ref={fgRef}
        width={dimensions.width}
        height={dimensions.height}
        graphData={gData}
        nodeLabel="name"
        nodeRelSize={6}
        linkColor={() => 'rgba(255,255,255,0.2)'}
        linkWidth={2}
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={2}
        backgroundColor="transparent"
        nodeCanvasObject={(node: any, ctx, globalScale) => {
          const label = node.name;
          const fontSize = 12/globalScale;
          ctx.font = `${fontSize}px "Plus Jakarta Sans", Sans-Serif`;
          
          // Sketch / Watercolor effect based on status
          const color = THEME[node.status as keyof typeof THEME] || THEME.locked;
          
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.val / globalScale, 0, 2 * Math.PI, false);
          
          if (node.status === 'completed') {
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 15;
            ctx.fill();
            ctx.shadowBlur = 0;
          } else if (node.status === 'srs') {
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;
          } else {
            ctx.fillStyle = 'rgba(0,0,0,0)';
            ctx.fill();
            ctx.lineWidth = 1 / globalScale;
            ctx.strokeStyle = color;
            ctx.stroke();
            ctx.fillStyle = `${color}40`;
            ctx.fill();
          }

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillText(label, node.x, node.y + (node.val/globalScale) + fontSize);
        }}
        onEngineStop={() => {
          if (fgRef.current) {
            fgRef.current.zoomToFit(400, 50);
          }
        }}
        {...{ d3Force: "charge" } as any}
      />
    </div>
  );
}
