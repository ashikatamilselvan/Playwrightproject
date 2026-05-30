import { test } from '@playwright/test';
import { mainpro } from './mainpro';

test('govt website', async ({ page }) => {

    const govt = new mainpro(page);

    await govt.launchURL();

    await govt.selectRegion();

    await govt.selectLanguage();

    await govt.selectMinister();

    await govt.selectDate();

    await govt.openPressRelease();

    await govt.handleDialog();

    await govt.openSpeech();

    await govt.openAboutPIB();

    
});