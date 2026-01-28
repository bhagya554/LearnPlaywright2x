---
name: generating-playwright-framework
description: Creates production-ready Playwright test automation frameworks from scratch. Use when the user mentions Playwright setup, test framework creation, POM framework, automation framework scaffolding, or needs to automate a website with Playwright.
---

# Playwright Framework Generator

## When to use this skill
- User wants to create a Playwright framework from scratch
- User mentions "automate [website]" or "test automation setup"
- User needs Page Object Model implementation
- User asks for Playwright project scaffolding
- User wants custom reporters or test infrastructure

## Workflow

### Step 1: Gather Requirements
Ask the user:
```
🎭 **Playwright Framework Generator**

Please provide:
1. **Domain/URL** to automate (e.g., https://example.com)
2. **Test scenarios** you want to automate (login, checkout, etc.)
3. **Language preference**: TypeScript (recommended) or JavaScript
4. **Browser targets**: Chromium, Firefox, WebKit, or all?
5. **Any specific requirements** (CI/CD, reporting format, etc.)
```

### Step 2: Create Project Structure

Generate this folder structure:

```
📁 playwright-automation/
├── 📁 src/
│   ├── 📁 pages/              # Page Object Models
│   │   ├── BasePage.ts        # Base page with common methods
│   │   ├── LoginPage.ts       # Example page object
│   │   └── index.ts           # Page exports
│   ├── 📁 components/         # Reusable UI components
│   │   └── NavBar.ts
│   ├── 📁 fixtures/           # Custom test fixtures
│   │   └── test-fixtures.ts
│   ├── 📁 utils/              # Utility functions
│   │   ├── helpers.ts
│   │   ├── api-helpers.ts
│   │   └── test-data.ts
│   └── 📁 types/              # TypeScript interfaces
│       └── index.ts
├── 📁 tests/
│   ├── 📁 e2e/                # End-to-end tests
│   │   └── login.spec.ts
│   ├── 📁 api/                # API tests
│   │   └── api.spec.ts
│   └── 📁 visual/             # Visual regression tests
│       └── visual.spec.ts
├── 📁 test-data/              # Test data files
│   ├── users.json
│   └── environments.json
├── 📁 reporters/              # Custom reporters
│   └── custom-reporter.ts
├── 📁 .github/                # CI/CD workflows
│   └── workflows/
│       └── playwright.yml
├── playwright.config.ts       # Main config
├── .env.example               # Environment template
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

### Step 3: Generate Core Files

#### 3.1 Initialize Project

```bash
# Create project directory
mkdir playwright-automation && cd playwright-automation

# Initialize npm and install dependencies
npm init -y
npm install -D @playwright/test typescript ts-node @types/node dotenv
npx playwright install

# Initialize TypeScript
npx tsc --init
```

#### 3.2 playwright.config.ts

```typescript
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  // Test directory
  testDir: './tests',
  
  // Run tests in parallel
  fullyParallel: true,
  
  // Fail build on CI if test.only left in code
  forbidOnly: !!process.env.CI,
  
  // Retry failed tests
  retries: process.env.CI ? 2 : 0,
  
  // Number of workers
  workers: process.env.CI ? 1 : undefined,
  
  // Reporter configuration
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'reports/html' }],
    ['json', { outputFile: 'reports/results.json' }],
    ['junit', { outputFile: 'reports/junit.xml' }],
    ['./reporters/custom-reporter.ts'],
  ],
  
  // Global timeout
  timeout: 30000,
  
  // Expect timeout
  expect: {
    timeout: 5000,
  },
  
  // Shared settings for all projects
  use: {
    // Base URL
    baseURL: process.env.BASE_URL || 'https://example.com',
    
    // Collect trace on failure
    trace: 'on-first-retry',
    
    // Screenshot on failure
    screenshot: 'only-on-failure',
    
    // Video on failure
    video: 'on-first-retry',
    
    // Viewport
    viewport: { width: 1280, height: 720 },
    
    // Action timeout
    actionTimeout: 10000,
    
    // Navigation timeout
    navigationTimeout: 30000,
  },
  
  // Project configurations
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  
  // Global setup/teardown
  globalSetup: require.resolve('./src/fixtures/global-setup.ts'),
  globalTeardown: require.resolve('./src/fixtures/global-teardown.ts'),
  
  // Output folder for artifacts
  outputDir: 'test-results',
});
```

#### 3.3 BasePage.ts (Page Object Model Foundation)

```typescript
import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly baseURL: string;

  constructor(page: Page) {
    this.page = page;
    this.baseURL = process.env.BASE_URL || 'https://example.com';
  }

  // ==================== Navigation ====================
  
  async navigate(path: string = '/'): Promise<void> {
    await this.page.goto(path);
    await this.waitForPageLoad();
  }

  async navigateToURL(url: string): Promise<void> {
    await this.page.goto(url);
    await this.waitForPageLoad();
  }

  // ==================== Wait Methods ====================
  
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('networkidle');
  }

  async waitForElement(locator: Locator, timeout: number = 5000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async waitForElementHidden(locator: Locator, timeout: number = 5000): Promise<void> {
    await locator.waitFor({ state: 'hidden', timeout });
  }

  // ==================== Actions ====================
  
  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async doubleClick(locator: Locator): Promise<void> {
    await locator.dblclick();
  }

  async rightClick(locator: Locator): Promise<void> {
    await locator.click({ button: 'right' });
  }

  async fill(locator: Locator, text: string): Promise<void> {
    await locator.clear();
    await locator.fill(text);
  }

  async type(locator: Locator, text: string, delay: number = 50): Promise<void> {
    await locator.pressSequentially(text, { delay });
  }

  async selectOption(locator: Locator, value: string): Promise<void> {
    await locator.selectOption(value);
  }

  async check(locator: Locator): Promise<void> {
    await locator.check();
  }

  async uncheck(locator: Locator): Promise<void> {
    await locator.uncheck();
  }

  async hover(locator: Locator): Promise<void> {
    await locator.hover();
  }

  async dragAndDrop(source: Locator, target: Locator): Promise<void> {
    await source.dragTo(target);
  }

  // ==================== Getters ====================
  
  async getText(locator: Locator): Promise<string> {
    return await locator.textContent() || '';
  }

  async getValue(locator: Locator): Promise<string> {
    return await locator.inputValue();
  }

  async getAttribute(locator: Locator, attribute: string): Promise<string | null> {
    return await locator.getAttribute(attribute);
  }

  async getCount(locator: Locator): Promise<number> {
    return await locator.count();
  }

  // ==================== State Checks ====================
  
  async isVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  async isEnabled(locator: Locator): Promise<boolean> {
    return await locator.isEnabled();
  }

  async isChecked(locator: Locator): Promise<boolean> {
    return await locator.isChecked();
  }

  // ==================== Assertions ====================
  
  async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async expectHidden(locator: Locator): Promise<void> {
    await expect(locator).toBeHidden();
  }

  async expectText(locator: Locator, text: string): Promise<void> {
    await expect(locator).toHaveText(text);
  }

  async expectContainsText(locator: Locator, text: string): Promise<void> {
    await expect(locator).toContainText(text);
  }

  async expectValue(locator: Locator, value: string): Promise<void> {
    await expect(locator).toHaveValue(value);
  }

  async expectURL(urlPattern: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(urlPattern);
  }

  async expectTitle(title: string | RegExp): Promise<void> {
    await expect(this.page).toHaveTitle(title);
  }

  // ==================== Screenshots ====================
  
  async takeScreenshot(name: string): Promise<Buffer> {
    return await this.page.screenshot({ 
      path: `screenshots/${name}.png`,
      fullPage: true 
    });
  }

  // ==================== Keyboard ====================
  
  async pressKey(key: string): Promise<void> {
    await this.page.keyboard.press(key);
  }

  async pressKeys(keys: string[]): Promise<void> {
    for (const key of keys) {
      await this.page.keyboard.press(key);
    }
  }

  // ==================== Browser Context ====================
  
  async clearCookies(): Promise<void> {
    await this.page.context().clearCookies();
  }

  async getStorageState(): Promise<object> {
    return await this.page.context().storageState();
  }

  // ==================== Alerts ====================
  
  async acceptAlert(): Promise<void> {
    this.page.on('dialog', dialog => dialog.accept());
  }

  async dismissAlert(): Promise<void> {
    this.page.on('dialog', dialog => dialog.dismiss());
  }

  async getAlertText(): Promise<string> {
    return new Promise((resolve) => {
      this.page.on('dialog', dialog => {
        resolve(dialog.message());
      });
    });
  }

  // ==================== Frames ====================
  
  getFrame(name: string) {
    return this.page.frame(name);
  }

  getFrameByUrl(url: string | RegExp) {
    return this.page.frame({ url });
  }
}
```

#### 3.4 Example Page Object (LoginPage.ts)

```typescript
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  // ==================== Locators ====================
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly rememberMeCheckbox: Locator;
  readonly forgotPasswordLink: Locator;
  readonly errorMessage: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);
    
    // Initialize locators
    this.usernameInput = page.locator('#username, [name="username"], [data-testid="username"]');
    this.passwordInput = page.locator('#password, [name="password"], [data-testid="password"]');
    this.loginButton = page.locator('button[type="submit"], #login-btn, [data-testid="login-button"]');
    this.rememberMeCheckbox = page.locator('#remember-me, [name="rememberMe"]');
    this.forgotPasswordLink = page.locator('a:has-text("Forgot"), [data-testid="forgot-password"]');
    this.errorMessage = page.locator('.error, .alert-danger, [data-testid="error-message"]');
    this.pageTitle = page.locator('h1, .page-title');
  }

  // ==================== Page Actions ====================
  
  /**
   * Navigate to login page
   */
  async goto(): Promise<void> {
    await this.navigate('/login');
  }

  /**
   * Login with credentials
   * @param username - User's username/email
   * @param password - User's password
   * @param rememberMe - Check remember me option
   */
  async login(username: string, password: string, rememberMe: boolean = false): Promise<void> {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    
    if (rememberMe) {
      const isChecked = await this.isChecked(this.rememberMeCheckbox);
      if (!isChecked) {
        await this.check(this.rememberMeCheckbox);
      }
    }
    
    await this.click(this.loginButton);
  }

  /**
   * Login and wait for dashboard
   */
  async loginAndWaitForDashboard(username: string, password: string): Promise<void> {
    await this.login(username, password);
    await this.page.waitForURL(/.*dashboard.*|.*home.*/);
  }

  /**
   * Get error message text
   */
  async getErrorMessage(): Promise<string> {
    await this.waitForElement(this.errorMessage);
    return await this.getText(this.errorMessage);
  }

  /**
   * Check if login page is displayed
   */
  async isDisplayed(): Promise<boolean> {
    return await this.isVisible(this.loginButton);
  }

  /**
   * Click forgot password link
   */
  async clickForgotPassword(): Promise<void> {
    await this.click(this.forgotPasswordLink);
  }

  // ==================== Assertions ====================
  
  async expectLoginSuccessful(dashboardUrl: string = '/dashboard'): Promise<void> {
    await this.expectURL(new RegExp(`.*${dashboardUrl}.*`));
  }

  async expectLoginFailed(): Promise<void> {
    await this.expectVisible(this.errorMessage);
  }

  async expectErrorMessage(message: string): Promise<void> {
    await this.expectContainsText(this.errorMessage, message);
  }
}
```

#### 3.5 Custom Test Fixtures (test-fixtures.ts)

```typescript
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BasePage } from '../pages/BasePage';

// Declare fixture types
type Fixtures = {
  basePage: BasePage;
  loginPage: LoginPage;
  authenticatedPage: LoginPage;
};

// Extend base test with custom fixtures
export const test = base.extend<Fixtures>({
  // Base page fixture
  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },

  // Login page fixture
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },

  // Authenticated page fixture (auto-login)
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      process.env.TEST_USERNAME || 'testuser',
      process.env.TEST_PASSWORD || 'testpass'
    );
    await page.waitForURL(/.*dashboard.*/);
    await use(loginPage);
  },
});

export { expect };
```

#### 3.6 Custom Reporter (custom-reporter.ts)

```typescript
import { 
  Reporter, 
  FullConfig, 
  Suite, 
  TestCase, 
  TestResult, 
  FullResult 
} from '@playwright/test/reporter';
import * as fs from 'fs';

interface TestSummary {
  total: number;
  passed: number;
  failed: number;
  skipped: number;
  duration: number;
  startTime: Date;
  endTime: Date;
  tests: TestDetail[];
}

interface TestDetail {
  title: string;
  status: string;
  duration: number;
  error?: string;
  retries: number;
}

class CustomReporter implements Reporter {
  private summary: TestSummary = {
    total: 0,
    passed: 0,
    failed: 0,
    skipped: 0,
    duration: 0,
    startTime: new Date(),
    endTime: new Date(),
    tests: [],
  };

  onBegin(config: FullConfig, suite: Suite): void {
    this.summary.startTime = new Date();
    console.log('\n🎭 ═══════════════════════════════════════════');
    console.log('   PLAYWRIGHT TEST EXECUTION STARTED');
    console.log('═══════════════════════════════════════════════\n');
    console.log(`📁 Test Directory: ${config.testDir}`);
    console.log(`🌐 Base URL: ${config.projects[0]?.use?.baseURL || 'Not set'}`);
    console.log(`👥 Workers: ${config.workers}`);
    console.log(`🔄 Retries: ${config.projects[0]?.retries || 0}`);
    console.log('\n───────────────────────────────────────────────\n');
  }

  onTestBegin(test: TestCase): void {
    console.log(`🧪 Running: ${test.title}`);
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    const duration = result.duration / 1000;
    const statusEmoji = this.getStatusEmoji(result.status);
    
    console.log(`${statusEmoji} ${test.title} (${duration.toFixed(2)}s)`);
    
    this.summary.total++;
    this.summary.duration += result.duration;
    
    const testDetail: TestDetail = {
      title: test.title,
      status: result.status,
      duration: result.duration,
      retries: result.retry,
    };

    switch (result.status) {
      case 'passed':
        this.summary.passed++;
        break;
      case 'failed':
      case 'timedOut':
        this.summary.failed++;
        if (result.error) {
          testDetail.error = result.error.message;
          console.log(`   ❌ Error: ${result.error.message?.split('\n')[0]}`);
        }
        break;
      case 'skipped':
        this.summary.skipped++;
        break;
    }

    this.summary.tests.push(testDetail);
  }

  onEnd(result: FullResult): void {
    this.summary.endTime = new Date();
    const totalDuration = (this.summary.duration / 1000).toFixed(2);
    const passRate = ((this.summary.passed / this.summary.total) * 100).toFixed(1);

    console.log('\n═══════════════════════════════════════════════');
    console.log('   📊 TEST EXECUTION SUMMARY');
    console.log('═══════════════════════════════════════════════\n');
    
    console.log(`   ✅ Passed:  ${this.summary.passed}`);
    console.log(`   ❌ Failed:  ${this.summary.failed}`);
    console.log(`   ⏭️  Skipped: ${this.summary.skipped}`);
    console.log(`   📝 Total:   ${this.summary.total}`);
    console.log(`   📈 Pass Rate: ${passRate}%`);
    console.log(`   ⏱️  Duration: ${totalDuration}s`);
    console.log(`   🏁 Status: ${result.status.toUpperCase()}`);
    
    console.log('\n═══════════════════════════════════════════════\n');

    // Save JSON report
    this.saveReport();
  }

  private getStatusEmoji(status: string): string {
    switch (status) {
      case 'passed': return '✅';
      case 'failed': return '❌';
      case 'timedOut': return '⏰';
      case 'skipped': return '⏭️';
      default: return '❓';
    }
  }

  private saveReport(): void {
    const reportDir = 'reports';
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    const reportPath = `${reportDir}/custom-report.json`;
    fs.writeFileSync(reportPath, JSON.stringify(this.summary, null, 2));
    console.log(`📄 Custom report saved: ${reportPath}\n`);
  }
}

export default CustomReporter;
```

#### 3.7 Example Test (login.spec.ts)

```typescript
import { test, expect } from '../../src/fixtures/test-fixtures';

test.describe('Login Functionality', () => {
  
  test.beforeEach(async ({ loginPage }) => {
    // loginPage fixture auto-navigates to login page
  });

  test('should display login page correctly', async ({ loginPage }) => {
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('should login with valid credentials', async ({ loginPage }) => {
    await loginPage.login(
      process.env.TEST_USERNAME || 'testuser@example.com',
      process.env.TEST_PASSWORD || 'Password123!'
    );
    
    await loginPage.expectLoginSuccessful();
  });

  test('should show error for invalid credentials', async ({ loginPage }) => {
    await loginPage.login('invalid@email.com', 'wrongpassword');
    
    await loginPage.expectLoginFailed();
  });

  test('should show error for empty credentials', async ({ loginPage }) => {
    await loginPage.click(loginPage.loginButton);
    
    await loginPage.expectLoginFailed();
  });

  test('should navigate to forgot password', async ({ loginPage }) => {
    await loginPage.clickForgotPassword();
    
    await loginPage.expectURL(/.*forgot.*|.*reset.*/);
  });
});

test.describe('Authenticated User Tests', () => {
  
  test('should access dashboard after login', async ({ authenticatedPage, page }) => {
    await expect(page).toHaveURL(/.*dashboard.*/);
  });
});
```

#### 3.8 GitHub Actions CI/CD (.github/workflows/playwright.yml)

```yaml
name: Playwright Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
  workflow_dispatch:
    inputs:
      browser:
        description: 'Browser to test'
        required: true
        default: 'chromium'
        type: choice
        options:
          - chromium
          - firefox
          - webkit
          - all

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: Run Playwright tests
        run: npx playwright test ${{ github.event.inputs.browser && format('--project={0}', github.event.inputs.browser) || '' }}
        env:
          BASE_URL: ${{ secrets.BASE_URL }}
          TEST_USERNAME: ${{ secrets.TEST_USERNAME }}
          TEST_PASSWORD: ${{ secrets.TEST_PASSWORD }}

      - name: Upload test report
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: |
            reports/
            test-results/
          retention-days: 30

      - name: Upload screenshots on failure
        uses: actions/upload-artifact@v4
        if: failure()
        with:
          name: failure-screenshots
          path: screenshots/
          retention-days: 7
```

#### 3.9 Package.json

```json
{
  "name": "playwright-automation",
  "version": "1.0.0",
  "description": "Playwright Test Automation Framework",
  "scripts": {
    "test": "npx playwright test",
    "test:headed": "npx playwright test --headed",
    "test:debug": "npx playwright test --debug",
    "test:ui": "npx playwright test --ui",
    "test:chrome": "npx playwright test --project=chromium",
    "test:firefox": "npx playwright test --project=firefox",
    "test:safari": "npx playwright test --project=webkit",
    "test:mobile": "npx playwright test --project=mobile-chrome --project=mobile-safari",
    "test:all": "npx playwright test --project=chromium --project=firefox --project=webkit",
    "report": "npx playwright show-report reports/html",
    "codegen": "npx playwright codegen",
    "trace": "npx playwright show-trace",
    "clean": "rimraf reports test-results screenshots",
    "lint": "eslint src tests --ext .ts",
    "format": "prettier --write \"src/**/*.ts\" \"tests/**/*.ts\""
  },
  "devDependencies": {
    "@playwright/test": "^1.41.0",
    "@types/node": "^20.10.0",
    "dotenv": "^16.3.1",
    "eslint": "^8.55.0",
    "prettier": "^3.1.0",
    "rimraf": "^5.0.5",
    "typescript": "^5.3.0"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

#### 3.10 Environment Template (.env.example)

```env
# Application Settings
BASE_URL=https://example.com
ENVIRONMENT=staging

# Test Credentials
TEST_USERNAME=testuser@example.com
TEST_PASSWORD=SecurePassword123!

# API Settings
API_BASE_URL=https://api.example.com
API_KEY=your-api-key-here

# Browser Settings
HEADLESS=true
SLOW_MO=0

# Reporting
REPORT_SLACK_WEBHOOK=https://hooks.slack.com/services/xxx
```

### Step 4: Validation Checklist

After generating the framework, verify:

- [ ] `npm install` completes without errors
- [ ] `npx playwright install` downloads browsers
- [ ] `npm run test` executes without configuration errors
- [ ] Page objects extend BasePage correctly
- [ ] Custom reporters generate output files
- [ ] CI/CD workflow syntax is valid
- [ ] TypeScript compiles without errors

### Step 5: Customization for User's Domain

Ask user for specific pages to automate and generate:
1. Page Objects for each page
2. Test specs for each feature
3. Test data files
4. Update locators based on actual DOM

## Coding Standards

### Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Page Objects | PascalCase + Page | `LoginPage`, `DashboardPage` |
| Test Files | kebab-case.spec.ts | `login.spec.ts` |
| Locators | camelCase | `submitButton`, `emailInput` |
| Methods | camelCase verb | `clickSubmit()`, `fillEmail()` |
| Constants | UPPER_SNAKE | `MAX_RETRIES`, `API_TIMEOUT` |

### Best Practices
- ✅ Use Locator API, not `$()` or `$$()` ElementHandles
- ✅ Use `data-testid` attributes for reliable selectors
- ✅ Implement retry logic in BasePage
- ✅ Store credentials in environment variables
- ✅ Use fixtures for authentication state
- ✅ Group related tests with `test.describe()`
- ✅ Use meaningful test names that describe behavior
- ❌ Never hardcode credentials
- ❌ Avoid `waitForTimeout()` - use proper waits
- ❌ Don't use XPath when CSS/text selectors work

## Resources

- [scripts/setup.sh](scripts/setup.sh) - Quick setup script
- [examples/](examples/) - More page object examples
- Playwright Docs: https://playwright.dev/docs/intro
