"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Dark gradient mesh or light base */}
      <div 
        className={`absolute inset-0 transition-colors duration-1000 ${
          isDark 
            ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0f1c] to-black" 
            : "bg-slate-50"
        }`}
      />

      {/* Floating blur orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full mix-blend-screen filter blur-[100px] opacity-30 ${
          isDark ? "bg-indigo-600" : "bg-indigo-300"
        }`}
      />
      
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full mix-blend-screen filter blur-[120px] opacity-20 ${
          isDark ? "bg-blue-600" : "bg-blue-300"
        }`}
      />
      
      {/* Subtle Financial Wave Grid (Optional) */}
      <div 
        className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] ${
          isDark ? "opacity-100" : "opacity-0" // only show in dark mode for that premium feel, or adjust colors for light mode
        }`}
      />
    </div>
  );
}
