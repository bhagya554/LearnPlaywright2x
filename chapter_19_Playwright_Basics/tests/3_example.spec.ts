import {test,expect} from '@playwright/test'

test('tta login page',async ({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/")
    await expect(page).toHaveTitle("TTACart - Login")
})