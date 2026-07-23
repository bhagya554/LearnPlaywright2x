import { test, expect } from '@playwright/test';

test('Working with Different Alerts -  Alert Type', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.once('dialog',async alert => {
        console.log("Alert Type:", alert.type())
        console.log("Alert message:", alert.message())
        expect(alert.message()).toBe('I am a JS Alert')
        await alert.accept();
    });

    await page.getByText('Click for JS Alert',{exact:true}).click();

});  

test('Working with Different Alerts - Confirm Type', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.once('dialog',async alert => {
        console.log("Alert Type:", alert.type())
        console.log("Alert message:", alert.message())
        expect(alert.message()).toBe('I am a JS Confirm')
        await alert.dismiss();
    });

    await page.getByText('Click for JS Confirm',{exact:true}).click();

});

test('Working with Different Alerts - Prompt Type', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.once('dialog',async alert => {
        expect(alert.type()).toBe('prompt')
        expect(alert.defaultValue()).toBe('')
        console.log("Alert Type:", alert.type())
        console.log("Alert message:", alert.message())
        expect(alert.message()).toBe('I am a JS prompt')
        await alert.accept("Enhance Testing Skills")
    });

    await page.getByText('Click for JS Prompt',{exact:true}).click();

});