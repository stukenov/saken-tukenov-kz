import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import type { Model } from "@/data/models";

export function ModelCard({ model }: { model: Model }) {
  const t = useTranslations("landing.models");

  return (
    <div className="relative bg-glass backdrop-blur-lg border border-glass-border rounded-xl p-6 cursor-default">
      {/* HuggingFace link */}
      <a
        href={model.huggingfaceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 text-slate-400 hover:text-accent-teal transition-colors"
        aria-label={`${model.name} on HuggingFace`}
      >
        <ExternalLink className="h-4 w-4" />
      </a>

      <h3 className="text-lg font-semibold text-slate-900 pr-8">{model.name}</h3>

      <span className="inline-block bg-accent-teal/10 text-accent-teal text-sm font-medium rounded-full px-3 py-1 mt-2">
        {model.params}
      </span>

      <p className="text-sm text-slate-600 mt-3">
        <span className="font-medium">{t("architecture")}:</span> {model.architecture}
      </p>
      <p className="text-sm text-slate-600 mt-1">
        <span className="font-medium">{t("training_data")}:</span> {model.trainingData}
      </p>
    </div>
  );
}
