# Allure Reporting with Playwright

## Prerequisites

- Make sure [Node.js](https://nodejs.org/led.
- Run the following command from the root (parent) Playwright project folder:

```bash
npm install --save-dev @playwright/test allure-playwright
```

---

## Configure Allure Reporter

Update your `playwright.config.ts` file:

```ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: [
    ["list"],
    ["allure-playwright"]
  ]
});
```

Verify the configuration:

```bash
npx playwright test
```

---

## Add Allure Metadata

Import Allure in your test file:

```ts
import * as allure from "allure-js-commons";
```

Example:

```ts
test("Login Test", async ({ page }) => {
  await allure.epic("VWO Login Tests");
  await allure.feature("Essential Features");
  await allure.story("Authentication");
  await allure.description("Verify that the login page works");

  // Test steps
});
```

---

## Set Allure Labels via Terminal

Linux/macOS:

```bash
export ALLURE_LABEL_epic=WebInterface
```

Windows (CMD):

```cmd
set ALLURE_LABEL_epic=WebInterface
```

Windows (PowerShell):

```powershell
$env:ALLURE_LABEL_epic="WebInterface"
```

---

## Run a Specific Test

```bash
npx playwright test tests/05_Allure_Reporting/230_Login.spec.ts
```

---

## Install Allure Command Line

One-time installation:

```bash
npm install -D allure-commandline
```

If `allure` is not recognized:

```bash
npm i -g allure-commandline
```

---

## Generate and View Allure Report

```bash
allure serve allure-results/
```

---

## Adding Custom Logs to Allure

### Simple Text Log

```ts
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";

await allure.attachment(
  "Text Log",
  "Login button clicked successfully.",
  ContentType.TEXT
);
```

### Multi-line Log

```ts
await allure.attachment(
  "Execution Details",
  `
Step 1: Open Login Page
Step 2: Enter Username
Step 3: Enter Password
Step 4: Click Login Button
Result: Login Successful
`,
  ContentType.TEXT
);
```

### Dynamic Log

```ts
const userName = "admin";
const status = "Success";

await allure.attachment(
  "Login Information",
  `User: ${userName}\nStatus: ${status}`,
  ContentType.TEXT
);
```

### JSON Log

```ts
await allure.attachment(
  "API Response",
  JSON.stringify(response, null, 2),
  ContentType.JSON
);
```

### Attach Error Message

```ts
try {
  // test code
} catch (error) {
  await allure.attachment(
    "Error Details",
    String(error),
    ContentType.TEXT
  );
  throw error;
}
```

---

## Useful Allure Attachments

### Screenshot

```ts
await allure.attachment(
  "Login Screenshot",
  await page.screenshot(),
  ContentType.PNG
);
```

### Page Source

```ts
await allure.attachment(
  "Page Source",
  await page.content(),
  ContentType.HTML
);
```

### Custom Debug Information

```ts
await allure.attachment(
  "Debug Log",
  `
Current URL: ${page.url()}
Timestamp: ${new Date().toISOString()}
Environment: QA
`,
  ContentType.TEXT
);
```

---

## Reference

- https://allurereport.org/docs/playwright/