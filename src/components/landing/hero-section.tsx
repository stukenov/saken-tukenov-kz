"use client";

import { useTranslations } from "next-intl";
import { CtaButton } from "./cta-button";

const badges = [
  { label: "50M", top: "15%", left: "5%", delay: "0s" },
  { label: "150M", top: "10%", right: "8%", delay: "0.5s" },
  { label: "300M", bottom: "20%", left: "8%", delay: "1s" },
  { label: "600M", bottom: "15%", right: "5%", delay: "1.5s" },
];

export function HeroSection() {
  const t = useTranslations("landing.hero");

  return (
    <section
      className="relative overflow-hidden animate-gradient py-20 md:py-32"
      style={{
        background: "linear-gradient(135deg, #0EA5E9, #06B6D4, #0284C7, #0EA5E9)",
        backgroundSize: "200% 200%",
      }}
    >
      {/* Floating badges — desktop only */}
      {badges.map((badge) => (
        <span
          key={badge.label}
          aria-hidden="true"
          className="hidden md:block absolute animate-float bg-glass backdrop-blur-md border border-glass-border rounded-full px-4 py-2 text-sm font-medium text-slate-900"
          style={{
            top: badge.top,
            bottom: badge.bottom,
            left: badge.left,
            right: badge.right,
            animationDelay: badge.delay,
          }}
        >
          {badge.label}
        </span>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
        >
          {t("headline")}
        </h1>

        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mt-4">
          {t("subtitle")}
        </p>

        {/* Mobile badges replacement */}
        <p className="text-sm text-white/80 mt-3 tracking-wider md:hidden">
          50M &middot; 150M &middot; 300M &middot; 600M
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          <CtaButton variant="primary" disabled comingSoonLabel={t("coming_soon")}>
            {t("cta_playground")}
          </CtaButton>
          <CtaButton variant="secondary" disabled comingSoonLabel={t("coming_soon")}>
            {t("cta_models")}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
