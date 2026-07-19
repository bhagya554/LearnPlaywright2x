import { test, expect } from '@playwright/test';

test('Multiple Element - Filter using hasText', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter")
    const forgotPassword = page.locator("a.list-group-item").filter({hasText:"Forgotten Password"})
    await forgotPassword.click();
    console.log(page.url())
    await expect(page).toHaveURL(/#forgotten-password/)

    // Order" vs "Order History -  we can send partial text/ reg expression using  /^text/
    //  /^Order/


    const accountLinks = page.locator("a.list-group-item")
    await expect(accountLinks).toHaveCount(13)


    const privacyLink=page.locator("a").filter({hasText:/^Privacy/})
    await expect(privacyLink).toHaveAttribute("href","#privacy-policy")
    await privacyLink.click();
    console.log(page.url())
    await expect(page).toHaveURL(/#privacy-policy/)
});    