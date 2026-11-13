import { test, expect } from "@playwright/test";

test.describe("menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("shows title and all menu buttons", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "MPN Lookup" })
    ).toBeVisible();
    for (const id of [
      "qt-button",
      "qt2k-button",
      "legio-button",
      "about-button",
    ]) {
      await expect(page.getByTestId(id)).toBeVisible();
    }
    await expect(page.getByTestId("back-button")).toHaveCount(0);
  });

  for (const [button, heading] of [
    ["qt-button", /QuantiTray.* MPN/],
    ["qt2k-button", /QuantiTray2000.* MPN/],
    ["legio-button", "Legiolert MPN"],
  ] as const) {
    test(`${button} opens its view and back returns to the menu`, async ({
      page,
    }) => {
      await page.getByTestId(button).click();
      await expect(page.getByTestId("qt2k-header")).toHaveText(heading);
      await expect(page.getByTestId("pos-well-title")).toHaveText(
        "Positive Wells"
      );
      await expect(page.getByTestId("qt-button")).toHaveCount(0);
      await page.getByTestId("back-button").click();
      await expect(
        page.getByRole("heading", { name: "MPN Lookup" })
      ).toBeVisible();
    });
  }
});
