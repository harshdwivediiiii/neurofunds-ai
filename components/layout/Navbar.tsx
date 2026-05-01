"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Bell, Menu, Moon, Sun, BrainCircuit } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useUIStore } from "@/store/useUIStore";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Left: Menu & Logo */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors md:hidden"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
          
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <BrainCircuit className="w-6 h-6 text-primary" />
            </div>
            <span className="font-extrabold text-xl tracking-tight hidden sm:block">
              NeuroFunds<span className="text-primary">.ai</span>
            </span>
          </Link>
        </div>

        {/* Center: Expandable Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-4 justify-center">
          <motion.div 
            className="relative flex items-center"
            animate={{ width: isSearchExpanded ? "100%" : "240px" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <Search className="w-4 h-4 absolute left-3 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Search transactions, insights..."
              onFocus={() => setIsSearchExpanded(true)}
              onBlur={() => setIsSearchExpanded(false)}
              className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-primary/50 rounded-full py-2 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground/70"
            />
          </motion.div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-background animate-pulse" />
          </button>
          
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            )}
          </button>

          <div className="pl-2 border-l border-border flex items-center">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full transition-transform hover:scale-105 active:scale-95">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8 rounded-full ring-2 ring-primary/20 hover:ring-primary/50 transition-all"
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>

      </div>
    </motion.header>
  );
}
