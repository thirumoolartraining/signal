import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { WorkSection } from "@/components/home/WorkSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PhilosophySection />
      <WorkSection />
      <CapabilitiesSection />
      <InsightsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
