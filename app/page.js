import HeroSection from "@/components/hero";
import AnimatedBackground from "@/components/AnimatedBackground";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, BrainCircuit, BarChart3, ShieldCheck } from "lucide-react";

const FEATURES = [
  { title: "AI Financial Copilot", icon: BrainCircuit, desc: "Proactive insights based on your spending patterns." },
  { title: "Predictive Analytics", icon: BarChart3, desc: "Forecast your net worth and cash flow automatically." },
  { title: "Smart Alerts", icon: ShieldCheck, desc: "Instant notifications for unusual charges or fees." },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden pt-24 pb-16">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-32 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">NeuroFunds AI is now in public beta</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter max-w-4xl bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground pb-4">
          Take control of your money with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">AI intelligence</span>
        </h1>
        
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl font-medium">
          Smart AI-powered financial automation. Track, predict, and optimize your wealth with zero manual effort.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/sign-up">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 transition-all hover:scale-105">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="#demo">
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all">
              View Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="glass-card p-8 rounded-3xl hover:bg-white/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/20">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-24 relative z-10">
        <div className="glass-card rounded-[2.5rem] p-12 text-center max-w-4xl mx-auto overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-500/10 to-teal-500/10 pointer-events-none" />
          <h3 className="text-3xl font-bold md:text-4xl relative z-10">
            Start optimizing your money behavior today
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground relative z-10">
            Connect your spending data, get AI insights, and convert recommendations into measurable savings.
          </p>
          <div className="mt-8 relative z-10">
            <Link href="/dashboard">
              <Button size="lg" className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105">
                Open Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}