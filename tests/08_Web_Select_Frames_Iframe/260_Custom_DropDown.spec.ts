import { test, expect } from '@playwright/test';

test('Select option from custom dropdown', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns")
    await page.getByTestId('lang-trigger').click();
    await page.getByRole('option',{name:'JavaScript'}).click();

    await page.getByTestId('framework-trigger').click();
    await page.getByRole('option',{name:'Vue'}).click();

    await page.getByTestId('experience-trigger').click();
    await page.getByRole('option',{name:'Mid-level (4-6 years)'}).click();

    await page.getByRole('button',{name:'Save selection'}).click();

    const submissionOP=page.locator('div.submission-output');
    await expect(submissionOP).toHaveText(`{
        "dropdown-language": "JavaScript",
        "dropdown-framework": "Vue",
        "dropdown-experience": "Mid-level (4-6 years)"
      }`)
});    