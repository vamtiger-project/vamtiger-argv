import { default as rawArguments, set as rawArgumentsSet, RawArgument, RawArguments } from './raw-arguments';
import initialize from './initialize';
import getNextArgument from './get-next-argument';
import { IArgs, Index } from './types';

class Args extends Map<RawArgument, RawArgument|undefined> implements IArgs {
    first: RawArgument|undefined;

    constructor() {
        super();

        this.first = undefined;

        this.raw.forEach((arg: RawArgument, index: Index, args: RawArguments) => this._initialize(arg, index, args));
    }

    get raw() {
        return rawArguments;
    }

    next(arg: string) {
        const args = this.raw;

        return getNextArgument({arg, args});
    }

    _initialize(arg: RawArgument, index: Index, args: RawArguments) {
        const context = this;

        initialize({context, arg, index, args});
    }
}

export = Args;