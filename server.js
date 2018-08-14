require('dotenv').load();
const http = require('http');
const path = require('path');
const cors = require('cors');

const AccessToken = require('twilio').jwt.AccessToken;
const SyncGrant = AccessToken.SyncGrant;
const express = require('express'); 
const syncServiceDetails = require('./src/sync_service_details');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/token', function(request, response) {
    const identity = 1;
    const syncGrant = new SyncGrant({
        serviceSid: process.env.TWILIO_SYNC_SERVICE_SID,
    });

    const token = new AccessToken(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_API_KEY,
        process.env.TWILIO_API_SECRET
    );
    token.addGrant(syncGrant);
    token.identity = identity;

    response.send({
        identity: identity,
        token: token.toJwt()
    });
});

syncServiceDetails();

const server = http.createServer(app);
const port = process.env.PORT || 1337;
server.listen(port, function() {
    console.log('Express server running on *:' + port);
});

module.exports = app;



// const token = '<your-access-token-here>';
// const SyncClient = require('twilio-sync');
// const syncClient = new Twilio.Sync.Client(token);

// // Open a Document by unique name and update its value
// syncClient.document('MyDocument')
//   .then(function(document) {
//     // Listen to updates on the Document
//     document.on('updated', function(event) {
//       console.log('Received Document update event. New value:', event.value);
//     });

//     // Update the Document value
//     const newValue = { temperature: 23 };
//     return document.set(newValue);
//   })
//   .then(function(updateResult) {
//     console.log('The Document was successfully updated', updateResult)
//   })
//   .catch(function(error) {
//     console.error('Unexpected error', error)
//   });


// const http = require('http');
// const express = require('express');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;

// // https://www.twilio.com/blog/2017/10/chat-interfaces-react-javascript.html
// const app = express();

// app.use(cookieParser());

// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true,
//     cookie: { secure: true }
//   }))

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// if (typeof localStorage === "undefined" || localStorage === null) {
//   const LocalStorage = require('node-localstorage').LocalStorage;
//   localStorage = new LocalStorage('./scratch');
// }
 
// localStorage.setItem('sms', 0);

// app.post('/sms', (req, res) => {
//   let smsCount = parseInt(localStorage.getItem('sms'));
//   let message = 'Hello, thanks for the new message!';

//   if (smsCount > 0) {
//     message = 'Hello, thanks for the message number ' + (smsCount + 1);
//   }
//   smsCount++;
//   localStorage.setItem('sms', smsCount.toString());


//   const twiml = new MessagingResponse();

//   // set message to localstorage.messages
//   twiml.message(message);

//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });

// http.createServer(app).listen(1337, () => {
//     console.log('Making magic happen on port 1337');
// });