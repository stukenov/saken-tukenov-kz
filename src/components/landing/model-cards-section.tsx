"use client";

import { useTranslations } from "next-intl";
import { featuredModels } from "@/data/models";
import { ModelCard } from "./model-card";
import { ScrollReveal } from "./scroll-reveal";

export function ModelCardsSection() {
  const t = useTranslations("landing.models");

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-xl font-semibold text-slate-900">{t("heading")}</h2>
        <p className="text-base text-slate-600 mt-2">{t("subtitle")}</p>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible mt-10">
          {featuredModels.map((model, i) => (
            <ScrollReveal
              key={model.id}
              delay={i * 100}
              className="min-w-[85vw] snap-center md:min-w-0"
            >
              <ModelCard model={model} />
            </ScrollReveal>
          ))}
        </div>

        <p className="text-slate-400 font-medium mt-8 inline-flex items-center gap-1">
          {t("view_all")}
          <span className="text-sm font-normal text-slate-400">
            (Coming soon)
          </span>
        </p>
      </div>
    </section>
  );
}
