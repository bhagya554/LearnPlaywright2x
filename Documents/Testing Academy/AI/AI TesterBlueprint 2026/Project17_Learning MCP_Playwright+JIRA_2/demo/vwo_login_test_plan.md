# Test Plan: VWO Login Feature Testing

| Field | Value |
|-------|-------|
| **Version** | 1.0.0 |
| **Author** | Antigravity AI |
| **Date** | 2026-04-02 |
| **Environment** | Production |
| **Browser** | Chromium, Firefox, Webkit |

---

## 1. Introduction

This test plan describes the testing approach for **VWO Login Feature Testing**. It outlines the scope, test strategy, resources, schedule, and deliverables for the testing effort.

## 2. Objectives

- Verify core login functionality works as expected.
- Identify defects in the login process before user experience is impacted.
- Ensure user flows (valid login, invalid login, forgot password) are complete and error-free.
- Validate UI elements (input fields, buttons, checkboxes, icons) and navigation.

## 3. Scope

### In Scope
- **Functional Testing:**
  - Login with valid email and password.
  - Login with invalid email or password (negative testing).
  - "Forgot Password?" redirection and basic flow.
  - "Remember me" checkbox functionality.
  - Password visibility toggle (eye icon).
- **Redirection Testing:**
  - "Sign in with Google" redirection.
  - "Sign in using SSO" redirection.
- **UI Validation:**
  - Existence and visibility of all login components (Logo, Input fields, Buttons).
  - Validation of error messages for incorrect credentials.

### Out of Scope
- Performance testing (load/stress).
- Backend database level validation.
- Extensive security testing (e.g., pen-testing, SQL injection beyond basic input handling).
- Registration/Signup flow.
- Browser-specific extensions or non-standard configurations.

## 4. Test Strategy

### Test Approach
- **Automation Tool:** Playwright with `@playwright/test`.
- **Test Type:** End-to-end (E2E) functional testing.
- **Browser:** Chromium, Firefox, Webkit.
- **Environment:** Production (`https://app.vwo.com`).

### Test Levels
- **Smoke Testing:** Verify the "Sign in" button is clickable and redirects to the dashboard after a valid login.
- **Functional Testing:** Validate all success and error paths.
- **Negative Testing:** Test with missing fields, invalid formats, and incorrect credentials.

## 5. Test Environment

| Component | Details |
|-----------|---------|
| Application URL | https://app.vwo.com |
| Browser | Chromium, Firefox, Webkit |
| OS | Windows 10/11 |
| Framework | Playwright v1.58+ |
| Reporter | HTML + JSON |

## 6. Entry Criteria

- Application is deployed and accessible at the specified URL.
- Test data (valid and test-only credentials) is available.
- Test environment (Node.js, Playwright) is correctly configured.

## 7. Exit Criteria

- All planned test cases executed across all scheduled browsers.
- No critical/high priority defects remaining open.
- Automation test report generated and reviewed for consistency.

## 8. Test Cases Summary

- **TC01: Valid Login:** Verify user can successfully log in with valid credentials.
- **TC02: Invalid Credentials:** Verify error message "Your email, password, IP address or location did not match" is displayed for incorrect credentials.
- **TC03: Forgot Password:** Verify clicking "Forgot Password?" redirects to the password recovery page.
- **TC04: Password Visibility:** Verify the "eye icon" in the password field toggles between masked and plain text.
- **TC05: Remember Me:** Verify the "Remember me" checkbox is selectable and saves the user session/email as expected.
- **TC06: Google SSO Redirection:** Verify clicking "Sign in with Google" redirects to the Google account selection page.
- **TC07: SSO Login Redirection:** Verify clicking "Sign in using SSO" redirects to the Enterprise SSO login page.
- **TC08: Empty Fields:** Verify appropriate validation messages when clicking "Sign in" with empty email/password fields.

## 9. Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|-----------|
| App Downtime | High | Schedule tests during low-usage hours; use a stable environment if available. |
| CAPTCHA/BOT Detection | Medium | Coordinate with developers to whitelist test accounts/IPs or provide an override. |
| Flaky Tests | Medium | Use Playwright's `waitForSelector` and reliable locators; keep tests atomic. |

## 10. Schedule

| Phase | Duration |
|-------|----------|
| Test Planning | 1 day |
| Test Case Design | 1 day |
| Test Execution | 1 day |
| Defect Reporting | Ongoing |
| Test Closure | 1 day |

## 11. Deliverables

- [x] Test Plan (this document)
- [ ] Test Cases Document
- [ ] Test Execution Report (HTML)
- [ ] Defect Reports (Jira tickets)
- [ ] Test Summary Report
