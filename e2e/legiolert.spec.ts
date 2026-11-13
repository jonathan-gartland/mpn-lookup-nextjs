import { test, expect } from "@playwright/test";
import { getMpn } from "../src/util/mpn.lookup";

test.describe("Legiolert", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
    await page.getByTestId("legio-button").click();
  });

  test("initial state shows the 0/0 result without a confidence range", async ({
    page,
  }) => {
    await expect(page.getByTestId("legio-large")).toHaveValue("0");
    await expect(page.getByTestId("legio-small")).toHaveValue("0");
    const v = getMpn("legio", { large: 0, small: 0 });
    await expect(
      page.getByRole("heading", { name: `MPN : ${v}`, exact: true })
    ).toBeVisible();
    await expect(page.getByText("95% Confidence")).toHaveCount(0);
  });

  for (const [large, small] of [
    [0, 0],
    [6, 0],
    [0, 90],
    [6, 90],
    [3, 45],
    [2, 10],
  ]) {
    test(`shows MPN for large=${large} small=${small}`, async ({ page }) => {
      const v = getMpn("legio", { large, small });
      await page.getByTestId("legio-large").fill(String(large));
      await page.getByTestId("legio-small").fill(String(small));
      await expect(
        page.getByRole("heading", { name: `MPN : ${v}`, exact: true })
      ).toBeVisible();
    });
  }

  test("out-of-range counts show an empty MPN", async ({ page }) => {
    const empty = page.getByRole("heading", { name: /^MPN :\s*$/ });
    await page.getByTestId("legio-large").fill("7");
    await expect(empty).toBeVisible();
    await page.getByTestId("legio-large").fill("0");
    await page.getByTestId("legio-small").fill("91");
    await expect(empty).toBeVisible();
  });
});
