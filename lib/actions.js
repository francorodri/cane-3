'use server'
import { revalidatePath } from 'next/cache';
import { createClient } from './supabase/server';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { validate } from './validation';

export async function login(prevState, formData) {
  const supabase = createClient()
  const email = formData.get('email')
  const password = formData.get('password')

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return {
      error: true,
      message: error.message
    }
  }

  revalidatePath('/dashboard')
  redirect('/dashboard')
}

export async function resetPassword(prevState, formData) {
  const supabase = createClient()
  const email = formData.get('email')

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/update-password`,
  })

  if (error) {
    return {
      error: true,
      message: error.message
    }
  }

  return {
    message: 'Password reset email sent.'
  }
}

export async function signOut() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  redirect('/login');
}

const profileSchema = z.object({
  display_name: z.string().min(1, 'Display name is required'),
  names: z.string().min(1, 'Names are required'),
  lastnames: z.string().min(1, 'Last names are required'),
  birthday: z.string().optional(),
  country: z.string().optional(),
  gender: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  phone_number: z.string().optional(),
});

export async function updateProfile(prevState, formData) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const validatedFields = validate(formData, profileSchema);
  console.log('Validated Fields:', validatedFields);
  if (!validatedFields.success) {
    return {
      error: true,
      errors: validatedFields.errors,
      message: 'Invalid fields',
    };
  }

  const { error } = await supabase
    .from('profiles')
    .update(validatedFields.data)
    .eq('id', user.id);

  if (error) {
    console.log(error);
    return {
      error: true,
      message: error.message,
    };
  }

  revalidatePath('/dashboard/settings/profile');
  redirect('/dashboard/settings/profile');
}
