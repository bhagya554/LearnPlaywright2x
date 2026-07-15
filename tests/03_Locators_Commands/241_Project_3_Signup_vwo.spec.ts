import { test, expect } from '@playwright/test';

test('Verify Signup page error when entered invalid email id', async ({ page }) => {
    await page.goto("https://vwo.com/free-trial/");
    let inputBox=page.locator("#page-v1-step1-email");
    await inputBox.fill("abc@123");

    await page.locator("#page-free-trial-step1-cu-gdpr-consent-checkbox").click();
    await page.locator("button[@data-qa='page-su-submit']").first().click();

   
    let error_msg=await page.locator("//div[contains(@class,'invalid-reason')]").nth(0).textContent();
    console.log(error_msg)
    expect(error_msg).toContain("The email address you entered is incorrect.");
});    