'use server'
import { revalidatePath } from 'next/cache'
import { createClient } from './supabase/server'
import { transactionSchema } from './validation'
import { redirect } from 'next/navigation'

export async function login(prevState, formData) {
  const supabase = createClient()
  const email = formData.get('email')
  const { error } = supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true
    }
  })
  if (error) {
    return {
      error: true,
      message: 'Error authenticating!'
    }
  }
  return {
    message: `Email sent to ${email}`
  }
}

export async function signOut() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  redirect('/login')
}