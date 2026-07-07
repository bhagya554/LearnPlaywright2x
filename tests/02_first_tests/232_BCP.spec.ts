import {chromium,Browser,BrowserContext,Page} from 'playwright'

async function run(){
    //LEVEL 1: Launch Browser - heaviest operation,do it once
    let browser:Browser=await chromium.launch({headless:false});
    console.log("Browser Launched"+ browser);

    //LEVEL 2: Create Context - fresh session , isolated cookies
    let context1:BrowserContext=await browser.newContext();
    console.log("Context 1 created: " + context1)

    let context2:BrowserContext=await browser.newContext();
    console.log("Context 2 created: " + context2)

    //LEVEL 3: Open Page - a tab inside the context
    let page1:Page=await context1.newPage();
    await page1.goto("https://google.com")
    console.log("Title:" + await page1.title())
    console.log("Page Opened in "+ context1 + " is " + page1);

   
    let page2:Page=await context1.newPage();
    await page2.goto("https://facebook.com")
    console.log("Page Opened in "+ context1 + " is " + page2);

    //Clean Up in reverse order
    await page2.close();
    await page1.close();
    await context1.close();
    await context2.close();
    await browser.close();

}

run()