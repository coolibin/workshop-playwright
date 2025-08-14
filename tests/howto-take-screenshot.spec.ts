// @ts-check
import {test, expect} from '@playwright/test';

test('saving control screenshot', async ({page}) => {
    const rowLocator = page.getByRole('listitem');
    await page.goto('https://playwright.dev/docs/locators');
    await rowLocator
        .filter({ hasText: 'Mary' })
        .filter({ has: page.getByRole('button', { name: 'Say goodbye' }) })
        .screenshot({ path: 'tmp/screenshot.png' });
});