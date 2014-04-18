var sense = require('ds18b20');
var http = require('http');
var util = require('util');
var temp;

setInterval(function() {
  sense.temperature('28-000005661e87', function(err, value) {
    if (err) {
      console.log(err);
      return;
    }
    temp = value;
  });
}, 1000);
setInterval(function() {
  console.log(util.format('%s, %d, %d', new Date(), Date.now(), temp));
}, 10000);

// Start a webserver that always says the temperature.
http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(temp + '');
}).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
