// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountSid = 'ACbb63ce04057000e7681586e7544f0644';
const authToken = '4dd012240fc676481ceb5585312a90d0';

const client = require('twilio')(accountSid, authToken);

// OUTBOUND SMS
client.messages.create({
  to: '+15058016291',
  from: '+17208973108',
  body: 'Hello world. I am your friend Twilio.'
})
.then((message) => console.log(message.sid));