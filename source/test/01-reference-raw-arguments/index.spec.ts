import {expect} from 'chai';
import Args = require('../..');

const args = new Args();

describe('vamtiger-argv: args.raw should', function () {
    it('reference arguments with corresponding values', function (done) {
        const result = args.raw.every(argument => typeof argument === 'string');

        expect(result).to.be.true;

        done();
    })
})