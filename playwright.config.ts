import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  workers: process.env.CI ? 1 : 1, // Reduce workers in CI to prevent rate limiting
  testDir: '.', // Changed to use root directory which contains both ICICI and Star folders
  timeout: 700000, // Increased from 500000 to 900000 (15 minutes)
  retries: process.env.CI ? 1 : 1, // Increased retries
  snapshotDir: 'snapshots',
  reporter: [
    ['html'],
    ['dot']
  ],
  use: {
    headless: process.env.CI ? true : false, // Headless in CI, headed locally
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    navigationTimeout: 50000,  // Increased from 45000 to 60000
    actionTimeout: 50000,     // Increased from 45000 to 60000
    baseURL: 'https://vizzainsurance.com',
    viewport: { width: 1920, height: 1080 }, // Consistent viewport size
    launchOptions: {
      devtools: false,
      args: [
        '--start-maximized',
        '--disable-dev-shm-usage', // Useful for CI
        '--no-sandbox', // Required for CI
        '--disable-gpu',  // Added to reduce rendering differences
        '--force-color-profile=srgb'  // Force consistent color profile
      ]
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
  expect: {
    timeout: 90000,  // Increased from 60000 to 90000
    toHaveScreenshot: {
      maxDiffPixels: 100,
      threshold: 0.2,
      animations: 'disabled'
    }
  },
});
