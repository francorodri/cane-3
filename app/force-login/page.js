"use client";

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ForceLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || '/dashboard';

  useEffect(() => {
    const forceLogin = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        console.log("Attempting forced login...");
        const { error } = await supabase.auth.signInWithPassword({
          email: "francorodri2@gmail.com",
          password: "Rodrigo2025."
        });

        if (!error) {
          console.log("Forced login successful. Redirecting to:", redirectTo);
          router.push(redirectTo);
        } else {
          console.error("Forced login failed:", error.message);
          router.push('/login?error=forced_login_failed');
        }
      } else {
        console.log("User already logged in. Redirecting to:", redirectTo);
        router.push(redirectTo);
      }
    };

    forceLogin();
  }, [router, redirectTo]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p>Attempting to log in automatically...</p>
    </div>
  );
}
