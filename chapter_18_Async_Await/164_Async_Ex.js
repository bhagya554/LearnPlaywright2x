async function getTestResult(){
    return "Pass"
}

// getTestResult().then(function(res){
    // console.log(res)
// })


async function run() {
    let result = await getTestResult();
    console.log(result);
}

run();


//---------------------------------Playwright Code-------------------
import {test,expect} from '@playwright/test'
test("Verify Title",async ({page}) => {
await page.goto("https://playwright.dev")
await expect(page).toHaveTitle(/playwright/)
let r=page.locator()
})