import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://localhost:7030/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('syaser327@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Ankola@327');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('div').filter({ hasText: 'Sr No. Instructor Course1' }).click();
  await page.getByText('Logout').click();
  await page.getByRole('button', { name: 'OK' }).click();
});