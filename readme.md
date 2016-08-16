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

argv.get('someArgument'); // someValue
```

Raw commandline arguments can also be referenced by using the **_next_** _method_.
```javascript
const Argv = require('vamtiger-argv'),
    argv = new Argv();

argv.next('--someArgument'); // someValue
```

The **_has_** _method_ can be used to check whether a commandline arguments is present.
```javascript
const Argv = require('vamtiger-argv'),
    argv = new Argv();

argv.has('someArgument'); // true
argv.has('--someArgument'); // true
argv.has('someValue'); // true
argv.has('someOtherArgument'); // false
```
