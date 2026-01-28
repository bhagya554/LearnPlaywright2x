---
name: reviewing-selenium-java
description: Analyzes and reviews Selenium automation scripts written in Java. Checks for locator strategies, synchronization, POM usage, and modern Selenium best practices. Use when the user shares Java test classes or Selenium scripts for review.
---

# Selenium Java Code Reviewer

## When to use this skill
- User shares a Selenium Java test class or framework component for review.
- User wants to optimize automation code for better performance or reliability.
- User is preparing for a technical interview and wants to polish their code.
- User asks for best practices on waits, locators, or Page Object Model implementation.

## Workflow

### Step 1: Input Analysis
Accept the code provided by the user. If the code is incomplete (e.g., missing imports or class structure), proceed with reviewing the logic but note the missing context.

### Step 2: Code Audit
Run through the following checklist:

- [ ] **Locators**: Are they reliable? (ID > Name > CSS > XPath). Avoid absolute XPaths.
- [ ] **Synchronization**: Are there `Thread.sleep()` calls? (Replace with `WebDriverWait`).
- [ ] **POM Usage**: Is the code using the Page Object Model? Are elements isolated from logic?
- [ ] **Error Handling**: Are there appropriate try-catch blocks or custom exceptions?
- [ ] **Assertions**: Are there meaningful assertions? (Avoid `system.out.println` as validation).
- [ ] **Modernization**: Is it using `WebDriverManager`? Selenium 4 features (Relative Locators)?

### Step 3: Feedback Generation
Categorize the findings by severity:

#### 🔴 Critical (Must Fix)
- Hardcoded sleeps (`Thread.sleep`).
- Absolute XPaths or fragile locators.
- Hardcoded credentials or environment data.
- Missing assertions.

#### 🟠 Important (Should Fix)
- Redundant code (not using BasePage or Utilities).
- Inefficient loops.
- Lack of data-driven approaches.
- Not using TestNG/JUnit annotations correctly.

#### 🟡 Minor (Nice to Have)
- Naming convention improvements.
- Adding Javadoc/Comments.
- Upgrading to `WebDriverManager`.

### Step 4: Corrected Examples
Provide a side-by-side or "Before vs. After" code block for the most impactful changes.

---

## Instructions

### 1. Wait Strategy
**Anti-pattern:**
```java
Thread.sleep(5000);
driver.findElement(By.id("login")).click();
```
**Correction:**
```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.elementToBeClickable(By.id("login"))).click();
```

### 2. Page Object Model (POM)
Encourage the use of `PageFactory` or the standard `By` locator pattern to separate UI elements from test logic.

### 3. Assertion Best Practices
Ensure assertions have descriptive messages:
```java
Assert.assertTrue(dashboard.isDisplayed(), "Dashboard should be displayed after successful login");
```

## Performance & Scalability
- **Reusable Methods**: Move common actions (click, type, wait) to a `BasePage`.
- **Global Config**: Suggest using `.properties` or `.yaml` files for URL, timeout, and browser settings.

## Resources
- [Selenium 4 Documentation](https://www.selenium.dev/documentation/)
- [WebDriverManager GitHub](https://github.com/bonigarcia/webdrivermanager)
- [TestNG Documentation](https://testng.org/doc/)
