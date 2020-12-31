# Getting started with Nodejs

## Tutorial for beginners by Mosh

Following https://www.youtube.com/watch?v=TlB_eWDSMt4

`first-app.js` - a look at the global object. 

## Modules

You need to manage code in a large application. Not every method can be defined in the global scope. 
Thus was born modules! Modules can be viewed as a way to namespace methods.

Methods and variables defined inside a module, is private to that module. It isn't exposed to the outside world, unless explicitly exported. 

in node, every file is a module and functions and variables in a file are not exposed outside. 

### Create a module

create a file - logger.js

export some methods and variables from the file. 
use logger.js in another file.

### Using a module from another file

To load a module into your js file, you need to use the `require('modulenamepath')`

### How does node run programs?

Edit logger.js
create syntax error. 
put a line:
`var x=;`

```bash
[2020-12-30 16:56:06][/d/Code/nodejs/youtube/pgmwithmosh] (master)> node use-logger.js
D:\Code\nodejs\youtube\pgmwithmosh\use-logger.js:3
var x=;
      ^

SyntaxError: Unexpected token ';'
    at wrapSafe (internal/modules/cjs/loader.js:1054:16)
    at Module._compile (internal/modules/cjs/loader.js:1102:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
    at Module.load (internal/modules/cjs/loader.js:986:32)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47
```
Newer version of node when compared to the version that Mosh is using in the video, hence I don't get the same result shown by mosh. 
Apparently earlier, node used to give away how the code was being executed. 

in my console output you can see that the code is executed inside a method called:
`wrapSafe` which intern is inside several other methods finally in `run_main_module.js`

Originally the function signature of the method that ran the code in your script would be:

```javascript

(function(exports, require, module, __filename, __direname){
    var x=;

SyntaxError: Unexpected token ;
    at createScript (vm.js:80:10)
    at Object.runInThisContext(vm.js:139:10)
    at Module._compile (module.js:599:28)
    ...
    ...
})

```

Node always executes your script within a function wrapper. 
This is called the module wrapper function.
The signature has probably changed with newer versions of code. 

get rid of the syntax error line in the uselogger.js

## Some key modules

filesystem
process
path
query strings
streams

### path module

path.parse

### OS module

freemem
totalmem
userinfo

### file module

check out some of the sync and async methods. 
by default the methods are async. 

## Events

How to work with events module?
Register an event listener and then emit that event. 
The event listener's method would be invoked everytime an event of that type is emitted
