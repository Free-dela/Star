import { defineConfig, devices } from '@playwright/test';

// Read from environment variables or use default BrowserStack credentials
const browserStackUser = process.env.BROWSERSTACK_USERNAME || 'freedela_1cf5SI';
const browserStackKey = process.env.BROWSERSTACK_ACCESS_KEY || 'tVyBg5cTUwDDPpkWqoqF';

export default defineConfig({
  workers: process.env.CI ? 1 : 1,
  testDir: '.',
  timeout: 600000,
  retries: process.env.CI ? 2 : 2,
  snapshotDir: 'snapshots',
  reporter: [
    ['html'],
    ['dot'],
    ['allure-playwright', {
      detail: true,
      outputFolder: 'allure-results',
      suiteTitle: false
    }]
  ],
  
  use: {
    headless: process.env.CI ? true : false,
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    navigationTimeout: 40000,
    actionTimeout: 40000,
    baseURL: 'https://vizzainsurance.com',
    viewport: { width: 1920, height: 1080 },
    launchOptions: {
      devtools: false,
      args: [
        '--start-maximized',
        '--disable-dev-shm-usage',
        '--no-sandbox',
        '--disable-gpu',
        '--force-color-profile=srgb'
      ]
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'galaxy-s23-browserstack',
      use: {
        ...devices['Galaxy S23 Ultra'],
        browserName: 'chromium',
        channel: 'chrome',
        isMobile: true,
        hasTouch: true,
        viewport: { width: 360, height: 720 },
        deviceScaleFactor: 3.0,
        launchOptions: {
          args: [
            '--touch-events=enabled'
          ]
        }
      },
    },
    
  ],

  expect: {
    timeout: 90000,
    toHaveScreenshot: {
      maxDiffPixels: 100,
      threshold: 0.2,
      animations: 'disabled'
    }
  },
});
