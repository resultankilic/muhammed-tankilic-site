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

      <section className="site-container relative pt-7 md:pt-9">
        <div className="pointer-events-none absolute left-1/2 top-5 -z-0 -translate-x-1/2 select-none text-[clamp(78px,12vw,170px)] font-black leading-none tracking-[-0.12em] text-white/70">
          MUHAMMED
        </div>

        <section className="relative z-10 mx-auto max-w-5xl rounded-[38px] border border-white/35 bg-white/62 p-7 shadow-[0_24px_70px_rgba(75,35,45,0.12)] backdrop-blur-[18px] md:p-8">
          <div className="text-center">
            <p className="section-eyebrow">Üyelik alanı</p>

            <h1 className="mx-auto mt-4 max-w-4xl text-[clamp(25px,3.1vw,42px)] font-semibold leading-[1.18] tracking-[-0.055em] text-[#4B232D]">
              <span className="block">
                Şarkı sözleri, özel içerikler ve indirme
              </span>
              <span className="block">bağlantılarına erişmek için</span>
              <span className="block">
                <span className="text-[#6F3440]">Hesap Aç</span> veya{" "}
                <span className="text-[#6F3440]">Giriş Yap</span>.
              </span>
            </h1>
          </div>

          <LoginForm />

          <div className="mt-5 flex justify-center text-sm font-bold text-[#4B232D]">
            <Link
              href="/sifremi-unuttum"
              className="transition hover:text-[#F5AE50]"
            >
              Şifremi unuttum
            </Link>
          </div>

          <div className="mt-5 rounded-[26px] border border-white/42 bg-[#FFF4BC]/68 px-5 py-4 shadow-[0_10px_28px_rgba(75,35,45,0.05)] backdrop-blur-[12px]">
            <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#4B232D]/58">
                  Yeni Şarkım Çıktı
                </p>

                <h2 className="mt-1 text-[clamp(20px,2.3vw,30px)] font-semibold leading-none tracking-[-0.065em] text-[#4B232D]">
                  Zef Cara yayında.
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#4B232D]/68">
                  Spotify ve Apple Music’te dinleyebilirsin.
                </p>
              </div>

              <Link
                href="/sarkilarim/zef-cara"
                className="pill-button dark !min-h-10 !justify-center !px-5 !py-2 !text-xs"
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