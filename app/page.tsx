"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import AuthButtons from "@/components/AuthButtons";

const musicHighlights = [
  {
    title: "Özgün eserler",
    description:
      "Kürtçe, akustik ve halk müziği çizgisinde yayımlanan kişisel çalışmalar.",
  },
  {
    title: "Cover yorumlar",
    description:
      "Tanıdık melodileri sade, duygusal ve akustik bir yorumla yeniden ele alan kayıtlar.",
  },
  {
    title: "Canlı performanslar",
    description:
      "Sahne, prova, kısa video ve özel performans kayıtlarından oluşan arşiv.",
  },
];

const archiveItems = [
  {
    number: "01",
    title: "Şarkılar",
    description: "Yayımlanmış single çalışmaları ve gelecek kayıtlar.",
  },
  {
    number: "02",
    title: "Videolar",
    description: "Klipler, kısa performanslar ve sosyal medya içerikleri.",
  },
  {
    number: "03",
    title: "Fotoğraflar",
    description: "Kapak görselleri, sahne arkası ve portre seçkileri.",
  },
  {
    number: "04",
    title: "Duyurular",
    description: "Yeni yayınlar, konserler ve özel içerik haberleri.",
  },
];

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrame = 0;
    let targetPosition = 0;
    let currentPosition = 0;
    let velocity = 0;
    let initialized = false;

    const stiffness = 0.04;
    const damping = 0.84;

    function updateTarget() {
      const maximumPageScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );

      const pageProgress = Math.min(
        Math.max(window.scrollY / maximumPageScroll, 0),
        1,
      );

      const background = backgroundRef.current;

      if (background) {
        const maximumImageTravel = Math.max(
          background.offsetHeight - window.innerHeight,
          0,
        );

        targetPosition = pageProgress * maximumImageTravel;

        if (!initialized) {
          currentPosition = targetPosition;
          initialized = true;
        }
      }
    }

    function animateBackground() {
      const distance = targetPosition - currentPosition;

      velocity += distance * stiffness;
      velocity *= damping;
      currentPosition += velocity;

      const background = backgroundRef.current;

      if (background) {
        background.style.transform = `translate3d(
          -50%,
          ${-currentPosition}px,
          0
        )`;
      }

      animationFrame = requestAnimationFrame(animateBackground);
    }

    const resizeObserver = new ResizeObserver(updateTarget);

    if (backgroundRef.current) {
      resizeObserver.observe(backgroundRef.current);
    }

    updateTarget();
    animationFrame = requestAnimationFrame(animateBackground);

    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden text-[#17302a]">
      {/* Hareketli ana görsel */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#17352f]">
        <div
          ref={backgroundRef}
          className="absolute left-1/2 top-0 will-change-transform"
          style={{
            width: "max(100vw, 70vh)",
            transform: "translate3d(-50%, 0, 0)",
          }}
        >
          <Image
            src="/muhammed-hero2.png"
            alt=""
            width={1920}
            height={4320}
            priority
            unoptimized
            sizes="100vw"
            aria-hidden="true"
            className="h-auto w-full max-w-none select-none"
          />
        </div>

        <div className="absolute inset-0 bg-[#102a24]/4" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/5" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-[#17302a]/10 bg-[#f7f4ec]/90 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 lg:px-10">
            <a
              href="#anasayfa"
              className="shrink-0 font-serif text-lg font-semibold tracking-tight md:text-xl"
            >
              Muhammed Tankılıç
            </a>

            <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
              <a href="#muzisyen" className="transition hover:text-[#39785d]">
                Müzisyen
              </a>

              <Link href="/muzik" className="transition hover:text-[#39785d]">
                Müzik
              </Link>

              <a href="#zef-cara" className="transition hover:text-[#39785d]">
                Zef Cara
              </a>

              <a href="#arsiv" className="transition hover:text-[#39785d]">
                Arşiv
              </a>

              <a href="#iletisim" className="transition hover:text-[#39785d]">
                İletişim
              </a>
            </nav>

            <AuthButtons />
          </div>
        </header>

        {/* Hero: yazı görselin içinde olduğu için kod tarafında başlık yok */}
        <section
          id="anasayfa"
          className="relative flex min-h-[calc(100svh-80px)] items-end justify-center overflow-hidden px-4 pb-8 text-white sm:px-6"
        >
          <a
            href="#muzisyen"
            aria-label="Aşağı kaydır"
            className="z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/10 text-xl text-white shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/18"
          >
            ↓
          </a>
        </section>

        {/* Müzisyen kimliği */}
        <section id="muzisyen" className="px-5 py-24 md:py-32 lg:px-10">
          <div className="mx-auto max-w-6xl rounded-4xl border border-white/70 bg-[#f7f4ec]/90 p-8 shadow-2xl backdrop-blur-xl md:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#39785d]">
              Müzisyen Kimliği
            </p>

            <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
                Kürtçe, akustik ve halk müziğinden kişisel bir arşiv
              </h1>

              <div>
                <p className="text-lg leading-9 text-[#566963]">
                  Muhammed Tankılıç’ın müzik üretimi; akustik gitar, halk
                  müziği dokusu ve kişisel hikâyeler etrafında şekillenen
                  sade bir anlatıya dayanır.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/muzik"
                    className="rounded-full bg-[#f0ca63] px-7 py-3.5 font-semibold text-[#2d2410] shadow-sm transition hover:-translate-y-1"
                  >
                    Müzik Arşivini Aç
                  </Link>

                  <a
                    href="#zef-cara"
                    className="rounded-full border border-[#17302a]/12 bg-white/70 px-7 py-3.5 font-semibold text-[#34596d] shadow-sm transition hover:-translate-y-1"
                  >
                    Öne Çıkan Eser
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Müzik alanları */}
        <section className="px-5 py-12 md:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/75">
                Üretim Alanları
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight drop-shadow-lg md:text-7xl">
                Şarkılar, yorumlar ve performanslar
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {musicHighlights.map((item) => (
                <article
                  key={item.title}
                  className="min-h-90 rounded-4xl border border-white/70 bg-[#f8fbf9]/92 p-8 shadow-2xl backdrop-blur-xl md:p-10"
                >
                  <h3 className="font-serif text-4xl leading-tight text-[#17302a]">
                    {item.title}
                  </h3>

                  <p className="mt-7 leading-8 text-[#60716b]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Zef Cara */}
        <section id="zef-cara" className="px-5 py-24 md:py-32 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <article className="grid overflow-hidden rounded-4xl border border-white/80 bg-[#edf3ef]/94 shadow-2xl backdrop-blur-xl lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative min-h-105 bg-[#dce7e1] lg:min-h-155">
                <Image
                  src="/muzik/zef-cara-cover.jpg"
                  alt="Zef Cara şarkı kapağı"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-9 md:p-12 lg:p-16">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#39785d]">
                  Öne Çıkan Single
                </p>

                <h2 className="mt-5 font-serif text-5xl text-[#17302a] md:text-7xl">
                  Zef Cara
                </h2>

                <p className="mt-4 text-lg text-[#6b7a75]">
                  Muhammed Tankılıç
                </p>

                <p className="mt-8 max-w-xl text-lg leading-8 text-[#5d6d68]">
                  Yayımlanmış özgün çalışmayı Spotify üzerinden dinleyebilir,
                  eser sayfasından platform bağlantılarına ulaşabilirsin.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="https://open.spotify.com/intl-tr/track/7B5SGhv7YD7opodmyJQQqm?si=958d9492fbd4447b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#dff0e5] px-6 py-3.5 font-semibold text-[#1f5a36] transition hover:-translate-y-1"
                  >
                    Spotify’da Dinle
                  </a>

                  <Link
                    href="/muzik"
                    className="rounded-full border border-[#17302a]/12 bg-white/70 px-6 py-3.5 font-semibold text-[#34596d] transition hover:-translate-y-1"
                  >
                    Eser Detayları
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Arşiv */}
        <section id="arsiv" className="px-5 py-16 md:py-24 lg:px-10">
          <div className="mx-auto max-w-6xl rounded-4xl border border-white/70 bg-[#f7f4ec]/90 p-8 shadow-2xl backdrop-blur-xl md:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#39785d]">
                  Arşiv
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
                  Şarkılar, videolar ve müzik içerikleri
                </h2>
              </div>

              <div className="divide-y divide-[#17302a]/10 border-y border-[#17302a]/10">
                {archiveItems.map((item) => (
                  <article
                    key={item.title}
                    className="grid gap-4 py-7 sm:grid-cols-[70px_1fr] sm:items-start"
                  >
                    <p className="font-serif text-2xl text-[#39785d]/45">
                      {item.number}
                    </p>

                    <div>
                      <h3 className="font-serif text-3xl text-[#17302a]">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-xl leading-7 text-[#62716c]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* İletişim */}
        <footer id="iletisim" className="px-5 py-20 lg:px-10">
          <div className="mx-auto max-w-6xl rounded-4xl border border-white/70 bg-[#f7f4ec]/90 p-8 shadow-2xl backdrop-blur-xl md:p-12 lg:p-16">
            <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#39785d]">
                  İletişim
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#17302a] md:text-7xl">
                  Müzik, sahne ve iş birliği için
                </h2>
              </div>

              <div className="self-end">
                <p className="text-lg leading-9 text-[#62716c]">
                  İletişim ve iş birliği e-posta adresi yakında eklenecek.
                  Sosyal medya ve müzik platform bağlantıları bu alana
                  eklenebilir.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 text-[#52645e]">
                  <a href="#muzisyen">Müzisyen</a>
                  <Link href="/muzik">Müzik</Link>
                  <a href="#zef-cara">Zef Cara</a>
                  <a href="#arsiv">Arşiv</a>
                  <a href="#anasayfa">Yukarı Dön</a>
                </div>
              </div>
            </div>

            <div className="mt-14 flex flex-col justify-between gap-3 border-t border-[#17302a]/10 pt-6 text-xs text-[#778680] sm:flex-row">
              <p>© 2026 Muhammed Tankılıç. Tüm hakları saklıdır.</p>
              <p>Müzisyen · Akustik · Halk Müziği</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
