// Create Express web app
var express = require('express');
var app = express();
var twilio = require('./twilio-canned-text-api');

// Configure application routes
app.get('/', function(req, res) {
  if ( req.query.label && req.query.token ) {
    twilio.sendTextMessage(req.query.label, req.query.token);
    res.send('twiliooooo!');
  }
  else {
    res.send('twiliNOOOOO! (label and token query params are required :)');
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// Export Express app
module.exports = app;
