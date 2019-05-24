var emitter = require('events').EventEmitter;
var em = new emitter();
//Subscribe FirstEvent
em.addListener('FirstEvent', function () {
    console.log('First subscriber of FirstEvent '  );
});
em.addListener('FirstEvent', function () {
    console.log('Second subscriber of FirstEvent '  );
});
em.addListener('FirstEvent', function () {
    console.log('third subscriber of FirstEvent '  );
});
//Subscribe SecondEvent
// Raising SecondEvent
em.emit('FirstEvent');