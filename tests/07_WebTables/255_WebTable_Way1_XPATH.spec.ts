import { test, expect } from '@playwright/test';

test('WebTable - Click of checkbox of the particular employee - Normal XPATH', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/webtable")
    console.log("Click the checkbox via xpath")
    const name = "Ananya.Iyer"
    const username = page.locator("td").filter({ hasText: name })
    //xpath=preceding-sibling::td/input[@type='checkbox'] works.
    //xpath=./preceding-sibling::td/input[@type='checkbox'] also works.
    //xpath=/preceding-sibling::td/input[@type='checkbox'] is not a valid XPath expression.
    await username.locator("xpath=preceding-sibling::td/input[@type='checkbox']").click();
    console.log("Checked on the checkbox for: "+name);
    await page.waitForTimeout(2000)

});    