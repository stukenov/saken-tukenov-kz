"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "./scroll-reveal";

export function DocsTeaserSection() {
  const t = useTranslations("landing.docs_teaser");

  return (
    <section>
      <ScrollReveal>
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
          <h2 className="text-xl font-semibold text-slate-900">
            {t("heading")}
          </h2>
          <p className="text-base text-slate-600 mt-4 max-w-2xl mx-auto">
            {t("description")}
          </p>
          <span className="inline-flex items-center gap-1 text-slate-400 mt-6">
            {t("cta")}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-xs">({t("coming_soon")})</span>
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
