import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/Themeprovider";

export const metadata = {
   title: 'NeuroFunds AI - Header',
  description: 'Header component for NeuroFunds AI application',
  
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="font-sans">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="neurofunds-theme"
          >
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
