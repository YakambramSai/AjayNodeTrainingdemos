var log = {
    info: function (info) { 
        console.log('Info: ' + info);
    },
    warning:function (warning) { 
        console.log('Warning: ' + warning);
    },
    debug:function(debug){
        console.log('debug'+debug);
    },
    error:function (error) { 
        console.log('Error: ' + error);
    }
};

module.exports = log