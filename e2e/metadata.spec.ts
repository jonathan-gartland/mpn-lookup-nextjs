import { test, expect } from "@playwright/test";

test("page has a title, description and language", async ({ page }) => {
  await page.goto("./");
  await expect(page).toHaveTitle(/MPN Lookup/);
  await expect(page.locator('head meta[name="description"]')).toHaveAttribute(
    "content",
    /Most Probable Number/
  );
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("social preview image is under the base path and resolves", async ({
  page,
  request,
}) => {
  await page.goto("./");
  const image = await page
    .locator('head meta[property="og:image"]')
    .getAttribute("content");
  expect(image).toMatch(/\/mpn-lookup-nextjs\/og-image\.png$/);
  // og:image points at the deployed site; check the same path on this server.
  const res = await request.get(
    new URL(new URL(image!).pathname, page.url()).toString()
  );
  expect(res.status()).toBe(200);
});
