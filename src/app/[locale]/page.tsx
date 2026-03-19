import { HeroSection } from "@/components/landing/hero-section";
import { ModelCardsSection } from "@/components/landing/model-cards-section";
import { ImpactSection } from "@/components/landing/impact-section";
import { DocsTeaserSection } from "@/components/landing/docs-teaser-section";
import { BottomCtaSection } from "@/components/landing/bottom-cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ModelCardsSection />
      <ImpactSection />
      <DocsTeaserSection />
      <BottomCtaSection />
    </>
  );
}
