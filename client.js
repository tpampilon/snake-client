const net = require('net');
const clientName = 'UMR';

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => {
    conn.write(`Name: ${clientName}`);
    console.log(`Successfully connected to game server`);
  });

  conn.on('connect', () => {
    setInterval(() => conn.write("Move: down"), 500);
  });

  // conn.on('connect', () => {
  //   setTimeout(() => conn.write("Move: left"), 100);
  // });

  // conn.on('connect', () => {
  //   setTimeout(() => conn.write("Move: down"), 1000);
  // });

  // conn.on('connect', () => {
  //   setTimeout(() => conn.write("Move: right"), 2000);
  // });

  conn.on('close', () => { 
    console.log('Client closed'); 
  });  
  
  conn.setTimeout(5000);
  conn.on('timeout', () => {
    console.log('you ded cuz you idled');
    conn.end();
  });

  return conn;
}

module.exports = connect;