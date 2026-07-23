import { test, expect, FrameLocator } from '@playwright/test';

test('Working With Frames - Frameset', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames")
    
    //Get number of frames available and get src and title of frames
    const allFrames=await page.locator("//frame").all();
    console.log("Total number of frames are: " + allFrames.length)

    for(const frame of allFrames){
        console.log(await frame.getAttribute("title") +  ' : ' +await frame.getAttribute("src"))
    }

    //Get h2(heading) of main frame
    const mainFrame:FrameLocator=page.frameLocator("[name='main']")
    const headerText=await mainFrame.locator("h2").innerText();
    console.log(headerText)

    const sideFrame:FrameLocator=page.frameLocator("[name='side']")
    await sideFrame.getByTestId("side-link-registration").click();


});    