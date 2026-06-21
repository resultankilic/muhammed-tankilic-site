import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Hakkında | Muhammed Tankılıç",
  description:
    "Muhammed Tankılıç’ın müzik dili, besteleri, cover yorumları ve platform arşivi.",
};

const identityCards = [
  {
    label: "Dil",
    title: "Kürtçe",
    description: "Şarkılarımın ana dili ve duygu zemini.",
  },
  {
    label: "Tarz",
    title: "Akustik Folk",
    description: "Sade gitar, yalın yorum ve doğal kayıt hissi.",
  },
  {
    label: "Odak",
    title: "Söz ve Hikâye",
    description: "Bestelerimde anlam, duygu ve kişisel anlatım önde.",
  },
];

const productionCards = [
  {
    label: "Bestelerim",
    title: "Resmi yayınlarım",
    description:
      "Kendi yazdığım ve bestelediğim şarkılarımı Spotify ve Apple Music gibi platformlarda yayınlıyorum.",
    href: "/sarkilarim",
    button: "Şarkılarım",
  },
  {
    label: "Coverlarım",
    title: "Yorum videolarım",
    description:
      "Sevdiğim eserleri kendi yorumumla YouTube ve Instagram odaklı video içerikleri olarak paylaşıyorum.",
    href: "/coverlarim",
    button: "Coverlarım",
  },
];

const platformCards = [
  {
    platform: "Spotify",
    description: "Kendi bestelerimi dinleyebileceğiniz ana müzik platformlarımdan biri.",
  },
  {
    platform: "Apple Music",
    description: "Resmi yayınlarımın yer aldığı dijital müzik platformu.",
  },
  {
    platform: "YouTube",
    description: "Cover yorumlarım, performans videolarım ve ileride beste videolarım.",
  },
  {
    platform: "Instagram",
    description: "Kısa performanslarım, duyurularım, cover kesitlerim ve postlarım.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="site-container pt-3 md:pt-4">
        <div className="relative overflow-hidden rounded-[34px] border border-white/35 bg-white/56 p-5 shadow-[0_22px_70px_rgba(75,35,45,0.11)] backdrop-blur-[14px] md:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(189,235,232,0.22),transparent_34%),radial-gradient(circle_at_88%_14%,rgba(245,174,80,0.13),transparent_30%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#BDEBE8]/76 px-4 py-2 text-[11px] font-semibold text-[#4B232D]">
                  Bağımsız Sanatçı
                </span>

                <span className="rounded-full bg-white/62 px-4 py-2 text-[11px] font-semibold text-[#4B232D]/72">
                  Kürtçe Müzik
                </span>

                <span className="rounded-full bg-white/62 px-4 py-2 text-[11px] font-semibold text-[#4B232D]/72">
                  Akustik Folk
                </span>
              </div>

              <p className="section-eyebrow">Hakkında</p>

              <h1 className="max-w-3xl text-[clamp(44px,6vw,76px)] font-semibold leading-[0.94] tracking-[-0.08em] text-[#4B232D]">
                Müziğimi söz, duygu ve hikâye üzerine kuruyorum.
              </h1>

              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#4B232D]/76 md:text-[15px]">
                Kürtçe şarkılarımı sade melodiler, akustik düzenlemeler ve
                kişisel hikâyeler etrafında üretiyorum. Bestelerimde anlamlı
                sözleri, doğal bir yorumu ve kulağa hoş gelen modern bir
                akustik atmosferi öne çıkarmaya çalışıyorum.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/sarkilarim" className="pill-button">
                  Şarkılarımı Dinle
                </Link>

                <Link href="/coverlarim" className="pill-button secondary">
                  Coverlarım
                </Link>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/30 bg-[#4B232D]/88 p-7 text-white shadow-[0_20px_58px_rgba(75,35,45,0.16)] backdrop-blur-[12px]">
              <p className="section-eyebrow light">Sanatçı Kimliğim</p>

              <h2 className="text-[clamp(30px,3.6vw,48px)] font-semibold leading-none tracking-[-0.075em] text-white">
                Bestelerim ve cover yorumlarım ayrı arşivlerde.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/70">
                Kendi bestelerimi Şarkılarım bölümünde; YouTube ve Instagram
                odaklı cover yorumlarımı ise Coverlarım bölümünde topluyorum.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/sarkilarim" className="pill-button">
                  Şarkılarım
                </Link>

                <Link href="/coverlarim" className="pill-button outline-light">
                  Coverlarım
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container section-space">
        <div className="grid gap-4 md:grid-cols-3">
          {identityCards.map((item) => (
            <article
              key={item.label}
              className="rounded-[30px] border border-[#4B232D]/10 bg-white/56 p-7 shadow-[0_18px_50px_rgba(75,35,45,0.08)] backdrop-blur-[14px]"
            >
              <p className="section-eyebrow">{item.label}</p>

              <h2 className="text-[32px] font-semibold leading-none tracking-[-0.065em] text-[#4B232D]">
                {item.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#4B232D]/68">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container section-space">
        <div className="grid gap-4 lg:grid-cols-2">
          {productionCards.map((item) => (
            <article
              key={item.label}
              className="flex min-h-[300px] flex-col justify-between rounded-[34px] border border-white/35 bg-white/56 p-7 shadow-[0_18px_50px_rgba(75,35,45,0.08)] backdrop-blur-[14px] md:p-9"
            >
              <div>
                <p className="section-eyebrow">{item.label}</p>

                <h2 className="text-[clamp(34px,4vw,52px)] font-semibold leading-none tracking-[-0.075em] text-[#4B232D]">
                  {item.title}
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-8 text-[#4B232D]/70">
                  {item.description}
                </p>
              </div>

              <div className="mt-7">
                <Link href={item.href} className="pill-button dark">
                  {item.button}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container section-space">
        <div className="rounded-[34px] border border-white/35 bg-[#FFF4BC]/74 p-7 shadow-[0_18px_50px_rgba(75,35,45,0.08)] backdrop-blur-[14px] md:p-9">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Platformlarım</p>

              <h2 className="section-title">
                Nerede ne paylaşıyorum?
              </h2>

              <p className="section-description">
                Bestelerim, cover yorumlarım ve güncel paylaşımlarım platformlara
                göre ayrı bir düzenle ilerliyor.
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {platformCards.map((item) => (
              <article
                key={item.platform}
                className="rounded-[24px] border border-[#4B232D]/10 bg-white/52 p-5 shadow-[0_14px_36px_rgba(75,35,45,0.06)]"
              >
                <h3 className="text-[24px] font-semibold leading-none tracking-[-0.065em] text-[#4B232D]">
                  {item.platform}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#4B232D]/68">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container section-space">
        <div className="rounded-[34px] border border-white/35 bg-[#4B232D]/88 p-7 text-white shadow-[0_18px_50px_rgba(75,35,45,0.14)] backdrop-blur-[14px] md:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="section-eyebrow light">Arşivim</p>

              <h2 className="text-[clamp(32px,4vw,52px)] font-semibold leading-none tracking-[-0.075em] text-white">
                Şarkılarım ve coverlarım ayrı ayrı ilerliyor.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">
                Kendi bestelerim resmi müzik yayınlarımda; cover yorumlarım ise
                video odaklı arşivimde yer alıyor.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/sarkilarim" className="pill-button">
                Şarkılarım
              </Link>

              <Link href="/coverlarim" className="pill-button outline-light">
                Coverlarım
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-container site-footer">
        <p>© 2026 Muhammed Tankılıç. Tüm hakları saklıdır.</p>
        <span>Hakkında · Bestelerim · Coverlarım</span>
      </footer>
    </main>
  );
}