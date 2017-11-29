const rawArguments = process.argv;
const rawArgumentsSet = new Set(rawArguments);

export default rawArguments;

export const set = new Set(rawArguments);

export type RawArguments = typeof rawArguments;

export type RawArgument = string;