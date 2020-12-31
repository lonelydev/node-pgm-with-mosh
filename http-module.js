const http = require('http');

// this server is an event emitter
const server = http.createServer();

// before you listen, you want to register a listener

server.on('connection', (socket)=>{
  console.log('New connection...');
});

server.listen(3000);

console.log('Listening on port 3000');