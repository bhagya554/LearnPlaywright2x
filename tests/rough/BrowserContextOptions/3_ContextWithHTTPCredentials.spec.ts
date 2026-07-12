import {test,expect} from '@playwright/test'

test("context with http credentials",async ({browser})=>{
    const context=await browser.newContext({
        httpCredentials:{
            username:"admin",
            password:"admin"
        }
    });

    const page=await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    const message=await page.locator(".example>p");
    await expect(message).toContainText(/Congratulations!/)
      
    await context.close();

})