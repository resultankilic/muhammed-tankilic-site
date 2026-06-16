"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function SifremiUnuttumPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = String(formData.get("email") || "")
      .trim()
      .toLowerCase();

    const supabase = createClient();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/yeni-sifre`,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Şifre yenileme bağlantısı e-posta adresine gönderildi.",
    );

    form.reset();
  }

  return (
    <main className="min-h-screen bg-[#f7faf9] px-6 py-16 text-[#14201d]">
      <div className="mx-auto max-w-md rounded-4xl border border-[#173d56]/10 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.25em] text-[#39785d]">
          Hesap Kurtarma
        </p>

        <h1 className="mt-4 font-serif text-4xl">
          Şifremi Unuttum
        </h1>

        <p className="mt-4 leading-7 text-[#52615d]">
          E-posta adresini gir. Şifreni değiştirebileceğin güvenli bağlantıyı
          gönderelim.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            name="email"
            type="email"
            placeholder="E-posta"
            autoComplete="email"
            required
            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#173d56] px-6 py-4 font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Gönderiliyor..."
              : "Yenileme Bağlantısı Gönder"}
          </button>

          {message && (
            <p className="rounded-2xl bg-[#eef5f2] px-4 py-3 text-sm">
              {message}
            </p>
          )}
        </form>

        <a
          href="/giris"
          className="mt-6 block text-center text-sm text-[#34596d]"
        >
          Giriş sayfasına dön
        </a>
      </div>
    </main>
  );
}