import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Fotoğraflarım | Muhammed Tankılıç",
  description:
    "Muhammed Tankılıç’ın portreleri, sahne arkası kareleri ve müzik arşivine ait görselleri.",
};

const gallerySections = [
  {
    title: "Portrelerim",
    description: "Sanatçı kimliğimi yansıtan sade portre arşivim.",
    image: "/muhammed-hero2-site.jpg",
  },
  {
    title: "Sahne arkam",
    description: "Kayıt, prova ve üretim sürecimden kareler.",
    image: "/muhammed-hero2-site.jpg",
  },
  {
    title: "Müzik arşivim",
    description: "Şarkılarımla ve özel içeriklerimle bağlantılı görsellerim.",
    image: "/muhammed-hero2-site.jpg",
  },
];

export default function PhotosPage() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="site-container pt-3 md:pt-4">
        <div className="mb-5 flex items-end justify-between gap-4">
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

        <div className="rounded-[34px] border border-white/35 bg-white/56 p-5 shadow-[0_18px_50px_rgba(75,35,45,0.08)] backdrop-blur-[14px] md:p-6">
          <div className="grid gap-4 md:grid-cols-3">
            {gallerySections.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[28px] border border-white/35 bg-white/54 shadow-[0_16px_42px_rgba(75,35,45,0.08)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#4B232D]/70">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-72"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(75,35,45,0.06), rgba(75,35,45,0.68)), url(${item.image})`,
                    }}
                  />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(189,235,232,0.20),transparent_38%),radial-gradient(circle_at_86%_20%,rgba(245,174,80,0.18),transparent_34%)]" />

                  <div className="relative flex h-full flex-col justify-end p-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/72">
                      Fotoğraf Arşivim
                    </p>

                    <h2 className="mt-2 text-[clamp(28px,3.2vw,42px)] font-semibold leading-none tracking-[-0.075em] text-white">
                      {item.title}
                    </h2>
                  </div>
                </div>

                <div className="border-t border-white/30 bg-white/68 px-5 py-4">
                  <p className="text-sm leading-7 text-[#4B232D]/70">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container pt-5">
        <div className="rounded-[28px] border border-white/35 bg-[#FFF4BC]/72 px-6 py-5 shadow-[0_14px_38px_rgba(75,35,45,0.07)] backdrop-blur-[14px] md:px-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-[clamp(22px,2.5vw,34px)] font-semibold leading-none tracking-[-0.065em] text-[#4B232D]">
              Galerim yeni fotoğraflarımla genişleyecek.
            </h2>

            <Link href="/iletisim" className="pill-button dark shrink-0">
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