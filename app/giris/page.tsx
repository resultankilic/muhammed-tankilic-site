"use client";

import { FormEvent, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function GirisPage() {
  const [supabase] = useState(() => createClient());
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingCode, setCheckingCode] = useState(true);

  useEffect(() => {
    async function confirmEmail() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (!code) {
        setCheckingCode(false);
        return;
      }

      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        setMessage("E-posta doğrulandı ancak oturum açılamadı. Giriş yapabilirsin.");
      } else {
        setMessage("E-posta adresin doğrulandı. Hesabına giriş yapıldı.");
      }

      window.history.replaceState({}, "", "/giris?dogrulandi=1");
      setCheckingCode(false);
    }

    confirmEmail();
  }, [supabase]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage("E-posta veya şifre hatalı.");
      return;
    }

    window.location.href = "/";
  }

  return (
    <main className="min-h-screen bg-[#f7faf9] px-6 py-16 text-[#14201d]">
      <div className="mx-auto max-w-md rounded-4xl border border-[#173d56]/10 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.25em] text-[#39785d]">
          Hesabına Dön
        </p>

        <h1 className="mt-4 font-serif text-4xl">Giriş Yap</h1>

        {checkingCode && (
          <p className="mt-6 rounded-2xl bg-[#eef5f2] px-4 py-3 text-sm">
            E-posta doğrulaması kontrol ediliyor...
          </p>
        )}

        {message && (
          <p className="mt-6 rounded-2xl bg-[#eef5f2] px-4 py-3 text-sm">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            name="email"
            type="email"
            placeholder="E-posta"
            required
            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
          />

          <input
            name="password"
            type="password"
            placeholder="Şifre"
            required
            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#173d56] px-6 py-4 font-medium text-white disabled:opacity-60"
          >
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>

        <div className="mt-6 flex justify-between text-sm">
          <a href="/sifremi-unuttum" className="text-[#34596d]">
            Şifremi unuttum
          </a>

          <a href="/kayit" className="text-[#39785d]">
            Kayıt ol
          </a>
        </div>
      </div>
    </main>
  );
}