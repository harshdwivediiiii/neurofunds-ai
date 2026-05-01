"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  ArrowRightLeft, 
  PieChart, 
  Wallet, 
  BrainCircuit, 
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUIStore } from "@/store/useUIStore";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Transactions", href: "/transactions", icon: ArrowRightLeft },
  { name: "Analytics", href: "/analytics", icon: PieChart },
  { name: "Budgets", href: "/budgets", icon: Wallet },
  { name: "AI Insights", href: "/ai-insights", icon: BrainCircuit },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isSidebarOpen, setSidebarOpen } = useUIStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && !isSidebarOpen) {
        setSidebarOpen(true);
      } else if (mobile && isSidebarOpen) {
        setSidebarOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const SidebarContent = () => (
    <div className="flex flex-col h-full py-6">
      <div className="flex-1 px-3 space-y-1 mt-16">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={() => isMobile && setSidebarOpen(false)}
            >
              <div className={`relative flex items-center px-3 py-3 my-1 rounded-xl cursor-pointer transition-all duration-200 group ${
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-black/5 dark:hover:bg-white/5 hover:text-foreground"
              }`}>
                {isActive && (
                  <motion.div 
                    layoutId="active-sidebar-pill"
                    className="absolute inset-0 bg-primary/10 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <Icon className={`w-5 h-5 z-10 transition-transform duration-200 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
                
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span 
                      initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                      animate={{ opacity: 1, width: "auto", marginLeft: 16 }}
                      exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                      className="font-medium whitespace-nowrap z-10 overflow-hidden"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>

                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Collapse Toggle for Desktop */}
      {!isMobile && (
        <div className="px-4 pb-4">
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-muted-foreground"
          >
            {isSidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobile && isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <motion.aside
        className={`fixed top-0 bottom-0 left-0 z-40 glass border-r border-border md:translate-x-0 ${
          isMobile ? (isSidebarOpen ? "translate-x-0" : "-translate-x-full") : ""
        }`}
        initial={false}
        animate={{ 
          width: isSidebarOpen ? 240 : 80,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <SidebarContent />
      </motion.aside>
    </>
  );
}
