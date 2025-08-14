// @ts-check
import {test, type Page} from '@playwright/test';

test.describe('runs in parallel with other describes', () => {

    test.describe.configure({mode: 'default'}); // overrides the default parallelism

    let page: Page;

    test.beforeAll(async ({browser}) => {
        page = await browser.newPage();
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('in order 1', async () => {
        await page.goto('https://playwright.dev/');
    });
    test('in order 2', async () => {
        await page.getByText('Get Started').click();
    });
});