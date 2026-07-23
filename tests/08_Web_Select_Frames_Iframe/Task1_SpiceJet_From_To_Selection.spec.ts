import { test, expect } from '@playwright/test';

test('Verify our first test', async ({ page, context }) => {

    await context.grantPermissions(['geolocation']);
    await context.setGeolocation({ latitude: 12.9716, longitude: 77.5946 });

    await page.goto("https://www.spicejet.com/")
    await page.getByTestId('to-testID-origin').click();
    await page.locator("//div[text()='From']/following-sibling::div/input").fill('de');
    await expect(page.getByText('Delhi', { exact: true })).toBeVisible();
    await page.getByText('Delhi', { exact: true }).click();

    await page.getByTestId('to-testID-destination').click();
    await page.locator("//div[text()='To']/following-sibling::div/input").fill('ba');
    await expect(page.getByText('Bengaluru', { exact: true })).toBeVisible();
    await page.getByText('Bengaluru', { exact: true }).click();
    await page.pause()
});    