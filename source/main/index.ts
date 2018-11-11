import { default as rawArguments, set as rawArgumentsSet, RawArgument, RawArguments } from '../raw-arguments';
import initialize from '../initialize';
import getNextArgument from '../get-next-argument';
import { IArgs, Index } from '../types';

export default class Args extends Map<RawArgument, RawArgument|undefined> implements IArgs {
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

    getAll(arg: string) {
        const argRegex = new RegExp(`${arg}$`);
        const args = this.raw;
        const values = new Set() as Set<string>;

        args.forEach((currentArg, index) => {
            if(currentArg.match(arg)) {
                values.add(args[++index]);
            }
        });

        return Array.from(values);
    }

    _initialize(arg: RawArgument, index: Index, args: RawArguments) {
        const context = this;

        initialize({context, arg, index, args});
    }
};