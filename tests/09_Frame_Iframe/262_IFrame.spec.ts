import { test, expect } from '@playwright/test';

test('Working With Frames - iFrame', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/frames/")
    const frame1 = page.frameLocator("#frame-one");

    await frame1.locator("#RESULT_TextField-1").fill("Hyundai i10");
    await frame1.locator("#RESULT_TextField-2").fill("Bhagya")
    await frame1.locator("#RESULT_TextField-3").fill("AP36GF1368");
    await frame1.locator('#RESULT_RadioButton-1').selectOption("SUV");
    await frame1.locator('#RESULT_TextField-4').fill("2024");
    await frame1.locator('#RESULT_TextArea-1').fill("I love my car");
    await frame1.getByTestId("vehicle-submit").click();

    let output = await frame1.locator("#vehicle-output").innerText();
    console.log(output);


    const data = JSON.parse(output);
    //Case 1: JSON shown on page (text in element)
    //toEqual = exact whole object match. Order not matter.
    expect(data).toEqual({
        vehicleName: "Hyundai i10",
        ownerName: "Bhagya",
        regNumber: "AP36GF1368",
        vehicleType: "SUV",
        year: "2024",
        notes: "I love my car",
    });

    // Case 2: check some fields only
    expect(data).toMatchObject({
        vehicleName: "Hyundai i10",
        regNumber: "AP36GF1368",
    });
    expect(data.year).toBe("2024");
});    