import {test as setup} from '@playwright/test';

setup('global', async ({}) => {
    console.log('running a global setup...')
})