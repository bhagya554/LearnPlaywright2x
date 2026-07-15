import { test, expect } from '@playwright/test';

test('goto method with WaitUntil Options', async ({ page }) => {
    await page.goto("https://app.com/page1",{waitUntil:'commit'});
    console.log("commit: server responded")

    //Wait for HTML to be parsed
    await page.goto("https://app.com/page2",{waitUntil:'domcontentloaded'});
    console.log("domcontentloaded: HTML parsed")

    //DEFAULT: wait for everything getting loaded(images,css,scripts)
    await page.goto("https://app.com/page1",{waitUntil:'load'});
    console.log("load:all resources loaded")

    //SLOWEST: Wait for all network activity to stop
    await page.goto("https://app.com/page1",{waitUntil:'networkidle'});
    console.log("networkidle: wait till no further requests loads")
});    