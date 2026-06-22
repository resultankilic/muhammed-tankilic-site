import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import { checkIsAdmin } from "@/lib/admin/is-admin";

export const metadata: Metadata = {
  title: "Admin Paneli | Muhammed Tankılıç",
  description:
    "Muhammed Tankılıç web sitesi içerik, fotoğraf ve yayın yönetim paneli.",
};

const adminCards = [
  {
    title: "Şarkı Yönetimi",
    description:
      "Yeni şarkı ekle, mevcut şarkıları düzenle, Spotify ve Apple Music bağlantılarını yönet.",
    href: "/admin/sarkilar",
    label: "Yakında",
  },
  {
    title: "Cover Yönetimi",
    description:
      "YouTube cover videolarını, açıklamaları ve bağlantıları panelden güncelle.",
    href: "/admin/coverlar",
    label: "Yakında",
  },
  {
    title: "Fotoğraf Yönetimi",
    description:
      "Fotoğraf yükle, galeri görsellerini düzenle ve yayına al.",
    href: "/admin/fotograflar",
    label: "Yakında",
  },
  {
    title: "Site Metinleri",
    description:
      "Ana sayfa, misyon yazısı ve iletişim metinlerini kod yazmadan düzenle.",
    href: "/admin/metinler",
    label: "Yakında",
  },
];

export default async function AdminPage() {
  const admin = await checkIsAdmin();

  if (!admin.userId) {
    redirect("/giris");
  }

  if (!admin.isAdmin) {
    redirect("/hesabim");
  }

  return (
    <main className="page-shell">
      <Navbar />

      <section className="site-container pt-40 md:pt-10">
        <div className="rounded-[24px] border border-white/35 bg-white/66 p-4 shadow-[0_16px_44px_rgba(75,35,45,0.12)] backdrop-blur-[18px] md:rounded-[38px] md:p-8">
          <div className="text-center">
            <p className="section-eyebrow">Admin Paneli</p>

            <h1 className="mx-auto max-w-3xl text-[clamp(28px,7vw,48px)] font-semibold leading-none tracking-[-0.07em] text-[#4B232D]">
              Site içeriklerini buradan yöneteceğiz.
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-[12px] leading-7 text-[#4B232D]/70 md:text-sm md:leading-8">
              Bu alan sadece yetkili admin hesabına açıktır. Şarkılar,
              coverlar, fotoğraflar ve site metinleri ilerleyen adımlarda bu
              panelden yönetilecek.
            </p>

            <div className="mx-auto mt-4 inline-flex rounded-full border border-[#4B232D]/10 bg-white/70 px-4 py-2 text-[11px] font-bold text-[#4B232D]/70 md:text-xs">
              Admin: {admin.email}
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:mt-8 md:grid-cols-2">
            {adminCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[20px] border border-white/42 bg-white/62 p-4 shadow-[0_10px_28px_rgba(75,35,45,0.06)] backdrop-blur-[12px] md:rounded-[28px] md:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-[24px] font-semibold leading-none tracking-[-0.065em] text-[#4B232D] md:text-[32px]">
                    {card.title}
                  </h2>

                  <span className="shrink-0 rounded-full bg-[#FFF4BC]/90 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#4B232D]/70">
                    {card.label}
                  </span>
                </div>

                <p className="mt-3 text-[12px] leading-6 text-[#4B232D]/70 md:text-sm md:leading-7">
                  {card.description}
                </p>

                <Link
                  href={card.href}
                  className="mt-5 inline-flex min-h-9 items-center justify-center rounded-full bg-[#4B232D] px-4 text-[11px] font-bold text-white shadow-[0_10px_22px_rgba(75,35,45,0.18)] transition hover:-translate-y-0.5 hover:bg-[#5a2b36] md:min-h-10 md:text-xs"
                >
                  Bölüme Git
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-container site-footer">
        <p>© 2026 Muhammed Tankılıç. Admin paneli.</p>
        <span>İçerik · Fotoğraf · Yayın yönetimi</span>
      </footer>
    </main>
  );
}
