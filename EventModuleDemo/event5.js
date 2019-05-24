
var emitter = require('events').EventEmitter;
var em = new emitter();

//Subscribe FirstEvent
em.once('FirstEvent', function (data) {
    console.log('Second subscriber: ' + data);
});
console.log('Did you like event Emitter class?!!');
// Raising FirstEvent
em.emit('FirstEvent', 'This is my first Node.js event '+
                            'emitter example.');
// Raising FirstEvent again
em.emit('FirstEvent', 'This is my another Node.js event'+ 
                        'emitter example.');
						
