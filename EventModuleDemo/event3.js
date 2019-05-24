//subscribe an event there is no difference betwee addListener and on
var emitter = require('events').EventEmitter;
var em = new emitter();
//Subscribe FirstEvent
em.addListener('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});
//Subscribe SecondEvent
em.on('SecondEvent', function (data) {
    console.log('Second subscriber: ' + data);
});


// Raising FirstEvent
em.emit('SecondEvent', 'This is my second Node.js event '+
                            'emitter example.');
// Raising SecondEvent
em.emit('FirstEvent', 'This is my first Node.js event'+ 
                        'emitter example.');