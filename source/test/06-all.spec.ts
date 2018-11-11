import {expect} from 'chai';
import Args = require('..');

const args = new Args();

describe('vamtiger-argv: args.getAll should', function () {
    it('return all corresponding argument values', function (done) {
        const values = args.getAll('sameArg');

        expect(values.length).to.equal(2);
        expect(values[0]).to.equal('value1');
        expect(values[1]).to.equal('value2');
        done();
    });
})