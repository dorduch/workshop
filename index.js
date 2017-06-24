const restify = require('restify');
const restifyErrors= require( 'restify-errors');
const  socketio  = require( 'socket.io');
const mongoService = require('./dal/mongo-service');
const server = restify.createServer();
const io = socketio.listen(server);


server.use(restify.authorizationParser());
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.bodyParser());

// init mongo
// mongoServiceInit();

// server.post('/')
server.get('/', restify.serveStatic({
  directory: './views',
  default: 'inbox.html'
}))
// server.delete('/')

// todo error handling

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});



