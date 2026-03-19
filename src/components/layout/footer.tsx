"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border mt-section">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="text-xl font-bold tracking-tight">SozKZ</p>
            <p className="mt-2 text-sm text-muted">{t("description")}</p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/stukenov/slm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {t("github")}
            </a>
            <a
              href="https://huggingface.co/stukenov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {t("huggingface")}
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} SozKZ. {t("rights")}.
        </div>
      </div>
    </footer>
  );
}
