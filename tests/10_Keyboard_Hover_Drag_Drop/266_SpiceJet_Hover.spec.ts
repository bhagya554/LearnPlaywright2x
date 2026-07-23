import { test, expect } from '@playwright/test';

test('Verify our first test', async ({ page,context }) => {
    await context.grantPermissions(['geolocation']);
    await context.setGeolocation({ latitude: 12.9716, longitude: 77.5946 });
    await page.goto("https://www.spicejet.com/")
    await page.getByText('Add-ons',{exact:true}).hover();
    await page.getByText('FlyEarly').click();
    
});    