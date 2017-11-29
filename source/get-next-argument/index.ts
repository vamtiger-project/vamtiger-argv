import { RawArgument, RawArguments } from '../raw-arguments';

export default (params: Params) => {
    const arg = params.arg;
    const args = params.args;
    let index = 0;
    let currentArg;
    let nextArg;

    for (index; index < args.length; index ++) {
        currentArg = args[index];

        if (currentArg === arg) {
            nextArg = args[index + 1];
            break;
        }
    }

    return nextArg;
}

export interface Params {
    arg: RawArgument, args: RawArguments
}