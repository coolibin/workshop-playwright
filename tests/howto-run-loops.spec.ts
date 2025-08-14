// @ts-check
import {test, expect} from '@playwright/test';

test('iterating', async ({page}) => {
    await page.goto('https://playwright.dev/docs/locators');
    for (const row of await page.getByRole('listitem').all())
        console.log(await row.textContent());
});

test('regular loop', async ({page}) => {
    await page.goto('https://playwright.dev/docs/locators');
    const rows = page.getByRole('listitem').filter({ hasText: /^Product/ });
    const count = await rows.count();
    for (let i = 0; i < count; ++i)
        console.log(await rows.nth(i).textContent());
});

test('evaluateAll', async ({page}) => {
    await page.goto('https://playwright.dev/docs/locators');
    const rows = page.getByRole('listitem');
    const texts = await rows.evaluateAll(
        list => list.map(element => element.textContent));
    console.log(texts);
});