import {test,expect} from '@playwright/test';

test('Mini Project',async({page})=>{

    await page.goto('https://vinothqaacademy.com/mouse-event/')
    // await page.locator('#doubleBtn').dblclick();
    // await page.locator('#rightBtn').click({button:'right'});
    const hoveri=await page.locator('#tooltipTarget')
    
    await page.waitForTimeout(3000);
})