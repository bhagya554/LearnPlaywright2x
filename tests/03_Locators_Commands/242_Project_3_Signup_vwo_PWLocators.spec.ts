import { test, expect } from '@playwright/test';

test('Verify Signup page error', async ({ page }) => {
    await page.goto("https://vwo.com/free-trial/");
    //await page.getByPlaceholder("name@yourcompany.com").fill("dadad")
    await page.getByRole("textbox", { name: "email" }).fill("abcd")
    await page.getByRole("checkbox", { name: "I agree to Wingify's" }).check();
/*
accessible name can come from:
 
 <label for="...">
 aria-label
 aria-labelledby
 Associated labels
 Sometimes other accessibility-related mechanisms
    */
    await page.getByRole("button", { name: 'Create a Free Trial Account' }).click();

    let error_msg = await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent();
    //let error_msg=await page.getByText("The email address you entered is incorrect.").nth(0).textContent();
    console.log(error_msg)
    expect(error_msg).toContain("The email address you entered is incorrect.");
});    