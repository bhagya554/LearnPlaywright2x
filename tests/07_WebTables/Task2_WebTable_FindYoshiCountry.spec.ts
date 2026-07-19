import { test, expect } from '@playwright/test';

test('WebTable - Find Yoshi Country', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const YoshiRow = page.locator("#companies-table tbody tr").filter({ hasText: "Yoshi" })
    
    const country = await YoshiRow.locator("td[data-col='country']").innerText();

    console.log(`Yoshi belongs to ${country}`)

});    