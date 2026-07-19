# Learn Playwright 2x

A hands-on Playwright automation testing project built with TypeScript. Tests are organized by topic — from basics through an advanced framework — to serve as a structured learning path.

## Prerequisites

- Node.js (LTS version)
- npm

## Setup

```bash
npm install
npx playwright install
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode
npx playwright test --headed

# Run tests with UI mode
npx playwright test --ui

# Run a specific test file
npx playwright test tests/01_Basics/229_BasicTest.spec.ts

# Run all tests in a topic folder
npx playwright test tests/02_first_tests/
```

## View Reports

```bash
# Built-in Playwright HTML report
npx playwright show-report
```

### Custom TTA Report

A custom HTML reporter (`utils/CustomReporter.ts`) is registered in `playwright.config.ts` and runs automatically on every test run. It generates a real-time report with per-step details, console logs, screenshots, video timestamps, and traces.

Output (in `tta-report/`, gitignored):

| File | Purpose |
| --- | --- |
| `report_<YYYYMMDD_HHMMSS>.html` | Full report for that run |
| `index.html` | Redirect to the latest report |
| `history.html` | Index of all past runs |
| `screenshots/`, `videos/`, `traces/` | Copied attachments |

Open `tta-report/index.html` after a run.

Steps only appear in the report when test code wraps actions in `test.step()`:

```ts
await test.step('Navigate to dashboard URL', async () => {
    await page.goto('https://app.wingify.com/#/dashboard?accountId=1227004');
});
```

Optional environment variables: `TEST_ENV` (default `UAT`) and `TEST_AUTHOR` (default `TTA-QA`).

## Configuration

Key settings in `playwright.config.ts`:

- **Browser:** Chromium (Desktop Chrome); Firefox and WebKit projects available (commented out)
- **Mode:** Headed, fully parallel
- **Viewport:** 1920×1080
- **Trace:** on · **Video:** on · **Screenshot:** only on failure
- **Reporters:** HTML · Allure · custom TTA reporter (`utils/CustomReporter.ts`)
- **Timeout:** 30s per test
- On CI: retries 2, single worker, `forbidOnly` enforced

## Project Structure

```
├── .github/workflows/       # CI/CD workflows
├── fixtures/                # Custom test fixtures
├── pages/                   # Page Object Model classes
├── test-data/               # Test data files
├── utils/                   # Helper utilities (incl. CustomReporter.ts)
├── tests/                   # Topic-organized test specs
├── playwright.config.ts     # Playwright configuration
└── package.json             # Dependencies and scripts
```

### Test Topics

| Folder | Topic |
| --- | --- |
| `01_Basics` | Basic tests, annotations |
| `02_first_tests` | Browser / context / page, multiple contexts & pages |
| `03_Locators_Commands` | Locators and commands |
| `04_Session_Storage` | Session storage |
| `05_Allure_Reporting` | Allure reporting, custom TTA reporter |
| `06_Multiple_Elements` | Handling multiple elements |
| `07_WebTables` | Web tables — dynamic XPath, dynamic columns, following/preceding-sibling, filtering, pagination traversal, OrangeHRM tasks |
| `08_Web_Select_Frames_Iframe` | Select dropdowns, frames, iframes |
| `09_Frame_Iframe` | Frames and iframes |
| `10_Keyboard_Hover_Drag_Drop` | Keyboard, hover, drag & drop |
| `11_JS_Alerts` | JavaScript alerts |
| `12_Handle_SVG` | Handling SVG |
| `13_Shadow_DOM` | Shadow DOM |
| `14_FileUpload` | File upload |
| `15_File_Download` | File download |
| `16_Scroll_toElement` | Scroll to element |
| `17_Expect_Assertions` | Expect assertions |
| `18_Test_hooks` | Test hooks |
| `19_Data_Driven_Testing` | Data-driven testing |
| `20_Page_Object_Model` | Page Object Model |
| `21_Fixture` | Fixtures |
| `22_Misc_Concepts` | Miscellaneous concepts |
| `23_Advance_Framework` | Advanced framework |
| `Projects` | End-to-end projects |
