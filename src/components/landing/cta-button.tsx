"use client";

import { type ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "primary-inverted" | "disabled";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent-teal text-white hover:bg-accent-teal-dark transition-colors",
  secondary:
    "bg-transparent border border-white/50 text-white hover:bg-white/10 transition-colors",
  "primary-inverted":
    "bg-white text-accent-teal hover:bg-white/90 transition-colors",
  disabled: "bg-slate-200 text-slate-400 cursor-default",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal";

export function CtaButton({
  href,
  variant = "primary",
  disabled = false,
  children,
  className,
  comingSoonLabel = "Coming soon",
}: {
  href?: string;
  variant?: Variant;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  comingSoonLabel?: string;
}) {
  const effectiveVariant = disabled ? "disabled" : variant;

  if (disabled || effectiveVariant === "disabled") {
    return (
      <span
        aria-disabled="true"
        className={cn(baseStyles, variantStyles.disabled, className)}
      >
        {children}
        <span className="text-sm font-normal">({comingSoonLabel})</span>
      </span>
    );
  }

  return (
    <Link
      href={href || "/"}
      className={cn(baseStyles, variantStyles[effectiveVariant], className)}
    >
      {children}
    </Link>
  );
}
