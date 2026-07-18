import { test, expect } from '@playwright/test';

test('WebTable Demo - Orange HRM - Way2', async ({ page }) => {


    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login")
    await page.fill("//input[@name='username']", "admin")
    await page.fill("//input[@name='password']", "Awesomeqa@4321")
    await page.getByRole('button', { name: ' Login ' }).click();

    await expect(page).toHaveURL("https://awesomeqa.com/hr/web/index.php/pim/viewEmployeeList")


    const statusCell = page.locator("//div[contains(@class,'oxd-table-cell') and .//div[normalize-space()='Terminated']]").first();
    await statusCell.waitFor();

    const firstName = await statusCell.locator("xpath=preceding-sibling::div[3]").innerText();
    const lastName = await statusCell.locator("xpath=preceding-sibling::div[2]").innerText();
    console.log("First Terminated person is: " + firstName + " " + lastName);
    await statusCell.locator("xpath=following-sibling::div[3]//button[1]").click();
    await page.getByRole('button', { name: ' Yes, Delete ' }).waitFor();
    await page.screenshot({ path: './tests/07_WebTables/screenshots/afterDelete.png' })

})