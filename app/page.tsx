import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const latestRelease = {
  title: "Zef Cara",
  artist: "Muhammed Tankılıç",
  coverImage: "/muzik/zef-cara-cover.jpg",
  description:
    "Kürtçe sözler, akustik gitar ve sade bir yorumla şekillenen özgün çalışma.",
  spotifyUrl:
    "https://open.spotify.com/intl-tr/track/7B5SGhv7YD7opodmyJQQqm?si=958d9492fbd4447b",
  appleUrl: "https://music.apple.com/us/album/zef-cara-single/1779404301",
};

const quickLinks = [
  {
    title: "Şarkılar",
    description: "Yayınlanan parçalar, akustik kayıtlar ve özel müzik arşivi.",
    href: "/muzik",
    label: "Müzik Arşivi",
  },
  {
    title: "Videolar",
    description: "Klipler, kısa performanslar ve video kayıtları.",
    href: "/videolar",
    label: "Video Arşivi",
  },
  {
    title: "Fotoğraflar",
    description: "Kapak görselleri, portreler ve sahne arkası kareler.",
    href: "/fotograflar",
    label: "Görsel Arşiv",
  },
];

const songs = [
  {
    title: "Zef Cara",
    type: "Single",
    description: "Kürtçe sözler, akustik gitar ve yalın yorum.",
    coverImage: "/muzik/zef-cara-cover.jpg",
    href: "/muzik",
  },
  {
    title: "Akustik Kayıtlar",
    type: "Arşiv",
    description: "Ev kayıtları, prova notları ve sade yorumlar.",
    coverImage: "/muhammed-hero2.png",
    href: "/muzik",
  },
  {
    title: "Cover Yorumlar",
    type: "Yakında",
    description: "Tanıdık ezgilerin kişisel, sakin ve akustik yorumları.",
    coverImage: "/muhammed-hero2.png",
    href: "/muzik",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="site-container pt-3 md:pt-4">
        <div className="relative overflow-hidden rounded-[34px] border border-white/30 bg-white/32 px-5 py-5 shadow-[0_22px_70px_rgba(75,35,45,0.11)] backdrop-blur-[7px] md:px-8 md:py-7 lg:px-10 lg:py-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_8%,rgba(189,235,232,0.18),transparent_32%),radial-gradient(circle_at_88%_16%,rgba(245,174,80,0.12),transparent_28%)]" />

          <div className="relative grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#BDEBE8]/70 px-4 py-2 text-[11px] font-semibold text-[#4B232D]">
                  Bağımsız Sanatçı
                </span>
                <span className="rounded-full bg-white/44 px-4 py-2 text-[11px] font-semibold text-[#4B232D]/72">
                  Kürtçe Müzik
                </span>
                <span className="rounded-full bg-white/44 px-4 py-2 text-[11px] font-semibold text-[#4B232D]/72">
                  Akustik Folk
                </span>
              </div>

              <p className="section-eyebrow">Muhammed Tankılıç</p>

              <h1 className="max-w-[760px] text-[clamp(40px,6vw,70px)] font-semibold leading-[0.94] tracking-[-0.08em] text-[#4B232D]">
                Kürtçe müziğin sade, akustik ve kişisel sesi.
              </h1>

              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#4B232D]/76 md:text-[15px]">
                Muhammed Tankılıç’ın müzikleri, sözleri ve hikâyeleri. Yeni
                şarkıları dinleyin, videoları izleyin ve sanatçının kişisel
                müzik arşivini keşfedin.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/muzik" className="pill-button">
                  Şarkıları Dinle
                </Link>
                <Link href="/videolar" className="pill-button secondary">
                  Videolar
                </Link>
                <Link href="/iletisim" className="pill-button ghost">
                  İletişim
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/16 bg-[#4B232D]/82 p-4 text-white shadow-[0_20px_58px_rgba(75,35,45,0.22)] backdrop-blur-[9px]">
              <div className="grid gap-4 sm:grid-cols-[124px_1fr] lg:grid-cols-1 xl:grid-cols-[138px_1fr]">
                <div className="relative aspect-square overflow-hidden rounded-[21px] bg-black/20">
                  <Image
                    src={latestRelease.coverImage}
                    alt="Zef Cara kapak görseli"
                    fill
                    priority
                    sizes="(max-width: 900px) 45vw, 160px"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between gap-4 p-1">
                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                      Son Çıkan
                    </p>

                    <h2 className="text-[clamp(30px,3.5vw,44px)] font-semibold leading-[0.96] tracking-[-0.075em] text-white">
                      {latestRelease.title}
                    </h2>

                    <p className="mt-2 text-sm font-medium text-white/90">
                      {latestRelease.artist}
                    </p>

                    <p className="mt-3 max-w-md text-[13px] leading-6 text-white/68">
                      {latestRelease.description}
                    </p>
                  </div>

                  <div>
                    <div className="mb-3 flex h-10 items-end gap-1 rounded-2xl border border-white/15 bg-white/8 px-4 pb-3">
                      <span className="h-3 w-1 rounded-full bg-[#BDEBE8]" />
                      <span className="h-6 w-1 rounded-full bg-[#BDEBE8]" />
                      <span className="h-4 w-1 rounded-full bg-[#BDEBE8]" />
                      <span className="h-7 w-1 rounded-full bg-[#BDEBE8]" />
                      <span className="h-5 w-1 rounded-full bg-[#BDEBE8]" />
                      <span className="ml-3 text-xs font-semibold text-white/72">
                        Zef Cara
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <a
                        href={latestRelease.spotifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="pill-button"
                      >
                        Spotify
                      </a>

                      <a
                        href={latestRelease.appleUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="pill-button light-button"
                      >
                        Apple Music
                      </a>

                      <Link href="/giris" className="pill-button outline-light">
                        Üye Olup İndir
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-6 flex flex-wrap gap-2 text-[12px] font-semibold text-[#4B232D]/72">
            <span className="rounded-full bg-white/38 px-4 py-2 backdrop-blur-md">
              Son Çıkan: Zef Cara
            </span>
            <span className="rounded-full bg-white/38 px-4 py-2 backdrop-blur-md">
              Tür: Kürtçe · Akustik
            </span>
            <span className="rounded-full bg-white/38 px-4 py-2 backdrop-blur-md">
              Arşiv: Şarkılar · Videolar · Fotoğraflar
            </span>
          </div>
        </div>
      </section>

      <section className="site-container section-space">
        <div className="grid gap-4 md:grid-cols-3">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[30px] border border-[#4B232D]/10 bg-white/46 p-6 shadow-[0_18px_50px_rgba(75,35,45,0.08)] backdrop-blur-[10px] transition hover:-translate-y-1 hover:bg-white/58 hover:shadow-[0_28px_80px_rgba(75,35,45,0.16)]"
            >
              <span className="mb-8 inline-flex rounded-full bg-[#FFF4BC]/82 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#4B232D]">
                {item.label}
              </span>

              <h2 className="text-[30px] font-semibold leading-none tracking-[-0.065em] text-[#4B232D]">
                {item.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#4B232D]/68">
                {item.description}
              </p>

              <strong className="mt-7 block text-sm text-[#4B232D]">
                Sayfaya Git →
              </strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="site-container section-space">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">Şarkılar</p>
            <h2 className="section-title">Kayıtlar ve yorumlar</h2>
            <p className="section-description">
              Özgün parçalar, akustik yorumlar ve yakında eklenecek özel
              kayıtlar.
            </p>
          </div>

          <Link href="/muzik" className="pill-button secondary">
            Tümünü Gör
          </Link>
        </div>

        <div className="music-grid">
          {songs.map((song) => (
            <article key={song.title} className="music-card soft-card">
              <Link href={song.href} className="music-cover">
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
                <p>{song.description}</p>

                <div className="card-actions">
                  <Link href={song.href} className="text-link">
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
      </section>

      <section className="site-container section-space">
        <div className="grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="rounded-[32px] border border-[#4B232D]/10 bg-white/50 p-7 shadow-[0_18px_50px_rgba(75,35,45,0.08)] backdrop-blur-[10px] md:p-9">
            <p className="section-eyebrow">Hakkında</p>

            <h2 className="section-title">Söz, ses ve hikâye.</h2>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#4B232D]/70">
              Muhammed Tankılıç, Kürtçe şarkı söyleyen bağımsız bir sanatçı
              olarak müziğini sade melodiler, akustik düzenlemeler ve kişisel
              hikâyeler üzerine kurar.
            </p>

            <div className="hero-actions">
              <Link href="/hakkinda" className="pill-button dark">
                Daha Fazla
              </Link>

              <Link href="/iletisim" className="pill-button secondary">
                İletişim
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#4B232D]/10 bg-[#FFF4BC]/66 p-7 shadow-[0_18px_50px_rgba(75,35,45,0.08)] backdrop-blur-[10px] md:p-9">
            <p className="section-eyebrow">İletişim</p>

            <h2 className="text-[clamp(28px,3vw,38px)] font-semibold leading-none tracking-[-0.065em] text-[#4B232D]">
              Müzik ve iş birlikleri
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#4B232D]/70">
              Konser, kayıt, video, dijital yayın ve iş birliği talepleri için
              iletişim kanallarını kullanabilirsiniz.
            </p>

            <div className="mt-7">
              <Link href="/iletisim" className="pill-button">
                İletişim Sayfası
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-container site-footer">
        <p>© 2026 Muhammed Tankılıç. Tüm hakları saklıdır.</p>
        <span>Kürtçe müzik · Akustik yorumlar · Kişisel arşiv</span>
      </footer>
    </main>
  );
}