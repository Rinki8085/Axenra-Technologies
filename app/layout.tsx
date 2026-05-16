import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import AppNavbar from "@/components/Navbar";
import AppFooter from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Axenra Technologies | B2B & SaaS Growth Marketing Services",
  description: "Accelerate your B2B and SaaS growth with Axenra Technologies. We help businesses generate high-quality leads, reduce CAC & scale revenue through growth marketing strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${orbitron.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col bg-brand-midnight-navy text-brand-soft-white font-sans"
        suppressHydrationWarning
      >
        <AppNavbar />
        <ScrollToTop />
        <div className="flex-grow">
          {children}
        </div>
        <AppFooter />
      </body>
    </html>
  );
}
