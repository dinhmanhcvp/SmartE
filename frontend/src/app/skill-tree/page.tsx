"use client"
import { AppLayout } from '@/components/layout/app-layout';
import { Card } from '@/components/ui/card';
import { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  BackgroundVariant,
  MarkerType
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { PremiumLessonNode } from '@/components/skill-tree/premium-node';
import { LuminescentTree } from '@/components/skill-tree/luminescent-tree';
import { useSocketStore } from '@/store/use-socket-store';
import { useAuthStore } from '@/store/use-auth-store';
import { useEffect } from 'react';

const nodeTypes = {
  premiumNode: PremiumLessonNode,
  luminescentTree: LuminescentTree,
};

const initialNodes = [
  {
    id: 'tree',
    type: 'luminescentTree',
    position: { x: 250, y: 150 },
    data: { label: 'Cây Ánh Sáng' },
  },
  {
    id: '1',
    type: 'premiumNode',
    position: { x: 250, y: 50 },
    data: { label: 'Tense Foundation', iconName: 'Sparkle', status: 'completed' },
  },
  {
    id: '2',
    type: 'premiumNode',
    position: { x: 100, y: 300 },
    data: { label: 'Present Perfect', iconName: 'Brain', status: 'active' },
  },
  {
    id: '3',
    type: 'premiumNode',
    position: { x: 400, y: 300 },
    data: { label: 'Past Continuous', iconName: 'BookOpen', status: 'completed' },
  },
  {
    id: '4',
    type: 'premiumNode',
    position: { x: 250, y: 450 },
    data: { label: 'Future Horizons', iconName: 'Star', status: 'locked' },
  },
];

const initialEdges: Edge[] = [
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2', 
    animated: true,
    style: { stroke: '#a78bfa', strokeWidth: 2, strokeDasharray: '5 5' },
  },
  { 
    id: 'e1-3', 
    source: '1', 
    target: '3',
    style: { stroke: '#86efac', strokeWidth: 2, strokeDasharray: '5 5' },
  },
  { 
    id: 'e2-4', 
    source: '2', 
    target: '4',
    style: { stroke: '#475569', strokeWidth: 2, strokeDasharray: '5 5' },
  },
  { 
    id: 'e3-4', 
    source: '3', 
    target: '4',
    style: { stroke: '#475569', strokeWidth: 2, strokeDasharray: '5 5' },
  },
];

export default function SkillTreePage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { user } = useAuthStore();
  const { connect } = useSocketStore();

  useEffect(() => {
    if (user?.username) {
      connect(user.username);
    }
  }, [user, connect]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-120px)] gap-4 animate-in fade-in duration-500">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-primary font-heading gradient-text">Nghệ thuật Sơ đồ Bài Học</h1>
            <p className="text-muted-foreground mt-1 text-sm">Hiệu ứng kính mờ và các Net vẽ đứt đoạn (Pencil Sketch).</p>
          </div>
          <div className="flex flex-wrap gap-4 premium-glass px-4 py-2 rounded-full">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
              <span className="text-xs font-semibold text-emerald-400">Đã Hoàn Thành</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc] animate-pulse"></span>
              <span className="text-xs font-semibold text-purple-400">Đang Học</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border border-slate-500"></span>
              <span className="text-xs font-semibold text-muted-foreground">Chưa Mở Khóa</span>
            </div>
          </div>
        </div>

        <Card className="flex-1 overflow-hidden premium-glass border-none shadow-2xl relative rounded-3xl">
          {/* Abstract SVG Blobs Background */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-1000"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="absolute inset-0 z-10">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              fitView
              className="bg-transparent"
              minZoom={0.5}
              maxZoom={1.5}
            >
              <Background variant={BackgroundVariant.Dots} gap={24} size={2} color="#ffffff10" />
            </ReactFlow>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
