import type { MetadataRoute } from "next";

const locales = ["en", "kk", "ru"];
const baseUrl = "https://saken.tukenov.kz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/models", "/playground", "/docs", "/leaderboard", "/blog"];

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
