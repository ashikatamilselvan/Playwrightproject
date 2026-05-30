import {test,expect} from '@playwright/test';

test('Mini Project',async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/')

    await page.locator("//a[@class='ico-register']").click();
    await page.locator('#FirstName').fill('Ashi')
    await page.locator('#LastName').fill('puppy')
     await page.locator('#Email').fill('ashibqjkwbbjqbjkbj@gmail.com')
  await page.locator('#Password').fill('sashi1@123')
     await page.locator('#ConfirmPassword').fill('sashi1@123')
  await page.locator('#register-button').click();
  await page.locator('//input[@class="button-1 register-continue-button"]').click();

await page.locator('#small-searchterms').fill('jean');
await page.locator('//input[@class="button-2 product-box-add-to-cart-button"]').nth(1).click();
await page.getByText('Shopping cart').first().click();
await page.waitForTimeout(3000);
await page.locator('#termsofservice').check();
await page.locator('#checkout').click();
await page.getByText('Shopping cart').first().click();
await page.locator('//input[@name="removefromcart"]').check();
await page.locator('//input[@name="updatecart"]').click();
await page.getByText('Log out').click();


  await page.waitForTimeout(3000);
  await page .pause();


})