import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const songCards = [
  {
    label: "Single",
    title: "Zef Cara",
    desc: "Kürtçe sözler, akustik gitar ve yalın bir yorumla şekillenen özgün çalışma.",
  },
  {
    label: "Arşiv",
    title: "Akustik Kayıtlar",
    desc: "Ev kayıtları, prova notları ve sade yorumlardan oluşan kişisel müzik seçkisi.",
  },
  {
    label: "Yakında",
    title: "Cover Yorumlar",
    desc: "Tanıdık ezgilerin Muhammed Tankılıç yorumuyla yeniden kaydedilen halleri.",
  },
];

const photoCards = [
  {
    title: "Kapak görselleri",
    desc: "Şarkı kapakları ve yayın görselleri için galeri alanı.",
  },
  {
    title: "Portreler",
    desc: "Sanatçı kimliği için sade portre arşivi.",
  },
  {
    title: "Sahne arkası",
    desc: "Kayıt, prova ve üretim sürecinden kişisel kareler.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_left,#d8f1f7_0%,#edf4ef_48%,#eef2ea_100%)] text-[#4c2a34]">
      <div className="mx-auto max-w-[1500px] px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <Navbar />

        {/* HERO */}
        <section className="mt-8">
          <div className="relative min-h-[820px] overflow-hidden rounded-[36px] border border-white/30 bg-white/10 shadow-[0_20px_80px_rgba(25,35,30,0.08)]">
            {/* background image */}
            <div className="absolute inset-0">
              <Image
                src="/muhammed-her2.png"
                alt="Muhammed Tankılıç gitar çalarken"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* soft overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(239,244,241,0.08)_0%,rgba(255,255,255,0.04)_40%,rgba(255,255,255,0.02)_100%)]" />

            {/* background title on image */}
            <div className="pointer-events-none absolute inset-x-0 top-14 z-10 hidden text-center lg:block">
              <p className="text-[86px] font-black uppercase leading-[0.92] tracking-[-0.04em] text-white/92">
                MUHAMMED
              </p>
              <p className="mt-1 text-[74px] font-black uppercase leading-[0.92] tracking-[-0.04em] text-[#f5b24c]">
                TANKILIÇ
              </p>
            </div>

            {/* left content card */}
            <div className="relative z-20 p-5 sm:p-8">
              <div className="w-full max-w-[360px] rounded-[32px] border border-[#6e4450]/10 bg-white/88 p-8 shadow-[0_14px_48px_rgba(50,40,45,0.10)] backdrop-blur-sm sm:p-9">
                <p className="text-[11px] uppercase tracking-[0.30em] text-[#6d4b56]">
                  Bağımsız Kürtçe Müzik
                </p>

                <h1 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[-0.04em] text-[#5e2636] sm:text-6xl">
                  Muhammed
                  <br />
                  Tankılıç
                </h1>

                <p className="mt-6 text-[18px] leading-9 text-[#6b5d62]">
                  Kürtçe şarkılar, akustik yorumlar ve kişisel hikâyeler.
                  Muhammed Tankılıç’ın müziklerini, sözlerini ve kayıtlarını
                  sade bir dijital arşivde keşfet.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="rounded-[22px] border border-[#6e4450]/10 bg-white/65 px-5 py-4">
                    <p className="text-[11px] uppercase tracking-[0.30em] text-[#958289]">
                      Tarz
                    </p>
                    <p className="mt-2 text-lg font-medium text-[#4f2834]">
                      Kürtçe Akustik
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-[#6e4450]/10 bg-white/65 px-5 py-4">
                    <p className="text-[11px] uppercase tracking-[0.30em] text-[#958289]">
                      Arşiv
                    </p>
                    <p className="mt-2 text-lg font-medium text-[#4f2834]">
                      Şarkılar
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-[#6e4450]/10 bg-white/65 px-5 py-4">
                    <p className="text-[11px] uppercase tracking-[0.30em] text-[#958289]">
                      Erişim
                    </p>
                    <p className="mt-2 text-lg font-medium text-[#4f2834]">
                      Üyelikli
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href="/muzik"
                    className="rounded-full bg-[#f4b04b] px-6 py-4 text-center text-lg font-medium text-[#4d2633] transition hover:opacity-90"
                  >
                    Son Çıkanı Dinle
                  </Link>

                  <Link
                    href="/muzik"
                    className="rounded-full border border-[#6e4450]/12 bg-white/72 px-6 py-4 text-center text-lg font-medium text-[#5d3340] transition hover:bg-white"
                  >
                    Müzik Arşivi
                  </Link>

                  <Link
                    href="/kayit"
                    className="rounded-full bg-[#662738] px-6 py-4 text-center text-lg font-medium text-white transition hover:opacity-90"
                  >
                    Üye Ol
                  </Link>
                </div>
              </div>
            </div>

            {/* top-right tiny pill */}
            <div className="absolute right-5 top-5 z-20 rounded-full border border-white/40 bg-white/80 px-5 py-2 text-[12px] uppercase tracking-[0.30em] text-[#4e2a33] backdrop-blur-sm sm:right-8 sm:top-8">
              Müzik · Söz · Hikâye
            </div>

            {/* bottom-right small pill */}
            <div className="absolute bottom-5 right-5 z-20 rounded-full border border-white/40 bg-white/86 px-5 py-3 text-sm text-[#4e2a33] shadow-sm backdrop-blur-sm sm:bottom-8 sm:right-8">
              Kürtçe müzik · Akustik yorumlar
            </div>
          </div>
        </section>

        {/* ÜYELİK */}
        <section className="mt-10">
          <div className="rounded-[32px] border border-[#7cb8ae]/20 bg-[#bfe8e4]/82 px-6 py-7 shadow-[0_14px_36px_rgba(55,80,75,0.08)] sm:px-8 sm:py-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#5d3d47]">
                  Üyelik
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#5d2635] sm:text-4xl">
                  Özel içerikler ve indirmeler için giriş yap.
                </h2>
                <p className="mt-3 max-w-3xl text-[17px] leading-8 text-[#6d5f64]">
                  Üyeler şarkı sözlerine, özel içeriklere ve indirme
                  bağlantılarına erişebilir.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/hesabim"
                  className="rounded-full bg-white px-6 py-3 font-medium text-[#58283a]"
                >
                  Hesabım
                </Link>
                <Link
                  href="/giris"
                  className="rounded-full bg-[#64283a] px-6 py-3 font-medium text-white"
                >
                  Giriş Yap
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SON ÇIKAN */}
        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.30em] text-[#6a4b55]">
                Son çıkan
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#5e2636] sm:text-5xl">
                Yeni kayıt
              </h2>
              <p className="mt-3 text-[17px] leading-8 text-[#726468]">
                En son yayımlanan parça, dinleme bağlantıları ve video alanı.
              </p>
            </div>

            <Link
              href="/muzik"
              className="rounded-full border border-[#6e4450]/10 bg-white/75 px-6 py-3 font-medium text-[#5a2b38]"
            >
              Tüm Müzikler
            </Link>
          </div>

          <div className="mt-7 grid gap-6 rounded-[34px] border border-[#6e4450]/10 bg-white/76 p-4 shadow-[0_20px_50px_rgba(30,35,35,0.08)] lg:grid-cols-[360px_1fr] lg:p-5">
            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[#121212]">
              <Image
                src="/zefcara.jpeg"
                alt="Zef Cara kapak görseli"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#4f2a34]">
                Latest Release
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
              <div className="rounded-[28px] border border-[#6e4450]/8 bg-white/85 p-6 sm:p-7">
                <p className="text-[11px] uppercase tracking-[0.30em] text-[#8b767e]">
                  Öne çıkan eser
                </p>

                <h3 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-[#5e2636]">
                  Zef Cara
                </h3>

                <p className="mt-2 text-lg text-[#7d6870]">
                  Muhammed Tankılıç
                </p>

                <p className="mt-6 max-w-2xl text-[18px] leading-9 text-[#6d5e63]">
                  Kürtçe sözler, akustik gitar ve sade bir yorumla şekillenen
                  özgün çalışma.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="https://open.spotify.com"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#f4b04b] px-5 py-3 font-medium text-[#552737]"
                  >
                    Spotify
                  </a>
                  <a
                    href="https://music.apple.com"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#6e4450]/10 bg-white px-5 py-3 font-medium text-[#552737]"
                  >
                    Apple Music
                  </a>
                  <Link
                    href="/giris"
                    className="rounded-full border border-[#6e4450]/10 bg-white px-5 py-3 font-medium text-[#552737]"
                  >
                    İndir
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[28px] border border-[#6e4450]/8 bg-white/85 p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#8b767e]">
                    Video alanı
                  </p>
                  <div className="mt-4 flex h-[170px] items-center justify-center rounded-[22px] bg-[#f4f2f1] text-center text-sm text-[#86757b]">
                    YouTube videosu eklendiğinde burada oynatılacak.
                  </div>
                </div>

                <div className="rounded-[28px] border border-[#6e4450]/8 bg-white/85 p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#8b767e]">
                    Siteden dinle
                  </p>
                  <div className="mt-4 rounded-[20px] bg-[#f7f5f4] p-4">
                    <p className="text-3xl font-semibold tracking-[-0.03em] text-[#5e2636]">
                      Zef Cara
                    </p>
                    <audio controls className="mt-4 w-full">
                      <source src="/audio/zef-cara.mp3" />
                    </audio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ŞARKILAR */}
        <section className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.30em] text-[#6a4b55]">
                Şarkılar
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#5e2636] sm:text-5xl">
                Kayıtlar ve yorumlar
              </h2>
              <p className="mt-3 text-[17px] leading-8 text-[#726468]">
                Özgün parçalar, akustik yorumlar ve yakında eklenecek özel
                kayıtlar.
              </p>
            </div>

            <Link
              href="/muzik"
              className="rounded-full border border-[#6e4450]/10 bg-white/75 px-6 py-3 font-medium text-[#5a2b38]"
            >
              Tümünü Gör
            </Link>
          </div>

          <div className="mt-7 grid gap-6 lg:grid-cols-3">
            {songCards.map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-[30px] border border-[#6e4450]/10 bg-white/82 shadow-[0_14px_40px_rgba(30,35,35,0.07)]"
              >
                <div className="h-[180px] bg-[linear-gradient(135deg,#0f1113_0%,#1d2024_100%)]" />
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.30em] text-[#89767c]">
                    {card.label}
                  </p>
                  <h3 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#5e2636]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-8 text-[#6e6065]">
                    {card.desc}
                  </p>

                  <div className="mt-6 flex gap-3">
                    <Link
                      href="/muzik"
                      className="rounded-full bg-[#f4b04b] px-5 py-3 font-medium text-[#552737]"
                    >
                      Detay
                    </Link>
                    <Link
                      href="/giris"
                      className="rounded-full border border-[#6e4450]/10 bg-white px-5 py-3 font-medium text-[#552737]"
                    >
                      İndir
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VİDEOLAR */}
        <section className="mt-16">
          <div className="rounded-[34px] border border-[#e5d9a8]/30 bg-[#f7efbe]/72 p-7 shadow-[0_14px_36px_rgba(40,35,20,0.06)] sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.30em] text-[#6a4b55]">
              Videolar
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#5e2636] sm:text-5xl">
              Klipler ve performanslar
            </h2>
            <p className="mt-3 text-[17px] leading-8 text-[#726468]">
              YouTube videoları, kısa performanslar ve müzik arşivinden
              görüntüler bu alanda toplanır.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-[28px] border border-[#6e4450]/10 bg-white/72 p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8b767e]">
                  Video
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#5e2636]">
                  Son çıkan video
                </h3>
                <p className="mt-4 text-[16px] leading-8 text-[#6e6065]">
                  YouTube bağlantısı eklendiğinde burada oynatılacak.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#6e4450]/10 bg-white/72 p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8b767e]">
                  Arşiv
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#5e2636]">
                  Kısa performanslar
                </h3>
                <p className="mt-4 text-[16px] leading-8 text-[#6e6065]">
                  Sosyal medya ve sahne arkası müzik kesitleri için alan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOTOĞRAFLAR */}
        <section className="mt-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.30em] text-[#6a4b55]">
              Fotoğraflar
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#5e2636] sm:text-5xl">
              Görsel arşiv
            </h2>
            <p className="mt-3 text-[17px] leading-8 text-[#726468]">
              Kapak tasarımları, portreler ve sahne arkası görselleri için sade
              bir galeri alanı.
            </p>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {photoCards.map((card, index) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-[30px] border border-[#6e4450]/10 bg-white/82 shadow-[0_14px_40px_rgba(30,35,35,0.07)]"
              >
                <div
                  className={`h-[220px] ${
                    index === 1 ? "bg-[#dff1f5]" : "bg-[#111316]"
                  }`}
                />
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.30em] text-[#89767c]">
                    Fotoğraf arşivi
                  </p>
                  <h3 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#5e2636]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-8 text-[#6e6065]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HAKKINDA */}
        <section className="mt-16">
          <div className="rounded-[34px] bg-[#86646b] px-7 py-8 text-white shadow-[0_18px_45px_rgba(40,25,30,0.12)] sm:px-8 sm:py-9">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr] lg:items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.30em] text-white/75">
                  Hakkında
                </p>
                <h2 className="mt-3 text-5xl font-semibold tracking-[-0.04em] leading-[0.95]">
                  Söz, ses ve hikâye.
                </h2>
              </div>

              <p className="text-[17px] leading-9 text-white/88">
                Muhammed Tankılıç, Kürtçe şarkı söyleyen bağımsız bir sanatçı
                olarak müziğini sade melodiler, akustik düzenlemeler ve kişisel
                hikâyeler üzerine kurar. Yazdığı sözlerde hem anlamı hem de
                kulağa doğal gelen modern bir müzik dilini önemser.
              </p>
            </div>
          </div>
        </section>

        {/* İLETİŞİM / FOOTER */}
        <section className="mt-16">
          <div className="rounded-[34px] border border-[#6e4450]/10 bg-white/82 px-7 py-8 shadow-[0_18px_45px_rgba(35,35,35,0.08)] sm:px-8 sm:py-9">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.30em] text-[#6a4b55]">
                  İletişim
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#5e2636] sm:text-5xl">
                  Müzik ve iş birlikleri
                </h2>
                <p className="mt-3 max-w-3xl text-[17px] leading-8 text-[#726468]">
                  Konser, kayıt, video, dijital yayın ve iş birliği talepleri
                  için iletişim kanalları bu alanda yer alacak.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:iletisim@muhammedtankilic.com"
                  className="rounded-full bg-[#f4b04b] px-6 py-3 font-medium text-[#552737]"
                >
                  E-posta
                </a>
                <Link
                  href="/"
                  className="rounded-full border border-[#6e4450]/10 bg-white px-6 py-3 font-medium text-[#552737]"
                >
                  Yukarı Dön
                </Link>
              </div>
            </div>

            <div className="mt-8 border-t border-[#6e4450]/10 pt-6 text-sm text-[#7d6f74]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p>© 2026 Muhammed Tankılıç. Tüm hakları saklıdır.</p>
                <p>Kürtçe müzik · Akustik yorumlar · Kişisel arşiv</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}