const { chromium, request } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;
const url = 'http://127.0.0.1:5500/02.Book-Library/index.html';

const mochData = {
    "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
        "author": "J.K.Rowling",
        "title": "Harry Potter and the Philosopher's Stone"
    },
    "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
        "author": "Svetlin Nakov",
        "title": "C# Fundamentals"
    }
}

describe('Book Library Test', async function () {
    this.timeout(20000);

    before(async () => { browser = await chromium.launch({ headless: false, slowMo: 500 }) });
    // before(async () => { browser = await chromium.launch() });
    after(async () => { browser.close() });
    beforeEach(async () => { page = await browser.newPage() });
    afterEach(async () => { page.close() });

    it('Load all books', async () => {

        await page.route('**/jsonstore/collections/books', (route, request) => { //на страницата регистрираме page.route
            route.fulfill({ // с fulfill връщаме данни
                body: JSON.stringify(mochData),
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            })
        });

        await page.goto(url);
        await page.click('text=Load all books');
        await page.waitForSelector('text=Harry Potter');
        const rowData = await page.$$eval('tbody tr', rows => rows.map(r => r.textContent)); // изпраща функцията rows на browser-a и  
        //brawoser-a  ще я изпълни върху селектора tbody tr  

        expect((rowData[0])).contains('Harry Potter');
        expect((rowData[0])).contains('Rowling');
        expect(rowData[1]).contains('C# Fundamentals');
        expect((rowData[1])).contains('Svetlin Nakov');
    });

    it('Create book', async () => {

        await page.goto(url);

        await page.fill('input[name=title]', 'Title');
        await page.fill('input[name=author]', 'Author');

        const [request] = await Promise.all([
            page.waitForRequest(request => request.method() === 'POST'),
            page.click('text=Submit'),
        ]);
        const data = JSON.parse(request.postData());

        expect(data.title).to.be.equal('Title');
        expect(data.author).to.be.equal('Author');
    });

    describe('Edit Tests', () => {

        it('Load books', async () => {

            await page.goto(url);
            await page.click('text=Load all books');
            await page.click('text=Edit');

            const editFormDisplay = await page.$eval('#editForm', el => el.style.display);
            const createFormDisplay = await page.$eval('#createForm', el => el.style.display);

            expect(editFormDisplay).to.be.equal('block');
            expect(createFormDisplay).to.be.equal('none');
        });
        it('Load correct information', async () => {

            await page.goto(url);
            await page.click('text=Load all books');
            await page.click('text=Edit');

            const [response] = await Promise.all([
                page.waitForResponse(r => r.request()),
                page.click('text=Save'),
            ]);
            const data = JSON.parse(await response.body());

            expect(data.title).to.be.equal('Harry Potter and the Philosopher\'s Stone');
            expect(data.author).to.be.equal('J.K.Rowling');

        });

        it('Correct request', async () => {

            await page.goto(url);
            await page.click('text=Load all books');
            await page.click('text=Edit');

            const [request] = await Promise.all([
                page.waitForRequest(request => request.method() === 'PUT'),
                await page.click('text=Save'),
            ]);
            const data = JSON.parse(await request.postData());

            expect(data.title).to.be.equal('Harry Potter and the Philosopher\'s Stone');
            expect(data.author).to.be.equal('J.K.Rowling');
        });
    });
    it('Delete book', async () => {

        await page.goto(url);
        await page.click('text=Load all books');
        await page.click('text=Delete');

        
    });
});