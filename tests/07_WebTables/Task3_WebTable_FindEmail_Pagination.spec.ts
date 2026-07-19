import { test, expect,Page } from '@playwright/test';

async function getRowByName(page:Page,name:string){
    while(true){
        let row=page.locator("#employees-table tbody tr").filter({ hasText: name })
        if(await row.count()){
            return row;
        }

        const next=page.getByTestId("next-page")
        if(await next.isDisabled()){throw new Error("Row not available")}
        await next.click();
    }
}


test('WebTable - Find Email when name is given', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    
    let name="Mateo Garcia"
    let row=await getRowByName(page,name)
    
    
    const email = await row.locator("td[data-col='email']").innerText();

    console.log(`${name} email is ${email}`)

});    