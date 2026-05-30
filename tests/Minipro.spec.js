import { test, expect, chromium } from '@playwright/test';

test('Loginpage', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click({ force: true });

    const drop = await page.locator('.product_sort_container');

    await drop.selectOption({ label: 'Price (low to high)' });

    await page.waitForTimeout(3000);
    await page.mouse.wheel(0,500);
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.waitForTimeout(4000);
    await page.mouse.wheel(0,-500);
    await page.locator('#shopping_cart_container').click();
    //await page.locator('#checkout').click();
    await page.goBack();
    // await page.locator('#first-name').fill('ashika');
    // await page.locator('#last-name').fill('selvam');
    // await page.locator('#postal-code').fill('609401');
    // await page.locator('#continue').click();
    //await page.locator('#finish').click();
   //await page.goBack();
   
    


    await page.pause();
});