import {default as rawArguments} from './raw-arguments';

export default class Args extends Map {
    constructor() {
        super();
    }

    get raw() {
        return rawArguments;
    }
}