import {test,expect} from '@playwright/test'
test('Facebook Title Checking',async({page})=>
{
    await page.goto('https://www.facebook.com');
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://www.facebook.com');

});
