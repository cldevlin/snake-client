const connect = require('./client');
const { setupInput } = require('./input');
// connect.setEncoding("utf8");
console.log("Connecting ...");


setupInput(connect());

