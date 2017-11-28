"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../../index");
const args = new index_1.default();
describe("vamtiger-argv: args.raw should", function () {
    it("reference all raw arguments", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const test = yield Promise.resolve()
                .then(() => args.raw.every(argument => typeof argument === 'string'))
                .then(result => chai_1.expect(result).to.be.true);
            return test;
        });
    });
});
//# sourceMappingURL=index.spex.js.map