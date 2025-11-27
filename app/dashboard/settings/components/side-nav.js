'use client'

import Link from 'next/link'
import { User, Camera, Settings } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react';
import Button from '@/components/button';
import { useLanguage } from '@/lib/language-context';

export default function SideNav({ closeSidebar }) {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav className="p-4">
      <div className="flex justify-end md:hidden mb-4">
        <Button variant="outline" onClick={closeSidebar}>
          <X className="w-5 h-5" />
        </Button>
      </div>
      <ul className="space-y-2">
      <li>
        <Link href="/dashboard/settings/profile" className={`px-2.5 py-2 flex items-center space-x-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${pathname === '/dashboard/settings/profile' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}>
          <User className="w-4 h-4" />
          <span>{t("dashboard_settings.profile_link")}</span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/settings" className={`px-2.5 py-2 flex items-center space-x-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${pathname === '/dashboard/settings' ? 'bg-gray-100 dark:bg-gray-800' : ''}`} onClick={closeSidebar}>
          <Settings className="w-4 h-4" />
          <span>{t("dashboard_settings.settings_link")}</span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/settings/avatar" className={`px-2.5 py-2 flex items-center space-x-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${pathname === '/dashboard/settings/avatar' ? 'bg-gray-100 dark:bg-gray-800' : ''}`} onClick={closeSidebar}>
          <Camera className="w-4 h-4" />
          <span>{t("dashboard_settings.avatar_link")}</span>
        </Link>
      </li>
    </ul>
  </nav>
  );
}
