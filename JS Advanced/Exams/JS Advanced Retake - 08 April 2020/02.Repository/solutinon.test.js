const { expect } = require('chai');
const { Repository } = require("./solution.js");

describe('Testing class Repository', function () {

    let instance = {};

    this.beforeEach(() => instance = new Repository({
        name: 'string',
        age: 'number',
        birthday: 'object',
    }))

    describe('Test getter count', () => {

        it('Test 1: Count greater than zero', () => {
            expect(instance.count).to.be.equal(0);
        });
    });
    describe('Test add function', () => {

        it('Test 1: If input is valid', () => {
            expect(instance.add({ name: 'a', age: 1, birthday: {} })).to.be.equal(0);
        });
        it('Test 2: If parameters is miss', () => {
            expect(() => instance.add({ age: 1, birthday: {} })).to.throw('Property name is missing from the entity!');
            expect(() => instance.add({ name: 'a', birthday: {} })).to.throw('Property age is missing from the entity!');
            expect(() => instance.add({ name: 'a', age: 1, })).to.throw('Property birthday is missing from the entity!');
        });
        it('Test 3: If any parameters is of the wrong type', () => {
            expect(() => instance.add({ name: 1, age: 1, birthday: {} })).to.throw('Property name is not of correct type!');
            expect(() => instance.add({ name: 'a', age: 'a', birthday: {} })).to.throw('Property age is not of correct type!');
            expect(() => instance.add({ name: 'a', age: 1, birthday: '' })).to.throw('Property birthday is not of correct type!');
        });
    });
    describe('Test getId function', () => {

        it('Test 1: If id not exist', () => {
            expect(() => instance.getId(1)).to.throw('Entity with id: 1 does not exist!');
        });
    });
    describe('Test update function', () => {

        it('Test 1: If id not exist', () => {
            expect(() => instance.update(0, {})).to.throw('Entity with id: 0 does not exist!');
        });
        it('Test 2: Any property is missing from input object', () => {
             instance.add({name: 'a', age: 1, birthday: {}})
            expect(() => instance.update(0, { age: 1, birthday: { date: 0 } })).to.throw(Error);
        })
        it('Test 3: If the name type is non-string', () => {
            instance.add({name: 'a', age: 1, birthday: {}})
            expect(() => instance.update(0, { name: 1, age: 1, birthday: { date: 0 } })).to.throw(Error);
        });
        it('Test 4: If the age type is not a number', () => {
            expect(() => instance.update(0, { name: 'a', age: 'a', birthday: { date: 0 } })).to.throw(Error);
        });
        it('Test 5: If the birthday type is not a object', () => {
            expect(() => instance.update(0, { name: 'a', age: 1, birthday: 'a' })).to.throw(Error);
        });
    });
    describe('Test del function', () => {
        it('Test 1: If id is invalid', () => {
            expect(() => instance.del(1, { name: 'a', age: 1, birthday: {} })).to.throw('Entity with id: 1 does not exist!');
        });
        it('Test 2: delete index property',()=>{
            instance.add({name: 'a', age: 1, birthday: {}})
            instance.add({name: 'a', age: 1, birthday: {}})
            instance.del(1)
            expect(instance.data.has(1)).to.be.equal(false);
        });
    });
});