const { expect } = require('chai');
const { companyAdministration } = require('./03companyAdministration');

describe('Testing methods on companyAdministration object', () => {

    describe('Test hiringEmployee method', () => {

        it('Test 1: If the position is differen from Programmer', () => {
            expect(() => { companyAdministration.hiringEmployee('Mihail', 'Developer', 1) }).to.throw(Error);
        });

        it('Test 2: Requirement for starting on job', () => {
            expect(companyAdministration.hiringEmployee('Mihail', 'Programmer', 4)).to.be.equal('Mihail was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('Mihail', 'Programmer', 3)).to.be.equal('Mihail was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('Mihail', 'Programmer', 2)).to.be.equal('Mihail is not approved for this position.');
        });
    });
    describe('Test calculateSalary method', () => {


        it('Test 1: If input is invalid', () => {
            expect(() => { companyAdministration.calculateSalary(-1) }).to.throw(Error);
            expect(() => { companyAdministration.calculateSalary('') }).to.throw(Error);
            expect(() => { companyAdministration.calculateSalary([]) }).to.throw(Error);
            expect(() => { companyAdministration.calculateSalary({}) }).to.throw(Error);
            expect(() => { companyAdministration.calculateSalary(null) }).to.throw(Error);
            expect(() => { companyAdministration.calculateSalary(undefined) }).to.throw(Error);
        });

        it('Test 2: We validate the salary', () => {
            expect(companyAdministration.calculateSalary(1)).to.be.equal(15);
            expect(companyAdministration.calculateSalary(160)).to.be.equal(2400);
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415);
        });
    });

    describe('Test firedEmployee method', () => {


        it('Test 1: If input is invalid', () => {
            expect(() => { companyAdministration.firedEmployee([], '') }).to.throw(Error);
            expect(() => { companyAdministration.firedEmployee([], []) }).to.throw(Error);
            expect(() => { companyAdministration.firedEmployee([], {}) }).to.throw(Error);
            expect(() => { companyAdministration.firedEmployee([], null) }).to.throw(Error);
            expect(() => { companyAdministration.firedEmployee([], undefined) }).to.throw(Error);
            expect(() => { companyAdministration.firedEmployee(['Mihail', 'Nikola'], -1) }).to.throw(Error);
            expect(() => { companyAdministration.firedEmployee(['Mihail', 'Nikola'], 2) }).to.throw(Error);

            expect(() => { companyAdministration.firedEmployee(1, 1) }).to.throw(Error);
            expect(() => { companyAdministration.firedEmployee('', 1) }).to.throw(Error);
            expect(() => { companyAdministration.firedEmployee({}, 1) }).to.throw(Error);
            expect(() => { companyAdministration.firedEmployee(null, 1) }).to.throw(Error);
            expect(() => { companyAdministration.firedEmployee(undefined, 1) }).to.throw(Error);
        });

        it('Test 2: If input is valid', () => {
            expect(companyAdministration.firedEmployee(['Mihail', 'Nikola', 'Vanq'], 2)).to.be.equal('Mihail, Nikola');
        });
    });
});