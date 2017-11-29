import { RawArgument, RawArguments } from './raw-arguments';
import { IArgs, Index } from './types';
declare class Args extends Map<RawArgument, RawArgument | undefined> implements IArgs {
    first: RawArgument | undefined;
    constructor();
    readonly raw: string[];
    next(arg: string): string | undefined;
    _initialize(arg: RawArgument, index: Index, args: RawArguments): void;
}
export = Args;
