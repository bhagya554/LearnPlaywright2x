# Learn Playwright 2x

A Playwright automation testing project with TypeScript.

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
npx playwright test tests/example.spec.ts
```

## View Reports

```bash
npx playwright show-report
```

## Project Structure

```
├── .github/workflows/   # CI/CD workflows
├── tests/               # Test files
├── playwright.config.ts # Playwright configuration
└── package.json         # Dependencies and scripts
```
