//## Referer for ALL Requests in a Context : 
import {test} from '@playwright/test'

test('set referer for entire context',async ({browser})=>{
const context=await browser.newContext({
    extraHTTPHeaders:{
        "Referer":"https://demoqa.com/automation-practice-form"
    }
})

let page1=await context.newPage();
await page1.goto("https://app.vwo.com/#login");
console.log("Page 1- referer is demoqa");
let page2=await context.newPage();
await page2.goto("https://katalon-demo-cura.herokuapp.com/");
console.log("Page 2- referer is demoqa");

})