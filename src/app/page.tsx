import ClientReviewSection from "@/sections/ClientReviewSection/ClientReviewSection";
import CompaniesSection from "@/sections/CompaniesSection/CompaniesSection";
import ExploreSection from "@/sections/ExploreSection/ExploreSection";
import FaqSection from "@/sections/FaqSection/FaqSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import InsightSection from "@/sections/InsightSection/InsightSection";
import JoinCoworkSection from "@/sections/JoinCoworkSection/JoinCoworkSection";
import StatisticSection from "@/sections/StatisticSection/StatisticSection";
import WhySection from "@/sections/WhySection/WhySection";

export default function Page() {
  return (
    <div className="my-8 space-y-12 overflow-hidden lg:my-16 lg:space-y-32">
      <HeroSection />
      <CompaniesSection />
      <WhySection />
      <ExploreSection />
      <StatisticSection />
      <ClientReviewSection />
      <FaqSection />
      <JoinCoworkSection />
      <InsightSection />
    </div>
  );
}
