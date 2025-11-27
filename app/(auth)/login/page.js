"use client";

import LoginForm from "./components/login-form";
import { useLanguage } from "@/lib/language-context";

export default function Page() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] py-40">
      <div className="flex flex-col space-y-8 text-center">
        <h1 className="text-2xl font-semibold">{t("login_welcome_back")}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {t("login_instructions")}
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
