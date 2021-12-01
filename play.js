const connect = require('./client');
const setupInput = require('./input');


console.log("Connecting ...");

let obj = connect();
console.log(obj)

setupInput(obj);