import { test, expect } from '@playwright/test';

test('WebTable Demo - Get the Row Data', async ({ page }) => {

    await page.goto("https://awesomeqa.com/webtable1.html")

    const rows= page.locator("table[summary='Sample Table']>tbody>tr");
    const rowCount=await rows.count();

    for(let i=0;i<rowCount;i++){
        const rowData=await rows.nth(i).locator("td").allInnerTexts()
        console.log(`Row ${i+1}: ${rowData}`)
        //console.log(rowData);
        
    }

})