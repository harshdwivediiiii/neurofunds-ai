'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Github,
  Linkedin,
  LayoutDashboard,
  ReceiptText,
  Mail,
  X,
  Stars,
  MessageSquare,
} from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mt-32 text-gray-700 dark:text-gray-300 border-t border-black/10 dark:border-white/10"
    >
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <Link href="/" className="flex items-center gap-2">
            {/* Light theme logo */}
            <Image
              src="/logo2.png"
              alt="NeuroFunds logo light"
              width={40}
              height={40}
              className="h-10 w-10 block dark:hidden"
            />
            {/* Dark theme logo */}
            <Image
              src="/logo.png"
              alt="NeuroFunds logo dark"
              width={40}
              height={40}
              className="h-10 w-10 hidden dark:block"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-400 dark:to-teal-300">
              euroFunds AI
            </span>
            <Sparkles
              size={18}
              className="text-blue-500 dark:text-cyan-300 animate-pulse"
            />
          </Link>
          <p className="mt-2 max-w-xs text-sm">
            Your all-in-one, AI-powered toolkit for smarter personal finance.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/dashboard" className="flex items-center gap-2 hover:text-black dark:hover:text-white">
                <LayoutDashboard size={16} /> Dashboard
              </Link>
            </li>
            <li>
              <Link href="/transaction/create" className="flex items-center gap-2 hover:text-black dark:hover:text-white">
                <ReceiptText size={16} /> Transactions
              </Link>
            </li>
            <li>
              <Link href="#features" className="flex items-center gap-2 hover:text-black dark:hover:text-white">
                <Stars size={16} /> Features
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="flex items-center gap-2 hover:text-black dark:hover:text-white">
                <MessageSquare size={16} /> Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h4 className="font-semibold">Connect</h4>
          <div className="flex gap-4">
            <Link
              href="https://github.com/harshdwivediiiii/neurofunds-ai"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-black dark:hover:text-white"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://x.com/Harshvdwivediii"
              target="_blank"
              aria-label="X"
              className="hover:text-black dark:hover:text-white"
            >
              <X size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/harshvardhan-dwivedi-86b375290/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-black dark:hover:text-white"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:harshvardhandwivedi18@gmail.com"
              aria-label="Email"
              className="hover:text-black dark:hover:text-white"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-black/10 dark:border-white/10 py-4 text-center text-xs text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} NeuroFunds AI. All rights reserved.
      </div>
    </motion.footer>
  );
}
