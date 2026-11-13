import { test, expect } from "@playwright/test";
import { getMpn } from "../src/util/mpn.lookup";

test.describe("QuantiTray2000", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
    await page.getByTestId("qt2k-button").click();
  });

  test("initial state shows the 0/0 result", async ({ page }) => {
    await expect(page.getByTestId("qt2k-large")).toHaveValue("0");
    await expect(page.getByTestId("qt2k-small")).toHaveValue("0");
    const v = getMpn("qt2k", { large: 0, small: 0 })!;
    await expect(page.getByText(`MPN : ${v[0]}`)).toBeVisible();
  });

  for (const [large, small] of [
    [0, 0],
    [0, 48],
    [49, 0],
    [49, 48],
    [25, 24],
    [10, 30],
  ]) {
    test(`shows MPN and confidence range for large=${large} small=${small}`, async ({
      page,
    }) => {
      const v = getMpn("qt2k", { large, small })!;
      await page.getByTestId("qt2k-large").fill(String(large));
      await page.getByTestId("qt2k-small").fill(String(small));
      await expect(page.getByText(`MPN : ${v[0]}`)).toBeVisible();
      await expect(page.getByText("95% Confidence")).toBeVisible();
      await expect(page.getByText(`Low: ${v[1]}`)).toBeVisible();
      await expect(page.getByText(`High: ${v[2]}`)).toBeVisible();
    });
  }

  test("out-of-range counts hide the result", async ({ page }) => {
    await page.getByTestId("qt2k-large").fill("50");
    await expect(page.getByText(/MPN :/)).toHaveCount(0);
    await page.getByTestId("qt2k-large").fill("0");
    await page.getByTestId("qt2k-small").fill("49");
    await expect(page.getByText(/MPN :/)).toHaveCount(0);
  });
});
