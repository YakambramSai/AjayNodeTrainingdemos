
//remove listeners onces.
//em.removeAllListeners

var emitter = require('events').EventEmitter;
var em = new emitter();
//Subscribe FirstEvent
em.on('FirstEvent', function () {
    console.log('First subscriber of FirstEvent '  );
});

//Subscribe SecondEvent
// Raising SecondEvent
em.emit('FirstEvent');
em.removeAllListeners("FirstEvent")
em.emit('FirstEvent');