"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { ProfileForm } from './components/profile-form';
import { ProfileDisplay } from './components/profile-display';
import ErrorBoundary from '@/components/ErrorBoundary';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLanguage } from '@/lib/language-context';

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editMode = searchParams.get('edit') === 'true';
  const { t } = useLanguage(); // Ahora se puede usar useLanguage aquí

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push('/login');
        return;
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        setError(error.message);
        router.push('/dashboard/settings');
      } else {
        setProfile(data);
      }
      setLoading(false);
    };

    fetchProfile();
  }, [router]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen"><p>Cargando perfil...</p></div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen"><p>Error: {error}</p></div>;
  }

  return (
    <ErrorBoundary>
      {editMode ? <ProfileForm profile={profile} /> : <ProfileDisplay profile={profile} />}
    </ErrorBoundary>
  );
}
