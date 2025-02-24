import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  workers: process.env.CI ? 1 : 1, // Reduce workers in CI to prevent rate limiting
  testDir: 'Star',
  timeout: 500000,
  retries: process.env.CI ? 3 : 3, // More retries in CI
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
    navigationTimeout: 45000,
    actionTimeout: 45000, // Increased from 30000 to match navigation timeout
    baseURL: 'https://vizzainsurance.com',
    viewport: { width: 1920, height: 1080 }, // Consistent viewport size
    launchOptions: {
      args: [
        '--start-maximized',
        '--disable-dev-shm-usage', // Useful for CI
        '--no-sandbox', // Required for CI
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
    timeout: 60000,
  },
});
