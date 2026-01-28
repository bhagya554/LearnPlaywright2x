import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
    // Test directory
    testDir: './tests',

    // Run tests in parallel
    fullyParallel: true,

    // Fail build on CI if test.only left in code
    forbidOnly: !!process.env.CI,

    // Retry failed tests
    retries: process.env.CI ? 2 : 1,

    // Number of workers
    workers: process.env.CI ? 1 : undefined,

    // Reporter configuration
    reporter: [
        ['list'],
        ['html', { open: 'never', outputFolder: 'reports/html' }],
        ['json', { outputFile: 'reports/results.json' }],
        ['./reporters/custom-reporter.ts'],
    ],

    // Global timeout
    timeout: 60000,

    // Expect timeout
    expect: {
        timeout: 10000,
    },

    // Shared settings for all projects
    use: {
        // Base URL for CarWale
        baseURL: process.env.BASE_URL || 'https://www.carwale.com',

        // Collect trace on failure
        trace: 'on-first-retry',

        // Screenshot on failure
        screenshot: 'only-on-failure',

        // Video on failure
        video: 'on-first-retry',

        // Viewport
        viewport: { width: 1920, height: 1080 },

        // Action timeout
        actionTimeout: 15000,

        // Navigation timeout
        navigationTimeout: 30000,

        // Ignore HTTPS errors
        ignoreHTTPSErrors: true,
    },

    // Project configurations
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                launchOptions: {
                    args: ['--disable-blink-features=AutomationControlled']
                }
            },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],

    // Output folder for artifacts
    outputDir: 'test-results',
});
