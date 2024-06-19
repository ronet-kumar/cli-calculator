#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
let n1 = parseInt(prompt("enter your first number:"));
let n2 = parseInt(prompt("enter your second number:"));
let operator = (prompt("enter operator (+,-,*,/):"));
if (operator = "+") {
    console.log(`the answer og ${n1} ${operator} ${n2} = ${n1 + n2}`);
}
if (operator = "-") {
    console.log(`the answer og ${n1} ${operator} ${n2} = ${n1 + n2}`);
}
if (operator = "*") {
    console.log(`the answer og ${n1} ${operator} ${n2} = ${n1 + n2}`);
}
else {
    console.log("please select correct operator");
}
