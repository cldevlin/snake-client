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
  })

  conn.write("Name: CRD")

  return conn;
};

module.exports = connect;