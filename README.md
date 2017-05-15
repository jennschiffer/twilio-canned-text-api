# twilio-canned-text-api

This app provides and API for sending canned text messages to a collection of friends :)

## Getting Started
Having remixed the app, for it to work for you, you need to update the details in the `.env`file:
- `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` - available from https://www.twilio.com/user/account/settings
- `TWILIO_NUMBER` - this is the 'From' number, available from https://www.twilio.com/user/account/phone-numbers/incoming
- `PHONENUMBERS` - this is a comma-separated list of phone numbers that messages will be sent to. for example, "+15555555,+15555559"
- `TOPSECRETTOKENS` - this is a comma-separated list of tokens you give out to anyone who may be using the api. for example, "cooltoken1,cooltoken2"

## How to text!

You can make a GET request with the query params "label" which is the key of the message objects in `messages.json` and "token" which is the TOPSECRETTOKEN the owner of this app should give to you so you can use it. For example:

```
http://twilio-canned-text-api.glitch.me?label=awesome&token=averysecrettokenlolsure
```

If I have a message with the `label` "awesome" and I gave out and listed the `token` "averysecrettokenlolsure" then the value of the message "awesome" will be texted to every number listed in `PHONENUMBERS` in `.env`.

## Why?

Because I felt like it!!

xoxo j$