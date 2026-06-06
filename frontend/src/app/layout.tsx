import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin", "vietnamese"],
  variable: "--font-serif",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-heading",
});

const beVietnam = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
});

import { AuthProvider } from '@/components/providers/auth-provider';
import { GlobalTranslator } from '@/components/global-translator';

export const metadata: Metadata = {
  title: "ngocanhdangiu - Học tiếng Anh cùng nhau",
  description: "Nền tảng học tiếng Anh được dành riêng cho Ngọc Anh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${beVietnam.variable} ${playfair.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0B1120] text-white">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
        >
          <AuthProvider>
            {children}
            <GlobalTranslator />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
