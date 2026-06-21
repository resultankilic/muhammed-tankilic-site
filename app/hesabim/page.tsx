"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/client";

type UserInfo = {
  ad: string;
  soyad: string;
  email: string;
  telefon: string;
  bildirimIzni: boolean;
};

const profileItems = [
  {
    label: "Ad Soyad",
    key: "fullName",
  },
  {
    label: "E-posta",
    key: "email",
  },
  {
    label: "Telefon",
    key: "telefon",
  },
  {
    label: "Bildirimler",
    key: "bildirim",
  },
];

export default function HesabimPage() {
  const [supabase] = useState(() => createClient());
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        window.location.href = "/giris?next=/hesabim";
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("ad, soyad, telefon, bildirim_izni")
        .eq("id", user.id)
        .maybeSingle();

      if (profileError) {
        setMessage("Profil bilgileri Supabase üzerinden yüklenemedi.");
      }

      const metadata = user.user_metadata || {};

      setUserInfo({
        ad: profile?.ad || metadata.ad || "",
        soyad: profile?.soyad || metadata.soyad || "",
        email: user.email || "",
        telefon: profile?.telefon || metadata.telefon || "",
        bildirimIzni: Boolean(
          profile?.bildirim_izni ?? metadata.bildirim_izni ?? false,
        ),
      });

      setLoading(false);
    }

    loadUser();
  }, [supabase]);

  const fullName = `${userInfo?.ad || ""} ${userInfo?.soyad || ""}`.trim();

  function getProfileValue(key: string) {
    if (key === "fullName") return fullName || "-";
    if (key === "email") return userInfo?.email || "-";
    if (key === "telefon") return userInfo?.telefon || "-";
    if (key === "bildirim") return userInfo?.bildirimIzni ? "Açık" : "Kapalı";

    return "-";
  }

  if (loading) {
    return (
      <main className="page-shell">
        <Navbar />

        <section className="site-container relative pt-7 md:pt-9">
          <div className="mx-auto max-w-4xl rounded-[34px] border border-white/35 bg-white/62 p-8 text-center shadow-[0_22px_64px_rgba(75,35,45,0.10)] backdrop-blur-[18px]">
            <p className="section-eyebrow">Hesabım</p>

            <h1 className="mt-3 text-[clamp(38px,4.6vw,62px)] font-semibold leading-none tracking-[-0.085em] text-[#4B232D]">
              Bilgiler yükleniyor...
            </h1>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <Navbar />

      <section className="site-container relative pt-7 md:pt-9">
        <div className="pointer-events-none absolute left-1/2 top-5 -z-0 -translate-x-1/2 select-none text-[clamp(78px,12vw,170px)] font-black leading-none tracking-[-0.12em] text-white/70">
          MUHAMMED
        </div>

        <section className="relative z-10 mx-auto max-w-5xl rounded-[38px] border border-white/35 bg-white/62 p-7 shadow-[0_24px_70px_rgba(75,35,45,0.12)] backdrop-blur-[18px] md:p-8">
          <div className="text-center">
            <p className="section-eyebrow">Kullanıcı paneli</p>

            <h1 className="mt-3 text-[clamp(54px,6vw,88px)] font-semibold leading-none tracking-[-0.095em] text-[#4B232D]">
              Hesabım
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#4B232D]/68">
              Üyelik bilgilerini, bildirim tercihini ve hesap erişimini buradan
              takip edebilirsin.
            </p>
          </div>

          {message ? (
            <p className="mt-6 rounded-[22px] border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold leading-7 text-red-700 shadow-[0_10px_28px_rgba(75,35,45,0.05)]">
              {message}
            </p>
          ) : null}

          <div className="mt-7 rounded-[32px] border border-white/42 bg-white/58 p-5 shadow-[0_12px_34px_rgba(75,35,45,0.05)] backdrop-blur-[12px]">
            <div className="grid gap-4 sm:grid-cols-2">
              {profileItems.map((item) => (
                <ProfileBox
                  key={item.key}
                  label={item.label}
                  value={getProfileValue(item.key)}
                />
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-[26px] border border-white/42 bg-[#FFF4BC]/70 px-5 py-4 shadow-[0_10px_28px_rgba(75,35,45,0.05)] backdrop-blur-[12px]">
            <p className="text-center text-sm font-medium leading-7 text-[#4B232D]/72">
              Profil bilgilerini değiştirmek için hesap düzenleme alanını
              kullanabilirsin. İndirilenler bölümü üyelik alanında ayrıca
              gösterilecek.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
  <Link
    href="/"
    className="pill-button accent !min-h-12 !w-full !justify-center !px-5"
  >
    ← Ana Sayfaya Git
  </Link>

  <Link
    href="/hesabim/duzenle"
    className="pill-button dark !min-h-12 !w-full !justify-center !px-5"
  >
    Bilgileri Düzenle
  </Link>

  <button
    type="button"
    className="pill-button accent !min-h-12 !w-full !justify-center !px-5"
    title="İndirilenler alanı yakında aktif olacak."
  >
    İndirilenlere Git →
  </button>
</div>
        </section>
      </section>
    </main>
  );
}

function ProfileBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[24px] border border-white/42 bg-white/72 px-5 py-4 shadow-[0_10px_28px_rgba(75,35,45,0.05)] backdrop-blur-[12px]">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4B232D]/54">
        {label}
      </p>

      <p className="mt-2 break-words text-sm font-bold leading-7 text-[#4B232D]">
        {value || "-"}
      </p>
    </div>
  );
}