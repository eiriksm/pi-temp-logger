var sense = require('ds18b20');
var util = require('util');

setInterval(function() {
  sense.temperature('28-000005661e87', function(err, value) {
    if (err) return;
    console.log(util.format('%s, %d, %d', new Date(), Date.now(), value));
  });
}, 1000);
