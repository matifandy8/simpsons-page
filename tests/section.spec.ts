import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('heading', { name: 'The Simpsons' }).click();
  await page.getByRole('link', { name: 'Episodes Episodes' }).click();
  await page.goto('http://localhost:3000/episodes');
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Locations Locations' }).click();
  await page.getByRole('link', { name: 'Characters Characters' }).click();
});