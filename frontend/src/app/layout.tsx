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

export const metadata: Metadata = {
  title: "SmartE - AI English Learning Platform",
  description: "Hệ thống học tiếng Anh cá nhân hóa toàn diện 4 kỹ năng tích hợp AI dành cho người mất gốc và nâng band.",
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
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
