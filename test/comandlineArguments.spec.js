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
});