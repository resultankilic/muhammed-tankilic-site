import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "İletişim | Muhammed Tankılıç",
  description:
    "Muhammed Tankılıç ile müzik, yayın, video ve iş birliği talepleri için iletişime geçin.",
};

const aboutPoints = [
  "Kürtçe şarkılar söyleyen bağımsız bir sanatçı olarak kendi bestelerimi ve yorumlarımı paylaşıyorum.",
  "Resmi yayınlarım Spotify ve Apple Music’te; cover yorumlarım ise YouTube ve Instagram’da yer alıyor.",
  "Müzik, yayın, video, görsel ve iş birliği talepleri için benimle doğrudan iletişime geçebilirsin.",
];

const platformLinks = [
  {
    title: "Instagram",
    description: "Güncel paylaşımlar, kısa videolar ve duyurularım.",
    buttonLabel: "Instagram",
    href: "https://www.instagram.com/muhammedtanklc?igsh=MWdna211cTJwY2FpNA==",
  },
  {
    title: "YouTube",
    description: "Cover yorumlarım, performanslarım ve video içeriklerim.",
    buttonLabel: "YouTube",
    href: "https://www.youtube.com/@Muhammedtanklc",
  },
  {
    title: "Spotify",
    description: "Resmi yayınlarımı ve şarkılarımı dinlemek için.",
    buttonLabel: "Spotify",
    href: "https://open.spotify.com/intl-tr/track/7B5SGhv7YD7opodmyJQQqm?si=958d9492fbd4447b",
  },
  {
    title: "Apple Music",
    description: "Zef Cara ve resmi müzik yayınlarım için.",
    buttonLabel: "Apple Music",
    href: "https://music.apple.com/us/album/zef-cara-single/1779404301",
  },
];

export default function ContactPage() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="site-container pt-5 md:pt-7">
        <section className="relative overflow-hidden rounded-[38px] border border-white/35 bg-white/62 px-6 py-7 shadow-[0_24px_70px_rgba(75,35,45,0.11)] backdrop-blur-[18px] md:px-8 md:py-8 lg:px-10 lg:py-9">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(189,235,232,0.28),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(245,174,80,0.14),transparent_32%)]" />

          <div className="relative mx-auto max-w-6xl">
            <header className="mx-auto max-w-4xl text-center">
              <p className="section-eyebrow">İletişim</p>

              <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-7 text-[#4B232D]/72 md:text-[15px]">
                Kendi Bestelerim - Cover Yorumlarım - Resmi Yayınlarım - İletişim Kanallarım Burada
              </p>
            </header>

            <ul className="mt-7 grid gap-3 text-sm leading-7 text-[#4B232D]/76 md:grid-cols-3">
              {aboutPoints.map((item) => (
                <li
                  key={item}
                  className="flex min-h-[126px] gap-3 rounded-[24px] border border-white/42 bg-white/56 p-5 shadow-[0_12px_34px_rgba(75,35,45,0.05)] backdrop-blur-[12px]"
                >
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5AE50]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {platformLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[24px] border border-white/42 bg-white/64 px-5 py-3.5 shadow-[0_12px_34px_rgba(75,35,45,0.06)] backdrop-blur-[12px] transition hover:-translate-y-0.5 hover:bg-white/76"
                >
                  <div className="flex min-h-[78px] items-center justify-between gap-5">
                    <div className="min-w-0">
                      <h2 className="text-[clamp(24px,2.25vw,32px)] font-semibold leading-none tracking-[-0.07em] text-[#4B232D]">
                        {item.title}
                      </h2>

                      <p className="mt-2 max-w-md text-xs leading-6 text-[#4B232D]/62">
                        {item.description}
                      </p>
                    </div>

                    <span className="inline-flex min-h-9 w-[136px] shrink-0 items-center justify-center rounded-full bg-[#F5AE50] px-4 text-[12px] font-bold leading-none text-[#4B232D] shadow-[0_12px_28px_rgba(245,174,80,0.22)] transition group-hover:bg-[#f7bb67]">
                      {item.buttonLabel}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="mailto:muhammedtnklc@gmail.com"
              className="mt-4 flex min-h-14 w-full items-center justify-center rounded-[24px] border border-[#4B232D]/10 bg-white/68 px-6 text-center text-base font-medium tracking-[-0.035em] text-[#4B232D] shadow-[0_12px_34px_rgba(75,35,45,0.06)] backdrop-blur-[12px] transition hover:bg-white/78 hover:text-[#F5AE50] md:text-lg"
            >
              muhammedtnklc@gmail.com
            </a>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <Link
                href="/"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#F5AE50] px-6 text-sm font-bold text-[#4B232D] shadow-[0_16px_36px_rgba(75,35,45,0.12)] transition hover:-translate-y-0.5 hover:bg-[#f7bb67]"
              >
                ← Ana Sayfa
              </Link>

              <a
                href="mailto:muhammedtnklc@gmail.com"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#4B232D] px-6 text-sm font-extrabold !text-white shadow-[0_16px_36px_rgba(75,35,45,0.20)] transition hover:-translate-y-0.5 hover:bg-[#5a2b36]"
              >
                Mail Gönder
              </a>

              <Link
                href="/sarkilarim"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#F5AE50] px-6 text-sm font-bold text-[#4B232D] shadow-[0_16px_36px_rgba(75,35,45,0.12)] transition hover:-translate-y-0.5 hover:bg-[#f7bb67]"
              >
                Şarkılarım →
              </Link>
            </div>
          </div>
        </section>
      </section>

      <footer className="site-container site-footer">
        <p>© 2026 Muhammed Tankılıç. Tüm hakları saklıdır.</p>
        <span>İletişim · Müzik · İş birliği</span>
      </footer>
    </main>
  );
}