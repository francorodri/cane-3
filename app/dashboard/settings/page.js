"use client";

import { useLanguage } from "@/lib/language-context";

export default function Page() {
  const { t } = useLanguage();
  return (<>{t("dashboard_settings.settings_page_title")}</>)
}
