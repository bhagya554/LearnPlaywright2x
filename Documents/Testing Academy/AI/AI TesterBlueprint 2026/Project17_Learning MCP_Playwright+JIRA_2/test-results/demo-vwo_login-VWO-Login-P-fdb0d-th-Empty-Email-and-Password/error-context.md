# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo\vwo_login.spec.ts >> VWO Login Page Tests >> TC-04: Login with Empty Email and Password
- Location: demo\vwo_login.spec.ts:31:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/The Email address field is required|Email address is required/)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/The Email address field is required|Email address is required/)

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - main "Application main content" [ref=e3]:
    - generic [ref=e7]:
      - generic [ref=e10]:
        - img "VWO" [ref=e12]
        - generic [ref=e13]:
          - img [ref=e15]
          - generic [ref=e18]: Your email, password, IP address or location did not match
        - list [ref=e21]:
          - listitem [ref=e22]:
            - textbox "Email address" [ref=e24]:
              - /placeholder: Enter email ID
          - listitem [ref=e25]:
            - generic [ref=e26]:
              - textbox "Password" [ref=e27]:
                - /placeholder: Enter password
              - button "Toggle password visibility" [ref=e28] [cursor=pointer]:
                - img [ref=e29]
          - listitem [ref=e31]:
            - button "Forgot Password?" [ref=e32] [cursor=pointer]
          - listitem [ref=e33]:
            - generic [ref=e35] [cursor=pointer]:
              - generic [ref=e36]: Remember me
              - img [ref=e38]
          - listitem [ref=e40]:
            - button "Sign in" [active] [ref=e41] [cursor=pointer]:
              - generic [ref=e42]: Sign in
          - listitem [ref=e43]:
            - heading "Or" [level=6] [ref=e45]
          - listitem [ref=e47]:
            - button "Sign in with Google" [ref=e49] [cursor=pointer]:
              - generic [ref=e50]:
                - img [ref=e51]
                - generic [ref=e53]: Sign in with Google
          - listitem [ref=e55]:
            - button "Sign in using SSO" [ref=e56] [cursor=pointer]:
              - img [ref=e57]
              - generic [ref=e59]: Sign in using SSO
          - listitem [ref=e60]:
            - button "Sign in with Passkey" [ref=e61] [cursor=pointer]:
              - img [ref=e62]
              - generic [ref=e64]: Sign in with Passkey
          - listitem [ref=e65]:
            - generic [ref=e67]: New to VWO?
          - listitem [ref=e69]:
            - link "Start a FREE TRIAL" [ref=e70] [cursor=pointer]:
              - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
              - generic [ref=e71]: Start a FREE TRIAL
          - listitem [ref=e72]:
            - text: By continuing, you agree to VWO's
            - link "Privacy policy" [ref=e73] [cursor=pointer]:
              - /url: https://vwo.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
            - text: "&"
            - link "Terms" [ref=e74] [cursor=pointer]:
              - /url: https://vwo.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
            - text: .
      - generic [ref=e78]:
        - img "Vwo abtasty logo" [ref=e79]
        - generic [ref=e80]:
          - heading "have joined forces to redefine the future of" [level=4] [ref=e81]
          - heading "Digital Experience Optimization" [level=4] [ref=e82]
        - img "Vwo Abtasty Shakehands" [ref=e83]
        - heading "Rest assured, your day-to-day workflow, support team, and account contacts remain exactly the same. We are growing to serve you better." [level=5] [ref=e84]
  - img [ref=e85]:
    - generic:
      - img
  - img [ref=e86]
  - img [ref=e87]
  - img [ref=e88]
  - img [ref=e89]
  - img [ref=e90]
  - img [ref=e91]
  - img [ref=e92]
  - img [ref=e93]
  - img [ref=e94]
  - img [ref=e95]
  - img [ref=e96]
  - img [ref=e97]
  - img [ref=e98]
  - img [ref=e99]
  - img [ref=e100]
  - img [ref=e101]
  - img [ref=e102]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('VWO Login Page Tests', () => {
  4  |     
  5  |     test.beforeEach(async ({ page }) => {
  6  |         // Navigate to the VWO login page before each test
  7  |         await page.goto('https://app.vwo.com/#/login');
  8  |     });
  9  | 
  10 |     test('TC-01: Login with Chinese characters in Email', async ({ page }) => {
  11 |         await page.locator('#login-username').fill('用户@测试.com');
  12 |         await page.locator('#login-password').fill('密码123');
  13 |         await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  14 |         await expect(page.getByText(/Your email, password, IP address or location did not match|The Email address field is invalid/)).toBeVisible();
  15 |     });
  16 | 
  17 |     test('TC-02: Login with Arabic characters in Password', async ({ page }) => {
  18 |         await page.locator('#login-username').fill('valid_email@vwo.com');
  19 |         await page.locator('#login-password').fill('كلمة-المرور');
  20 |         await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  21 |         await expect(page.getByText('Your email, password, IP address or location did not match')).toBeVisible();
  22 |     });
  23 | 
  24 |     test('TC-03: Login with Invalid Email Format (e.g. no @)', async ({ page }) => {
  25 |         await page.locator('#login-username').fill('invalidformat.com');
  26 |         await page.locator('#login-password').fill('any_password');
  27 |         await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  28 |         await expect(page.getByText('The Email address field is invalid')).toBeVisible();
  29 |     });
  30 | 
  31 |     test('TC-04: Login with Empty Email and Password', async ({ page }) => {
  32 |         const signInBtn = page.getByRole('button', { name: 'Sign in', exact: true });
  33 |         await signInBtn.click();
> 34 |         await expect(page.getByText(/The Email address field is required|Email address is required/)).toBeVisible();
     |                                                                                                       ^ Error: expect(locator).toBeVisible() failed
  35 |         await expect(page.getByText(/The Password field is required|Password is required/)).toBeVisible();
  36 |     });
  37 | 
  38 |     test('TC-05: Login with Script/SQL Injection strings', async ({ page }) => {
  39 |         await page.locator('#login-username').fill('<script>alert(1)</script>');
  40 |         await page.locator('#login-password').fill("' OR 1=1 --");
  41 |         await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  42 |         await expect(page.getByText('Your email, password, IP address or location did not match')).toBeVisible();
  43 |     });
  44 | 
  45 | 
  46 |     test('TC03: Verify "Forgot Password?" link redirection', async ({ page }) => {
  47 |         await page.getByRole('button', { name: 'Forgot Password?' }).click();
  48 |         await expect(page).toHaveURL(/.*forgot-password/);
  49 |     });
  50 | 
  51 |     test('TC04: Verify password visibility toggle', async ({ page }) => {
  52 |         const passwordField = page.getByPlaceholder('Enter password');
  53 |         const eyeIcon = page.getByRole('button', { name: 'Toggle password visibility' });
  54 |         
  55 |         // Default: type is password
  56 |         await expect(passwordField).toHaveAttribute('type', 'password');
  57 |         
  58 |         // Click eye icon to show password
  59 |         await eyeIcon.click();
  60 |         await expect(passwordField).toHaveAttribute('type', 'text');
  61 |         
  62 |         // Click again to mask password
  63 |         await eyeIcon.click();
  64 |         await expect(passwordField).toHaveAttribute('type', 'password');
  65 |     });
  66 | 
  67 |     test('TC05: Verify UI elements presence', async ({ page }) => {
  68 |         await expect(page.getByRole('img', { name: 'VWO' })).toBeVisible();
  69 |         await expect(page.getByPlaceholder('Enter email ID')).toBeVisible();
  70 |         await expect(page.getByPlaceholder('Enter password')).toBeVisible();
  71 |         await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
  72 |         await expect(page.getByRole('button', { name: 'Sign in with Google' })).toBeVisible();
  73 |         await expect(page.getByRole('button', { name: 'Sign in using SSO' })).toBeVisible();
  74 |     });
  75 | 
  76 |     test('TC06: Verify "Remember me" checkbox is interactive', async ({ page }) => {
  77 |         const rememberMe = page.locator('label[for="checkbox-remember"]'); // Common selector for VWO or based on role
  78 |         // Let's use the text-based selector since "Remember me" is text
  79 |         const checkbox = page.getByText('Remember me');
  80 |         await expect(checkbox).toBeVisible();
  81 |         // Interaction check
  82 |         await checkbox.click();
  83 |     });
  84 | 
  85 | });
  86 | 
```