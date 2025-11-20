'use client';

import { useState } from 'react';
import SideNav from "./components/side-nav";
import { Menu } from 'lucide-react';
import Button from '@/components/button';

export default function Layout({children}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative overflow-hidden md:grid md:grid-cols-4 md:gap-8 min-h-screen">
      {/* Mobile Sidebar Toggle - visible only on small screens */}
      <div className="md:hidden p-4">
        <Button variant="outline" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      {/* Desktop Sidebar - visible on medium screens and up */}
      <aside className="hidden md:block md:col-span-1">
        <SideNav closeSidebar={() => setIsSidebarOpen(false)} />
      </aside>

      {/* Mobile Sidebar (Push effect) */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <SideNav closeSidebar={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content - pushed when sidebar is open on mobile */}
      <div className={`w-full md:col-span-3 p-4 md:p-0 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'transform translate-x-64 md:translate-x-0' : ''}`}>
        {children}
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
