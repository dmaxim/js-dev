// This file is not transpiled - must use CommonJS and ES5

// Register babel to transpire tests before run
require('babel-register');

// Disable web pack features that Mocha cannot work with
require.extensions['.css'] = function() {};
