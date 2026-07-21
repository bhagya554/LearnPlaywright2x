import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Native Select Dropdown - Value option', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown")
    await page.selectOption('select#dropdown',{value:"1"})
    const opt1=page.locator("option[value='1']");
    await expect(opt1).toHaveAttribute("selected","selected")
});    

test('Basic Web Test - Verify Native Select Dropdown - Index option', async ({ page }) => {
    await page.goto("file:///C:/Users/91733/Downloads/qa-practice-lab/qa-lab/widgets/select-variants.html")
    await page.selectOption('select#sel-native-multi',[{index:2},{index:3}])
    const multiSelect=page.locator("div#select-log")
    expect(multiSelect).toHaveText('nativeMulti: ["cypress","restassured"]')
});

test('Basic Web Test - Verify Native Select Dropdown - label option', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown")
    await page.selectOption('select#dropdown',{label:"Option 1"})
    const opt1=page.locator("option[value='1']");
    await expect(opt1).toHaveAttribute("selected","selected")
});