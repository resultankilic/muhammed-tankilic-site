import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Fotoğraflarım | Muhammed Tankılıç",
  description:
    "Muhammed Tankılıç’ın portreleri ve müzik arşivine ait görselleri.",
};

const gallerySections = [
  {
    title: "Portrelerim",
    description: "Sanatçı kimliğimi yansıtan sade portre arşivim.",
    image: "/muhammed-hero2-site.jpg",
  },
  {
    title: "Müzik Arşivim",
    description: "Şarkılarımla bağlantılı görsellerim.",
    image: "/muhammed-hero2-site.jpg",
  },
];

export default function PhotosPage() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="site-container pt-40 md:pt-4">
        <div className="mb-3 hidden items-end justify-between gap-4 md:mb-5 md:flex">
          <div>
            <p className="section-eyebrow">Fotoğraflarım</p>

            <h1 className="text-[clamp(34px,4.6vw,58px)] font-semibold leading-none tracking-[-0.075em] text-[#4B232D]">
              Görsel arşivim
            </h1>
          </div>

          <Link href="/iletisim" className="pill-button secondary">
            Görsel Talebi
          </Link>
        </div>

        <div className="rounded-[24px] border border-white/35 bg-white/60 p-3.5 shadow-[0_14px_38px_rgba(75,35,45,0.08)] backdrop-blur-[14px] md:rounded-[34px] md:p-6">
          <div className="mb-3 text-center md:hidden">
            <p className="section-eyebrow mb-0">Fotoğraflarım</p>
          </div>

          <div className="grid gap-2.5 md:grid-cols-2 md:gap-4">
            {gallerySections.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[20px] border border-white/35 bg-white/60 shadow-[0_10px_28px_rgba(75,35,45,0.07)] md:rounded-[28px] md:shadow-[0_16px_42px_rgba(75,35,45,0.08)]"
              >
                <div className="relative aspect-[16/7.2] overflow-hidden bg-[#4B232D]/70 md:aspect-[16/10]">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-80 md:opacity-72"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(75,35,45,0.04), rgba(75,35,45,0.62)), url(${item.image})`,
                    }}
                  />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(189,235,232,0.18),transparent_38%),radial-gradient(circle_at_86%_20%,rgba(245,174,80,0.16),transparent_34%)]" />

                  <div className="relative flex h-full flex-col justify-end p-4 md:p-5">
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/72 md:text-[9px] md:tracking-[0.2em]">
                      Fotoğraf Arşivim
                    </p>

                    <h2 className="mt-1.5 text-[24px] font-semibold leading-none tracking-[-0.075em] text-white md:mt-2 md:text-[clamp(28px,3.2vw,42px)]">
                      {item.title}
                    </h2>
                  </div>
                </div>

                <div className="border-t border-white/30 bg-white/70 px-4 py-3 md:px-5 md:py-4">
                  <p className="text-[12px] leading-6 text-[#4B232D]/70 md:text-sm md:leading-7">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container pt-3 md:pt-5">
        <div className="rounded-[22px] border border-white/35 bg-[#FFF4BC]/74 px-4 py-4 shadow-[0_12px_32px_rgba(75,35,45,0.07)] backdrop-blur-[14px] md:rounded-[28px] md:px-7 md:py-5">
          <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <h2 className="text-[22px] font-semibold leading-none tracking-[-0.065em] text-[#4B232D] md:text-[clamp(22px,2.5vw,34px)]">
              Galerim yeni fotoğraflarımla genişleyecek.
            </h2>

            <Link
              href="/iletisim"
              className="pill-button dark shrink-0 !min-h-9 !px-5 !text-[11px] md:!min-h-10 md:!text-xs"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      <footer className="site-container site-footer">
        <p>© 2026 Muhammed Tankılıç. Tüm hakları saklıdır.</p>
        <span>Fotoğraflarım · Portrelerim · Görsel arşivim</span>
      </footer>
    </main>
  );
}