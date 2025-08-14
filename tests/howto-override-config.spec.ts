// @ts-check
import {test} from '@playwright/test';

test('test-1', async ({}, testInfo) => {
    const bu = testInfo.project.use.baseURL
    console.log('test-1 ' + bu)
});

test.describe('override', () => {
        test.use({baseURL: 'https://example.com'});
        test('test-2', async ({baseURL}) => {
            console.log('test-2 ' + baseURL)
        });
    }
)



