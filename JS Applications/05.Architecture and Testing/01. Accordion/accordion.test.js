const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;

describe('Accordion site', async () => {
    // this.timeout(5000);

    before(async () => { browser = await chromium.launch({ headless: false, slowMo: 500 }); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('The sait contains these titles', async () => {

        await page.goto('http://127.0.0.1:5500/01.%20Accordion/index.html');

        await page.waitForSelector('.accordion');

        const content = await page.textContent('#main');

        expect(content).to.contain('Scalable Vector Graphics');
        expect(content).to.contain('Open standard');
        expect(content).to.contain('Unix');
        expect(content).to.contain('ALGOL');
    });

    it('Button More', async () => {

        await page.goto('http://127.0.0.1:5500/01.%20Accordion/index.html');

        await page.click('text=More');
        await page.waitForSelector('.accordion p');
        const visible = await page.isVisible('.accordion p');
        expect(visible).to.be.true;
    });
    
    it('Button Less', async () => {

        await page.goto('http://127.0.0.1:5500/01.%20Accordion/index.html');

        await page.click('text=More');
        await page.waitForSelector('.accordion p');
        let visible = await page.isVisible('.accordion p');
        expect(visible).to.be.true;

        await page.click('text=Less');
        visible = await page.isVisible('.accordion p');
        expect(visible).to.be.false;
    });
})