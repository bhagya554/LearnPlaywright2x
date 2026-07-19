import { test, expect } from '@playwright/test';

test('WebTable Demo - Orange HRM', async ({ page }) => {


    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login")
    await page.fill("//input[@name='username']", "admin")
    await page.fill("//input[@name='password']", "Awesomeqa@4321")
    await page.getByRole('button', { name: ' Login ' }).click();

    await expect(page).toHaveURL("https://awesomeqa.com/hr/web/index.php/pim/viewEmployeeList")

    
    const rows = page.locator("//div[@class='oxd-table-card']");
    // Table data loads asynchronously; count() does not auto-wait.
    await rows.first().waitFor();
    const rowCount = await rows.count();
    expect(rowCount).toBeGreaterThan(0);

    let found = false;
    for (let i = 0; i < rowCount; i++) {
        // Per-row cell values, order: [checkbox, id, firstName, lastName, jobTitle, status, ...]
        const cells = await rows.nth(i).locator("//div[contains(@class,'oxd-table-cell')]/div").allInnerTexts();
        
        if (cells.includes("Terminated")) {
            const firstName = cells[2];
            const lastName = cells[3];
            console.log("First Terminated person is: " + firstName + " " + lastName);
            found = true;
            break;
        }
    }
    expect(found).toBeTruthy();

})