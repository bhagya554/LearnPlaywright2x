import {test,expect} from '@playwright/test'
test("navigate with custom referer", async ({ page }) => {
    // Tell the server "user came from Google"
    await page.goto("https://app.vwo.com/#/login", {
        referer: "https://redbus.com"
    });

    console.log("Page loaded with Google as referer");
    console.log("URL:", page.url());
});