'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  ArrowRightLeft,
  PieChart,
  Target,
  Sparkles,
  Settings,
} from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';

const ROUTES = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Transactions', path: '/transactions', icon: ArrowRightLeft },
  { name: 'Analytics', path: '/analytics', icon: PieChart },
  { name: 'Budgets', path: '/budgets', icon: Target },
  { name: 'AI Insights', path: '/ai-insights', icon: Sparkles },
];

const BOTTOM_ROUTES = [
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);

  return (
    <motion.aside
      initial={false}
      animate={{
        width: isSidebarOpen ? 256 : 64,
      }}
      className="fixed left-0 top-16 h-[calc(100vh-4rem)] bg-background/50 backdrop-blur-xl border-r border-white/10 z-40 hidden md:flex flex-col py-6 overflow-hidden shadow-2xl"
    >
      <div className="flex-1 flex flex-col gap-2 px-3">
        {ROUTES.map((route) => {
          const isActive = pathname === route.path || pathname.startsWith(route.path + '/');
          const Icon = route.icon;

          return (
            <Link key={route.path} href={route.path}>
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex items-center gap-4 px-3 py-3 rounded-xl cursor-pointer transition-colors ${
                  isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-sidebar-pill"
                    className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/20"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon size={20} className={`min-w-5 z-10 ${isActive ? 'text-primary' : ''}`} />
                <motion.span
                  animate={{ opacity: isSidebarOpen ? 1 : 0, width: isSidebarOpen ? 'auto' : 0 }}
                  className="font-medium whitespace-nowrap z-10"
                >
                  {route.name}
                </motion.span>
                
                {/* Notification dot example for AI Insights */}
                {route.name === 'AI Insights' && isSidebarOpen && (
                  <span className="absolute right-3 w-2 h-2 rounded-full bg-indigo-500 animate-pulse z-10" />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>

      <div className="px-3 mt-auto">
        {BOTTOM_ROUTES.map((route) => {
          const isActive = pathname === route.path;
          const Icon = route.icon;

          return (
            <Link key={route.path} href={route.path}>
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex items-center gap-4 px-3 py-3 rounded-xl cursor-pointer transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon size={20} className="min-w-5 z-10" />
                <motion.span
                  animate={{ opacity: isSidebarOpen ? 1 : 0, width: isSidebarOpen ? 'auto' : 0 }}
                  className="font-medium whitespace-nowrap z-10"
                >
                  {route.name}
                </motion.span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.aside>
  );
}
