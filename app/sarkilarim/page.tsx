import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { publishedSongs, type MusicPlatform, type Song } from "@/lib/data/songs";

export const metadata: Metadata = {
  title: "Şarkılarım | Muhammed Tankılıç",
  description:
    "Muhammed Tankılıç’ın besteleri, Spotify ve Apple Music yayınları, şarkı detayları ve dinleme bağlantıları.",
};

function getPlatform(song: Song, name: MusicPlatform["name"]) {
  return song.platforms.find((platform) => platform.name === name);
}

function getPlatformLabel(platform: MusicPlatform) {
  if (platform.name === "Spotify") return "Spotify";
  if (platform.name === "Apple Music") return "Apple Music";
  return "YouTube";
}

function PlatformButton({ platform }: { platform: MusicPlatform }) {
  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-9 w-full items-center justify-center rounded-full border border-[#4B232D]/12 bg-white/76 px-3 text-center text-[11px] font-bold leading-none text-[#4B232D] transition hover:-translate-y-0.5 hover:bg-white/90 md:w-auto md:min-h-10 md:px-4 md:text-[12px]"
    >
      {getPlatformLabel(platform)}
    </a>
  );
}

function MobileSongPanel({ song }: { song: Song }) {
  const spotify = getPlatform(song, "Spotify");
  const appleMusic = getPlatform(song, "Apple Music");
  const youtube = getPlatform(song, "YouTube");

  const hasYoutube = Boolean(song.youtubeEmbedUrl);
  const hasSpotify = Boolean(song.spotifyEmbedUrl);

  return (
    <article className="grid gap-2.5 overflow-hidden rounded-[24px] border border-white/35 bg-white/60 p-3.5 shadow-[0_14px_38px_rgba(75,35,45,0.08)] backdrop-blur-[14px] md:hidden">
      {hasSpotify ? (
        <div className="overflow-hidden rounded-[20px] border border-white/24 bg-white/20 shadow-[0_14px_38px_rgba(75,35,45,0.10)]">
          <iframe
            src={song.spotifyEmbedUrl}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block h-[152px] w-full border-0"
            title={`${song.title} Spotify oynatıcı`}
          />
        </div>
      ) : null}

      {!hasSpotify && hasYoutube ? (
        <div className="overflow-hidden rounded-[20px] border border-white/24 bg-[#4B232D]/88 shadow-[0_14px_38px_rgba(75,35,45,0.12)]">
          <iframe
            src={song.youtubeEmbedUrl}
            title={`${song.title} YouTube videosu`}
            className="block aspect-video w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="rounded-[20px] border border-[#4B232D]/10 bg-white/54 p-4 shadow-[0_10px_28px_rgba(75,35,45,0.05)] backdrop-blur-[12px]">
        <p className="section-eyebrow">Şarkı Notu</p>

        <p className="mt-2 text-[12px] leading-6 text-[#4B232D]/72">
          {song.description}
        </p>
      </div>

      <div className="rounded-[20px] border border-white/24 bg-white/52 p-3.5 shadow-[0_14px_38px_rgba(75,35,45,0.08)] backdrop-blur-[14px]">
        <p className="text-center text-[8.5px] font-bold uppercase tracking-[0.18em] text-[#4B232D]/56">
          Dinleme Linkleri
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <Link
            href={`/sarkilarim/${song.slug}`}
            className="inline-flex min-h-9 w-full items-center justify-center rounded-full border border-[#4B232D]/12 bg-white/76 px-3 text-center text-[11px] font-bold leading-none text-[#4B232D] transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            Şarkı Detayı
          </Link>

          {spotify ? <PlatformButton platform={spotify} /> : null}

          {appleMusic ? <PlatformButton platform={appleMusic} /> : null}

          {youtube ? <PlatformButton platform={youtube} /> : null}

          <Link
            href="/giris"
            className="inline-flex min-h-9 w-full items-center justify-center rounded-full border border-[#4B232D]/12 bg-[#FFF4BC]/88 px-3 text-center text-[11px] font-bold leading-none text-[#4B232D] transition hover:-translate-y-0.5"
          >
            Siteden İndir
          </Link>
        </div>
      </div>
    </article>
  );
}

function DesktopSongPanel({ song }: { song: Song }) {
  const spotify = getPlatform(song, "Spotify");
  const appleMusic = getPlatform(song, "Apple Music");
  const youtube = getPlatform(song, "YouTube");

  const hasYoutube = Boolean(song.youtubeEmbedUrl);
  const hasSpotify = Boolean(song.spotifyEmbedUrl);

  return (
    <article className="hidden overflow-hidden rounded-[34px] border border-white/35 bg-white/56 p-6 shadow-[0_18px_50px_rgba(75,35,45,0.08)] backdrop-blur-[14px] md:block">
      <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
        <div className="flex min-h-[254px] flex-col justify-center rounded-[28px] border border-[#4B232D]/10 bg-white/48 p-6">
          <p className="section-eyebrow">Şarkılarım</p>

          <h2 className="text-[clamp(38px,5vw,64px)] font-semibold leading-[0.94] tracking-[-0.08em] text-[#4B232D]">
            {song.title}
          </h2>

          <p className="mt-3 text-sm font-medium text-[#4B232D]/64">
            {song.artist}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#4B232D]/70">
            {song.description}
          </p>

          <div className="mt-6">
            <Link
              href={`/sarkilarim/${song.slug}`}
              className="inline-flex rounded-full border border-[#4B232D]/12 bg-white/72 px-4 py-2 text-[12px] font-bold text-[#4B232D] transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Şarkı Detayı
            </Link>
          </div>
        </div>

        <div className="flex min-h-[254px] flex-col gap-3">
          {hasYoutube ? (
            <div className="overflow-hidden rounded-[26px] border border-white/24 bg-[#4B232D]/88 shadow-[0_18px_50px_rgba(75,35,45,0.12)]">
              <iframe
                src={song.youtubeEmbedUrl}
                title={`${song.title} YouTube videosu`}
                className="block aspect-video w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : null}

          {hasSpotify ? (
            <div className="overflow-hidden rounded-[26px] border border-white/24 bg-white/20 shadow-[0_18px_50px_rgba(75,35,45,0.10)]">
              <iframe
                src={song.spotifyEmbedUrl}
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="block h-[152px] w-full border-0"
                title={`${song.title} Spotify oynatıcı`}
              />
            </div>
          ) : null}

          {!hasYoutube && !hasSpotify ? (
            <div className="flex min-h-[152px] items-center justify-center rounded-[26px] border border-white/24 bg-white/34 p-6 text-center shadow-[0_18px_50px_rgba(75,35,45,0.10)]">
              <div>
                <p className="section-eyebrow">Dinleme</p>
                <h3 className="text-[28px] font-semibold leading-none tracking-[-0.065em] text-[#4B232D]">
                  Platform bağlantıları yakında.
                </h3>
              </div>
            </div>
          ) : null}

          <div className="flex flex-1 flex-col justify-center rounded-[26px] border border-white/24 bg-white/50 p-5 shadow-[0_18px_50px_rgba(75,35,45,0.08)] backdrop-blur-[14px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4B232D]/56">
              Dinleme Linkleri
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {spotify ? <PlatformButton platform={spotify} /> : null}
              {appleMusic ? <PlatformButton platform={appleMusic} /> : null}
              {youtube ? <PlatformButton platform={youtube} /> : null}

              <Link
                href="/giris"
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#4B232D]/12 bg-[#FFF4BC]/86 px-4 text-[12px] font-bold text-[#4B232D] transition hover:-translate-y-0.5"
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

function SongPanel({ song }: { song: Song }) {
  return (
    <>
      <MobileSongPanel song={song} />
      <DesktopSongPanel song={song} />
    </>
  );
}

export default function SarkilarimPage() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="site-container pt-40 md:pt-4">
        <div className="mb-3 hidden items-end justify-between gap-4 md:mb-5 md:flex">
          <div>
            <p className="section-eyebrow">Şarkılarım</p>
            <h1 className="text-[clamp(34px,4.6vw,58px)] font-semibold leading-none tracking-[-0.075em] text-[#4B232D]">
              Bestelerim
            </h1>
          </div>

          <Link href="/coverlarim" className="pill-button secondary">
            Coverlarım
          </Link>
        </div>

        <div className="grid gap-4 md:gap-5">
          {publishedSongs.map((song) => (
            <SongPanel key={song.slug} song={song} />
          ))}
        </div>
      </section>

      <footer className="site-container site-footer">
        <p>© 2026 Muhammed Tankılıç. Tüm hakları saklıdır.</p>
        <span>Resul Tankılıç Tarafından Tasarlanmıştır.</span>
      </footer>
    </main>
  );
}