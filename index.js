'use strict';

// Define Variable constants.
const valueNotSpecified = 'valueNotSpecified';

/**
 * This defines a class for conveniently accessing command-line arguments.
 **/
class Argv {
    constructor () {
        this._referenceArguments = this._referenceArguments.bind(this);
        
        this._regex = this.__regex;
        this._argument = this.__argument;
    }

    get (argument) {
        return this._argument.get(argument);
    }

    get __regex() {
        const argument = {
            argumentDash: /^[-]/,
            argument: /\w+/
        };

        return argument;
    }

    get __argument() {
        let argument = process.argv.reduce(this._referenceArguments, new Map());

        return argument;
    }

    _referenceArguments(argumentMap, rawArgument, argumentIndex, argv) {
        let thisIsAnArgument = this._regex.argumentDash.test(rawArgument),
            argumentValueNotSpecified,
            argument,
            argumentValue;

        if (thisIsAnArgument) {
            argument = this._regex.argument.exec(rawArgument)[0];

            argumentValue = argv[argumentIndex + 1];

            argumentValueNotSpecified = !argumentValue || this._regex.argumentDash.test(argumentValue);

            if (argumentValueNotSpecified)
                argumentValue = valueNotSpecified;

            argumentMap.set(argument, argumentValue);
        }

        return argumentMap;
    }
}

module.exports = Argv;
