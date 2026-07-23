import { test, expect } from '@playwright/test';

test('Advanced Drag and Drop', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd")
    //await page.getByTestId("card-write-spec").dragTo(page.locator("[data-status='in-progress']"))

    //Manual mouse path

    await page.locator('#card-review-pr-21').dragTo(page.locator('[data-status="in-progress"]'));
    await page.locator('#card-review-pr-21').dragTo(page.locator('[data-status="review"]'));

    let src=page.getByTestId("card-write-spec");
    const srcBB=await src.boundingBox()

    let target=page.locator("[data-status='in-progress']");
    const targetBB=await target.boundingBox()

    if(srcBB && targetBB){
        await page.mouse.move(
            srcBB.x+srcBB.width/2,
            srcBB.y+srcBB.height/2
        )

        await page.mouse.down()

        await page.mouse.move(
            targetBB.x+targetBB.width/2,
            targetBB.y+targetBB.height/2
        )

        await page.mouse.up()
    }

});    