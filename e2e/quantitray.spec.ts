import { test, expect } from "@playwright/test";
import { getMpn } from "../src/util/mpn.lookup";

test.describe("QuantiTray", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
    await page.getByTestId("qt-button").click();
  });

  test("initial state shows the 0 count result", async ({ page }) => {
    await expect(page.getByTestId("qt")).toHaveValue("0");
    const v = getMpn("qt", { large: 0, small: 0 })!;
    await expect(
      page.getByText(`MPN : ${v[0]}`, { exact: true })
    ).toBeVisible();
  });

  for (const count of [0, 1, 25, 50, 51]) {
    test(`shows MPN and confidence range for ${count} positive wells`, async ({
      page,
    }) => {
      const v = getMpn("qt", { large: count, small: 0 })!;
      await page.getByTestId("qt").fill(String(count));
      await expect(
        page.getByText(`MPN : ${v[0]}`, { exact: true })
      ).toBeVisible();
      await expect(page.getByText("95% Confidence")).toBeVisible();
      await expect(
        page.getByText(`Low: ${v[1]}`, { exact: true })
      ).toBeVisible();
      await expect(
        page.getByText(`High: ${v[2]}`, { exact: true })
      ).toBeVisible();
    });
  }

  test("out-of-range count hides the result", async ({ page }) => {
    await page.getByTestId("qt").fill("52");
    await expect(page.getByText(/MPN :/)).toHaveCount(0);
    await expect(page.getByText("95% Confidence")).toHaveCount(0);
  });
});
