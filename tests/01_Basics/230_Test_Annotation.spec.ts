import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});

//This test is skipped
test.skip('Skipped Test', async ({ page }) => {
    //skipped test
})

//This test will fail
test.fail("Failed Test", async ({ page }) => {
    //Failed test
})

//focused test
test.only("Focused test", async ({ page }) => {
test.slow();//(3x timeout)
})

//Conditional Skip
test("conditional",async ({page,browserName})=>{
    test.skip(browserName==='firefox','Firefox is not supported')
})




