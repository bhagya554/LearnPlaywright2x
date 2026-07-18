import { test, expect } from '@playwright/test';

test('Multi Element - Student Login', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter")
    await page.getByPlaceholder("student@thetestingacademy.com").fill("hello@gmail.com")
    await page.locator('#password').fill("Password123")
    await page.getByRole("checkbox", { name: 'Remember me' }).check();
    await page.getByTestId("login-button").click();
    console.log(await page.url())
    await expect(page).toHaveURL(/#login-success/)
}) 