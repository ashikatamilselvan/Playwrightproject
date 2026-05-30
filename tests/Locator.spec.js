import {test,expect} from '@playwright/test';

test('Login', async ({page})=>{


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').fill('Admin');
    // await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('presentation').nth(0).click();
   // await page.keyboard.press('Enter');
    const link =page.locator('a')
    console.log(await page.locator('a').nth(1).getAttribute('href'));
})
