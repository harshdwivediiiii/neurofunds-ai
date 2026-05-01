'use client';

import React from 'react';
import Sidebar from './sidebar';
import { useUIStore } from '@/store/useUIStore';
import { motion } from 'framer-motion';

export default function MainLayoutWrapper({ children }) {
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);

  return (
    <div className="flex min-h-screen pt-16">
      <Sidebar />
      <motion.main
        initial={false}
        animate={{
          marginLeft: isSidebarOpen ? 256 : 64,
        }}
        className="flex-1 w-full flex flex-col transition-all duration-300 md:ml-16 relative"
      >
        <div className="flex-1 w-full p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
          {children}
        </div>
      </motion.main>
    </div>
  );
}
