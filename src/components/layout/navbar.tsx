"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";

export function Navbar() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          SozKZ
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/models" className="text-sm text-muted hover:text-foreground transition-colors">
            {t("models")}
          </Link>
          <Link href="/playground" className="text-sm text-muted hover:text-foreground transition-colors">
            {t("playground")}
          </Link>
          <Link href="/docs" className="text-sm text-muted hover:text-foreground transition-colors">
            {t("docs")}
          </Link>
          <Link href="/leaderboard" className="text-sm text-muted hover:text-foreground transition-colors">
            {t("leaderboard")}
          </Link>
          <Link href="/blog" className="text-sm text-muted hover:text-foreground transition-colors">
            {t("blog")}
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
