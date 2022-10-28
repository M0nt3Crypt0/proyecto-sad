const zmq = require('zeromq');


const FRONTPORT = 9998;
const BACKPORT = 9999;


const server = net.CreateServer(onClientConnected);
server.listen(FRONTPORT);
