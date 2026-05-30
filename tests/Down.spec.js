import {test,expect} from '@playwright/test'
test ('dropdown',async({page})=>{
    await page.goto('https://artoftesting.com/samplesiteforselenium')
    await page.mouse.wheel(0,900)
    const dropdown = await page.locator('#testingDropdown');
    dropdown.selectOption({value:'Manual'});
    await page.waitForTimeout(3000);
    dropdown.selectOption({label:'Database Testing'});



    await page.waitForTimeout(3000);
    await page.pause();

})


