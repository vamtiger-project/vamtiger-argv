import {expect} from 'chai';
import Args = require('../..');

const args = new Args();

describe('vamtiger-argv: args.next should', function () {
    it('return the next argument', function (done) {
        expect(args.next('--booya')).to.equal('kasha');

        done();
    });
})