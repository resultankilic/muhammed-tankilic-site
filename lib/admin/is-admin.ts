import { createClient } from "@/lib/supabase/server";

export type AdminCheckResult = {
  isAdmin: boolean;
  userId: string | null;
  email: string | null;
};

export async function checkIsAdmin(): Promise<AdminCheckResult> {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return {
      isAdmin: false,
      userId: null,
      email: null,
    };
  }

  const { data: adminRow, error: adminError } = await supabase
    .from("site_admins")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (adminError || !adminRow) {
    return {
      isAdmin: false,
      userId: user.id,
      email: user.email ?? null,
    };
  }

  return {
    isAdmin: true,
    userId: user.id,
    email: user.email ?? null,
  };
}