import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-main",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.muhammedtankilic.com"),
  title: {
    default: "Muhammed Tankılıç | Kürtçe Müzik, Sözler ve Hikâyeler",
    template: "%s | Muhammed Tankılıç",
  },
  description:
    "Muhammed Tankılıç’ın müzikleri, sözleri ve hikâyeleri. Kürtçe şarkılar, akustik yorumlar, videolar ve özel içerikler.",
  applicationName: "Muhammed Tankılıç",
  keywords: [
    "Muhammed Tankılıç",
    "Kürtçe müzik",
    "Kürtçe şarkılar",
    "akustik müzik",
    "Zef Cara",
    "Kürt müzisyen",
    "bağımsız sanatçı",
  ],
  authors: [{ name: "Muhammed Tankılıç" }],
  creator: "Muhammed Tankılıç",
  publisher: "Muhammed Tankılıç",
  alternates: {
    canonical: "https://www.muhammedtankilic.com",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.muhammedtankilic.com",
    siteName: "Muhammed Tankılıç",
    title: "Muhammed Tankılıç | Kürtçe Müzik, Sözler ve Hikâyeler",
    description:
      "Muhammed Tankılıç’ın müzikleri, sözleri ve hikâyeleri. Kürtçe şarkılar, akustik yorumlar, videolar ve özel içerikler.",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Muhammed Tankılıç",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Tankılıç | Kürtçe Müzik, Sözler ve Hikâyeler",
    description:
      "Muhammed Tankılıç’ın müzikleri, sözleri ve hikâyeleri. Kürtçe şarkılar, akustik yorumlar, videolar ve özel içerikler.",
    images: ["/icon-512.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: undefined,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#BDEBE8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}