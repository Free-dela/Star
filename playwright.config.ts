import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  workers: process.env.CI ? 1 : 1, // Reduce workers in CI to prevent rate limiting
  testDir: 'Star',
  timeout: 500000,
  retries: process.env.CI ? 2 : 2, // More retries in CI
  snapshotDir: 'snapshots',
  reporter: [
    ['html'],
    ['dot']
  ],
  use: {
    headless: false, // Run in headed mode
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    navigationTimeout: 45000,
    actionTimeout: 30000,
    baseURL: 'https://vizzainsurance.com',
    launchOptions: {
      args: [
        '--start-maximized',
        // '--auto-open-devtools-for-tabs',
        // '--no-sandbox',
        // '--disable-minimize-on-focus-loss'
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
