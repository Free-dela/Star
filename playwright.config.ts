import { defineConfig, devices } from '@playwright/test';
// import allure from 'allure-playwright';

export default defineConfig({    // ['allure', { outputFolder: 'allure-results' }]  // Allure reporter with output folder

  workers: process.env.CI ? 6 : 4, // Number of workers based on CI environment
  testDir: 'Star', // Directory where test files are located
  timeout: 360000, // Global test timeout (7 minutes)
  retries: 1, // Number of retries for failed tests
  snapshotDir: 'snapshots', // Directory where snapshots are stored
  video: 'on', // Record videos of tests
  reporter: [
    ['html'], 
    ['allure-playwright'],  // Add allure reporter
    ['dot'] // Dot-style reporter (minimal output)
  ],
  use: {
    headless: true, // Run tests in headless mode (false = launch browser UI)
    trace: 'on', // Enable tracing for failed tests 
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment if you want to test on Firefox and WebKit as well:
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
