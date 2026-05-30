import { expect } from '@playwright/test';

export class mainpro {

    constructor(page) {

        this.page = page;

        this.region = page.locator('//select[@class="classic form-control"]');

        this.language = page.locator('//select[@aria-label="Language Selection"]');

        this.minister = page.locator('#ContentPlaceHolder1_ddlMinistry');

        this.date = page.locator('#ContentPlaceHolder1_ddlday');

        this.month = page.locator('#ContentPlaceHolder1_ddlMonth');

        this.year = page.locator('#ContentPlaceHolder1_ddlYear');

        this.homeIcon = page.locator("//i[@class='fa-home_r']");

        this.alertBox = page.locator('//li[@class="col-md-0"]').nth(3);

        this.aboutUs = page.locator('//a[@aria-label="About Us"]');
    }

    async launchURL() {

        await this.page.goto('https://www.pib.gov.in/allRel.aspx?reg=3&lang=1');
    }

    async selectRegion() {

        await this.region.selectOption({ value: '6' });
    }

    async selectLanguage() {

        await this.language.selectOption({ value: '1' });
    }

    async selectMinister() {

        await this.minister.selectOption({ value: '3' });
    }

    async selectDate() {

        await this.date.selectOption({ value: '3' });

        await this.month.selectOption({ label: 'March' });

        await this.year.selectOption({ label: '2025' });
    }

    async openPressRelease() {

        const [newWindow] = await Promise.all([

            this.page.waitForEvent('popup'),

            this.page.getByText(
                'PM to participate in three Post- Budget webinars on 4th March'
            ).click()

        ]);

        await newWindow.waitForLoadState();

        const text = await newWindow.locator('#Titleh2').textContent();

        console.log(text);

        await expect(newWindow.locator('#Titleh2'))
            .toHaveText(
                'PM to participate in three Post- Budget webinars on 4th March'
            );

        await newWindow.close();
    }

    async handleDialog() {

        this.page.on('dialog', async dialog => {

            console.log(dialog.message());

            await dialog.dismiss();
        });

        await this.page.mouse.wheel(0, 3000);

        await this.alertBox.click();

        await this.page.waitForTimeout(3000);

        await this.page.mouse.wheel(0, -5000);
    }

    async openSpeech() {

        await this.homeIcon.click();

        await this.page.waitForTimeout(3000);

        await this.page.getByText('Speeches').first().click();

        

        await this.page.getByText("English Translation of Prime Minister's Press Statement during the Joint Press Statement at the 3rd India-Nordic Summit").click();
        await this.page.waitForTimeout(3000);
        const frame = this.page.frameLocator('iframe');

        const speeches = await frame.locator('#Titleh2').innerText();

        console.log(speeches);
    }

    async openAboutPIB() {

        await this.homeIcon.click();

        await this.aboutUs.hover();

        const [pdfPage] = await Promise.all([

            this.page.waitForEvent('popup'),

            this.page.getByText('About PIB').click()

        ]);

        await this.page.waitForTimeout(3000);   

        await pdfPage.waitForLoadState();

        console.log(await pdfPage.title());

        await pdfPage.close();

        await this.page.waitForTimeout(3000);

       await this.homeIcon.click();

        await this.page.waitForTimeout(3000);

        console.log("Main Project has been completed Successfully");
        
    }
}