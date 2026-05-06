import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Open homepage', async ({ page }) => {

  allure.story('Homepage');
  allure.feature('Navigation');
  allure.severity('critical');

  await test.step('Open homepage', async () => {
    await page.goto('https://example.com');
  });

  await test.step('Verify title', async () => {
    await expect(page).toHaveTitle(/Example/);
  });
});