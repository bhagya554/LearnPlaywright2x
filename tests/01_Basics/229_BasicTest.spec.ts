import {test,expect} from '@playwright/test'

test.only("Verify the Title",async ({page})=>{
    await page.goto("https://app.vwo.com/#/login");
    await expect(page).toHaveTitle("Login - Wingify")
})