import { test, expect } from '@playwright/test'


test("Book an Appointment", async ({ page }) => {
    await page.goto("https://app.vwo.com/#/login")
    const heading = await page.getByRole('heading', { name: 'Wingify!' }).textContent();
    console.log(heading)
    await page.getByRole("textbox", { name: "Email address" }).fill("dev@test.com")
    console.log("Filled email textbox ✅");
    //await page.getByPlaceholder("Enter email ID").first().fill("test@test.com")
    await page.getByPlaceholder("Enter password").nth(0).fill("Password123")
    console.log("Filled password textbox ✅");
    await page.getByText("Remember me").check();
    console.log("Checked 'Remember me' ✅");
    await page.getByRole('button', { name: "Sign in" }).nth(0).click();
    console.log("Clicked 'Sign In' button ✅");
    await page.getByRole('button', { name: 'Forgot Password?' }).click();
    console.log("Clicked 'Forgot Password' button ✅");

})

test("locators are lazy, strict, and auto-wait", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    await page.getByRole("link", { name: 'Make Appointment', disabled: false }).click();


});