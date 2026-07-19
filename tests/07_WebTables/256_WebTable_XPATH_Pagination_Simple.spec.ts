import { test, expect } from '@playwright/test';

test('WebTable - Get email and country of person details present in first page', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable")

    const name = "Priya Kapoor"
    //Get Email and country of Priya Kapoor
    const priyaRow = page.locator("#employees-tbody tr").filter({ hasText: name })


    //2 Priya Kapoor QA Engineer priya@tta.dev India
    console.log(await priyaRow.innerText())

    const email = await priyaRow.locator("td[data-col='email']").innerText();
    const country = await priyaRow.locator("td[data-col='country']").innerText();

    //priya@tta.dev India
    console.log(email + " " + country)
});