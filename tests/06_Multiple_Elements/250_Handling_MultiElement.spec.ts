import { test, expect, Locator } from '@playwright/test';

test('Handling Multiple Elements- Retrieve the links text and click on particular link', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter")
    const rightPanelLinksText:string[]=await page.locator("a.list-group-item").allInnerTexts();
    console.log("No. of links: " +rightPanelLinksText.length)

    for(const linkText of rightPanelLinksText){
        console.log("Link Text:",linkText)
        if(linkText==='Forgotten Password'){
            await page.getByText(linkText).nth(3).click();
        }
    }
});    

test('Handling Multiple Elements- Retrieve the href of all rightpanel links', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter")
    const rightPanelLinks:Locator[]=await page.locator("a.list-group-item").all();
    console.log("No. of links: " +rightPanelLinks.length)

    for(const link of rightPanelLinks){
        console.log("Link Text:", await link.innerText(),"| href:",await link.getAttribute("href"))
    }
    
});    


