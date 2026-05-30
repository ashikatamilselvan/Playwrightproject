import{test,expect} from '@playwright/test'
test('Radiobutton',async({page})=>{
    await page.goto('https://artoftesting.com/samplesiteforselenium');
    await page.mouse.wheel(0,500);
    await page.locator('//input[@class="Automation"]').check();
    await page.waitForTimeout(2000);
    await page.locator('//input[@class="Performance"]').check();
    await page.waitForTimeout(3000);
    await page.pause();
})