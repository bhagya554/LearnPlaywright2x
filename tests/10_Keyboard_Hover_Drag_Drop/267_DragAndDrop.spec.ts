import { test, expect } from '@playwright/test';

test('Drag and Drop Mouse Actio', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop")
    let colA = page.locator("#column-a")
    let colB = page.locator("#column-b")

    await colA.dragTo(colB)
});    