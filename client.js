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

  conn.on('close', () => { 
    console.log('Client Server Closed: Press Ctrl+C'); 
  });  
  
  conn.setTimeout(5000);
  conn.on('timeout', () => {
    console.log('you ded cuz you idled');
    conn.end();
  });

  return conn;
}

module.exports = connect;