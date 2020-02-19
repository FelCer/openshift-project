var express = require('express');
var app     = express();


var port = process.env.PORT ||  8080;
var ip   = process.env.IP   || '0.0.0.0';
var mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL;

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

require('./app/routes/routes')(app);

app.listen(port, ip, function (){
    console.log("NodeJS version: " + process.version);
    console.log('Server running on http://%s:%s', ip, port);
});

module.exports = app ;