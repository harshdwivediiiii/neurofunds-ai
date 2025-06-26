'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import {
  PenBox,
  LayoutDashboard,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';
import Image from 'next/image';
import { ModeToggle } from './ui/Modetoggle';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 border-b border-black/10 dark:border-white/10"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          {/* light-mode logo */}
          <Image
            src="/logo2.png"
            alt="NeuroFunds Logo Light"
            width={40}
            height={40}
            className="h-10 w-10 object-contain block dark:hidden"
          />
          {/* dark-mode logo */}
          <Image
            src="/logo.png"
            alt="NeuroFunds Logo Dark"
            width={40}
            height={40}
            className="h-10 w-10 object-contain hidden dark:block"
          />

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="text-lg font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-400 dark:to-teal-300">
              euroFunds AI
            </span>
            <Sparkles
              size={18}
              className="text-blue-500 dark:text-cyan-300 animate-pulse"
            />
          </motion.div>
        </Link>

        {/* Mode toggle */}
        <ModeToggle />

        {/* Nav links (only shown when signed out) */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a
              href="#features"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Testimonials
            </a>
          </SignedOut>
        </div>

        {/* Right-hand actions */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
              >
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <Link href="/transaction/create">
              <Button className="flex items-center gap-2 bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/90">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button
                variant="outline"
                className="border-black/20 text-black dark:border-white/20 dark:text-white"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    'w-10 h-10 border border-black/10 dark:border-white/10',
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </motion.header>
  );
}
