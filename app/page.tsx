"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import AuthButtons from "@/components/AuthButtons";

const archiveItems = [
  {
    number: "01",
    title: "Fotoğraflar",
    description: "Portreler, seyahatler ve sahne arkasından seçilmiş kareler.",
  },
  {
    number: "02",
    title: "Videolar",
    description: "Akustik performanslar, klipler ve özel video içerikleri.",
  },
  {
    number: "03",
    title: "Röportajlar",
    description: "Basın, podcast ve farklı platformlarda yayımlanan söyleşiler.",
  },
  {
    number: "04",
    title: "Etkinlikler",
    description: "Canlı performanslar, buluşmalar ve sahne kayıtları.",
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
      {/* TÜM SAYFA BOYUNCA HAREKET EDEN ARKA PLAN */}
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
        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-[#17302a]/10 bg-[#f7f4ec]/90 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 lg:px-10">
            <a
              href="#anasayfa"
              className="shrink-0 font-serif text-lg font-semibold tracking-tight md:text-xl"
            >
              Muhammed Tankılıç
            </a>

            <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
              <a href="#portre" className="transition hover:text-[#39785d]">
                Portre
              </a>

              <a href="#hekimlik" className="transition hover:text-[#39785d]">
                Hekimlik
              </a>

              <Link href="/muzik" className="transition hover:text-[#39785d]">
                Müzik
              </Link>

              <a href="#yazilar" className="transition hover:text-[#39785d]">
                Yazılar
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

        {/* HERO */}
        <section
          id="anasayfa"
          className="relative flex min-h-[calc(100svh-80px)] items-end justify-center overflow-hidden px-4 pb-8 text-white sm:px-6"
        >
          <a
            href="#portre"
            aria-label="Aşağı kaydır"
            className="z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/10 text-xl text-white shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/18"
          >
            ↓
          </a>
        </section>

        {/* PORTRE */}
        <section
          id="portre"
          className="border-y border-white/30 bg-[#f7f4ec]/88 px-5 py-28 backdrop-blur-lg md:py-36 lg:px-10"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#39785d]">
                Portre
              </p>

              <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
                Hekimlikten müziğe uzanan tek bir kişisel anlatı
              </h2>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-lg leading-9 text-[#566963]">
                Muhammed Tankılıç, Gaziantep Üniversitesi Tıp Fakültesi
                mezunudur. Mardin’de acil servis hekimi olarak görev yaparken,
                müzik üretimini ve kültürel içerik çalışmalarını sürdürmektedir.
              </p>

              <a
                href="#hekimlik"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#34596d]"
              >
                Yolculuğu incele
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* HEKİMLİK VE MÜZİK */}
        <section className="px-5 py-28 md:py-36 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/75">
                İki Ana Alan
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight drop-shadow-lg md:text-7xl">
                Bilimsel yaklaşım ve sanatsal ifade
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <article
                id="hekimlik"
                className="flex min-h-130 flex-col justify-between rounded-4xl border border-white/70 bg-[#e9f0f2]/94 p-9 shadow-2xl backdrop-blur md:p-12"
              >
                <div className="flex items-start justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#34596d]">
                    Hekimlik
                  </p>

                  <span className="font-serif text-3xl text-[#34596d]/30">
                    01
                  </span>
                </div>

                <div>
                  <h3 className="max-w-xl font-serif text-5xl leading-tight text-[#17302a] md:text-6xl">
                    Bilimsel güveni sade bir dille buluşturmak
                  </h3>

                  <p className="mt-7 max-w-xl text-lg leading-8 text-[#596c66]">
                    Tıp eğitimi, acil servis deneyimi ve sağlık iletişimini
                    anlaşılır içeriklerle bir araya getiren bir yaklaşım.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <span className="rounded-full bg-white/80 px-5 py-2.5 text-sm text-[#34596d]">
                      Tıp Fakültesi
                    </span>

                    <span className="rounded-full bg-white/80 px-5 py-2.5 text-sm text-[#34596d]">
                      Acil Servis
                    </span>

                    <span className="rounded-full bg-white/80 px-5 py-2.5 text-sm text-[#34596d]">
                      Sağlık İletişimi
                    </span>
                  </div>
                </div>
              </article>

              <article className="flex min-h-130 flex-col justify-between rounded-4xl border border-white/70 bg-[#eff5f1]/94 p-9 shadow-2xl backdrop-blur md:p-12">
                <div className="flex items-start justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#39785d]">
                    Müzik
                  </p>

                  <span className="font-serif text-3xl text-[#39785d]/30">
                    02
                  </span>
                </div>

                <div>
                  <h3 className="max-w-xl font-serif text-5xl leading-tight text-[#17302a] md:text-6xl">
                    Kürtçe, akustik ve halk müziğinden çalışmalar
                  </h3>

                  <p className="mt-7 max-w-xl text-lg leading-8 text-[#596c66]">
                    Gitar, bağlama ve dijital prodüksiyonla şekillenen özgün
                    eserler, cover çalışmalar ve canlı performanslar.
                  </p>

                  <Link
                    href="/muzik"
                    className="mt-10 inline-flex rounded-full bg-[#f0ca63] px-7 py-3.5 font-semibold text-[#2d2410] shadow-sm transition hover:-translate-y-1"
                  >
                    Müzik Arşivini Aç
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ÖNE ÇIKAN ESER */}
        <section className="border-y border-white/30 bg-[#f7f4ec]/88 px-5 py-28 backdrop-blur-lg md:py-36 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#39785d]">
                  Öne Çıkan Eser
                </p>

                <h2 className="mt-5 font-serif text-5xl md:text-7xl">
                  Zef Cara
                </h2>
              </div>

              <Link
                href="/muzik"
                className="text-sm font-semibold text-[#34596d]"
              >
                Tüm müzik arşivini aç →
              </Link>
            </div>

            <article className="grid overflow-hidden rounded-4xl border border-white/80 bg-[#edf3ef]/94 shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
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
                  Single
                </p>

                <h3 className="mt-5 font-serif text-5xl text-[#17302a] md:text-7xl">
                  Zef Cara
                </h3>

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

        {/* YAZILAR */}
        <section id="yazilar" className="px-5 py-28 md:py-36 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/75">
                Yazılar
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight drop-shadow-lg md:text-7xl">
                Tıp, kültür ve gündelik yaşam üzerine notlar
              </h2>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              <article className="min-h-105 rounded-4xl border border-white/70 bg-[#f8fbf9]/94 p-9 shadow-2xl backdrop-blur md:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#39785d]">
                  Tıp ve Sağlık
                </p>

                <h3 className="mt-16 max-w-xl font-serif text-4xl leading-tight text-[#17302a] md:text-5xl">
                  Bilimsel güveni koruyan, anlaşılır sağlık içerikleri
                </h3>

                <p className="mt-6 max-w-xl text-lg leading-8 text-[#60716b]">
                  Sağlık okuryazarlığı ve mesleki deneyimler üzerine ilk yazılar
                  yakında yayımlanacak.
                </p>
              </article>

              <article className="min-h-105 rounded-4xl border border-white/70 bg-[#fbf1cf]/94 p-9 shadow-2xl backdrop-blur md:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8e7427]">
                  Denemeler
                </p>

                <h3 className="mt-16 max-w-xl font-serif text-4xl leading-tight text-[#4e4016] md:text-5xl">
                  Kültür, yolculuk ve insan hikâyeleri
                </h3>

                <p className="mt-6 max-w-xl text-lg leading-8 text-[#74653b]">
                  Sanat, coğrafya ve yaşanmışlıklar üzerinden şekillenen kişisel
                  metinler bu alanda yer alacak.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ARŞİV */}
        <section
          id="arsiv"
          className="border-y border-white/30 bg-[#f7f4ec]/88 px-5 py-28 backdrop-blur-lg md:py-36 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#39785d]">
                  Arşiv
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
                  Fotoğraflar, videolar ve sahne kayıtları
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

        {/* İLETİŞİM */}
        <footer id="iletisim" className="px-5 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-4xl border border-white/25 bg-[#f7f4ec]/90 p-9 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="grid gap-12 md:grid-cols-3">
              <div>
                <h2 className="font-serif text-4xl text-[#17302a]">
                  Muhammed Tankılıç
                </h2>

                <p className="mt-5 max-w-sm leading-7 text-[#62716c]">
                  Bilim, sanat, kültür ve insan hikâyelerinin kesişiminde.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#39785d]">
                  Bölümler
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 text-[#52645e]">
                  <a href="#portre">Portre</a>
                  <a href="#hekimlik">Hekimlik</a>
                  <Link href="/muzik">Müzik</Link>
                  <a href="#yazilar">Yazılar</a>
                  <a href="#arsiv">Arşiv</a>
                  <a href="#anasayfa">Yukarı Dön</a>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#39785d]">
                  İletişim
                </p>

                <p className="mt-5 leading-7 text-[#62716c]">
                  İletişim ve iş birliği e-posta adresi yakında eklenecek.
                </p>
              </div>
            </div>

            <div className="mt-14 flex flex-col justify-between gap-3 border-t border-[#17302a]/10 pt-6 text-xs text-[#778680] sm:flex-row">
              <p>© 2026 Muhammed Tankılıç. Tüm hakları saklıdır.</p>
              <p>Doktor · Müzisyen · İçerik Üreticisi</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
