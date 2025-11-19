'use client'
import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import { resetPassword } from "@/lib/actions";
import { useFormState } from "react-dom";

const initialState = {
  message: '',
  error: false
}

export default function ForgotPasswordPage() {
  const [state, formAction] = useFormState(resetPassword, initialState)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
      <form action={formAction} className="space-y-4 w-full max-w-sm">
        <Input type="email" placeholder="name@example.com" name="email" required />
        <SubmitButton type="submit" size="sm" className="w-full">
          Send reset email
        </SubmitButton>
        <p className={`${state?.error ? 'text-red-500' : 'text-green-500'} text-sm text-center`}>
          {state?.message}
        </p>
      </form>
    </div>
  )
}
