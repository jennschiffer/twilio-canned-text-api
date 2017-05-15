var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var fs = require('fs');
var messages = require('./messages.json');

// helper to send the message via the twilio client
var clientSendSMS = function(to, message) {
  client.messages.create({
    body: message,
    to: to,
    from: process.env.TWILIO_NUMBER
  }, function(err, data) {
    if (err) {
      console.error('Could not text ' + to, err);
    } else {
      console.log('Just notified ' + to);
    }
  });
};

// authenticates with our own app TOPSECRETTOKENS and generates the message
// to send if authenticated and if the message label exists in messages.json
// this is being called in the route described in `server.js`
exports.sendTextMessage = function(label, token) {
  var tokens = process.env.TOPSECRETTOKENS.split(',');
  var phoneNumbers = process.env.PHONENUMBERS.split(',');
  
  if ( tokens.indexOf(token) > -1 ) {
    phoneNumbers.forEach(function(phoneNumber) {
      if ( messages[label] ) {
        clientSendSMS(phoneNumber, messages[label]);
        console.log('Sending message "' + messages[label] + '" to ' + phoneNumber);
      }
    });
  }
  
};