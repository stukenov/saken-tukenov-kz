import { test, expect } from "@playwright/test";

test.describe("i18n routing", () => {
  test("root / redirects to /en/", async ({ page }) => {
    await page.goto("/");
    // After redirect, should be on /en or /en/
    expect(page.url()).toContain("/en");
  });

  test("/en/ renders English layout", async ({ page }) => {
    await page.goto("/en");
    // Navbar should have English text
    await expect(page.locator("nav")).toContainText("Models");
    await expect(page.locator("nav")).toContainText("Playground");
    await expect(page.locator("nav")).toContainText("Docs");
  });

  test("/kk/ renders Kazakh layout", async ({ page }) => {
    await page.goto("/kk");
    await expect(page.locator("nav")).toContainText("Modelder");
    await expect(page.locator("nav")).toContainText("Synaq alany");
    await expect(page.locator("nav")).toContainText("Quzhattama");
  });

  test("/ru/ renders Russian layout", async ({ page }) => {
    await page.goto("/ru");
    await expect(page.locator("nav")).toContainText("Modeli");
    await expect(page.locator("nav")).toContainText("Pesochnitsa");
    await expect(page.locator("nav")).toContainText("Dokumentatsiya");
  });

  test("html lang attribute matches locale", async ({ page }) => {
    await page.goto("/en");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    await page.goto("/kk");
    await expect(page.locator("html")).toHaveAttribute("lang", "kk");

    await page.goto("/ru");
    await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  });

  test("navbar contains all 5 section links", async ({ page }) => {
    await page.goto("/en");
    const nav = page.locator("nav");
    await expect(nav.locator('a[href*="/models"]')).toBeVisible();
    await expect(nav.locator('a[href*="/playground"]')).toBeVisible();
    await expect(nav.locator('a[href*="/docs"]')).toBeVisible();
    await expect(nav.locator('a[href*="/leaderboard"]')).toBeVisible();
    await expect(nav.locator('a[href*="/blog"]')).toBeVisible();
  });

  test("language switcher buttons are visible", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByRole("button", { name: "EN", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "QZ", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "RU", exact: true })).toBeVisible();
  });

  test("footer contains GitHub and HuggingFace links", async ({ page }) => {
    await page.goto("/en");
    const footer = page.locator("footer");
    await expect(footer.locator('a[href*="github.com"]')).toBeVisible();
    await expect(footer.locator('a[href*="huggingface.co"]')).toBeVisible();
  });
});
