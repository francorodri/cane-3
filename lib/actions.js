'use server'
import { revalidatePath } from 'next/cache'
import { createClient } from './supabase/server'
import { transactionSchema } from './validation'
import { redirect } from 'next/navigation'

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
  redirect('/login')
}
