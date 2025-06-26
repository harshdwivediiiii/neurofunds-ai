'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from '@/data/landing';
import HeroSection from '@/components/hero';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SwirlBackground from '@/components/background';

const SpinningBox = () => (
  <mesh rotation={[10, 10, 0]}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#4f46e5" />
  </mesh>
);

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-neutral-900 dark:text-white transition-colors duration-300">
      <SwirlBackground />

      <div className="fixed top-0 left-0 h-full w-full -z-20 opacity-10">
        <Canvas camera={{ position: [2, 2, 2] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} />
          <OrbitControls enableZoom={false} />
          <SpinningBox />
        </Canvas>
      </div>

      <HeroSection />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {statsData.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="bg-gradient-to-r from-indigo-500 via-sky-400 to-teal-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mx-auto mb-16 max-w-2xl bg-gradient-to-r from-indigo-400 via-sky-400 to-teal-400 bg-clip-text text-center text-4xl font-extrabold text-transparent">
            Everything you need to manage your finances
          </h2>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <Card className="bg-white/80 dark:bg-white/5 backdrop-blur-md transition-transform hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_4px_40px_rgba(0,0,0,0.4)]">
                  <CardContent className="space-y-5 pt-6">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-20 text-center text-4xl font-extrabold tracking-tight">
            How It Works
          </h2>

          <div className="grid grid-cols-1 gap-16 sm:grid-cols-3">
            {howItWorksData.map((step, i) => (
              <motion.div
                key={step.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md">
                  {step.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-20 text-center text-4xl font-extrabold">
            What Our Users Say
          </h2>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <Card className="bg-white/80 dark:bg-white/5 backdrop-blur-md transition-shadow hover:shadow-xl dark:hover:shadow-[0_4px_40px_rgba(0,0,0,0.4)]">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex items-center">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{t.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{t.quote}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-teal-500/20 blur-3xl" />
        <motion.div
          className="relative z-10 mx-auto max-w-xl px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 bg-gradient-to-r from-black via-sky-300 to-white bg-clip-text text-4xl font-extrabold text-transparent">
            Ready to Take Control of Your Finances?  
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-gray-700 dark:text-gray-300">
            Join thousands of users who already manage their money smarter with{' '}
            <span className="font-semibold text-black dark:text-white">Welth</span>.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="animate-bounce bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
            >
              Start Free Trial
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
