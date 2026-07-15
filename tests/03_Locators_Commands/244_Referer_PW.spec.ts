import {test,expect} from '@playwright/test'

test('simple goto uses- load by default',async ({page})=>{
    //No waitUntil specified - defaults to "load"
    await page.goto("https://app.wingify.com")
   
    let title = await page.title();
    console.log("Title:", title);

    await expect(page).toHaveURL("https://app.wingify.com")
    console.log("URL verified ✅");
})


test('navigate with a custom referer',async ({page})=>{
    //Tell server that user coming from google.com
    await page.goto("https://app.wingify.com",{referer:"https://google.com"})
   

    console.log("page loaded from google as referer")
    console.log("URL:",page.url());
})

