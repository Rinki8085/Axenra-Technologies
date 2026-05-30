import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import AppNavbar from "@/components/Navbar";
import AppFooter from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";
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
  verification: {
    google: "eQp_h6Eh4K0PKpwZpDhJJRqV03rXsKmxZzYo8mQz2rE",
  },
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
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-3SPTVV1FFD" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3SPTVV1FFD');
          `}
        </Script>
        <Script id="tawk-chat" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),
                  s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6a15b97e2bd74e1c32b01b2c/1jpidp6ra';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
        <AppNavbar />
        <ScrollToTop />
        <div className="grow">
          {children}
        </div>
        <AppFooter />
      </body>
    </html>
  );
}
