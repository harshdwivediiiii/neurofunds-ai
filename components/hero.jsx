'use client';

import React, { useRef } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';

export default function HeroSection() {
  /* plain JS ref + callback (no type annotations) */
  const sectionRef = useRef(null);
  const setSectionRef = (node) => {
    sectionRef.current = node;
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0.9]),
    { stiffness: 120, damping: 20 }
  );

  const { resolvedTheme } = useTheme();
  const videoSrc = resolvedTheme === 'dark' ? '/banner-1.mp4' : '/banner-2.mp4';

  return (
    <section ref={setSectionRef} className="px-4 pt-40 pb-20">
      <div className="container mx-auto text-center">
        {/* Headline */}
        <motion.h1
          className="pb-6 text-5xl md:text-8xl lg:text-[105px]
                     bg-gradient-to-r from-cyan-700 via-black to-gray-700
                     bg-clip-text text-transparent
                     dark:from-cyan-200 dark:via-sky-200 dark:to-teal-100
                     drop-shadow-[0_4px_20px_rgba(0,255,255,0.15)]
                     dark:drop-shadow-[0_4px_20px_rgba(0,255,255,0.25)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your AI Copilot <br /> for Financial Mastery
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="mx-auto mb-8 max-w-2xl text-xl text-black dark:text-slate-200"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Think less, manage smarter. Let our AI handle tracking, insights,
          and clarity — so you can focus on what matters.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 bg-black text-white hover:bg-black/90
                         dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              Launch App
            </Button>
          </Link>

          <Link href="https://www.youtube.com/roadsidecoder" target="_blank">
            <Button
              size="lg"
              variant="ghost"
              className="px-8 border border-black/80 text-black hover:bg-black/5
                         dark:border-white/80 dark:text-white dark:hover:bg-white/10"
            >
              Watch Overview
            </Button>
          </Link>
        </motion.div>

        {/* Parallax video */}
        <motion.div style={{ scale }} className="mt-8 md:mt-14">
          <video
            key={videoSrc}          /* reloads on theme switch */
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="mx-auto w-full max-w-5xl rounded-lg border border-white/10 shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
