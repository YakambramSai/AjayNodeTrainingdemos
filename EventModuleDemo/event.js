//// get the reference of EventEmitter class of events module
const events = require('events');

//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();

//Subscribe for FirstEvent
em.on('FirstEvent',  (data)=> {
    console.log('First subscriber: ' + data);
});


// Raising FirstEvent
em.emit('FirstEvent', 'This is my first Node.js event emitter example.');
