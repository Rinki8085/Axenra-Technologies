'use client';

import HomeHero from "@/components/home/HomeHero";
import TrustLogos from "@/components/home/TrustLogos";
import RevenueEngines from "@/components/home/RevenueEngines";
import GrowthSteps from "@/components/home/GrowthSteps";
import ServiceGrid from "@/components/home/ServiceGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeMetrics from "@/components/home/HomeMetrics";
import BottomCTA from "@/components/home/BottomCTA";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconds

    return () => clearTimeout(timer);
  }, []);

    if (loading) {
    return <Loader />;
  }

  return (
    <main className="flex flex-col min-h-screen">
      <HomeHero />
      <TrustLogos />
      <RevenueEngines />
      <GrowthSteps />
      <ServiceGrid />
      <WhyChooseUs />
      <HomeMetrics />
      <BottomCTA />
    </main>
  );
}
