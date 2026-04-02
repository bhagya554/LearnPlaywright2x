import { test, expect } from '@playwright/test';

test.describe('VWO Login Page Tests', () => {
    
    test.beforeEach(async ({ page }) => {
        // Navigate to the VWO login page before each test
        await page.goto('https://app.vwo.com/#/login');
    });

    test('TC-01: Login with Chinese characters in Email', async ({ page }) => {
        await page.locator('#login-username').fill('用户@测试.com');
        await page.locator('#login-password').fill('密码123');
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
        await expect(page.getByText(/Your email, password, IP address or location did not match|The Email address field is invalid/)).toBeVisible();
    });

    test('TC-02: Login with Arabic characters in Password', async ({ page }) => {
        await page.locator('#login-username').fill('valid_email@vwo.com');
        await page.locator('#login-password').fill('كلمة-المرور');
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
        await expect(page.getByText('Your email, password, IP address or location did not match')).toBeVisible();
    });

    test('TC-03: Login with Invalid Email Format (e.g. no @)', async ({ page }) => {
        await page.locator('#login-username').fill('invalidformat.com');
        await page.locator('#login-password').fill('any_password');
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
        await expect(page.getByText('The Email address field is invalid')).toBeVisible();
    });

    test('TC-04: Login with Empty Email and Password', async ({ page }) => {
        const signInBtn = page.getByRole('button', { name: 'Sign in', exact: true });
        await signInBtn.click();
        await expect(page.getByText(/The Email address field is required|Email address is required/)).toBeVisible();
        await expect(page.getByText(/The Password field is required|Password is required/)).toBeVisible();
    });

    test('TC-05: Login with Script/SQL Injection strings', async ({ page }) => {
        await page.locator('#login-username').fill('<script>alert(1)</script>');
        await page.locator('#login-password').fill("' OR 1=1 --");
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
        await expect(page.getByText('Your email, password, IP address or location did not match')).toBeVisible();
    });


    test('TC03: Verify "Forgot Password?" link redirection', async ({ page }) => {
        await page.getByRole('button', { name: 'Forgot Password?' }).click();
        await expect(page).toHaveURL(/.*forgot-password/);
    });

    test('TC04: Verify password visibility toggle', async ({ page }) => {
        const passwordField = page.getByPlaceholder('Enter password');
        const eyeIcon = page.getByRole('button', { name: 'Toggle password visibility' });
        
        // Default: type is password
        await expect(passwordField).toHaveAttribute('type', 'password');
        
        // Click eye icon to show password
        await eyeIcon.click();
        await expect(passwordField).toHaveAttribute('type', 'text');
        
        // Click again to mask password
        await eyeIcon.click();
        await expect(passwordField).toHaveAttribute('type', 'password');
    });

    test('TC05: Verify UI elements presence', async ({ page }) => {
        await expect(page.getByRole('img', { name: 'VWO' })).toBeVisible();
        await expect(page.getByPlaceholder('Enter email ID')).toBeVisible();
        await expect(page.getByPlaceholder('Enter password')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Sign in with Google' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Sign in using SSO' })).toBeVisible();
    });

    test('TC06: Verify "Remember me" checkbox is interactive', async ({ page }) => {
        const rememberMe = page.locator('label[for="checkbox-remember"]'); // Common selector for VWO or based on role
        // Let's use the text-based selector since "Remember me" is text
        const checkbox = page.getByText('Remember me');
        await expect(checkbox).toBeVisible();
        // Interaction check
        await checkbox.click();
    });

});
