import {expect} from 'chai';
import Args from '../../index';

const args = new Args();

describe("vamtiger-argv: args.raw should", function () {
    it("reference all raw arguments", async function () {
        const test = await Promise.resolve()
            .then(() => args.raw.every(argument => typeof argument === 'string'))
            .then(result => expect(result).to.be.true);

        return test;
    })
})