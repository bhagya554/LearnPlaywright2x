import { test, expect } from '@playwright/test';

test('Verify our first test', async ({ page }) => {

    await page.goto('https://app.vwo.com/#/login')
    await expect(page).toHaveTitle("Login - Wingify")
    const logo_image=page.locator('#vow-login-logo')
    await expect(logo_image).toBeVisible(); 
});    