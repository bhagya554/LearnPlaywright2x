// Hover over the Add On and Find All menu optins and click on the 'wifi'
//https://app.thetestingacademy.com/playwright/widgets/hover-menu

import { test, expect } from '@playwright/test';

test('Mouse Over- Find all Option and click on one of the option', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu")
    await page.getByTestId("nav-add-ons").hover();
    let submenu=page.getByLabel("Add-ons submenu");
    let allLinks=submenu.locator("a");
    let linksCount = await allLinks.count();
    console.log("No. of links:" + linksCount)

    for(let i=0;i<linksCount;i++){
        console.log(await allLinks.nth(i).innerText())
    }

    await page.getByText("Wi-Fi").click();
    await page.keyboard.press('Escape')


});    