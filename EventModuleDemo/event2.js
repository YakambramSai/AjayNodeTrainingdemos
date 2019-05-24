//Event Emitters 
var events = require('events');
var eventEmitter = new events.EventEmitter();
//Assign the eventhandler to an event:
eventEmitter.on('myevent1', function() {
                  console.log('myevent1 was triggered!');
                });
eventEmitter.on('myevent2', function() {
                  console.log('myevent2 was triggered!');
                });
eventEmitter.on('myevent3', function() {
                  console.log('myevent3 was triggered!');
                });
//Fire the  event:
//Fire the  event:
setTimeout(function(){eventEmitter.emit('myevent1');},Math.round(Math.random()*5000));
setTimeout(function(){eventEmitter.emit('myevent2');},Math.round(Math.random()*5000));
setTimeout(function(){eventEmitter.emit('myevent3');},Math.round(Math.random()*5000));

