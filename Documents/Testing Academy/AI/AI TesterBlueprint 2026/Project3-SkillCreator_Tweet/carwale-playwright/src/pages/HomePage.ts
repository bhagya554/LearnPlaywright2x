import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * HomePage - Page Object for CarWale Home Page
 * Contains locators and methods for home page interactions
 */
export class HomePage extends BasePage {
    // ==================== Locators ====================

    // Navigation Menu
    readonly newCarsMenu: Locator;
    readonly usedCarsMenu: Locator;
    readonly sellCarMenu: Locator;
    readonly comparisonMenu: Locator;
    readonly newsMenu: Locator;

    // New Cars Dropdown
    readonly newCarsDropdown: Locator;
    readonly findNewCarsLink: Locator;
    readonly newCarsByBrandLink: Locator;
    readonly newCarsByBudgetLink: Locator;
    readonly upcomingCarsLink: Locator;
    readonly electricCarsLink: Locator;
    readonly latestCarsLink: Locator;

    // Search
    readonly searchBox: Locator;
    readonly searchButton: Locator;

    // Logo
    readonly carwaleLogo: Locator;

    // Page Elements
    readonly pageTitle: Locator;
    readonly heroSection: Locator;

    constructor(page: Page) {
        super(page);

        // Navigation Menu Locators - Using multiple fallback strategies for robustness
        // CarWale uses dynamic class names, so we use text-based and href-based selectors
        this.newCarsMenu = page.locator('header a:has-text("New Cars"), nav a:has-text("New Cars"), [class*="nav"] a:has-text("New Cars"), a[href*="/new-cars"], a[href="/new/"]').first();
        this.usedCarsMenu = page.locator('header a:has-text("Used"), nav a:has-text("Used"), [class*="nav"] a:has-text("Used Cars"), a[href*="/used-cars"], a[href*="used"]').first();
        this.sellCarMenu = page.locator('header a:has-text("Sell"), nav a:has-text("Sell"), [class*="nav"] a:has-text("Sell"), a[href*="/sell"], a[href*="sell-car"]').first();
        this.comparisonMenu = page.locator('header a:has-text("Compare"), nav a:has-text("Compare"), a[href*="compare"]').first();
        this.newsMenu = page.locator('header a:has-text("News"), nav a:has-text("News"), a[href*="/news"]').first();

        // New Cars Dropdown - Multiple selector strategies for robustness
        this.newCarsDropdown = page.locator('.o-cpnuEd, .dropdown-menu, [class*="dropdown"], [class*="submenu"]').first();
        this.findNewCarsLink = page.locator('a:has-text("Find New Cars"), a[href*="/new/"], a[href*="new-cars"]').first();
        this.newCarsByBrandLink = page.locator('a:has-text("Cars by Brand"), a:has-text("By Brand")').first();
        this.newCarsByBudgetLink = page.locator('a:has-text("Cars by Budget"), a:has-text("By Budget")').first();
        this.upcomingCarsLink = page.locator('a:has-text("Upcoming Cars"), a[href*="upcoming"]').first();
        this.electricCarsLink = page.locator('a:has-text("Electric Cars"), a[href*="electric"]').first();
        this.latestCarsLink = page.locator('a:has-text("Latest Cars"), a:has-text("Newly Launched")').first();

        // Search
        this.searchBox = page.locator('input[type="search"], input[placeholder*="Search"], .search-input, #search').first();
        this.searchButton = page.locator('button[type="submit"], .search-button, [aria-label="Search"]').first();

        // Logo
        this.carwaleLogo = page.locator('a[href="/"] img, .logo, [class*="logo"]').first();

        // Page Elements
        this.pageTitle = page.locator('h1').first();
        this.heroSection = page.locator('.hero, [class*="hero"], .banner').first();
    }

    // ==================== Page Navigation ====================

    /**
     * Navigate to CarWale home page
     */
    async goto(): Promise<void> {
        await this.navigate('/');
        await this.acceptCookiesIfPresent();
    }

    /**
     * Check if home page is loaded
     */
    async isLoaded(): Promise<boolean> {
        return await this.isVisible(this.carwaleLogo);
    }

    // ==================== Navigation Menu Actions ====================

    /**
     * Hover over New Cars menu to show dropdown
     */
    async hoverOnNewCarsMenu(): Promise<void> {
        await this.waitForElement(this.newCarsMenu);
        await this.hover(this.newCarsMenu);
        // Wait for dropdown animation
        await this.page.waitForTimeout(500);
    }

    /**
     * Click on Find New Cars link in dropdown
     */
    async clickFindNewCars(): Promise<void> {
        await this.waitForElement(this.findNewCarsLink, 5000);
        await this.click(this.findNewCarsLink);
    }

    /**
     * Navigate to New Cars page via mouse hover and click
     * This is the main flow: Hover on NEW CARS -> Click Find New Cars
     */
    async navigateToNewCarsViaHover(): Promise<void> {
        // Step 1: Hover over New Cars menu
        await this.hoverOnNewCarsMenu();

        // Step 2: Click on Find New Cars link
        await this.clickFindNewCars();

        // Step 3: Wait for navigation
        await this.waitForPageLoad();
    }

    /**
     * Click on New Cars menu item directly
     */
    async clickNewCarsMenu(): Promise<void> {
        await this.waitForElement(this.newCarsMenu);
        await this.click(this.newCarsMenu);
    }

    /**
     * Hover and click on Upcoming Cars
     */
    async navigateToUpcomingCars(): Promise<void> {
        await this.hoverOnNewCarsMenu();
        await this.waitForElement(this.upcomingCarsLink);
        await this.click(this.upcomingCarsLink);
        await this.waitForPageLoad();
    }

    /**
     * Hover and click on Electric Cars
     */
    async navigateToElectricCars(): Promise<void> {
        await this.hoverOnNewCarsMenu();
        await this.waitForElement(this.electricCarsLink);
        await this.click(this.electricCarsLink);
        await this.waitForPageLoad();
    }

    // ==================== Search Actions ====================

    /**
     * Search for a car
     */
    async searchCar(searchTerm: string): Promise<void> {
        await this.fill(this.searchBox, searchTerm);
        await this.click(this.searchButton);
        await this.waitForPageLoad();
    }

    // ==================== Assertions ====================

    /**
     * Verify home page is displayed
     */
    async expectHomePageDisplayed(): Promise<void> {
        await this.expectVisible(this.carwaleLogo);
        await this.expectVisible(this.newCarsMenu);
    }

    /**
     * Verify New Cars dropdown is visible
     */
    async expectNewCarsDropdownVisible(): Promise<void> {
        await this.expectVisible(this.findNewCarsLink);
    }

    /**
     * Verify navigation to New Cars page
     */
    async expectOnNewCarsPage(): Promise<void> {
        await this.expectURL(/.*new.*cars.*|.*\/new\/.*/i);
    }
}
