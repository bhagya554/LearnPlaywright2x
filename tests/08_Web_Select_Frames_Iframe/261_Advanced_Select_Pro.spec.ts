import { test, expect } from '@playwright/test';

test('Advanced Select - Type and Results are displayed and select the option', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes")

    //① Single — searchable
    await page.locator('#rs-single').click();
    await page.locator('#rs-single').pressSequentially("cypress", { delay: 200 })
    await page.getByRole('option', { name: 'Cypress' }).click();

    //② Multi — chips with remove
    await page.getByTestId("rs-multi").click();
    await page.getByText("Pytest", { exact: true }).click();
    await page.getByText("Cucumber", { exact: true }).click();
    await page.keyboard.press("Escape");
    await page.waitForTimeout(2000);
    await page.getByLabel("Remove Pytest").click();

    //③ Creatable multi — type and Enter
    await page.getByTestId("rs-creatable").click();
    await page.getByTestId("rs-creatable").pressSequentially("Mobile");
    await page.getByTestId("rs-creatable").press('Enter')
    await page.getByText("performance", { exact: true }).click();
    await page.keyboard.press("Escape");


    //⑤ Async — fetched on type
    await page.getByTestId('rs-async').click();
    await page.getByTestId('rs-async-input').fill('de')
    await expect(page.getByTestId('rs-async-menu')).toContainText('Delhi')
    await page.getByRole('option', { name: 'Delhi' }).click();
});    