import { test, expect } from '@playwright/test';

test('testing navigation navbar', async ({ page }) => {
  await page.goto('http://localhost:3000/');
   
  await page.goto('http://localhost:3000/');
  await page.getByRole('navigation').first().click();
  await page.getByRole('link', { name: 'the simpson logo' }).click();
  await page.getByRole('list').getByRole('link', { name: 'Episodes' }).click();
  await page.goto('http://localhost:3000/episodes');
  await page.goto('http://localhost:3000/');
  await page.getByRole('list').getByRole('link', { name: 'Characters' }).click();
  await page.goto('http://localhost:3000/');
  await page.getByRole('list').getByRole('link', { name: 'Locations' }).click();
});
