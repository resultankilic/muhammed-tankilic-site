import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sansFont = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammed Tankılıç | Doktor, Müzisyen, İçerik Üreticisi",
  description:
    "Muhammed Tankılıç'ın müzik çalışmalarını, yazılarını ve hekimlik yolculuğunu keşfedin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${serifFont.variable} ${sansFont.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}