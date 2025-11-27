'use client'
import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import { login } from "@/lib/actions";
import {useFormState} from "react-dom"
import { useLanguage } from "@/lib/language-context";

const initialState = {
  message: '',
  error: false
}

export default function LoginForm() {
  const [state, formAction] = useFormState(login, initialState)
  const { t } = useLanguage();
  return (
    <form action={formAction} className="space-y-2">
      <Input type="email" placeholder={t("login_email_placeholder")} name="email" required />
      <Input type="password" placeholder={t("login_password_placeholder")} name="password" required />
      <SubmitButton type="submit" size="sm" className="w-full">
        {t("login_sign_in")}
      </SubmitButton>
      <p className="text-sm text-center">
        <a href="/auth/forgot-password" className="text-blue-500 hover:underline">{t("login_forgot_password")}</a>
      </p>
      <p className={`${state?.error ? 'text-red-500' : 'text-green-500'} text-sm text-center`}>
        {state?.message}
      </p>
    </form>
  )
}
