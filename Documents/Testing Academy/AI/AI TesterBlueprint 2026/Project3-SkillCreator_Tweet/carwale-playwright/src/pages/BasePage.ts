import { Page, Locator, expect } from '@playwright/test';

/**
 * BasePage - Foundation class for all page objects
 * Contains common methods used across all pages
 */
export class BasePage {
    readonly page: Page;
    readonly baseURL: string;

    constructor(page: Page) {
        this.page = page;
        this.baseURL = process.env.BASE_URL || 'https://www.carwale.com';
    }

    // ==================== Navigation ====================

    /**
     * Navigate to a specific path
     */
    async navigate(path: string = '/'): Promise<void> {
        await this.page.goto(path);
        await this.waitForPageLoad();
    }

    /**
     * Navigate to a full URL
     */
    async navigateToURL(url: string): Promise<void> {
        await this.page.goto(url);
        await this.waitForPageLoad();
    }

    /**
     * Go back to previous page
     */
    async goBack(): Promise<void> {
        await this.page.goBack();
        await this.waitForPageLoad();
    }

    /**
     * Refresh the page
     */
    async refresh(): Promise<void> {
        await this.page.reload();
        await this.waitForPageLoad();
    }

    // ==================== Wait Methods ====================

    /**
     * Wait for page to fully load
     */
    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Wait for element to be visible
     */
    async waitForElement(locator: Locator, timeout: number = 10000): Promise<void> {
        await locator.waitFor({ state: 'visible', timeout });
    }

    /**
     * Wait for element to be hidden
     */
    async waitForElementHidden(locator: Locator, timeout: number = 10000): Promise<void> {
        await locator.waitFor({ state: 'hidden', timeout });
    }

    /**
     * Wait for URL to contain text
     */
    async waitForURLContains(text: string, timeout: number = 30000): Promise<void> {
        await this.page.waitForURL(`**/*${text}*`, { timeout });
    }

    // ==================== Actions ====================

    /**
     * Click on an element
     */
    async click(locator: Locator): Promise<void> {
        await locator.click();
    }

    /**
     * Double click on an element
     */
    async doubleClick(locator: Locator): Promise<void> {
        await locator.dblclick();
    }

    /**
     * Right click on an element
     */
    async rightClick(locator: Locator): Promise<void> {
        await locator.click({ button: 'right' });
    }

    /**
     * Fill input field (clears first)
     */
    async fill(locator: Locator, text: string): Promise<void> {
        await locator.clear();
        await locator.fill(text);
    }

    /**
     * Type text character by character
     */
    async type(locator: Locator, text: string, delay: number = 50): Promise<void> {
        await locator.pressSequentially(text, { delay });
    }

    /**
     * Hover over an element
     */
    async hover(locator: Locator): Promise<void> {
        await locator.hover();
    }

    /**
     * Select option from dropdown
     */
    async selectOption(locator: Locator, value: string): Promise<void> {
        await locator.selectOption(value);
    }

    /**
     * Check a checkbox
     */
    async check(locator: Locator): Promise<void> {
        await locator.check();
    }

    /**
     * Uncheck a checkbox
     */
    async uncheck(locator: Locator): Promise<void> {
        await locator.uncheck();
    }

    // ==================== Getters ====================

    /**
     * Get text content of element
     */
    async getText(locator: Locator): Promise<string> {
        return await locator.textContent() || '';
    }

    /**
     * Get input value
     */
    async getValue(locator: Locator): Promise<string> {
        return await locator.inputValue();
    }

    /**
     * Get attribute value
     */
    async getAttribute(locator: Locator, attribute: string): Promise<string | null> {
        return await locator.getAttribute(attribute);
    }

    /**
     * Get current page URL
     */
    async getCurrentURL(): Promise<string> {
        return this.page.url();
    }

    /**
     * Get page title
     */
    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    /**
     * Get count of elements
     */
    async getCount(locator: Locator): Promise<number> {
        return await locator.count();
    }

    // ==================== State Checks ====================

    /**
     * Check if element is visible
     */
    async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }

    /**
     * Check if element is enabled
     */
    async isEnabled(locator: Locator): Promise<boolean> {
        return await locator.isEnabled();
    }

    /**
     * Check if checkbox is checked
     */
    async isChecked(locator: Locator): Promise<boolean> {
        return await locator.isChecked();
    }

    // ==================== Assertions ====================

    /**
     * Assert element is visible
     */
    async expectVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }

    /**
     * Assert element is hidden
     */
    async expectHidden(locator: Locator): Promise<void> {
        await expect(locator).toBeHidden();
    }

    /**
     * Assert element has text
     */
    async expectText(locator: Locator, text: string): Promise<void> {
        await expect(locator).toHaveText(text);
    }

    /**
     * Assert element contains text
     */
    async expectContainsText(locator: Locator, text: string): Promise<void> {
        await expect(locator).toContainText(text);
    }

    /**
     * Assert URL matches pattern
     */
    async expectURL(urlPattern: string | RegExp): Promise<void> {
        await expect(this.page).toHaveURL(urlPattern);
    }

    /**
     * Assert page title
     */
    async expectTitle(title: string | RegExp): Promise<void> {
        await expect(this.page).toHaveTitle(title);
    }

    // ==================== Screenshots ====================

    /**
     * Take a screenshot
     */
    async takeScreenshot(name: string): Promise<Buffer> {
        return await this.page.screenshot({
            path: `screenshots/${name}.png`,
            fullPage: true
        });
    }

    // ==================== Keyboard ====================

    /**
     * Press a keyboard key
     */
    async pressKey(key: string): Promise<void> {
        await this.page.keyboard.press(key);
    }

    // ==================== Scroll ====================

    /**
     * Scroll to element
     */
    async scrollToElement(locator: Locator): Promise<void> {
        await locator.scrollIntoViewIfNeeded();
    }

    /**
     * Scroll to top of page
     */
    async scrollToTop(): Promise<void> {
        await this.page.evaluate(() => window.scrollTo(0, 0));
    }

    /**
     * Scroll to bottom of page
     */
    async scrollToBottom(): Promise<void> {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }

    // ==================== Cookies & Storage ====================

    /**
     * Clear all cookies
     */
    async clearCookies(): Promise<void> {
        await this.page.context().clearCookies();
    }

    /**
     * Accept cookie consent popup if present
     */
    async acceptCookiesIfPresent(): Promise<void> {
        try {
            const acceptButton = this.page.locator('button:has-text("Accept"), button:has-text("Got it"), .cookie-accept');
            if (await acceptButton.isVisible({ timeout: 3000 })) {
                await acceptButton.click();
            }
        } catch {
            // Cookie popup not present, continue
        }
    }
}
