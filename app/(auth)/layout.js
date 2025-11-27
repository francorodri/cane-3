"use client";

import { sizes, variants } from "@/lib/variants"
import Link from "next/link"
import {ChevronLeft} from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context";

export default function Layout({children}) {
  const { t } = useLanguage();
  return <main>
    <div className="absolute left-8 top-8">
      <Link href="/" className={`${variants['ghost']} ${sizes['base']} flex items-center space-x-2 text-sm`}>
        <ChevronLeft className="w-4 h-4" />
        <span>{t("common.back")}</span>
      </Link>
      <LanguageSwitcher />
    </div>
    <div className="mt-8">
      {children}
    </div>
  </main>
}
