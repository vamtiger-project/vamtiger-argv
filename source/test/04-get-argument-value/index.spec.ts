import {expect} from 'chai';
import Args = require('../..');

const args = new Args();

describe('vamtiger-argv: args.get should', function () {
    it('return the corresponding argument value', function (done) {
        expect(args.get('--booya')).to.equal('kasha');
        expect(args.get('booya')).to.equal('kasha');

        done();
    });
})