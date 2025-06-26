'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0.9]),
    { stiffness: 120, damping: 20 }
  );

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);          // only true in browser

  const videoSrc =
    resolvedTheme === 'dark' ? '/banner-1.mp4' : '/banner-2.mp4';

  return (
    <section ref={sectionRef} className="px-4 pt-40 pb-20">
      <div className="container mx-auto text-center">
        {/* headline … unchanged … */}
        <motion.h1 /* …same as before… */>
          Your AI Copilot <br /> for Financial Mastery
        </motion.h1>

        {/* sub-headline … unchanged … */}
        <motion.p /* … */>
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

        {mounted && (
          <motion.div style={{ scale }} className="mt-8 md:mt-14">
            <video
              key={videoSrc}          /* remounts on theme switch */
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="mx-auto w-full max-w-5xl rounded-lg border border-white/10 shadow-2xl object-cover"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
