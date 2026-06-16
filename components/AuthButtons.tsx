"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function AuthButtons() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setIsLoggedIn(Boolean(user));
      setIsLoading(false);
    }

    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(Boolean(session?.user));
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  if (isLoading) {
    return <div className="h-10 w-32" />;
  }

  if (isLoggedIn) {
    return (
      <div className="flex items-center gap-4 text-sm">
        <Link href="/hesabim">Hesabım</Link>

        <button
          type="button"
          onClick={handleSignOut}
          className="rounded-full bg-[#173d56] px-5 py-2.5 text-white"
        >
          Çıkış Yap
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 text-sm">
      <Link href="/giris">Giriş Yap</Link>

      <Link
        href="/kayit"
        className="rounded-full bg-[#173d56] px-5 py-2.5 text-white"
      >
        Kayıt Ol
      </Link>
    </div>
  );
}