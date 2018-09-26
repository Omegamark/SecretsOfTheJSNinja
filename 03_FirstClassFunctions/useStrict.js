"use strict"
var workDammit = require("./assert.js")

function infiltrate(person) {
    workDammit.assert(person === "gardener", "The person is a gardener");
    workDammit.assert(arguments[0] === "gardener", "The first argument is a gardenter");

    arguments[0] = "ninja";

    workDammit.assert(arguments[0] === "ninja", "The first argument is now a ninja");

    workDammit.assert(person === "gardener", "The person is still a gardener")
}

infiltrate("gardener")