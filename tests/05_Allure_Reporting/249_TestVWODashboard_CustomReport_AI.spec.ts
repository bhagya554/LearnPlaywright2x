import { test, expect } from '@playwright/test';


test.use({
    storageState: './user-session.json'
})

test('go to dashboard directly - no login', async ({ page }) => {
    await test.step('Navigate to dashboard URL', async () => {
        await page.goto("https://app.wingify.com/#/dashboard?accountId=1227004");
    });

    await test.step('Verify dashboard URL loaded', async () => {
        await expect(page).toHaveURL(/dashboard/);
        console.log("Dashboard loaded — no login needed ✅");
    });

    await test.step('Wait for dashboard to settle', async () => {
        await page.waitForTimeout(3000);
    });
});

test("go directly to settings — no login", async ({ page }) => {
    await test.step('Navigate to settings URL', async () => {
        await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227004");
    });

    await test.step('Verify settings URL loaded', async () => {
        await expect(page).toHaveURL(/settings/);
        console.log("Settings loaded — still logged in ✅");
    });

    await test.step('Wait for settings to settle', async () => {
        await page.waitForTimeout(3000);
    });
});
