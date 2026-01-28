import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * NewCarsPage - Page Object for CarWale New Cars Page
 * Contains locators and methods for new cars page interactions
 */
export class NewCarsPage extends BasePage {
    // ==================== Locators ====================

    // Page Header
    readonly pageTitle: Locator;
    readonly pageHeading: Locator;
    readonly breadcrumb: Locator;

    // Filters
    readonly budgetFilter: Locator;
    readonly brandFilter: Locator;
    readonly bodyTypeFilter: Locator;
    readonly fuelTypeFilter: Locator;
    readonly transmissionFilter: Locator;
    readonly seatingFilter: Locator;

    // Car Listings
    readonly carCards: Locator;
    readonly carNames: Locator;
    readonly carPrices: Locator;
    readonly viewMoreButton: Locator;

    // Popular Brands
    readonly popularBrands: Locator;
    readonly brandLogos: Locator;

    // Sorting
    readonly sortDropdown: Locator;

    constructor(page: Page) {
        super(page);

        // Page Header
        this.pageTitle = page.locator('h1').first();
        this.pageHeading = page.locator('h1, .page-heading, [class*="heading"]').first();
        this.breadcrumb = page.locator('.breadcrumb, [class*="breadcrumb"], nav[aria-label="breadcrumb"]');

        // Filters
        this.budgetFilter = page.locator('[data-filter="budget"], .budget-filter, [class*="budget"]').first();
        this.brandFilter = page.locator('[data-filter="brand"], .brand-filter, [class*="brand-filter"]').first();
        this.bodyTypeFilter = page.locator('[data-filter="bodytype"], .bodytype-filter, [class*="body-type"]').first();
        this.fuelTypeFilter = page.locator('[data-filter="fueltype"], .fuel-filter, [class*="fuel"]').first();
        this.transmissionFilter = page.locator('[data-filter="transmission"], [class*="transmission"]').first();
        this.seatingFilter = page.locator('[data-filter="seating"], [class*="seating"]').first();

        // Car Listings - Robust selectors for different CarWale page structures
        this.carCards = page.locator('li[class*="card"], article, [class*="carCard"], [class*="card-container"], .o-be864x');
        this.carNames = page.locator('h3, h2, [class*="carName"], a[title*="Price"], .o-cpnuEd');
        this.carPrices = page.locator('[class*="price"], .price, .o-euonUq');
        this.viewMoreButton = page.locator('button:has-text("View More"), a:has-text("View More"), .o-cpnuEd:has-text("More")');

        // Popular Brands
        this.popularBrands = page.locator('.popular-brands, [class*="brand-list"], .brand-section');
        this.brandLogos = page.locator('.brand-logo, [class*="brand"] img, .popular-brands img');

        // Sorting
        this.sortDropdown = page.locator('select[name="sort"], .sort-dropdown, [class*="sort"]').first();
    }

    // ==================== Page Navigation ====================

    /**
     * Navigate directly to New Cars page
     */
    async goto(): Promise<void> {
        await this.navigate('/new/');
        await this.acceptCookiesIfPresent();
    }

    /**
     * Check if New Cars page is loaded
     */
    async isLoaded(): Promise<boolean> {
        return await this.isVisible(this.pageHeading);
    }

    // ==================== Filter Actions ====================

    /**
     * Select budget range
     */
    async selectBudget(minPrice: string, maxPrice: string): Promise<void> {
        await this.click(this.budgetFilter);
        // Implementation depends on actual filter UI
        await this.waitForPageLoad();
    }

    /**
     * Select brand
     */
    async selectBrand(brandName: string): Promise<void> {
        const brandOption = this.page.locator(`text=${brandName}`);
        await this.click(brandOption);
        await this.waitForPageLoad();
    }

    /**
     * Select body type
     */
    async selectBodyType(bodyType: string): Promise<void> {
        await this.click(this.bodyTypeFilter);
        const option = this.page.locator(`text=${bodyType}`);
        await this.click(option);
        await this.waitForPageLoad();
    }

    // ==================== Listing Actions ====================

    /**
     * Get total number of car listings displayed
     */
    async getCarListingsCount(): Promise<number> {
        return await this.getCount(this.carCards);
    }

    /**
     * Click on a specific car by name
     */
    async clickOnCar(carName: string): Promise<void> {
        const carCard = this.page.locator(`text=${carName}`).first();
        await this.click(carCard);
        await this.waitForPageLoad();
    }

    /**
     * Click on first car in the list
     */
    async clickFirstCar(): Promise<void> {
        await this.click(this.carCards.first());
        await this.waitForPageLoad();
    }

    /**
     * Load more cars
     */
    async loadMoreCars(): Promise<void> {
        if (await this.isVisible(this.viewMoreButton)) {
            await this.click(this.viewMoreButton);
            await this.waitForPageLoad();
        }
    }

    // ==================== Sorting ====================

    /**
     * Sort cars by option
     */
    async sortBy(option: 'popularity' | 'price-low' | 'price-high' | 'latest'): Promise<void> {
        await this.selectOption(this.sortDropdown, option);
        await this.waitForPageLoad();
    }

    // ==================== Assertions ====================

    /**
     * Verify New Cars page is displayed
     */
    async expectNewCarsPageDisplayed(): Promise<void> {
        await this.expectURL(/.*new.*|.*cars.*/i);
    }

    /**
     * Verify page heading contains expected text
     */
    async expectPageHeading(expectedText: string): Promise<void> {
        await this.expectContainsText(this.pageHeading, expectedText);
    }

    /**
     * Verify car listings are displayed
     */
    async expectCarListingsDisplayed(): Promise<void> {
        const count = await this.getCount(this.carCards);
        if (count === 0) {
            throw new Error('No car listings found on the page');
        }
    }

    /**
     * Verify filters are visible
     */
    async expectFiltersVisible(): Promise<void> {
        // At least one filter should be visible
        const filtersVisible =
            await this.isVisible(this.budgetFilter) ||
            await this.isVisible(this.brandFilter) ||
            await this.isVisible(this.bodyTypeFilter);

        if (!filtersVisible) {
            throw new Error('No filters visible on New Cars page');
        }
    }
}
