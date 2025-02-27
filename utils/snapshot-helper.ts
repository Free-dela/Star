import { Page } from '@playwright/test';

export async function takeSnapshot(page: Page, name: string) {
    // Remove dynamic elements before snapshot
    await page.evaluate(() => {
        const elementsToRemove = document.querySelectorAll('[data-testid="timestamp"], .dynamic-content');
        elementsToRemove.forEach(element => element.remove());
    });

    // Take screenshot with configured name
    await page.screenshot({
        path: `./snapshots/chromium/${name}.png`,
        fullPage: true
    });
}

export const snapshotConfig = {
    maxDiffPixelRatio: 0.1,
    threshold: 0.2,
    maxDiffPixels: 100
};
