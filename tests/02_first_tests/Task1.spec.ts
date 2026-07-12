/*
Browser 
Context - 1 - https://app.thetestingacademy.com/playwright/ttacart/
Context - 2 → https://tta-bank-digital-973242068062.us-west1.run.app/
*/

import {test,expect} from '@playwright/test'

test("Open Pages in seperate contexts",async({browser})=>{
    let ttaCartContext=await browser.newContext();
    let ttaCartPage = await ttaCartContext.newPage();
    await ttaCartPage.goto("https://app.thetestingacademy.com/playwright/ttacart/") 
    console.log("Title: " +await ttaCartPage.title())
    await expect(ttaCartPage).toHaveTitle('TTACart - Login');

    let ttaBankContext=await browser.newContext();
    let ttaBankPage = await ttaBankContext.newPage();
    await ttaBankPage.goto("https://tta-bank-digital-973242068062.us-west1.run.app/")
    console.log("Title: " +await ttaBankPage.title())
    await expect(ttaBankPage).toHaveTitle(/TTA Bank/)

    await ttaBankContext.close();
    await ttaCartContext.close();
})