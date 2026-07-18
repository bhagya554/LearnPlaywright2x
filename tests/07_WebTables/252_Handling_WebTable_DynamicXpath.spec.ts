//https://awesomeqa.com/webtable.html
import { test, expect } from '@playwright/test';

test('WebTable Demo - Find Helen Bennett Country', async ({ page }) => {

    //Find Helen Bennett from webtable first and retrive the country to which she belongs to
    //Concepts to be used: Dynamic XPATH creation and following-sibling
    await page.goto("https://awesomeqa.com/webtable.html")
    const firstPart = "//table[@id='customers']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]"

    const noOfRows = await page.locator("//table[@id='customers']/tbody/tr").count()//7
    const noOfCols = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count()//3

    outerLoop:
    for (let i = 2; i <= noOfRows; i++) {
        for (let j = 1; j <= noOfCols; j++) {
            const dynamicXPATH = firstPart + i + secondPart + j + thirdPart;
            //console.log(dynamicXPATH)
            const data = await page.locator(dynamicXPATH).innerText();
            if (data.includes("Helen Bennett")) {
                const countryPath = `${dynamicXPATH}/following-sibling::td`;
                const countryText = await page.locator(countryPath).innerText();
                console.log(`${data} belongs to ${countryText}`)
                break outerLoop;
            }
        }
    }

    //await page.locator("//table[@id='customers']/tbody/tr[5]/td[2]")

});    