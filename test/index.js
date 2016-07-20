'use strict';

// Import built-in dependencies.
const path = require('path'),

    // Import third-party dependencies.
    Mocha = require('mocha'),
    
    // Reference a new Mocha instance for testing.
    test = new Mocha(),
    
    // Reference the path of the test suite.
    testSuitePath = path.join(__dirname, 'comandlineArguments.spec.js');

// Reference the test suite.
test.addFile(testSuitePath);


// Run the tests.
test.run((failures) => process.on('exit', () => process.exit(failures)));
