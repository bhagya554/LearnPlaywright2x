import { test, expect } from '@playwright/test';

test('WebTable - Get email and country of person details present in different page - Pagination', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable")
    const pageCount = 3;
    const allEmails: string[] = [];
    for (let i = 1; i <= pageCount; i++) {
        await page.getByTestId(`page-${i}`).click();
        const emails = await page.locator('#employees-tbody tr td[data-col="email"]').allInnerTexts();
        allEmails.push(...emails)
    }
    console.log(allEmails)
});