'use strict';

// Import depencies.
const
    should = require('chai').should(),
    expect = require('chai').expect,
    
    Argv = require('../index.js');

describe('Commandline arguments', function () {
    let argv;

    beforeEach(function () {
        argv = new Argv();
    });
    
    it('should reference arguments with corresponding values.', function (done) {
        const argument = 'booya',
            expectedArgumentValue = 'kasha';

        expect(argv.get(argument)).to.equal(expectedArgumentValue);

        done();
    });

    it('should reference arguments with no corresponding values.', function (done) {
        const argument = 'abra',
            expectedArgumentValue = 'valueNotSpecified';

        expect(argv.get(argument)).to.equal(expectedArgumentValue);

        done();
    });

    it('should reference the next value for raw arguments.', function (done) {
        const argument = 'kasha',
            expectedArgumentValue = '--abra';

        expect(argv.next(argument)).to.equal(expectedArgumentValue);

        done();
    });

    it('should return "true" when checking for a defined argument.', function (done) {
        const argument = 'booya',
            expectedReturnValue = true;

        expect(argv.has(argument)).to.equal(expectedReturnValue);

        done();
    });

    it('should return "true" when checking for a defined raw argument.', function (done) {
        const argument = '--booya',
            expectedReturnValue = true;

        expect(argv.has(argument)).to.equal(expectedReturnValue);

        done();
    });

    it('should return "false" when checking for an undefined argument.', function (done) {
        const argument = 'vamtiger',
            expectedReturnValue = false;

        expect(argv.has(argument)).to.equal(expectedReturnValue);

        done();
    });

    it('should return the first property if present', function (done) {
        const expectedReturnValue = /^--booya$/;
        
        expect(argv.first()).to.match(expectedReturnValue);

        done();
    })
});