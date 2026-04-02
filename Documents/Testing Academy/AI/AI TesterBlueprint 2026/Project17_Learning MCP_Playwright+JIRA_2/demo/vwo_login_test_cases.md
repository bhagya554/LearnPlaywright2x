# Test Cases: VWO Login Feature

| Field | Value |
|-------|-------|
| **Version** | 2.0 |
| **Author** | Antigravity AI |
| **Date** | 2026-04-02 |
| **Total Test Cases** | 5 |

---

## Test Case Format

Each test case follows this structure:

| Field | Description |
|-------|-------------|
| **TC ID** | Unique identifier (TC-001, TC-002, ...) |
| **Title** | Brief description of what is tested |
| **Preconditions** | What must be true before the test |
| **Steps** | Step-by-step instructions |
| **Expected Result** | What should happen |
| **Priority** | High / Medium / Low |
| **Category** | Smoke / Functional / Negative |
| **Spec File** | Corresponding Playwright spec file |

---

## Test Cases

| TC ID | Title | Preconditions | Steps | Expected Result | Priority | Category | Spec File |
|---|---|---|---|---|---|---|---|
| **TC-01** | Login with Chinese characters in Email | Browser is at `app.vwo.com/#/login` | 1. Enter `用户@测试.com` into the email field.<br>2. Enter any valid length password.<br>3. Click "Sign in". | Error message "Your email, password, IP address or location did not match" (or "The Email address field is invalid") is displayed. | High | Negative | `vwo_login.spec.ts` |
| **TC-02** | Login with Arabic characters in Password | Browser is at `app.vwo.com/#/login` | 1. Enter a valid registered email.<br>2. Enter `كلمة-المرور` into the password field.<br>3. Click "Sign in". | Error message "Your email, password, IP address or location did not match" is displayed. | High | Negative | `vwo_login.spec.ts` |
| **TC-03** | Login with Invalid Email Format (e.g. no @) | Browser is at `app.vwo.com/#/login` | 1. Enter `invalidinput.com` into the email field.<br>2. Enter any password.<br>3. Click "Sign in". | Validation message "The Email address field is invalid" appears below the email input field. | Medium | Negative | `vwo_login.spec.ts` |
| **TC-04** | Login with Empty Email and Password | Browser is at `app.vwo.com/#/login` | 1. Ensure both fields are empty.<br>2. Click "Sign in". | Inline validation messages "The Email address field is required" and "The Password field is required" appear. | High | Negative | `vwo_login.spec.ts` |
| **TC-05** | Login with Script/SQL Injection strings | Browser is at `app.vwo.com/#/login` | 1. Enter `<script>alert(1)</script>` into the email field.<br>2. Enter `' OR 1=1 --` into the password field.<br>3. Click "Sign in". | System handles it as an invalid login attempt and displays the "did not match" error message (no JS execution or bypass occurred). | High | Negative | `vwo_login.spec.ts` |

---

## Summary

| Priority | Count |
|----------|-------|
| High | 4 |
| Medium | 1 |
| Low | 0 |
| **Total** | **5** |

| Category | Count |
|----------|-------|
| Smoke | 0 |
| Functional | 0 |
| Negative | 5 |
