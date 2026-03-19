import { test, expect } from "@playwright/test";

test.describe("SEO fundamentals", () => {
  test("sitemap.xml is accessible and contains locale URLs", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body).toContain("saken.tukenov.kz/en");
    expect(body).toContain("saken.tukenov.kz/kk");
    expect(body).toContain("saken.tukenov.kz/ru");
    expect(body).toContain("/models");
    expect(body).toContain("/playground");
  });

  test("robots.txt is accessible and references sitemap", async ({ request }) => {
    const response = await request.get("/robots.txt");
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body).toContain("User-Agent: *");
    expect(body).toContain("Allow: /");
    expect(body).toContain("saken.tukenov.kz/sitemap.xml");
  });

  test("/en/ has correct title meta tag", async ({ page }) => {
    await page.goto("/en");
    await expect(page).toHaveTitle(/SozKZ/);
  });

  test("/en/ has og:type meta tag", async ({ page }) => {
    await page.goto("/en");
    const ogType = page.locator('meta[property="og:type"]');
    await expect(ogType).toHaveAttribute("content", "website");
  });

  test("/en/ has og:site_name meta tag", async ({ page }) => {
    await page.goto("/en");
    const ogSiteName = page.locator('meta[property="og:site_name"]');
    await expect(ogSiteName).toHaveAttribute("content", "SozKZ");
  });

  test("alternates hreflang tags present", async ({ page }) => {
    await page.goto("/en");
    // Check for alternate language links in head
    const alternates = page.locator('link[rel="alternate"][hreflang]');
    const count = await alternates.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });
});
