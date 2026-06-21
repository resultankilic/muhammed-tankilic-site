import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

type PasswordHistoryRow = {
  id: string;
  password_hash: string;
  created_at: string;
};

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        {
          error:
            "Sunucu şifre güncelleme ayarı eksik. Lütfen yöneticiyle iletişime geç.",
        },
        { status: 500 }
      );
    }

    const authorizationHeader = request.headers.get("authorization");
    const accessToken = authorizationHeader?.replace("Bearer ", "").trim();

    if (!accessToken) {
      return NextResponse.json(
        {
          error:
            "Şifre güncelleme oturumu bulunamadı. Lütfen şifre sıfırlama bağlantısını yeniden iste.",
        },
        { status: 401 }
      );
    }

    const body = (await request.json()) as {
      password?: string;
    };

    const password = body.password ?? "";

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Yeni şifren en az 6 karakter olmalı." },
        { status: 400 }
      );
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const { data: userData, error: userError } =
      await supabaseAdmin.auth.getUser(accessToken);

    if (userError || !userData.user) {
      return NextResponse.json(
        {
          error:
            "Şifre güncelleme bağlantısının süresi dolmuş olabilir. Lütfen yeniden sıfırlama bağlantısı iste.",
        },
        { status: 401 }
      );
    }

    const user = userData.user;
    const userEmail = user.email;

    if (userEmail) {
      const supabasePublic = createClient(supabaseUrl, serviceRoleKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      });

      const { data: sameCurrentPasswordData } =
        await supabasePublic.auth.signInWithPassword({
          email: userEmail,
          password,
        });

      if (sameCurrentPasswordData.session) {
        await supabasePublic.auth.signOut();

        return NextResponse.json(
          {
            error:
              "Yeni şifren mevcut şifrenle aynı olamaz. Lütfen farklı bir şifre belirle.",
          },
          { status: 400 }
        );
      }
    }

    const { data: historyRows, error: historyError } = await supabaseAdmin
      .from("password_history")
      .select("id, password_hash, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(3);

    if (historyError) {
      return NextResponse.json(
        {
          error:
            "Şifre geçmişi kontrol edilemedi. Lütfen biraz sonra tekrar dene.",
        },
        { status: 500 }
      );
    }

    const recentHistory = (historyRows ?? []) as PasswordHistoryRow[];

    for (const historyItem of recentHistory) {
      const isSameAsRecentPassword = await bcrypt.compare(
        password,
        historyItem.password_hash
      );

      if (isSameAsRecentPassword) {
        return NextResponse.json(
          {
            error:
              "Yeni şifren son 3 şifrenden biriyle aynı olamaz. Lütfen farklı bir şifre belirle.",
          },
          { status: 400 }
        );
      }
    }

    const { error: updateError } =
      await supabaseAdmin.auth.admin.updateUserById(user.id, {
        password,
      });

    if (updateError) {
      return NextResponse.json(
        {
          error:
            "Şifre güncellenemedi. Lütfen yeniden şifre sıfırlama bağlantısı iste.",
        },
        { status: 500 }
      );
    }

    const newPasswordHash = await bcrypt.hash(password, 12);

    const { error: insertError } = await supabaseAdmin
      .from("password_history")
      .insert({
        user_id: user.id,
        password_hash: newPasswordHash,
      });

    if (insertError) {
      return NextResponse.json(
        {
          error:
            "Şifre güncellendi fakat şifre geçmişi kaydedilemedi. Lütfen yöneticiyle iletişime geç.",
        },
        { status: 500 }
      );
    }

    const { data: allHistoryRows } = await supabaseAdmin
      .from("password_history")
      .select("id, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    const oldHistoryIds =
      allHistoryRows?.slice(3).map((historyItem) => historyItem.id) ?? [];

    if (oldHistoryIds.length > 0) {
      await supabaseAdmin
        .from("password_history")
        .delete()
        .in("id", oldHistoryIds);
    }

    return NextResponse.json({
      ok: true,
      message: "Şifren başarıyla güncellendi.",
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "Beklenmeyen bir hata oluştu. Lütfen biraz sonra tekrar dene.",
      },
      { status: 500 }
    );
  }
}