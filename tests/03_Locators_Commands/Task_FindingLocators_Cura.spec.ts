import {test,expect} from '@playwright/test'


test("Book an Appointment",async ({page})=>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/")
    await page.locator("xpath=//a[@id='btn-make-appointment']").click();
    console.log("After clicking make Payment button:",page.url())
    await expect(page).toHaveURL(/profile.php#login/)
    await page.locator("xpath=//input[@id='txt-username']").fill("John Doe")
    await page.locator("xpath=//input[@id='txt-password']").fill("ThisIsNotAPassword")
    await page.locator("xpath=//button[@id='btn-login']").click();
    console.log("After Login:",page.url())
    expect(await page.url()).toContain("#appointment");
    await page.selectOption("#combo_facility",{value:"Hongkong CURA Healthcare Center"})
    await page.locator("xpath=//input[@id='chk_hospotal_readmission']").check();
    await page.locator("xpath=//input[@id='radio_program_medicaid']").click();
    await page.locator("xpath=//input[@name='visit_date']").click();
    await page.locator("xpath=//table[@class='table-condensed']/tbody/tr[4]/td[5]").click();
    await page.keyboard.press('Escape')
    await page.locator("xpath=//textarea[@id='txt_comment']").fill("I want to book an appointment with neurologist")
    await page.locator("xpath=//button[@id='btn-book-appointment']").click();
    await expect(page.locator("xpath=//h2[text()='Appointment Confirmation']")).toBeVisible();
})