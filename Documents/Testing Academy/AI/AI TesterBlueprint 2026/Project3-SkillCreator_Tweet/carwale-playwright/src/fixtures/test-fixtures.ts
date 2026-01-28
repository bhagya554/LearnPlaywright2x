import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { NewCarsPage } from '../pages/NewCarsPage';
import { BasePage } from '../pages/BasePage';

/**
 * Custom Fixture Types
 */
type CarWaleFixtures = {
    basePage: BasePage;
    homePage: HomePage;
    newCarsPage: NewCarsPage;
};

/**
 * Extended test with CarWale page fixtures
 * Provides pre-initialized page objects for tests
 */
export const test = base.extend<CarWaleFixtures>({
    /**
     * Base page fixture - provides common methods
     */
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await use(basePage);
    },

    /**
     * Home page fixture - auto-navigates to home page
     */
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.goto();
        await use(homePage);
    },

    /**
     * New Cars page fixture - auto-navigates to new cars page
     */
    newCarsPage: async ({ page }, use) => {
        const newCarsPage = new NewCarsPage(page);
        await newCarsPage.goto();
        await use(newCarsPage);
    },
});

export { expect };
