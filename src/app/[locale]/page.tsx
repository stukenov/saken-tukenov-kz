import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold tracking-tight">{t("title")}</h1>
      <p className="mt-4 text-lg text-muted max-w-lg">{t("subtitle")}</p>
    </section>
  );
}
