import HomeHero from "@/components/home/HomeHero";
import TrustLogos from "@/components/home/TrustLogos";
import RevenueEngines from "@/components/home/RevenueEngines";
import GrowthSteps from "@/components/home/GrowthSteps";
import ServiceGrid from "@/components/home/ServiceGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeMetrics from "@/components/home/HomeMetrics";
import BottomCTA from "@/components/home/BottomCTA";

export default function Home() {
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
