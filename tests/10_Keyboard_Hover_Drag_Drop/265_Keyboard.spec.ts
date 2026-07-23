import { test, expect } from '@playwright/test';

test('Working with Keyboard actions', async ({ page }) => {
    await page.goto("https://www.toptal.com/developers/keycode")
    await page.keyboard.press("A")
    await page.screenshot({ path: 'A.png' })

    await page.keyboard.press("Shift+A")
    await page.screenshot({ path: 'ShiftA.png' })

    await page.keyboard.type("hello", { delay: 3000 })
    await page.screenshot({ path: 'hello.png' })

    await page.keyboard.up("Ctrl+A")
    await page.keyboard.down("Ctrl+A")
    await page.screenshot({ path: 'CtrlA.png' })

    
});    