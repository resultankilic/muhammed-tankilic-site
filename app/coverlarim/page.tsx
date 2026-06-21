import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Coverlarım | Muhammed Tankılıç",
  description:
    "YouTube ve Instagram üzerinden paylaştığım cover yorumlarım ve kısa performanslarım.",
};

const covers = [
  {
    slug: "pela-dur",
    title: "Pela Dur",
    artist: "Muhammed Tankılıç",
    description:
      "YouTube kanalımda paylaştığım akustik gitar cover yorumum.",
    youtubeUrl: "https://youtu.be/-eXQX6gigvU?si=XKi-bIJPd5X5BDo_",
    youtubeEmbedUrl: "https://www.youtube.com/embed/-eXQX6gigvU",
  },
];

const youtubeChannelUrl = "https://www.youtube.com/@Muhammedtanklc";

function CoverPanel({ cover }: { cover: (typeof covers)[number] }) {
  return (
    <article className="overflow-hidden rounded-[34px] border border-white/35 bg-white/56 p-5 shadow-[0_18px_50px_rgba(75,35,45,0.08)] backdrop-blur-[14px] md:p-6">
      <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
        <div className="flex min-h-[254px] flex-col justify-center rounded-[28px] border border-[#4B232D]/10 bg-white/48 p-6">
          <p className="section-eyebrow">Coverlarım</p>

          <h2 className="text-[clamp(38px,5vw,64px)] font-semibold leading-[0.94] tracking-[-0.08em] text-[#4B232D]">
            {cover.title}
          </h2>

          <p className="mt-3 text-sm font-medium text-[#4B232D]/64">
            {cover.artist}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#4B232D]/70">
            {cover.description}
          </p>
        </div>

        <div className="flex min-h-[254px] flex-col gap-3">
          <div className="overflow-hidden rounded-[26px] border border-white/24 bg-[#4B232D]/88 shadow-[0_18px_50px_rgba(75,35,45,0.12)]">
            <iframe
              src={cover.youtubeEmbedUrl}
              title={`${cover.title} YouTube cover videosu`}
              className="block aspect-video w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center rounded-[26px] border border-white/24 bg-white/50 p-5 shadow-[0_18px_50px_rgba(75,35,45,0.08)] backdrop-blur-[14px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4B232D]/56">
              İzleme Linkleri
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={cover.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#4B232D]/12 bg-white/72 px-4 py-2 text-[12px] font-bold text-[#4B232D] transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                YouTube’da İzle
              </a>

              <a
                href={youtubeChannelUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#4B232D]/12 bg-[#FFF4BC]/86 px-4 py-2 text-[12px] font-bold text-[#4B232D] transition hover:-translate-y-0.5"
              >
                YouTube Kanalım
              </a>

              <Link
                href="/giris"
                className="rounded-full border border-[#4B232D]/12 bg-white/72 px-4 py-2 text-[12px] font-bold text-[#4B232D] transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                Siteden İndir
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CoverlarimPage() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="site-container pt-3 md:pt-4">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow">Coverlarım</p>
            <h1 className="text-[clamp(34px,4.6vw,58px)] font-semibold leading-none tracking-[-0.075em] text-[#4B232D]">
              Cover yorumlarım
            </h1>
          </div>

          <Link href="/sarkilarim" className="pill-button secondary">
            Şarkılarım
          </Link>
        </div>

        <div className="grid gap-5">
          {covers.map((cover) => (
            <CoverPanel key={cover.slug} cover={cover} />
          ))}
        </div>
      </section>

      <footer className="site-container site-footer">
        <p>© 2026 Muhammed Tankılıç. Tüm hakları saklıdır.</p>
        <span>Coverlarım · YouTube · Instagram</span>
      </footer>
    </main>
  );
}