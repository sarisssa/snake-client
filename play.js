const connect = require('./client');
const setupInput = require('./input');

console.log("Connecting ...");

let connectObj = connect();

setupInput(connectObj); //Passed object returned from connect() into setupInput()