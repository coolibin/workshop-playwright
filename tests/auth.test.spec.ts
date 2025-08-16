// @ts-check
import {test, expect} from '@playwright/test';

test('has title', async ({page}) => {
    console.log('running: ' + test.info().title + ' for browser: ' + test.info().project.name )
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});