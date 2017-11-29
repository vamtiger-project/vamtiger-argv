import {expect} from 'chai';
import Args = require('../..');

const args = new Args();

describe("vamtiger-argv: args.first should", function () {
    it("reference the first argument", function (done) {
        expect(args.first).to.equal('--recursive');

        done();
    })
})