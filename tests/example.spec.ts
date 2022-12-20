import { test, expect } from '@playwright/test';

test('homepage has title ', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Simpsons/);

});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Locations' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*locations/);
});
