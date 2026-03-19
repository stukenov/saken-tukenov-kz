"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const localeNames: Record<string, string> = {
  en: "EN",
  kk: "QZ",
  ru: "RU",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function onChange(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex gap-1">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => onChange(loc)}
          className={cn(
            "px-2 py-1 text-sm rounded transition-colors",
            loc === locale
              ? "bg-foreground text-background"
              : "text-muted hover:text-foreground"
          )}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
}
