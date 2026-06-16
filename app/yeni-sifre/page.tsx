"use client";

import { FormEvent, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function YeniSifrePage() {
  const [supabase] = useState(() => createClient());

  const [checking, setChecking] = useState(true);
  const [sessionReady, setSessionReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let isActive = true;

    async function prepareRecoverySession() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      // Varsayılan Supabase e-postasından gelen PKCE kodu
      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (!isActive) return;

        if (!error) {
          window.history.replaceState({}, "", "/yeni-sifre");
          setSessionReady(true);
          setChecking(false);
          return;
        }

        // Kod daha önce kullanıldıysa mevcut oturumu kontrol et
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!isActive) return;

        if (user) {
          window.history.replaceState({}, "", "/yeni-sifre");
          setSessionReady(true);
          setChecking(false);
          return;
        }

        setMessage(
          "Bağlantı geçersiz veya süresi dolmuş. Yeni bir şifre yenileme bağlantısı iste.",
        );
        setChecking(false);
        return;
      }

      // Gelecekte /auth/confirm tarafından oluşturulan oturum
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (!isActive) return;

      if (error || !user) {
        setMessage(
          "Bağlantı geçersiz veya süresi dolmuş. Yeni bir şifre yenileme bağlantısı iste.",
        );
        setChecking(false);
        return;
      }

      setSessionReady(true);
      setChecking(false);
    }

    prepareRecoverySession();

    return () => {
      isActive = false;
    };
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

    if (error) {
      setLoading(false);
      setMessage("Şifre değiştirilemedi. Yeni bir bağlantı iste.");
      return;
    }

    await supabase.auth.signOut();

    setLoading(false);
    setSessionReady(false);
    setMessage(
      "Şifren başarıyla değiştirildi. Giriş sayfasına yönlendiriliyorsun.",
    );

    setTimeout(() => {
      window.location.href = "/giris?sifre-degisti=1";
    }, 1500);
  }

  return (
    <main className="min-h-screen bg-[#f7faf9] px-6 py-16 text-[#14201d]">
      <div className="mx-auto max-w-md rounded-4xl border border-[#173d56]/10 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.25em] text-[#39785d]">
          Hesap Güvenliği
        </p>

        <h1 className="mt-4 font-serif text-4xl">
          Yeni Şifre Belirle
        </h1>

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
              autoComplete="new-password"
              required
              minLength={8}
              className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#173d56]"
            />

            <input
              name="passwordAgain"
              type="password"
              placeholder="Yeni şifre tekrar"
              autoComplete="new-password"
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