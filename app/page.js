"use client";

import LanguageSwitcher from "@/components/language-switcher";
import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("greeting")}</h1>
      <p>{t("welcome")}</p>
      <LanguageSwitcher />
    </main>
  );
}
