import {test,expect} from '@playwright/test'

test ('Myntra',async({page})=>{
    await page.goto('https://www.myntra.com/');
    await page.getByPlaceholder("Search for products, brands and more").fill('crocs');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    await page.goBack();
    await page.goForward();
     await page.waitForTimeout(3000);
     await page.pause();

})

