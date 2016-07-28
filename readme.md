# VAMTIGER Argv
This defines a class for conveniently accessing command-line arguments.

## Installation
VAMTIGER Argv can be installed using **npm**:
```bash
npm install --save vamtiger-argv
```

## Usage
Any [Node.js](https://nodejs.org/en/) script can be executed with commandline arguments.
```bash
node someNodeProgram.js --someArgument someValue
```

Commandline arguments can be referenced by name using the **_get_** _method_.
```javascript
const Argv = require('vamtiger-argv'),
    argv = new Argv();

argv.get('someArgument'); // someValue 'someOtherValue'
```
