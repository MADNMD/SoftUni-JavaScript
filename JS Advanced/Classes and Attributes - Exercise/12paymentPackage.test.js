const { expect } = require('chai');
const PaymentPackage = require('./12paymentPackage');

describe('Testing Payment Package', () => {

    describe('Constructor Tests', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('JavaScript', 1);
        });

        it('Test 1: The name is correct', () => {
            expect(paymentPackage.name).to.be.string;
        });

        it('Test 2: Shoud return correct new name', () => {
            expect(paymentPackage.name = 'Java').to.be.equal('Java');
        })

        it('Test 3: Shoud throw error if name is not string', () => {
            expect(() => paymentPackage.name = 1).to.throw(Error);
        });

        it('Test 4: Shoud throw error if name is empty string', () => {
            expect(() => paymentPackage.name = '').to.throw(Error);
        });

        it('Test 5: Shoud throw error if name is equal array', () => {
            expect(() => paymentPackage.name = []).to.throw(Error);
        });

        it('Test 6: Shoud throw error if name is equal object', () => {
            expect(() => paymentPackage.name = {}).to.throw(Error);
        });

        it('Test 7: Shoud throw error if name is equal undefined', () => {
            expect(() => paymentPackage.name = undefined).to.throw(Error);
        });

        it('Test 8: Shoud throw error if name is equal null', () => {
            expect(() => paymentPackage.name = null).to.throw(Error);
        });

        it('Test 9: The value is correct', () => {
            expect(paymentPackage.value).to.be.equal(1);
        });

        it('Test 10: Shoud return correct new value', () => {
            expect(paymentPackage.value = 0).to.be.equal(0);
        })

        it('Test 11: Shoud throw error if value is negative number', () => {
            expect(() => paymentPackage.value = -1).to.throw(Error);
        });

        it('Test 12: Shoud throw error if value is not a number', () => {
            expect(() => paymentPackage.value = '').to.throw(Error);
        });

        it('Test 13: Shoud throw error if value is not a number', () => {
            expect(() => paymentPackage.value = []).to.throw(Error);
        });

        it('Test 14: Shoud throw error if value is not a number', () => {
            expect(() => paymentPackage.value = {}).to.throw(Error);
        });

        it('Test 15: Shoud throw error if value is not a number', () => {
            expect(() => paymentPackage.value = undefined).to.throw(Error);
        });

        it('Test 16: The VAT is correct if equal 20 and type number', () => {
            expect(paymentPackage.VAT).to.be.equal(20);
            expect(typeof (paymentPackage.VAT)).to.be.equal('number');
        });

        it('Test 17: Shoud throw error if VAT is different 20', () => {
            expect(() => paymentPackage.VAT = -1).to.throw(Error);
        });

        it('Test 18: Shoud throw error if VAT is different 20', () => {
            expect(() => paymentPackage.VAT = '').to.throw(Error);
        });

        it('Test 19: Shoud throw error if VAT is different 20', () => {
            expect(() => paymentPackage.VAT = []).to.throw(Error);
        });

        it('Test 20: Shoud throw error if VAT is different 20', () => {
            expect(() => paymentPackage.VAT = {}).to.throw(Error);
        });

        it('Test 21: Shoud throw error if VAT is different 20', () => {
            expect(() => paymentPackage.VAT = null).to.throw(Error);
        });

        it('Test 22: Shoud throw error if VAT is different 20', () => {
            expect(() => paymentPackage.VAT = undefined).to.throw(Error);
        });

        it('Test 23: Shoud throw correct new VAT', () => {
            expect((paymentPackage.VAT = 1)).to.be.equal(1);
        })

        it('Test 23: The active is correct if equa true and type boolean', () => {
            expect(paymentPackage.active).to.be.true;
            expect(typeof (paymentPackage.active)).to.be.equal('boolean');
        });

        it('Test 24: Shoud throw error if active is different bollean', () => {
            expect(() => paymentPackage.active = 1).to.throw(Error);
        });

        it('Test 25: Shoud throw error if active is different bollean', () => {
            expect(() => paymentPackage.active = '').to.throw(Error);
        });

        it('Test 26: Shoud throw error if active is different bollean', () => {
            expect(() => paymentPackage.active = []).to.throw(Error);
        });

        it('Test 27: Shoud throw error if active is different bollean', () => {
            expect(() => paymentPackage.active = {}).to.throw(Error);
        });

        it('Test 28: Shoud throw error if active is different bollean', () => {
            expect(() => paymentPackage.active = null).to.throw(Error);
        });

        it('Test 29: Shoud throw error if active is different bollean', () => {
            expect(() => paymentPackage.active = undefined).to.throw(Error);
        });
    });

    describe('Testing toString Method', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('JavaScript', 1);
        });


        it('Test 1: Active state', () => {
            const output = [
                'Package: JavaScript',
                `- Value (excl. VAT): 1`,
                `- Value (VAT 20%): ${1 * (1 + 20 / 100)}`
            ].join('\n');
            expect(paymentPackage.toString()).to.be.equal(output);
        });

        it('Test 2: Not active state', () => {
            const output = [
                'Package: JavaScript (inactive)',
                `- Value (excl. VAT): 1`,
                `- Value (VAT 20%): ${1 * (1 + 20 / 100)}`
            ].join('\n');
            paymentPackage.active = false;
            expect(paymentPackage.toString()).to.be.equal(output);
        });
    });
});