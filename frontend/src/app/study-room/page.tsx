"use client"

import { AppLayout } from '@/components/layout/app-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuthStore } from '@/store/use-auth-store';
import { curriculumData as curriculum, type Lesson, type Exercise } from '@/data/curriculum';
import { 
  BookOpenText, Chalkboard, Translate, Robot, 
  CaretLeft, CaretRight, CheckCircle, XCircle, 
  Lightbulb, PaperPlaneTilt, Eraser, ChatDots,
  Star, ArrowsOutSimple, ArrowsInSimple
} from '@phosphor-icons/react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { apiClient } from '@/lib/api-client';

type ToolTab = 'whiteboard' | 'translate' | 'ai';

export default function StudyRoomPage() {
  const { user } = useAuthStore();
  const [currentUnit, setCurrentUnit] = useState(0);
  const [activeSection, setActiveSection] = useState<'reading' | 'vocab' | 'grammar' | 'exercises' | 'dialogue'>('reading');
  const [activeTool, setActiveTool] = useState<ToolTab>('translate');
  const [showTranslation, setShowTranslation] = useState(false);
  const [toolExpanded, setToolExpanded] = useState(false);

  // Exercise state
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean | null>>({});
  const [showHint, setShowHint] = useState<Record<string, boolean>>({});

  // Whiteboard state
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#ec4899');
  const [brushSize, setBrushSize] = useState(3);

  // Translation state
  const [translateInput, setTranslateInput] = useState('');
  const [translateResult, setTranslateResult] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);

  // AI Chat state
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Chào cậu! Tớ là trợ lý AI. Hỏi tớ bất cứ gì về bài học nhé! 🌟' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);

  const lesson = curriculum[currentUnit];

  // Reset state when changing unit
  useEffect(() => {
    setAnswers({});
    setChecked({});
    setShowHint({});
    setShowTranslation(false);
    setActiveSection('reading');
  }, [currentUnit]);

  // Whiteboard drawing
  const startDraw = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  }, []);

  const draw = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  }, [isDrawing, brushColor, brushSize]);

  const stopDraw = useCallback(() => setIsDrawing(false), []);
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Check exercise answer
  const checkAnswer = (ex: Exercise) => {
    const userAnswer = (answers[ex.id] || '').trim().toLowerCase();
    const correct = ex.answer.toLowerCase();
    setChecked({ ...checked, [ex.id]: userAnswer === correct });
  };

  // Translation handler
  const handleTranslate = async () => {
    if (!translateInput.trim()) return;
    setIsTranslating(true);
    try {
      const data = await apiClient.analyzeTranslation(translateInput, lesson.title);
      setTranslateResult(data.contextual_translation_vi + "\n\n💡 " + data.teaching_note_vi);
    } catch (error) {
      setTranslateResult("Xin lỗi, tớ không thể kết nối tới não bộ (API) lúc này. Cậu thử lại sau nhé!");
    } finally {
      setIsTranslating(false);
    }
  };

  // AI Chat handler
  const handleAskAI = async () => {
    if (!chatInput.trim()) return;
    const question = chatInput;
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', text: question }]);
    setIsAiThinking(true);

    try {
      const context = JSON.stringify(lesson);
      const data = await apiClient.chatWithTutor(question, context);
      setChatMessages(prev => [...prev, { role: 'ai', text: data.response }]);
    } catch (error) {
      setChatMessages(prev => [...prev, { role: 'ai', text: "Tớ đang buồn ngủ xíu nên không trả lời được, thông cảm cho tớ nha! 🥺" }]);
    } finally {
      setIsAiThinking(false);
    }
  };

  if (!user) return null;

  const sections = [
    { key: 'reading' as const, label: '📖 Đọc hiểu', icon: BookOpenText },
    { key: 'vocab' as const, label: '📝 Từ vựng', icon: BookOpenText },
    { key: 'grammar' as const, label: '📐 Ngữ pháp', icon: BookOpenText },
    { key: 'exercises' as const, label: '✏️ Bài tập', icon: BookOpenText },
    { key: 'dialogue' as const, label: '💬 Hội thoại', icon: ChatDots },
  ];

  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-120px)] gap-4 animate-in fade-in duration-500">
        
        {/* Header bar: Unit selector */}
        <div className="flex items-center gap-4 shrink-0">
          <Button variant="ghost" size="icon" className="rounded-full" disabled={currentUnit === 0} onClick={() => setCurrentUnit(currentUnit - 1)}>
            <CaretLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex-1 flex items-center gap-3">
            <div className="glass-panel px-4 py-2 rounded-2xl flex-1">
              <p className="text-xs text-muted-foreground">Unit {lesson.unit}</p>
              <h2 className="text-lg font-heading font-bold text-white">{lesson.title}</h2>
              <p className="text-sm text-muted-foreground">{lesson.titleVi}</p>
            </div>
          </div>

          <Button variant="ghost" size="icon" className="rounded-full" disabled={currentUnit >= curriculum.length - 1} onClick={() => setCurrentUnit(currentUnit + 1)}>
            <CaretRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Mục tiêu bài học */}
        <div className="glass-panel px-4 py-2 rounded-xl text-sm text-muted-foreground shrink-0">
          🎯 {lesson.objective}
        </div>

        {/* Main split layout */}
        <div className="flex-1 flex gap-4 min-h-0">
          
          {/* ====== LEFT: Nội dung bài học ====== */}
          <div className={`flex flex-col min-h-0 transition-all duration-300 ${toolExpanded ? 'w-0 overflow-hidden opacity-0' : 'flex-1'}`}>
            {/* Section tabs */}
            <div className="flex gap-1 mb-3 shrink-0 flex-wrap">
              {sections.map(s => (
                <button
                  key={s.key}
                  onClick={() => setActiveSection(s.key)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                    activeSection === s.key 
                      ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30' 
                      : 'text-muted-foreground hover:text-white hover:bg-white/5'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <Card className="flex-1 min-h-0 premium-glass border-none">
              <ScrollArea className="h-full">
                <CardContent className="p-6 space-y-6">
                  
                  {/* === READING === */}
                  {activeSection === 'reading' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-heading font-bold text-white">{lesson.reading.title}</h3>
                        <Button variant="ghost" size="sm" className="text-xs" onClick={() => setShowTranslation(!showTranslation)}>
                          {showTranslation ? 'Ẩn bản dịch' : 'Hiện bản dịch'}
                        </Button>
                      </div>
                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <pre className="whitespace-pre-wrap text-sm text-white/90 font-sans leading-7">{lesson.reading.content}</pre>
                      </div>
                      {showTranslation && lesson.reading.translation && (
                        <div className="bg-blue-500/5 rounded-xl p-5 border border-blue-500/20 animate-in fade-in slide-in-from-top-3 duration-300">
                          <p className="text-xs text-blue-300 font-medium mb-2">🇻🇳 Bản dịch tiếng Việt</p>
                          <pre className="whitespace-pre-wrap text-sm text-white/70 font-sans leading-7">{lesson.reading.translation}</pre>
                        </div>
                      )}
                      {lesson.tips && (
                        <div className="space-y-2 pt-2">
                          {lesson.tips.map((tip, i) => (
                            <p key={i} className="text-sm text-amber-300/80 bg-amber-500/5 px-4 py-2 rounded-xl border border-amber-500/10">{tip}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* === VOCABULARY === */}
                  {activeSection === 'vocab' && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-heading font-bold text-white">📝 Từ vựng Unit {lesson.unit}</h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {lesson.vocabulary.map((v, i) => (
                          <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all group">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-baseline gap-2 flex-wrap">
                                  <span className="text-base font-semibold text-white">{v.word}</span>
                                  <span className="text-xs text-purple-300 font-mono">{v.ipa}</span>
                                </div>
                                <p className="text-sm text-pink-300 mt-1">{v.meaning}</p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2 italic">"{v.example}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* === GRAMMAR === */}
                  {activeSection === 'grammar' && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-heading font-bold text-white">📐 Ngữ pháp Unit {lesson.unit}</h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {lesson.grammar.map((g, i) => (
                        <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-3">
                          <h4 className="text-base font-bold text-cyan-300">{g.rule}</h4>
                          <p className="text-sm text-muted-foreground">{g.explanation}</p>
                          <div className="bg-black/30 rounded-lg p-4 space-y-1">
                            {g.examples.map((ex, j) => (
                              <p key={j} className="text-sm text-white/80">• {ex}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                      </div>
                    </div>
                  )}

                  {/* === EXERCISES === */}
                  {activeSection === 'exercises' && (
                    <div className="space-y-5">
                      <h3 className="text-lg font-heading font-bold text-white">✏️ Bài tập Unit {lesson.unit}</h3>
                      {lesson.exercises.map((ex, i) => (
                        <div key={ex.id} className={`bg-white/5 rounded-xl p-5 border space-y-3 transition-all ${
                          checked[ex.id] === true ? 'border-emerald-500/30 bg-emerald-500/5' 
                          : checked[ex.id] === false ? 'border-red-500/30 bg-red-500/5' 
                          : 'border-white/10'
                        }`}>
                          <div className="flex items-start gap-3">
                            <span className="text-xs bg-white/10 text-white/60 w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                            <div className="flex-1">
                              <p className="text-xs text-purple-300 mb-1">{ex.instruction}</p>
                              <p className="text-sm text-white font-medium">{ex.question}</p>
                              
                              {ex.type === 'choose' && ex.options ? (
                                <div className="grid grid-cols-2 gap-2 mt-3">
                                  {ex.options.map(opt => (
                                    <button
                                      key={opt}
                                      onClick={() => setAnswers({ ...answers, [ex.id]: opt })}
                                      className={`text-sm px-4 py-2 rounded-xl border transition-all text-left ${
                                        answers[ex.id] === opt 
                                          ? 'bg-pink-500/20 border-pink-500/30 text-pink-300' 
                                          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                                      }`}
                                    >
                                      {opt}
                                    </button>
                                  ))}
                                </div>
                              ) : (
                                <input
                                  type="text"
                                  value={answers[ex.id] || ''}
                                  onChange={(e) => setAnswers({ ...answers, [ex.id]: e.target.value })}
                                  onKeyDown={(e) => e.key === 'Enter' && checkAnswer(ex)}
                                  placeholder="Nhập câu trả lời..."
                                  className="w-full mt-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-pink-500/50"
                                />
                              )}

                              <div className="flex items-center gap-2 mt-3">
                                <Button size="sm" className="text-xs rounded-lg bg-pink-500/20 text-pink-300 hover:bg-pink-500/30 border-none" onClick={() => checkAnswer(ex)}>
                                  Kiểm tra
                                </Button>
                                <Button size="sm" variant="ghost" className="text-xs rounded-lg" onClick={() => setShowHint({ ...showHint, [ex.id]: !showHint[ex.id] })}>
                                  <Lightbulb className="w-3.5 h-3.5 mr-1" /> Gợi ý
                                </Button>
                                {checked[ex.id] === true && <CheckCircle weight="fill" className="w-5 h-5 text-emerald-400" />}
                                {checked[ex.id] === false && <XCircle weight="fill" className="w-5 h-5 text-red-400" />}
                                {checked[ex.id] === false && <span className="text-xs text-red-300">Đáp án: {ex.answer}</span>}
                              </div>
                              {showHint[ex.id] && ex.hint && (
                                <p className="text-xs text-amber-300/80 mt-2 bg-amber-500/5 px-3 py-2 rounded-lg border border-amber-500/10 animate-in fade-in duration-200">💡 {ex.hint}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* === DIALOGUE PRACTICE === */}
                  {activeSection === 'dialogue' && lesson.conversationPractice && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-heading font-bold text-white">💬 Luyện hội thoại</h3>
                      <p className="text-sm text-muted-foreground bg-pink-500/5 px-4 py-3 rounded-xl border border-pink-500/10">
                        🎭 {lesson.conversationPractice.situation}
                      </p>
                      <div className="space-y-3">
                        {lesson.conversationPractice.dialogue.map((d, i) => (
                          <div key={i} className={`flex gap-3 ${d.speaker === 'B' || d.speaker === 'Customer' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                              d.speaker === 'A' || d.speaker === 'Waiter' ? 'bg-blue-500/20 text-blue-300' : 'bg-pink-500/20 text-pink-300'
                            }`}>
                              {d.speaker[0]}
                            </div>
                            <div className={`flex-1 max-w-[80%] ${d.speaker === 'B' || d.speaker === 'Customer' ? 'text-right' : ''}`}>
                              <div className={`inline-block rounded-2xl px-4 py-3 ${
                                d.speaker === 'A' || d.speaker === 'Waiter' ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-pink-500/10 border border-pink-500/20'
                              }`}>
                                <p className="text-sm text-white">{d.line}</p>
                                <p className="text-xs text-muted-foreground mt-1">{d.lineVi}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground italic text-center pt-2">
                        ✨ Dùng Whiteboard bên phải để ghi chú, hoặc hỏi AI nếu chưa hiểu nhé!
                      </p>
                    </div>
                  )}

                </CardContent>
              </ScrollArea>
            </Card>
          </div>

          {/* ====== RIGHT: Công cụ học tập ====== */}
          <div className={`flex flex-col min-h-0 transition-all duration-300 ${toolExpanded ? 'flex-1' : 'w-80 lg:w-96 shrink-0'}`}>
            {/* Tool tabs + expand */}
            <div className="flex items-center gap-1 mb-3 shrink-0">
              {[
                { key: 'whiteboard' as const, label: '📝 Board', icon: Chalkboard },
                { key: 'translate' as const, label: '🌐 Dịch', icon: Translate },
                { key: 'ai' as const, label: '🤖 Hỏi AI', icon: Robot },
              ].map(t => (
                <button
                  key={t.key}
                  onClick={() => setActiveTool(t.key)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                    activeTool === t.key 
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                      : 'text-muted-foreground hover:text-white hover:bg-white/5'
                  }`}
                >
                  {t.label}
                </button>
              ))}
              <div className="flex-1" />
              <button onClick={() => setToolExpanded(!toolExpanded)} className="text-muted-foreground hover:text-white p-1 rounded-lg transition-colors">
                {toolExpanded ? <ArrowsInSimple className="w-4 h-4" /> : <ArrowsOutSimple className="w-4 h-4" />}
              </button>
            </div>

            <Card className="flex-1 min-h-0 premium-glass border-none flex flex-col">
              
              {/* === WHITEBOARD === */}
              {activeTool === 'whiteboard' && (
                <CardContent className="flex-1 p-4 flex flex-col min-h-0">
                  <div className="flex items-center gap-2 mb-3 shrink-0 flex-wrap">
                    {['#ec4899', '#3b82f6', '#10b981', '#f59e0b', '#ffffff'].map(c => (
                      <button key={c} onClick={() => setBrushColor(c)} className={`w-6 h-6 rounded-full border-2 transition-all ${brushColor === c ? 'border-white scale-125' : 'border-transparent'}`} style={{ backgroundColor: c }} />
                    ))}
                    <div className="w-px h-5 bg-white/10 mx-1" />
                    {[2, 4, 6].map(s => (
                      <button key={s} onClick={() => setBrushSize(s)} className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs transition-all ${brushSize === s ? 'bg-white/20 text-white' : 'text-muted-foreground hover:bg-white/10'}`}>{s}</button>
                    ))}
                    <div className="flex-1" />
                    <Button variant="ghost" size="sm" className="text-xs" onClick={clearCanvas}><Eraser className="w-3.5 h-3.5 mr-1" /> Xóa</Button>
                  </div>
                  <div className="flex-1 min-h-0 rounded-xl overflow-hidden border border-white/10 bg-black/30">
                    <canvas
                      ref={canvasRef}
                      width={800}
                      height={600}
                      className="w-full h-full cursor-crosshair"
                      onMouseDown={startDraw}
                      onMouseMove={draw}
                      onMouseUp={stopDraw}
                      onMouseLeave={stopDraw}
                    />
                  </div>
                </CardContent>
              )}

              {/* === TRANSLATE === */}
              {activeTool === 'translate' && (
                <CardContent className="flex-1 p-4 flex flex-col min-h-0">
                  <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground shrink-0">
                    <span className="bg-white/10 px-2 py-1 rounded-lg">Tiếng Anh</span>
                    <span>↔</span>
                    <span className="bg-white/10 px-2 py-1 rounded-lg">Tiếng Việt</span>
                  </div>
                  <textarea
                    value={translateInput}
                    onChange={(e) => setTranslateInput(e.target.value)}
                    placeholder="Nhập từ hoặc câu cần dịch..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 resize-none shrink-0"
                    rows={3}
                  />
                  <Button 
                    className="mt-3 rounded-xl bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border-none shrink-0"
                    onClick={handleTranslate}
                    disabled={isTranslating}
                  >
                    {isTranslating ? 'Đang dịch...' : 'Dịch'}
                  </Button>
                  {translateResult && (
                    <div className="mt-3 flex-1 min-h-0">
                      <ScrollArea className="h-full">
                        <div className="bg-cyan-500/5 rounded-xl p-4 border border-cyan-500/20 text-sm text-white/80 whitespace-pre-wrap">
                          {translateResult}
                        </div>
                      </ScrollArea>
                    </div>
                  )}
                </CardContent>
              )}

              {/* === AI CHAT === */}
              {activeTool === 'ai' && (
                <CardContent className="flex-1 p-4 flex flex-col min-h-0">
                  <ScrollArea className="flex-1 min-h-0 mb-3">
                    <div className="space-y-3">
                      {chatMessages.map((msg, i) => (
                        <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${
                            msg.role === 'ai' ? 'bg-purple-500/20 text-purple-300' : 'bg-pink-500/20 text-pink-300'
                          }`}>
                            {msg.role === 'ai' ? '🤖' : '💬'}
                          </div>
                          <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                            msg.role === 'ai' ? 'bg-purple-500/10 border border-purple-500/20 text-white/90' : 'bg-pink-500/10 border border-pink-500/20 text-white'
                          }`}>
                            <p className="whitespace-pre-wrap">{msg.text}</p>
                          </div>
                        </div>
                      ))}
                      {isAiThinking && (
                        <div className="flex gap-2">
                          <div className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center text-xs">🤖</div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl px-4 py-2.5">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>

                  {/* Quick questions */}
                  <div className="flex gap-1.5 mb-2 flex-wrap shrink-0">
                    {[`"${lesson.grammar[0]?.rule}" nghĩa là gì?`, 'Giải thích bài tập', 'Cho thêm ví dụ'].map(q => (
                      <button key={q} onClick={() => setChatInput(q)} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white transition-all truncate max-w-[140px]">
                        {q}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2 shrink-0">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                      placeholder="Hỏi AI về bài học..."
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
                    />
                    <Button size="icon" className="rounded-xl bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border-none shrink-0" onClick={handleAskAI} disabled={isAiThinking}>
                      <PaperPlaneTilt weight="fill" className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              )}

            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

