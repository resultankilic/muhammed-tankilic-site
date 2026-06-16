"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type UserInfo = {
  ad: string;
  soyad: string;
  email: string;
  telefon: string;
  bildirimIzni: boolean;
};

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
        window.location.href = "/giris";
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("ad, soyad, telefon, bildirim_izni")
        .eq("id", user.id)
        .single();

      if (profileError) {
        setMessage("Profil bilgileri yüklenemedi.");
        setLoading(false);
        return;
      }

      setUserInfo({
        ad: profile.ad || "",
        soyad: profile.soyad || "",
        email: user.email || "",
        telefon: profile.telefon || "",
        bildirimIzni: Boolean(profile.bildirim_izni),
      });

      setLoading(false);
    }

    loadUser();
  }, [supabase]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7faf9]">
        <p>Hesap bilgileri yükleniyor...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faf9] px-6 py-16 text-[#14201d]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-[#34596d]">
          ← Ana sayfaya dön
        </Link>

        <p className="mt-10 text-sm uppercase tracking-[0.25em] text-[#39785d]">
          Kullanıcı Paneli
        </p>

        <h1 className="mt-4 font-serif text-5xl">Hesabım</h1>
<Link
  href="/hesabim/duzenle"
  className="mt-6 inline-flex rounded-full bg-[#173d56] px-6 py-3 font-medium text-white"
>
  Bilgilerimi Düzenle
</Link>
        {message && (
          <p className="mt-6 rounded-2xl bg-[#eef5f2] px-4 py-3 text-sm">
            {message}
          </p>
        )}

        <section className="mt-10 rounded-4xl border border-[#173d56]/10 bg-white p-8">
          <h2 className="font-serif text-3xl">Profil Bilgilerim</h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-sm text-[#52615d]">Ad Soyad</p>
              <p className="mt-1 font-medium">
                {userInfo?.ad} {userInfo?.soyad}
              </p>
            </div>

            <div>
              <p className="text-sm text-[#52615d]">E-posta</p>
              <p className="mt-1 font-medium">{userInfo?.email}</p>
            </div>

            <div>
              <p className="text-sm text-[#52615d]">Telefon</p>
              <p className="mt-1 font-medium">{userInfo?.telefon}</p>
            </div>

            <div>
              <p className="text-sm text-[#52615d]">E-posta Bildirimleri</p>
              <p className="mt-1 font-medium">
                {userInfo?.bildirimIzni ? "Açık" : "Kapalı"}
              </p>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="rounded-4xl border border-[#173d56]/10 bg-white p-8">
            <h2 className="font-serif text-3xl">İndirdiğim Şarkılar</h2>

            <p className="mt-4 text-[#52615d]">
              İndirilen şarkılar burada gösterilecek.
            </p>
          </section>

          <section className="rounded-4xl border border-[#173d56]/10 bg-white p-8">
            <h2 className="font-serif text-3xl">İndirdiğim Yazılar</h2>

            <p className="mt-4 text-[#52615d]">
              İndirilen yazılar burada gösterilecek.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}