import { test, expect } from '@playwright/test';

test.describe('Crowdcube Authentication', () => {
  test('should successfully log in with valid credentials', async ({ page }) => {
    const email = "";
    const password = "";

    await page.goto('https://www.crowdcube.com/login');

    await page.locator('[href="https://www.crowdcube.com/login?country=GB"]').click()

    const acceptCookiesBtn = page.locator('#onetrust-accept-btn-handler');
    if (await acceptCookiesBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
      await acceptCookiesBtn.click();
    }

    await page.locator('#email-address').fill(email);
    await page.locator('#password').fill(password);

    await page.locator('[data-analytics="login-button"]').click();

    await expect(page).toHaveURL(/investments/);
  });
});
