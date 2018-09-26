var workDammit = require("./assert.js")

function Ninja() {
    this.skulk = function() {
        return true;
    }
    return 1;
}

workDammit.assert(Ninja() === 1, "Returnb value honored when not called as a contructor");

var ninja = new Ninja();

workDammit.assert(typeof ninja === "object", "Object returned when called as a constructor");
workDammit.assert(typeof ninja.skulk === "function", "ninja object has a skulk method")
workDammit.assert(typeof Ninja === "function", "Ninja is instantiated as a function")
// The answer is no, the new object does not have the original function behavior of Ninja(), however it is still an object which contains the skulk() method.
// workDammit.assert(ninja() === 1, "Does the constructed object still return 1?")
console.log(ninja)