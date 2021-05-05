const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",// IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (input) => {
    console.log(input);
  });

  conn.on("connect", () => {
    console.log("Connection established");
    conn.write("Name: C.D");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: left");
    //   setTimeout(() => {
    //     conn.write("Move: down");
    //   }, 50);
    // }, 50);
  });


  return conn;
};

module.exports = connect;