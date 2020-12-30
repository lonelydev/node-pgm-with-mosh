//console.log(window);

// node doesn't have window as it is not running inside your browser window environment.
// that statement would give you an error.

//console object is a global object that is available to use anywhere. 
// similar to setTimeout and setInterval.

// there are several other global objects in the node environment that you can access to retrieve useful information. 

// in the browser however, every object defined belongs to a window. Hence, console.log in a browser is actually window.console.log

// in node you don't have the window object, instead you have the global object.

var message = '';
console.log(global.message);