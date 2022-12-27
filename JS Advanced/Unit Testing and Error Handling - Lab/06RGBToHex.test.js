const expect = require('chai').expect;
const rgbToHexColor = require('./06RGBToHex');

describe('RGB Converter', () => {

    describe('Valid Limits', () => {
        it('Test 1: Upper limit range', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });

        it('Test 2: Lower limit range', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });


        it('Test 3: Random limit range', () => {
            expect(rgbToHexColor(145, 97, 143)).to.equal('#91618F');
        });
    });

    describe('Invalid Limits', () => {

        it('Test 4: If one or more elements are outside the upper limit', () => {
            expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
            expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
            expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
            expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
        });

        it('Test 5: If one or more elements are outside the lower limit', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
            expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
            expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
            expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        });

        it('Test 6: If one or more elements are string', () => {
            expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
            expect(rgbToHexColor(0, 0, '0')).to.be.undefined;
            expect(rgbToHexColor(0, '0', 0)).to.be.undefined;
            expect(rgbToHexColor('0', 0, 0)).to.be.undefined;
        });

        it('Test 7: If elements are to less', () => {
            expect(rgbToHexColor()).to.be.undefined;
            expect(rgbToHexColor(255)).to.be.undefined;
            expect(rgbToHexColor(255, 255)).to.be.undefined;
        });
    });
});