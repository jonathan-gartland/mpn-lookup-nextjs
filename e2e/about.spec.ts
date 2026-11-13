import { test, expect } from "@playwright/test";

test("about view shows instructions and back returns to menu", async ({
  page,
}) => {
  await page.goto("./");
  await page.getByTestId("about-button").click();
  await expect(
    page.getByRole("heading", { name: "How to use the App" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "click here for more info" })
  ).toHaveAttribute("href", "https://www.npmjs.com/package/mpn-lookup");
  await page.getByTestId("back-button").click();
  await expect(page.getByTestId("about-button")).toBeVisible();
});
