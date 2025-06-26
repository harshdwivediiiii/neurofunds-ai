import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/Themeprovider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: 'NeuroFunds AI - Header',
  description: 'Header component for NeuroFunds AI application',
  
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem  disableTransitionOnChange>
          <Header />

          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          </ThemeProvider>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}