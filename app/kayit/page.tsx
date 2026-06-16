"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function KayitPage() {
  const supabase = createClient();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const formData = new FormData(event.currentTarget);

    const ad = String(formData.get("ad") || "").trim();
    const soyad = String(formData.get("soyad") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const telefon = String(formData.get("telefon") || "").trim();
    const sifre = String(formData.get("sifre") || "");
    const sifreTekrar = String(formData.get("sifreTekrar") || "");
    const bildirimIzni = formData.get("bildirimIzni") === "on";

    if (sifre !== sifreTekrar) {
      setMessage("Şifreler eşleşmiyor.");
      return;
    }

    if (sifre.length < 8) {
      setMessage("Şifre en az 8 karakter olmalı.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password: sifre,
      options: {
        emailRedirectTo: `${window.location.origin}/giris?dogrulandi=1`,
        data: {
          ad,
          soyad,
          telefon,
          bildirim_izni: bildirimIzni,
        },
      },
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Kayıt oluşturuldu. E-posta adresine gönderilen doğrulama bağlantısına tıkla.",
    );

    event.currentTarget.reset();
  }

  return (
    <main className="min-h-screen bg-[#f7faf9] px-6 py-16 text-[#14201d]">
      <div className="mx-auto max-w-xl rounded-4xl border border-[#173d56]/10 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.25em] text-[#39785d]">
          Hesap Oluştur
        </p>

        <h1 className="mt-4 font-serif text-4xl">Kayıt Ol</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              name="ad"
              placeholder="Ad"
              required
              className="rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
            />

            <input
              name="soyad"
              placeholder="Soyad"
              required
              className="rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="E-posta"
            required
            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
          />

          <input
            name="telefon"
            type="tel"
            placeholder="Telefon numarası"
            required
            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
          />

          <input
            name="sifre"
            type="password"
            placeholder="Şifre"
            required
            minLength={8}
            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
          />

          <input
            name="sifreTekrar"
            type="password"
            placeholder="Şifre tekrar"
            required
            minLength={8}
            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
          />

          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" required className="mt-1" />
            <span>Gizlilik politikasını ve kullanım koşullarını kabul ediyorum.</span>
          </label>

          <label className="flex items-start gap-3 text-sm">
            <input name="bildirimIzni" type="checkbox" className="mt-1" />
            <span>
              Yeni şarkılar ve yazılar yayımlandığında e-posta almak istiyorum.
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#173d56] px-6 py-4 font-medium text-white disabled:opacity-60"
          >
            {loading ? "Kayıt oluşturuluyor..." : "Kayıt Ol"}
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