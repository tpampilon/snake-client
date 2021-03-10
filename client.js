const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('close', () => { 
    console.log('Client closed'); 
  });  
  
  conn.setTimeout(3000);
  conn.on('timeout', () => {
    console.log('you ded cuz you idled');
    conn.end();
  });

  return conn;
}

module.exports = connect;