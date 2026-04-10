import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY env vars"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Returns the current Supabase session.
 * - `undefined` → still loading
 * - `null` → no session (logged out)
 * - `Session` → authenticated
 */
export function useSession(): Session | null | undefined {
  const [session, setSession] = useState<Session | null | undefined>(
    undefined
  );

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return session;
}

export async function signOut() {
  await supabase.auth.signOut();
}
