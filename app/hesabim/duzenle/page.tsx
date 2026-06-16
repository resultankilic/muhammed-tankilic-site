"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type ProfileForm = {
  ad: string;
  soyad: string;
  email: string;
  telefon: string;
  bildirimIzni: boolean;
};

export default function ProfilDuzenlePage() {
  const [supabase] = useState(() => createClient());

  const [form, setForm] = useState<ProfileForm>({
    ad: "",
    soyad: "",
    email: "",
    telefon: "",
    bildirimIzni: false,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/giris";
        return;
      }

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("ad, soyad, telefon, bildirim_izni")
        .eq("id", user.id)
        .single();

      if (error) {
        setMessage("Profil bilgileri yüklenemedi.");
        setLoading(false);
        return;
      }

      setForm({
        ad: profile.ad || "",
        soyad: profile.soyad || "",
        email: user.email || "",
        telefon: profile.telefon || "",
        bildirimIzni: Boolean(profile.bildirim_izni),
      });

      setLoading(false);
    }

    loadProfile();
  }, [supabase]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSaving(true);
    setMessage("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/giris";
      return;
    }

    const { error: profileError } = await supabase
      .from("profiles")
      .update({
        ad: form.ad.trim(),
        soyad: form.soyad.trim(),
        telefon: form.telefon.trim(),
        bildirim_izni: form.bildirimIzni,
      })
      .eq("id", user.id);

    if (profileError) {
      setSaving(false);
      setMessage("Profil bilgileri güncellenemedi.");
      return;
    }

    const currentEmail = user.email || "";

    if (form.email.trim() !== currentEmail) {
      const { error: emailError } = await supabase.auth.updateUser({
        email: form.email.trim(),
      });

      if (emailError) {
        setSaving(false);
        setMessage(
          "Profil güncellendi ancak e-posta değiştirilemedi: " +
            emailError.message,
        );
        return;
      }

      setSaving(false);
      setMessage(
        "Profil güncellendi. Yeni e-posta adresine doğrulama bağlantısı gönderildi.",
      );
      return;
    }

    setSaving(false);
    setMessage("Profil bilgileri başarıyla güncellendi.");
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7faf9]">
        <p>Profil yükleniyor...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faf9] px-6 py-16 text-[#14201d]">
      <div className="mx-auto max-w-xl">
        <Link href="/hesabim" className="text-sm text-[#34596d]">
          ← Hesabıma dön
        </Link>

        <p className="mt-10 text-sm uppercase tracking-[0.25em] text-[#39785d]">
          Profil Ayarları
        </p>

        <h1 className="mt-4 font-serif text-5xl">
          Bilgilerimi Düzenle
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 rounded-4xl border border-[#173d56]/10 bg-white p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              value={form.ad}
              onChange={(event) =>
                setForm({ ...form, ad: event.target.value })
              }
              placeholder="Ad"
              required
              className="rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
            />

            <input
              value={form.soyad}
              onChange={(event) =>
                setForm({ ...form, soyad: event.target.value })
              }
              placeholder="Soyad"
              required
              className="rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
            />
          </div>

          <input
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            type="email"
            placeholder="E-posta"
            required
            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
          />

          <input
            value={form.telefon}
            onChange={(event) =>
              setForm({ ...form, telefon: event.target.value })
            }
            type="tel"
            placeholder="Telefon numarası"
            required
            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
          />

          <label className="flex items-start gap-3 text-sm">
            <input
              type="checkbox"
              checked={form.bildirimIzni}
              onChange={(event) =>
                setForm({
                  ...form,
                  bildirimIzni: event.target.checked,
                })
              }
              className="mt-1"
            />

            <span>
              Yeni şarkılar ve yazılar yayımlandığında e-posta almak istiyorum.
            </span>
          </label>

          <button
            type="submit"
            disabled={saving}
            className="w-full rounded-full bg-[#173d56] px-6 py-4 font-medium text-white disabled:opacity-60"
          >
            {saving ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
          </button>

          {message && (
            <p className="rounded-2xl bg-[#eef5f2] px-4 py-3 text-sm">
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}