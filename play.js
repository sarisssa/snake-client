const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('You are connected to the server')
  });

  return conn;
};



console.log("Connecting ...");
connect();