"use client";

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function ForceLoginPage() {
  const router = useRouter();

  useEffect(() => {
    const forceLogin = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        const { error } = await supabase.auth.signInWithPassword({
          email: "francorodri2@gmail.com",
          password: "Rodrigo2025."
        });

        if (!error) {
          console.log("Forced login successful. Redirecting to dashboard...");
          router.push('/dashboard');
        } else {
          console.error("Forced login failed:", error.message);
          // Optionally, redirect to a login page with an error message
          router.push('/login?error=forced_login_failed');
        }
      } else {
        console.log("User already logged in. Redirecting to dashboard...");
        router.push('/dashboard');
      }
    };

    forceLogin();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p>Attempting to log in automatically...</p>
    </div>
  );
}
