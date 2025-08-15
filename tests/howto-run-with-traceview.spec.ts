// @ts-check
import {test} from '@playwright/test';

test.use({ trace: 'on' }); // options: 'on', 'retain-on-failure', 'on-first-retry'

/**
 * Traces should be run on continuous integration on the first retry
 * of a failed test by setting the trace: 'on-first-retry' option in
 * the test configuration file.
 * This will produce a trace.zip file for each test that was retried.
 */

test('generating a trace view', async ({page}) => {
    await page.goto('http://playwright.dev/')
    await page.getByRole('link', {name: 'Get started'}).click();
});