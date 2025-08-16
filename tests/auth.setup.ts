import {test as setup} from '@playwright/test';
// @ts-ignore
import path from 'path';

const authFile = path.join(__dirname, '../tmp/user.json'); // path from test

setup('authenticate', async ({ page }) => {
    console.log('running auth setup...')
    await page.context().storageState({ path: authFile })
})