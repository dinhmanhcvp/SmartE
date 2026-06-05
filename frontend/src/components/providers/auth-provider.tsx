"use client"
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/use-auth-store';

import { TextHighlighter } from '@/components/ui/text-highlighter';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Trang chủ (Prologue) — ai cũng có thể vào
    if (pathname === '/') {
      if (isAuthenticated && user && !user.is_first_login) {
        // Đã đăng nhập + đã chọn track → đẩy thẳng vào Dashboard
        router.push('/dashboard');
      }
      return;
    }

    // Các trang khác — cần đăng nhập
    if (!isAuthenticated) {
      router.push('/');
      return;
    }

    // Đã đăng nhập nhưng chưa chọn track → bắt quay về Prologue
    if (user?.is_first_login) {
      router.push('/');
    }

  }, [isAuthenticated, pathname, isMounted, router, user]);

  if (!isMounted) return null; // Tránh hydration mismatch

  return (
    <TextHighlighter>
      {children}
    </TextHighlighter>
  );
}
