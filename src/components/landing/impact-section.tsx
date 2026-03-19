"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "./scroll-reveal";

const stats = [
  { value: "26", key: "stat_experiments" },
  { value: "7", key: "stat_models" },
  { value: "9B", key: "stat_tokens" },
] as const;

export function ImpactSection() {
  const t = useTranslations("landing.impact");

  return (
    <section className="bg-section-bg">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-xl font-semibold text-slate-900">
            {t("heading")}
          </h2>

          {/* Tilqazyna case study card */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border mt-8">
            <h3 className="text-lg font-semibold text-slate-900">
              {t("tilqazyna_title")}
            </h3>
            <p className="text-base text-slate-600 mt-2">
              {t("tilqazyna_description")}
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-10 justify-center">
            {stats.map((stat) => (
              <div key={stat.key} className="text-center">
                <div className="text-2xl font-semibold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  {t(stat.key)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
