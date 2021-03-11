let connection;

const handleUserInput = () => {
  const stdin = process.stdin;
  
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      connection.write('Move: up');
    } else if (key === 'a') {
      connection.write('Move: left');
    } else if (key === 's') {
      connection.write('Move: down');
    } else if (key === 'd') {
      connection.write('Move: right');
    } else if (key === 'y') {
      connection.write('Say: MEOW');
    } else if (key === 'u') {
      connection.write('Say: DOG');
    } else if (key === 'i') {
      connection.write('Say: CAT');
    } else if (key === 'o') {
      connection.write('Say: WOOF');
    }
  });
};


const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  
  
  return stdin;
}


module.exports = setupInput;