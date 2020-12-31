
// this is a class
const EventEmitter = require('events');
const logger = require('./logger');

// this is an instance of the event emitter class
const emitter = new EventEmitter();

// register a listener

emitter.on('messageLoggedo', function() {
    console.log('listener number 1 called');
  });

// once a listener is registered, the event can be raised any number of times and the listener will be invoked
//raise an event now
emitter.emit('messageLogged');
emitter.emit('messageLogged');
emitter.emit('messageLogged');
emitter.emit('messageLogged');
emitter.emit('messageLogged');
emitter.on('messageLogged', function() {
    logger.log('listener number 2 called');
  });
emitter.emit('messageLogged');
emitter.emit('messageLogged');
emitter.emit('messageLogged');
emitter.emit('messageLogged');

// passing data to events is easy 
