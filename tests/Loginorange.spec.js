import {test,expect} from '@playwright/test'

    test('loginpage',async({page})=>
    {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.keyboard.press('Enter');
        await page.pause();
    
    })
