"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "./scroll-reveal";
import { CtaButton } from "./cta-button";

export function BottomCtaSection() {
  const t = useTranslations("landing.bottom_cta");

  return (
    <section
      className="animate-gradient"
      style={{
        background:
          "linear-gradient(135deg, #0EA5E9, #06B6D4, #0284C7, #0EA5E9)",
        backgroundSize: "200% 200%",
      }}
    >
      <ScrollReveal>
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {t("heading")}
          </h2>
          <div className="mt-8 flex justify-center">
            <CtaButton variant="disabled" disabled comingSoonLabel={t("coming_soon")}>
              {t("cta")}
            </CtaButton>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
