import { test, expect } from "@playwright/test";

test.describe("Landing Page — LAND-01: Hero Section", () => {
  test("shows headline and subtitle", async ({ page }) => {
    await page.goto("/en");
    const h1 = page.locator("h1");
    await expect(h1).toContainText("Building the foundation");
    await expect(
      page.getByText("Open-source models from 50M to 600M")
    ).toBeVisible();
  });

  test("shows model size indicators", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByText("600M").first()).toBeVisible();
  });
});

test.describe("Landing Page — LAND-02: Model Cards", () => {
  test("shows 3 featured model cards", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByText("600M").first()).toBeVisible();
    await expect(page.getByText("300M").first()).toBeVisible();
    await expect(page.getByText("150M").first()).toBeVisible();
  });

  test("model cards show architecture and training data", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByText("Llama").first()).toBeVisible();
    await expect(page.getByText("9B tokens").first()).toBeVisible();
  });

  test("view all models link exists", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByText("View all 7 models")).toBeVisible();
  });
});

test.describe("Landing Page — LAND-03: Social Proof", () => {
  test("shows Tilqazyna case study", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByText("Tilqazyna")).toBeVisible();
    await expect(page.getByText("GEC")).toBeVisible();
  });

  test("shows research stats", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByText("26", { exact: true })).toBeVisible();
    await expect(page.getByText("7", { exact: true })).toBeVisible();
    await expect(page.getByText("9B", { exact: true })).toBeVisible();
  });
});

test.describe("Landing Page — LAND-04: CTA Navigation", () => {
  test("hero CTA buttons exist with coming soon state", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByText("Try Playground")).toBeVisible();
    await expect(page.getByText("Browse Models")).toBeVisible();
    const comingSoon = page.getByText("Coming soon");
    await expect(comingSoon.first()).toBeVisible();
  });

  test("bottom CTA exists", async ({ page }) => {
    await page.goto("/en");
    await expect(
      page.getByText("Ready to build with Kazakh NLP?")
    ).toBeVisible();
    await expect(page.getByText("Get Started")).toBeVisible();
  });
});

test.describe("Landing Page — LAND-05: Trilingual", () => {
  test("renders in Kazakh", async ({ page }) => {
    await page.goto("/kk");
    const h1 = page.locator("h1");
    await expect(h1).toContainText("Қазақ");
  });

  test("renders in Russian", async ({ page }) => {
    await page.goto("/ru");
    const h1 = page.locator("h1");
    await expect(h1).toContainText("Создаем");
  });

  test("renders in English", async ({ page }) => {
    await page.goto("/en");
    const h1 = page.locator("h1");
    await expect(h1).toContainText("Building");
  });
});
