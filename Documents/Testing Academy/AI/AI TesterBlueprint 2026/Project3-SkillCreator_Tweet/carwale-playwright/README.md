# 🚗 CarWale Playwright Automation Framework

A production-ready Playwright test automation framework for [CarWale](https://www.carwale.com) website using TypeScript and Page Object Model (POM) design pattern.

## 📋 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running Tests](#-running-tests)
- [Test Cases](#-test-cases)
- [Reports](#-reports)
- [Configuration](#-configuration)

## ✨ Features

- ✅ **Page Object Model (POM)** - Clean separation of page logic and tests
- ✅ **TypeScript** - Type-safe test automation
- ✅ **Custom Fixtures** - Pre-configured page objects for tests
- ✅ **Custom Reporter** - Beautiful console output with emojis
- ✅ **Multi-Browser Support** - Chrome, Firefox, Safari
- ✅ **CI/CD Ready** - GitHub Actions workflow included
- ✅ **Auto-Wait** - No flaky `waitForTimeout` calls
- ✅ **Screenshots & Videos** - Captured on test failure

## 📁 Project Structure

```
carwale-playwright/
├── src/
│   ├── pages/                    # Page Object Models
│   │   ├── BasePage.ts           # Base class with common methods
│   │   ├── HomePage.ts           # CarWale home page
│   │   ├── NewCarsPage.ts        # New cars listing page
│   │   └── index.ts              # Page exports
│   ├── fixtures/
│   │   └── test-fixtures.ts      # Custom test fixtures
│   ├── utils/                    # Utility functions
│   └── types/                    # TypeScript interfaces
├── tests/
│   └── e2e/
│       ├── home.spec.ts          # Home page tests
│       └── new-cars.spec.ts      # New cars page tests
├── reporters/
│   └── custom-reporter.ts        # Custom Playwright reporter
├── .github/workflows/
│   └── playwright.yml            # GitHub Actions CI/CD
├── playwright.config.ts          # Playwright configuration
├── package.json
├── tsconfig.json
└── .env
```

## 🔧 Prerequisites

- Node.js >= 18.0.0
- npm or yarn

## 📦 Installation

1. **Clone the repository**
   ```bash
   cd carwale-playwright
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## 🚀 Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Run tests in UI mode
```bash
npm run test:ui
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run specific browser
```bash
npm run test:chrome
npm run test:firefox
npm run test:safari
```

### Run specific test file
```bash
npm run test:home
npm run test:newcars
```

### Generate test code with Codegen
```bash
npm run codegen
```

## 🧪 Test Cases

### Home Page Tests (`home.spec.ts`)

| Test ID | Description |
|---------|-------------|
| TC001 | Verify Home Page loads successfully |
| TC002 | Verify New Cars menu is visible |
| TC003 | Hover on NEW CARS shows dropdown |
| TC004 | Click Find New Cars navigates to New Cars Page |
| TC005 | **Complete Flow**: Home → Hover → Click → Verify |
| TC006 | Verify all navigation items are visible |
| TC007 | Verify logo is clickable |

### New Cars Page Tests (`new-cars.spec.ts`)

| Test ID | Description |
|---------|-------------|
| TC101 | Verify New Cars page loads directly |
| TC102 | Verify page heading exists |
| TC103 | Verify car listings are displayed |
| TC104 | Verify clicking on car listing |
| TC105 | Verify filter section is present |

## 📊 Reports

### View HTML Report
```bash
npm run report
```

Reports are saved in:
- `reports/html/` - HTML report
- `reports/results.json` - JSON results
- `reports/latest-report.json` - Latest run summary

### Custom Reporter Output Example

```
╔══════════════════════════════════════════════════════════════╗
║   🚗  CARWALE PLAYWRIGHT TEST AUTOMATION                     ║
╠══════════════════════════════════════════════════════════════╣
║   📁 Test Directory: ./tests                                 ║
║   🌐 Base URL: https://www.carwale.com                       ║
║   👥 Workers: 4                                              ║
╚══════════════════════════════════════════════════════════════╝

🧪 [chromium] Running: TC001 - Verify Home Page loads successfully
✅ [chromium] TC001 - Verify Home Page loads successfully (2.34s)
```

## ⚙️ Configuration

### Environment Variables (`.env`)

```env
BASE_URL=https://www.carwale.com
HEADLESS=true
```

### Playwright Config Highlights

- **Timeout**: 60 seconds per test
- **Retries**: 1 on local, 2 on CI
- **Viewport**: 1920x1080
- **Browsers**: Chromium, Firefox, WebKit
- **Artifacts**: Screenshots, videos, traces on failure

## 🏗️ Architecture

### Page Object Model

```typescript
// BasePage - Common methods
class BasePage {
  async navigate(path: string)
  async hover(locator: Locator)
  async click(locator: Locator)
  async expectVisible(locator: Locator)
}

// HomePage - Extends BasePage
class HomePage extends BasePage {
  readonly newCarsMenu: Locator
  async hoverOnNewCarsMenu()
  async clickFindNewCars()
}
```

### Custom Fixtures

```typescript
// Use pre-initialized page objects
test('example', async ({ homePage }) => {
  // homePage is already navigated to home page
  await homePage.hoverOnNewCarsMenu();
});
```

## 👨‍💻 Author

**Testing Academy** - Prrammod Dutta

## 📄 License

This project is for educational purposes.
