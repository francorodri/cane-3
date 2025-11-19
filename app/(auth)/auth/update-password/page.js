'use client'
import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import { createClient } from "@/lib/supabase/client";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";

const initialState = {
  message: '',
  error: false
}

async function updatePasswordAction(prevState, formData) {
  const supabase = createClient();
  const password = formData.get('password');

  // Asegurarse de que la sesión esté actualizada antes de intentar actualizar el usuario
  const { data: { session }, error: sessionError } = await supabase.auth.getSession();

  if (sessionError || !session) {
    return {
      error: true,
      message: sessionError?.message || 'No active session found. Please try resetting your password again.'
    };
  }

  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    return {
      error: true,
      message: error.message
    };
  }

  // Forzar al usuario a iniciar sesión con la nueva contraseña
  await supabase.auth.signOut();
  redirect('/login');
}

export default function UpdatePasswordPage() {
  const [state, formAction] = useFormState(updatePasswordAction, initialState);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Set New Password</h1>
      <form action={formAction} className="space-y-4 w-full max-w-sm">
        <Input type="password" placeholder="New Password" name="password" required />
        <SubmitButton type="submit" size="sm" className="w-full">
          Update Password
        </SubmitButton>
        <p className={`${state?.error ? 'text-red-500' : 'text-green-500'} text-sm text-center`}>
          {state?.message}
        </p>
      </form>
    </div>
  );
}
