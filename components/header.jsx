'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import {
  Search,
  Bell,
  Sparkles,
  Menu
} from 'lucide-react';
import Link from 'next/link';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';
import { ModeToggle } from './ui/Modetoggle';
import { useUIStore } from '@/store/useUIStore';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-lg' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Logo & Sidebar Toggle */}
        <div className="flex items-center gap-4">
          <SignedIn>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={toggleSidebar}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SignedIn>
          
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 shadow-lg shadow-primary/20">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 hidden sm:block">
              NeuroFunds<span className="text-primary text-2xl leading-none">.</span>
            </span>
          </Link>
        </div>

        {/* Center: Expandable Search (Only visible when signed in) */}
        <SignedIn>
          <div className="hidden md:flex flex-1 max-w-md mx-8 justify-center">
            <motion.div 
              className="relative flex items-center w-full"
              animate={{
                scale: isSearchFocused ? 1.02 : 1,
                boxShadow: isSearchFocused 
                  ? "0 0 0 2px rgba(var(--primary-rgb), 0.2)" 
                  : "0 0 0 1px rgba(255,255,255,0.1)"
              }}
              transition={{ duration: 0.2 }}
            >
              <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search transactions, insights..."
                className="w-full h-10 pl-10 pr-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm focus:outline-none focus:ring-0 placeholder:text-muted-foreground/70"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <div className="absolute right-3 px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/10 text-muted-foreground border border-white/5">
                ⌘K
              </div>
            </motion.div>
          </div>
        </SignedIn>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <SignedOut>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground mr-4">
              <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
              <Link href="#how-it-works" className="hover:text-foreground transition-colors">How it works</Link>
            </div>
          </SignedOut>

          <ModeToggle />
          
          <SignedIn>
            <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full border-2 border-background animate-pulse" />
            </button>
            <div className="h-6 w-px bg-border mx-1" />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" className="font-semibold">Log in</Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 rounded-full px-6 font-semibold">
                Get Started
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 rounded-full border border-white/10 ring-2 ring-transparent hover:ring-primary/50 transition-all"
                }
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </motion.header>
  );
}
