import { test, expect } from '@playwright/test';

test('Press Sequencially each character at a time', async ({ page }) => {

    await page.goto("https://awesomeqa.com/practice.html");
    await page.locator("input[name='firstname']").pressSequentially("bhagya kudupudi", { delay: 200 });

    await page.waitForTimeout(2000);

    await page.goto("https://app.wingify.com")
    await page.goBack();
    console.log("URL: " + page.url())

    await page.waitForTimeout(2000);
});    