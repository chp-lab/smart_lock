var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('./sslcert/key.pem', 'utf8');
var certificate = fs.readFileSync('./sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();
app.use(express.static('smartlock'))

// your express configuration here

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(443);

console.log("Listening on port 443...");
