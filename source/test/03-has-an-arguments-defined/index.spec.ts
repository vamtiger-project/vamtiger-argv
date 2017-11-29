import {expect} from 'chai';
import Args = require('../..');

const args = new Args();

describe("vamtiger-argv: args.has should", function () {
    it("return true a defined argument", function (done) {
        expect(args.has('--booya')).to.be.true;
        expect(args.has('booya')).to.be.true;

        done();
    });
})