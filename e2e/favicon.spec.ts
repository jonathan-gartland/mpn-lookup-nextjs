import { test, expect } from "@playwright/test";

test("favicon link is under the base path and resolves", async ({
  page,
  request,
}) => {
  await page.goto("./");
  const href = await page.locator('head link[rel="icon"]').getAttribute("href");
  expect(href).toMatch(/^\/mpn-lookup-nextjs\/.+/);
  const res = await request.get(new URL(href!, page.url()).toString());
  expect(res.status()).toBe(200);
});
