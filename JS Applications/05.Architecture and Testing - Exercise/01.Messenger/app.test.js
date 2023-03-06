const { chromium } = require('playwright-chromium');
const { expect } = require('chai');
const { json } = require('stream/consumers');

let browser, page;

describe('Messenger App', async function () {
    this.timeout(20000);

    before(async () => { browser = await chromium.launch({ headless: false, slowMo: 500 }) });
    after(async () => { await browser.close() });
    beforeEach(async () => { page = await browser.newPage() });
    afterEach(async () => { await page.close() });

    it('Test 1: Refresh button', async () => {

        await page.goto('http://127.0.0.1:5500/01.Messenger/index.html');

        await page.click('text=Refresh');
        await page.waitForSelector('#refresh');
        const isVisible = await page.isVisible('#messages');
        expect(isVisible).to.be.true;
    });

    it('Test 2: Send button', async () => {

        await page.goto('http://127.0.0.1:5500/01.Messenger/index.html');

        await page.waitForSelector('#controls');
        await page.route(
            '**/jsonstore/messenger*',
            request => request.fulfill(json({ author: 'Mihail Donchev', content: 'Hi guys' }))
        );

        await page.fill('#author', 'Mihail Donchev');
        await page.fill('#content', 'Hi guys');

        const [response] = await Promise.all([
            page.waitForRequest(r => r.url()
                .includes('/jsonstore/messenger') &&
                r.method() === 'POST'),
            page.click('#submit')
        ]);
        const responseData = JSON.parse(await response.postData());

        expect(responseData).to.deep.equal({ 'author': 'Mihail Donchev', 'content': 'Hi guys' });
    });
});