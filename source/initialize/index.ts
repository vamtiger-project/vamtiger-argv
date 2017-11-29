import * as XRegExp from 'xregexp';
import { default as leadingDash, IMatch} from 'vamtiger-regex-leading-dash';
import { IArgs, Index } from '../types';
import { RawArgument, RawArguments } from '../raw-arguments';

export default (params: Params) => {
    const context = params.context;
    const index = params.index;
    const args = params.args;
    const arg = params.arg;
    const match = XRegExp.exec(arg, leadingDash) as IMatch|undefined;
    let argValue: string|undefined;

    if (match && match.afterDash) {
        argValue = args[index + 1] && args[index + 1].match(leadingDash) ? undefined : args[index + 1];
        
        context.set(arg, argValue);
        context.set(match.afterDash, argValue);

        if (!context.first) context.first = arg;
    }
}

export interface Params {
    context: IArgs;
    index: Index;
    args: RawArguments;
    arg: RawArgument;
}