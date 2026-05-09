import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import AppNavbar from "@/components/Navbar";
import AppFooter from "@/components/Footer";
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
  title: "AXENRA Technologies | Growth-Driven Digital Marketing Agency",
  description: "We help B2B and SaaS businesses generate consistent leads through SEO, high-converting content, and performance marketing.",
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
        <div className="flex-grow">
          {children}
        </div>
        <AppFooter />
      </body>
    </html>
  );
}
