const { test, expect } = require('@playwright/test');

test('DropDownPage', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.mouse.wheel(0, 500);

  const dropdown = page.locator('#country');
  await dropdown.selectOption({ index: 9 });
  await page.waitForTimeout(5000);
});