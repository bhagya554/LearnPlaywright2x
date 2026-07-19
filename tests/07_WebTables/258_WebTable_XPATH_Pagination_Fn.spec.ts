import { test, expect,Page } from '@playwright/test';


async function findRowByName(page:Page,name:string){
    
    while(true){
        const row=page.locator("#employees-tbody tr").filter({ hasText: name })
        if(await row.count()){
            return row;
        }

        let next=page.getByTestId("next-page");
        if(await next.isDisabled()){throw new Error("Row not found")}
        await next.click();
    }
   
}

test('WebTable - Get email and country of person details present in different page - Pagination', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable")

    let name = "Luca Greco"
    const row=await findRowByName(page,name);
    const email = await row.locator("td[data-col='email']").innerText();
    const country = await row.locator("td[data-col='country']").innerText();

    //priya@tta.dev India
    console.log(email + " " + country)
    await page.waitForTimeout(5000)
});