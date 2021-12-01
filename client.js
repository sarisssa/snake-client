const net = require('net');

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
      });
    return conn;
  };

  module.exports = connect;


  