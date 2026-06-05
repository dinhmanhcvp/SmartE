"use client"
import { AppLayout } from '@/components/layout/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UploadSimple, FileText, CheckCircle, WarningCircle, Spinner, Sparkle } from '@phosphor-icons/react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { apiClient } from '@/lib/api-client';

export default function UploadPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [selectedAtom, setSelectedAtom] = useState<string | null>(null);

  const handleUpload = async () => {
    setIsUploading(true);
    
    try {
      // Vì đang ở Prototype, ta có thể gửi mock File hoặc bỏ qua file payload nếu API mock chưa thực sự đọc
      // Ở đây tạo 1 file dummy để gọi API
      const dummyFile = new File(["Hello world"], "document.txt", { type: "text/plain" });
      const { task_id } = await apiClient.uploadDocument(dummyFile);
      
      // Polling
      const interval = setInterval(async () => {
        try {
          const statusRes = await apiClient.checkDocumentStatus(task_id);
          if (statusRes.status === "completed") {
            clearInterval(interval);
            setIsUploading(false);
            
            // Map kết quả từ Backend
            setResult({
              cefr: 'C1', // Giả lập
              band: '7.5',
              readability: 'Advanced',
              grammarErrors: statusRes.result.grammar_errors.map((err: any) => ({
                error: err.original,
                correction: err.corrected,
                type: err.explanation
              })),
              vocab: statusRes.result.advanced_vocab
            });
            toast.success("Phân tích tài liệu thành công!", { description: "Đã đánh giá trình độ và bóc tách từ vựng." });
          } else if (statusRes.status === "error") {
            clearInterval(interval);
            setIsUploading(false);
            toast.error("Phân tích thất bại", { description: statusRes.result });
          }
        } catch (e) {
          clearInterval(interval);
          setIsUploading(false);
          toast.error("Lỗi kết nối khi kiểm tra trạng thái.");
        }
      }, 2000);
      
    } catch (e) {
      setIsUploading(false);
      toast.error("Không thể kết nối đến Backend.");
    }
  };

  return (
    <AppLayout>
      <div className="flex flex-col gap-8 animate-in fade-in duration-500 max-w-6xl mx-auto w-full">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary w-fit drop-shadow-sm">
            Tải lên Tài liệu (AI Assessment)
          </h1>
          <p className="text-muted-foreground mt-2 text-base">Hệ thống AI sẽ phân tích văn bản của bạn, đánh giá trình độ (Flesch-Kincaid) và trích xuất từ vựng/cấu trúc tự động.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Upload Section */}
          <Card className="glass-card h-fit flex flex-col border-none">
            <CardHeader className="bg-muted/30 pb-6 border-b">
              <CardTitle className="text-xl">Đầu vào Dữ liệu</CardTitle>
              <CardDescription>Hỗ trợ định dạng .txt, .pdf, .docx hoặc văn bản thô.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <Tabs defaultValue="file" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 h-12">
                  <TabsTrigger value="file" className="text-base">Tải File</TabsTrigger>
                  <TabsTrigger value="text" className="text-base">Dán Văn Bản</TabsTrigger>
                </TabsList>
                <TabsContent value="file">
                  <div className="border-2 border-dashed rounded-3xl p-12 flex flex-col items-center justify-center text-center hover:bg-primary/5 transition-all cursor-pointer border-primary/30 premium-glass group">
                    <div className="p-5 bg-primary/10 rounded-full mb-5 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                      <UploadSimple weight="duotone" className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">Kéo thả file vào đây</h3>
                    <p className="text-sm text-muted-foreground mb-6">hoặc click để duyệt file từ máy tính của bạn</p>
                    <Input id="file-upload" type="file" className="hidden" />
                    <Label htmlFor="file-upload">
                      <Button variant="default" className="cursor-pointer shadow-md rounded-full px-8 pointer-events-none">
                        Chọn File
                      </Button>
                    </Label>
                  </div>
                </TabsContent>
                <TabsContent value="text" className="relative">
                  <div className="space-y-4">
                    <div className="space-y-3 relative overflow-hidden">
                      <Label htmlFor="text-input" className="text-base font-semibold text-primary">Nội dung bài viết (Essay/Article)</Label>
                      <textarea 
                        id="text-input" 
                        className="flex min-h-[280px] w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-base shadow-inner placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-colors resize-none leading-relaxed relative z-10"
                        placeholder="Dán bài viết tiếng Anh của bạn vào đây để AI phân tích chi tiết..."
                      ></textarea>
                      {/* Laser Scan Effect */}
                      {isUploading && (
                        <div className="absolute top-8 left-0 w-full h-[2px] bg-primary glow-box animate-laser z-20"></div>
                      )}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="pt-2 pb-6 px-6">
              <Button className="w-full h-12 text-lg font-semibold rounded-full shadow-lg glow-box transition-all active:scale-[0.98]" onClick={handleUpload} disabled={isUploading}>
                {isUploading ? <><Spinner weight="bold" className="mr-2 h-5 w-5 animate-spin" /> Đang phân tích bằng AI...</> : 'Bắt đầu Phân Tích'}
              </Button>
            </CardFooter>
          </Card>

          {/* Results Section */}
          <Card className={`premium-glass transition-all duration-700 ease-in-out border-none ${result ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-4 blur-[2px] pointer-events-none'}`}>
            <CardHeader className="bg-emerald-500/10 dark:bg-emerald-900/20 border-b border-emerald-500/20">
              <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xl font-heading">
                <CheckCircle weight="fill" className="w-6 h-6 text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" /> Kết quả Phân Tích AI
              </CardTitle>
              <CardDescription>Báo cáo năng lực từ AI Engine dựa trên dữ liệu đầu vào.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {result ? (
                <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-5 rounded-2xl border shadow-sm">
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Ước tính Trình độ</p>
                      <div className="text-4xl font-black text-primary">{result.cefr} <span className="text-xl text-muted-foreground font-medium ml-1">({result.band} IELTS)</span></div>
                    </div>
                    <div className="bg-muted/50 p-5 rounded-2xl border shadow-sm">
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Độ khó Đọc hiểu</p>
                      <div className="text-2xl font-bold mt-2 text-orange-600 dark:text-orange-400">{result.readability}</div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-5 border border-red-200 dark:border-red-900 shadow-inner">
                    <h4 className="font-bold flex items-center gap-2 mb-4 text-red-700 dark:text-red-400 font-heading text-lg">
                      <WarningCircle weight="duotone" className="w-6 h-6" /> Lỗi ngữ pháp phát hiện ({result.grammarErrors.length})
                    </h4>
                    <div className="space-y-4">
                      {result.grammarErrors.map((err: any, i: number) => (
                        <div key={i} className="p-4 bg-white dark:bg-black/40 border border-red-100 dark:border-red-900/50 rounded-xl shadow-sm">
                          <p className="line-through text-red-600/70 dark:text-red-400/70 text-base">{err.error}</p>
                          <p className="text-emerald-600 dark:text-emerald-400 font-bold mt-2 text-base">→ {err.correction}</p>
                          <p className="text-sm font-medium text-muted-foreground mt-3 bg-muted w-fit px-2 py-1 rounded-md">Lỗi: {err.type}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="premium-glass rounded-2xl p-5 border-none shadow-[0_0_15px_rgba(37,99,235,0.1)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-16 bg-blue-500/5 blur-3xl rounded-full"></div>
                    <h4 className="font-bold flex items-center gap-2 mb-4 text-blue-400 font-heading text-lg relative z-10">
                      <FileText weight="duotone" className="w-6 h-6" /> Nguyên tử Kiến thức (Atomic Learning)
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 relative z-10">Nhấp vào một "nguyên tử" để xem các liên kết chéo (Backlinks) tới trí nhớ của bạn.</p>
                    <div className="flex flex-wrap gap-3 relative z-10">
                      {result.vocab.map((v: string, i: number) => (
                        <Badge 
                          key={i} 
                          variant="default" 
                          className="px-4 py-2 text-sm bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500 hover:text-white cursor-pointer backdrop-blur-md shadow-lg transform hover:-translate-y-1 transition-all"
                          onClick={() => setSelectedAtom(v)}
                        >
                          {v}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground py-20 text-center">
                  <div className="p-6 bg-muted/50 rounded-full mb-6 glass-panel">
                    <FileText weight="thin" className="w-16 h-16 opacity-30 text-primary" />
                  </div>
                  <p className="text-lg font-medium max-w-[250px]">Tải tài liệu lên hoặc dán văn bản để xem kết quả phân tích siêu việt.</p>
                </div>
              )}
            </CardContent>
            {result && (
              <CardFooter className="px-6 pb-6 pt-0">
                <Button variant="default" className="w-full h-12 text-base font-semibold shadow-lg rounded-full bg-emerald-600 hover:bg-emerald-500 glow-box text-white">
                  <CheckCircle weight="bold" className="w-5 h-5 mr-2" /> Lưu tất cả vào Vườn Kiến Thức (SRS)
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>

      {/* Atomic Learning Pane (Sliding Dialog) */}
      <Dialog open={!!selectedAtom} onOpenChange={(open) => !open && setSelectedAtom(null)}>
        <DialogContent className="sm:max-w-md border-white/10 premium-glass bg-black/60 backdrop-blur-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading text-blue-400 flex items-center gap-2">
              <Sparkle weight="duotone" /> Nguyên tử: {selectedAtom}
            </DialogTitle>
            <DialogDescription className="text-base text-foreground/80 mt-2">
              Từ vựng này đã được phân rã khỏi bài viết. Hệ thống tìm thấy <strong>2 liên kết chéo (Backlinks)</strong> trong trí nhớ của bạn.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
              <div className="text-xs text-muted-foreground mb-1 flex justify-between">
                <span>Trích từ Bài viết hôm nay</span>
                <span>Vừa xong</span>
              </div>
              <p className="text-sm italic text-slate-300">"The <strong className="text-blue-400">{selectedAtom}</strong> nature of technology has reshaped our lives."</p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-default relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
              <div className="text-xs text-emerald-400 mb-1 flex justify-between">
                <span>Từ cuốn The Great Gatsby</span>
                <span>2 tháng trước</span>
              </div>
              <p className="text-sm italic text-slate-300">"...its <strong className="text-emerald-400">{selectedAtom}</strong> glow fading into the night."</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
}
