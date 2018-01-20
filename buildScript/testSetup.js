//This is file not transpiled, so must use commonJs and ES5


//register babel to transpile before our tests run
require('babel-register')();

//disable webpack features that mocha does not understand.
require.extensions['.css'] = function () {};
