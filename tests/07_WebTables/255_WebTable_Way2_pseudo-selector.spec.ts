import { test, expect } from '@playwright/test';

test('WebTable - Click of checkbox of the particular employee - pseudo selector', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/webtable")
    console.log("Click the checkbox via xpath")
    const name = "Ananya.Iyer"


    const col=  page
        .locator(`tr:has(td:text("${name}"))`)
        .locator("td");
    col.first().click();
    console.log("Checked on the checkbox for: "+name);    
    
    const colValues=await col.allInnerTexts();
    //console.log(colValues)
    console.log(colValues[1] + " belongs to " + colValues[4] + " and works on project " + colValues[5])
    
    

});    