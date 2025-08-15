import {test} from '@playwright/test';

test('reading value from input', async ({page}) => {
    await page.goto('https://www.w3schools.com/html/html_forms.asp');

    const value = await page.locator('input#fname').inputValue();
    console.log(value)

//     // Shorthand via page
//     const value2 = await page.inputValue('input[name="fname"]');
//     console.log(value2)
//
//
//     // From a <textarea>
//     const notes = await page.locator('textarea#notes').inputValue();
//
// // From a <select> (returns the selected option's value)
//     const selected = await page.locator('select#country').inputValue();


})

test('reading value from a selector', async ({page}) => {
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select', {
        waitUntil: 'domcontentloaded',
    });

    const frame = page.frameLocator('#iframeResult');
    const optionValue = await frame.locator('select#cars').inputValue();
    console.log('optionValue=' + optionValue);

    const visibleText = (await frame.locator('select#cars').locator('option:checked').textContent())?.trim() ?? '';
    console.log('visibleText=' + visibleText);

})

