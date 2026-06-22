import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Giriş Yap | Muhammed Tankılıç",
  description:
    "Muhammed Tankılıç üyelik alanına giriş yaparak özel içeriklere, şarkı sözlerine ve indirme bağlantılarına erişin.",
};

export default function LoginPage() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="site-container relative pt-40 md:pt-9">
        <div className="pointer-events-none absolute left-1/2 top-8 -z-0 hidden -translate-x-1/2 select-none text-[clamp(78px,12vw,170px)] font-black leading-none tracking-[-0.12em] text-white/70 md:block">
          MUHAMMED
        </div>

        <section className="relative z-10 mx-auto max-w-3xl rounded-[24px] border border-white/35 bg-white/66 p-4 shadow-[0_16px_44px_rgba(75,35,45,0.12)] backdrop-blur-[18px] md:max-w-5xl md:rounded-[38px] md:p-8">
          <div className="hidden text-center md:block">
            <p className="section-eyebrow">Üyelik Alanı</p>

            <h1 className="mx-auto mt-2 max-w-[310px] text-[22px] font-semibold leading-[1.12] tracking-[-0.055em] text-[#4B232D] md:mt-4 md:max-w-4xl md:text-[clamp(25px,3.1vw,42px)] md:leading-[1.18]">
              <span className="block">Şarkı sözleri ve özel içerikler için</span>
              <span className="block">
                <span className="text-[#6F3440]">Giriş Yap</span> veya{" "}
                <span className="text-[#6F3440]">Hesap Aç</span>.
              </span>
            </h1>
          </div>

          <LoginForm />

          <div className="mt-4 flex justify-center text-[12px] font-bold text-[#4B232D] md:mt-5 md:text-sm">
            <Link
              href="/sifremi-unuttum"
              className="transition hover:text-[#F5AE50]"
            >
              Şifremi unuttum
            </Link>
          </div>

          <div className="mt-4 rounded-[20px] border border-white/42 bg-[#FFF4BC]/68 px-4 py-3 shadow-[0_10px_28px_rgba(75,35,45,0.05)] backdrop-blur-[12px] md:mt-5 md:rounded-[26px] md:px-5 md:py-4">
            <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <div>
                <p className="text-[8.5px] font-bold uppercase tracking-[0.18em] text-[#4B232D]/58 md:text-[10px] md:tracking-[0.22em]">
                  Yeni Şarkım Çıktı
                </p>

                <h2 className="mt-1 text-[22px] font-semibold leading-none tracking-[-0.065em] text-[#4B232D] md:text-[clamp(20px,2.3vw,30px)]">
                  Zef Cara yayında.
                </h2>

                <p className="mt-2 text-[12px] leading-5 text-[#4B232D]/68 md:text-sm md:leading-6">
                  Spotify ve Apple Music’te dinleyebilirsin.
                </p>
              </div>

              <Link
                href="/sarkilarim/zef-cara"
                className="pill-button dark !min-h-9 !justify-center !px-4 !py-2 !text-[11px] md:!min-h-10 md:!px-5 md:!text-xs"
              >
                Şarkı Detayı →
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}