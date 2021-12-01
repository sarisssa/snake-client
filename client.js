const net = require('net');

// establishes a connection with the game server

const connect = function () {
    const conn = net.createConnection({
      host: '10.0.2.15',
      port: 50541
    });
  
    conn.setEncoding("utf8");
  
    conn.on("data", (message) => {
      console.log(`Received message: ${message}`);
    });

    conn.on("connect", () => {

        console.log("Successfully connected to game server.");

        conn.write(`Name: XOR`); //Push name to server

        setInterval(() => {
            conn.write('Move: up'); //Keep moving up!
        }, 1000)
      });
    return conn;
  };

  module.exports = connect;


  