import {expect} from 'chai';
import Args from '../../index';

const args = new Args();

describe("vamtiger-argv: args.get should", function () {
    it("reference arguments with corresponding values", async function () {
        const result = args.raw.every(argument => typeof argument === 'string');

        expect(result).to.be.true;
    })
})