'use client';

import { SignIn } from "@clerk/nextjs";
import { motion } from "framer-motion";
import SwirlBackground from "@/components/background";

export default function SignInPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white dark:bg-[#0c0c1a] text-black dark:text-white transition-colors duration-300 overflow-hidden">
      {/* 3D animated swirl background */}
      <SwirlBackground />

      {/* Blurred colorful overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 via-sky-500/10 to-teal-400/10 backdrop-blur-sm z-0" />

      
        <SignIn
        />
      
    </div>
  );
}
