import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { featuredSongs, latestSong } from "@/lib/data/songs";

const quickLinks = [
  {
    title: "Şarkılarım",
    description: "Yayınlanan bestelerim, akustik kayıtlarım ve resmi müzik arşivim.",
    href: "/sarkilarim",
    label: "Müzik Arşivim",
  },
  {
    title: "Coverlarım",
    description: "Cover yorumlarım, kısa performanslarım ve video kayıtlarım.",
    href: "/coverlarim",
    label: "Video Arşivim",
  },
  {
    title: "Fotoğraflarım",
    description: "Kapak görsellerim, portrelerim ve sahne arkası karelerim.",
    href: "/fotograflar",
    label: "Görsel Arşivim",
  },
];

const previewSongs = [
  ...featuredSongs,
  {
    slug: "akustik-kayitlar",
    title: "Akustik Kayıtlar",
    type: "Arşiv",
    shortDescription: "Ev kayıtlarım, prova notlarım ve sade yorumlarım.",
    coverImage: "/muhammed-hero2-site.jpg",
  },
  {
    slug: "cover-yorumlar",
    title: "Cover Yorumlar",
    type: "Yakında",
    shortDescription:
      "Tanıdık ezgileri kişisel, sakin ve akustik yorumlarımla paylaşıyorum.",
    coverImage: "/muhammed-hero2-site.jpg",
  },
].slice(0, 3);

const spotifyEmbedUrl =
  "https://open.spotify.com/embed/track/7B5SGhv7YD7opodmyJQQqm?utm_source=generator";

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="site-container pt-1 md:pt-4">
        <article className="relative flex min-h-[490px] flex-col justify-end sm:min-h-[600px] md:min-h-[calc(100vh-132px)]">
          <div className="rounded-[22px] border border-white/28 bg-white/14 p-2 shadow-[0_16px_44px_rgba(75,35,45,0.08)] backdrop-blur-[16px] sm:p-3 md:rounded-[28px] md:p-4">
            <div className="grid gap-2 md:gap-3 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="flex min-h-[116px] flex-col justify-between rounded-[18px] border border-white/22 bg-white/10 px-4 py-3.5 sm:min-h-[148px] sm:rounded-[22px] sm:px-5 sm:py-4">
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#4B232D]/58 sm:text-[10px] sm:tracking-[0.22em]">
                    Yeni Şarkım Çıktı Hemen Dinle ---&gt;
                  </p>

                  <div className="mt-2.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 sm:mt-3 sm:gap-x-3">
                    <h1 className="text-[clamp(24px,7.4vw,32px)] font-semibold leading-none tracking-[-0.07em] text-[#4B232D] md:text-[clamp(24px,2.7vw,38px)]">
                      {latestSong.title}
                    </h1>

                    <span className="text-[11px] font-medium text-[#4B232D]/68 sm:text-sm">
                      {latestSong.artist}
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                  <Link
                    href={`/sarkilarim/${latestSong.slug}`}
                    className="rounded-full border border-[#4B232D]/12 bg-white/74 px-4 py-2 text-[11px] font-bold text-[#4B232D] transition hover:-translate-y-0.5 hover:bg-white/86 sm:text-[12px]"
                  >
                    Şarkı Detayı
                  </Link>

                  <Link
                    href="/sarkilarim"
                    className="rounded-full border border-[#4B232D]/12 bg-white/74 px-4 py-2 text-[11px] font-bold text-[#4B232D] transition hover:-translate-y-0.5 hover:bg-white/86 sm:text-[12px]"
                  >
                    Tüm Şarkılarım
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-[18px] border border-white/22 bg-white/10 sm:rounded-[22px]">
                <iframe
                  src={spotifyEmbedUrl}
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="block h-[152px] w-full border-0"
                  title={`${latestSong.title} Spotify oynatıcı`}
                />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="site-container section-space">
        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[22px] border border-[#4B232D]/10 bg-white/58 p-4 shadow-[0_14px_38px_rgba(75,35,45,0.08)] backdrop-blur-[14px] transition hover:-translate-y-1 hover:bg-white/68 hover:shadow-[0_28px_80px_rgba(75,35,45,0.16)] md:rounded-[30px] md:p-6"
            >
              <span className="mb-4 inline-flex rounded-full bg-[#FFF4BC]/82 px-3 py-1.5 text-[8.5px] font-bold uppercase tracking-[0.13em] text-[#4B232D] md:mb-8 md:text-[10px]">
                {item.label}
              </span>

              <h2 className="text-[25px] font-semibold leading-none tracking-[-0.065em] text-[#4B232D] md:text-[30px]">
                {item.title}
              </h2>

              <p className="mt-3 text-[12px] leading-6 text-[#4B232D]/68 md:mt-4 md:text-sm md:leading-7">
                {item.description}
              </p>

              <strong className="mt-5 block text-[12px] text-[#4B232D] md:mt-7 md:text-sm">
                Sayfaya Git →
              </strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="site-container section-space">
        <div className="rounded-[24px] border border-white/35 bg-white/58 p-4 shadow-[0_14px_38px_rgba(75,35,45,0.08)] backdrop-blur-[14px] md:rounded-[34px] md:p-8 lg:p-10">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Şarkılarım</p>
              <h2 className="section-title">Bestelerim ve Resmi Yayınlarım</h2>
              <p className="section-description">
                Spotify ve Apple Music’te yayınlanan özgün parçalarım, şarkı
                hikâyelerim ve dinleme bağlantılarım.
              </p>
            </div>

            <Link href="/sarkilarim" className="pill-button secondary">
              Tümünü Gör
            </Link>
          </div>

          <div className="music-grid">
            {previewSongs.map((song) => (
              <article key={song.slug} className="music-card soft-card">
                <Link
                  href={
                    song.slug === latestSong.slug
                      ? `/sarkilarim/${song.slug}`
                      : "/sarkilarim"
                  }
                  className="music-cover"
                >
                  <Image
                    src={song.coverImage}
                    alt={`${song.title} görseli`}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className="object-cover"
                  />
                </Link>

                <div className="music-card-body">
                  <span>{song.type}</span>
                  <h3>{song.title}</h3>
                  <p>{song.shortDescription}</p>

                  <div className="card-actions">
                    <Link
                      href={
                        song.slug === latestSong.slug
                          ? `/sarkilarim/${song.slug}`
                          : "/sarkilarim"
                      }
                      className="text-link"
                    >
                      Detay
                    </Link>

                    <Link href="/giris" className="text-link muted">
                      İndir
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container section-space">
        <div className="grid gap-3 lg:grid-cols-[1.18fr_0.82fr] lg:gap-4">
          <div className="rounded-[24px] border border-[#4B232D]/10 bg-white/58 p-5 shadow-[0_14px_38px_rgba(75,35,45,0.08)] backdrop-blur-[14px] md:rounded-[32px] md:p-9">
            <p className="section-eyebrow">Kısa Not</p>

            <h2 className="section-title">Söz, ses ve hikâye.</h2>

            <p className="mt-4 max-w-2xl text-[12px] leading-7 text-[#4B232D]/70 md:mt-5 md:text-sm md:leading-8">
              Kürtçe şarkılar söyleyen bağımsız bir sanatçı olarak müziğimi
              sade melodiler, akustik düzenlemeler ve kişisel hikâyeler üzerine
              kuruyorum. Resmi yayınlarım, cover yorumlarım ve iletişim
              kanallarım için ilgili sayfalara göz atabilirsin.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5 md:mt-7 md:gap-3">
              <Link href="/iletisim" className="pill-button dark">
                İletişime Geç
              </Link>

              <Link href="/sarkilarim" className="pill-button secondary">
                Şarkılarım
              </Link>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#4B232D]/10 bg-[#FFF4BC]/72 p-5 shadow-[0_14px_38px_rgba(75,35,45,0.08)] backdrop-blur-[14px] md:rounded-[32px] md:p-9">
            <p className="section-eyebrow">Coverlarım</p>

            <h2 className="text-[clamp(24px,7.4vw,32px)] font-semibold leading-none tracking-[-0.065em] text-[#4B232D] md:text-[clamp(28px,3vw,38px)]">
              YouTube ve Instagram yorumlarım
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-[#4B232D]/70 md:mt-5 md:text-sm md:leading-7">
              Cover videolarım, kısa performanslarım ve sosyal medya
              içeriklerim Coverlarım bölümünde ayrı olarak listelenir.
            </p>

            <div className="mt-5 md:mt-7">
              <Link href="/coverlarim" className="pill-button">
                Coverlarım
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-container site-footer">
        <p>© 2026 Muhammed Tankılıç. Tüm hakları saklıdır.</p>
        <span>Kürtçe müzik · Akustik yorumlarım · Kişisel arşivim</span>
      </footer>
    </main>
  );
}