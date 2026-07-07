import { chromium } from 'playwright'


async function multiTabTest() {
    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();

    let page1 = await context.newPage();
    await page1.goto("https://app.vwo.com/#login")
    console.log("Tab 1: Login Page")

    let page2 = await context.newPage();
    await page2.goto("https://app.vwo.com/#dashboard")
    console.log("Tab 2: Dashboard Page")
}

multiTabTest();