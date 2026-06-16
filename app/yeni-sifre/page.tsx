"use client";

import { FormEvent, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function YeniSifrePage() {
  const [supabase] = useState(() => createClient());
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [sessionReady, setSessionReady] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function prepareRecoverySession() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (!code) {
        setMessage("Şifre yenileme bağlantısı geçersiz veya eksik.");
        setChecking(false);
        return;
      }

      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        setMessage(
          "Bağlantı geçersiz veya süresi dolmuş. Yeniden şifre sıfırlama bağlantısı iste.",
        );
        setChecking(false);
        return;
      }

      window.history.replaceState({}, "", "/yeni-sifre");
      setSessionReady(true);
      setChecking(false);
    }

    prepareRecoverySession();
  }, [supabase]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const password = String(formData.get("password") || "");
    const passwordAgain = String(formData.get("passwordAgain") || "");

    if (password.length < 8) {
      setMessage("Şifre en az 8 karakter olmalı.");
      return;
    }

    if (password !== passwordAgain) {
      setMessage("Şifreler eşleşmiyor.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

   if (error) {
  setMessage(error.message);
  return;
}

    setMessage("Şifren başarıyla değiştirildi.");

    setTimeout(() => {
      window.location.href = "/giris";
    }, 1500);
  }

  return (
    <main className="min-h-screen bg-[#f7faf9] px-6 py-16 text-[#14201d]">
      <div className="mx-auto max-w-md rounded-4xl border border-[#173d56]/10 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.25em] text-[#39785d]">
          Hesap Güvenliği
        </p>

        <h1 className="mt-4 font-serif text-4xl">Yeni Şifre Belirle</h1>

        {checking && (
          <p className="mt-6 rounded-2xl bg-[#eef5f2] px-4 py-3 text-sm">
            Yenileme bağlantısı kontrol ediliyor...
          </p>
        )}

        {!checking && sessionReady && (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input
              name="password"
              type="password"
              placeholder="Yeni şifre"
              required
              minLength={8}
              className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
            />

            <input
              name="passwordAgain"
              type="password"
              placeholder="Yeni şifre tekrar"
              required
              minLength={8}
              className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#173d56] px-6 py-4 font-medium text-white disabled:opacity-60"
            >
              {loading ? "Şifre değiştiriliyor..." : "Şifreyi Değiştir"}
            </button>
          </form>
        )}

        {message && (
          <p className="mt-6 rounded-2xl bg-[#eef5f2] px-4 py-3 text-sm">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}