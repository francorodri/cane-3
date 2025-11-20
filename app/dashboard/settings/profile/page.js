import { createClient } from '@/lib/supabase/server';
import { ProfileForm } from './components/profile-form';
import { ProfileDisplay } from './components/profile-display';
import ErrorBoundary from '@/components/ErrorBoundary';
import { redirect } from 'next/navigation';

export default async function Page({ searchParams }) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if(error){
    console.error('Error fetching profile:', error);
    redirect('/dashboard/settings');
  }

  const editMode = searchParams.edit === 'true';

  return (
    <ErrorBoundary>
      {editMode ? <ProfileForm profile={profile} /> : <ProfileDisplay profile={profile} />}
    </ErrorBoundary>
  );
}
