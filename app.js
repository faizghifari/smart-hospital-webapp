const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/monitoring/routes')(app);
require('./server/admin/routes')(app);
require('./server/registration/routes')(app);
require('./server/auth/routes')(app);
// require('./server/maintenance/routes')(app);

const productivity = require('./server/monitoring/productivity');
const safety = require('./server/monitoring/safety');
const security = require('./server/monitoring/security');

productivity.start(io);
safety.start(io);
security.start(io);

app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to Smart Hospital Server',
}));

const port = parseInt(process.env.PORT, 10) || 3002;
app.set('port', port);

server.listen(port);

module.exports = app, io;