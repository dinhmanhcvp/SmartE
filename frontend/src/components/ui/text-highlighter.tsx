"use client"
import { useState, useEffect } from 'react';
import { TranslatingPopover } from './translating-popover';

export function TextHighlighter({ children }: { children: React.ReactNode }) {
  const [selectionDetails, setSelectionDetails] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const handleMouseUp = () => {
      // Đợi một chút để browser hoàn thành việc tạo selection
      setTimeout(() => {
        const selection = window.getSelection();
        const text = selection?.toString().trim();
        
        if (selection && text && text.length > 0 && text.split(' ').length <= 10) {
          // Lấy tọa độ của vùng bôi đen để đặt Popover
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          
          setSelectionDetails({
            text: text,
            x: rect.left + window.scrollX + (rect.width / 2),
            y: rect.top + window.scrollY - 10 // Đặt phía trên văn bản
          });
        } else {
          setSelectionDetails(null);
        }
      }, 50);
    };

    // Bắt sự kiện khi click ra ngoài Popover để tắt
    const handleMouseDown = () => {
      // Chỉ tắt khi đang có selection (nhưng không click đè lên selection)
      // Để đơn giản, khi bắt đầu click mới, ta đóng popup
      setSelectionDetails(null);
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div className="relative selection:bg-primary/40 selection:text-white min-h-full">
      {children}
      {selectionDetails && (
        <TranslatingPopover 
          selectedText={selectionDetails.text}
          posX={selectionDetails.x}
          posY={selectionDetails.y}
          onClose={() => {
            setSelectionDetails(null);
            window.getSelection()?.removeAllRanges(); // Xóa vùng bôi đen
          }}
        />
      )}
    </div>
  );
}
