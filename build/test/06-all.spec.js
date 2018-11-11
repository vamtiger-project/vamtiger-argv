"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Args = require("..");
const args = new Args();
describe('vamtiger-argv: args.getAll should', function () {
    it('return all corresponding argument values', function (done) {
        const values = args.getAll('sameArg');
        chai_1.expect(values.length).to.equal(2);
        chai_1.expect(values[0]).to.equal('value1');
        chai_1.expect(values[1]).to.equal('value2');
        done();
    });
});
//# sourceMappingURL=06-all.spec.js.map