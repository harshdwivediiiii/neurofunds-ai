'use client';

import { SignUp } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import SwirlBackground from '@/components/background';

export default function SignUpPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white dark:bg-[#0c0c1a] text-black dark:text-white transition-colors duration-300 overflow-hidden">
      {/* animated 3-D backdrop */}
      <SwirlBackground />

      {/* subtle color wash + blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 via-sky-500/10 to-teal-400/10 backdrop-blur-sm z-0" />

      {/* glassmorphism sign-up card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md p-8 shadow-2xl border border-white/20"
      >
        <h2 className="mb-6 text-center text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
          Create your NeuroFunds AI account
        </h2>

        <SignUp
          appearance={{
            elements: {
              card: 'bg-transparent shadow-none',
              formButtonPrimary:
                'bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-neutral-900 transition-colors',
              headerTitle: 'text-white dark:text-white',
              headerSubtitle: 'text-gray-400',
            },
          }}
        />
      </motion.div>
    </div>
  );
}