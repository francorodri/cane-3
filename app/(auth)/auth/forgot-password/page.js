'use client'
import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import { resetPassword } from "@/lib/actions";
import { useFormState } from "react-dom";
import { useLanguage } from "@/lib/language-context";

const initialState = {
  message: '',
  error: false
}

export default function ForgotPasswordPage() {
  const [state, formAction] = useFormState(resetPassword, initialState)
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">{t("forgot_password_title")}</h1>
      <form action={formAction} className="space-y-4 w-full max-w-sm">
        <Input type="email" placeholder={t("login_email_placeholder")} name="email" required />
        <SubmitButton type="submit" size="sm" className="w-full">
          {t("forgot_password_send_email")}
        </SubmitButton>
        <p className={`${state?.error ? 'text-red-500' : 'text-green-500'} text-sm text-center`}>
          {state?.message}
        </p>
      </form>
    </div>
  )
}
