"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const raw_arguments_1 = require("./raw-arguments");
class Args extends Map {
    constructor() {
        super();
    }
    get raw() {
        return raw_arguments_1.default;
    }
}
exports.default = Args;
//# sourceMappingURL=index.js.map