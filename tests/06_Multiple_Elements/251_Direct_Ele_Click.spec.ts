import { test, expect } from '@playwright/test';

test('Multi Element - Directly Access the link and click on it', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter")
    
    await page.getByTestId("forgotten-password-link").click();//Better use testId
   // await page.getByText("Forgotten Password",{exact:true}).nth(2).click(); //locates multiple elements 
    console.log(page.url())
    await expect(page).toHaveURL(/#forgotten-password/)
});    