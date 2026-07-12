import {test,expect} from '@playwright/test'

test("Usage of Browser Context Options",async ({browser})=>{
    const context=await browser.newContext({
        viewport:{width:1280,height:720},
        baseURL:"https://redbus.com",
        locale: "en-IN",
        geolocation: { latitude: 12.97, longitude: 77.59 },
        permissions: ["geolocation"],
    })
    const page=await context.newPage();
    await page.goto("/")
    await expect(page).toHaveTitle(/redBus/)

    await context.close();
})