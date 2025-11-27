"use client";

import { sizes, variants } from "@/lib/variants"
import Link from "next/link"
import {ChevronLeft} from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"

export default function Layout({children}) {
  return <main>
    <div className="absolute left-8 top-8">
      <Link href="/" className={`${variants['ghost']} ${sizes['base']} flex items-center space-x-2 text-sm`}>
        <ChevronLeft className="w-4 h-4" />
        <span>Back</span>
      </Link>
      <LanguageSwitcher />
    </div>
    <div className="mt-8">
      {children}
    </div>
  </main>
}
