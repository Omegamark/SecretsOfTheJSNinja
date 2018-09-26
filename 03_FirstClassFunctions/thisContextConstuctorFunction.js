var workDammit = require("./assert.js")


var puppet = {
    rules: false
};

function Emperor() {
    this.rules = true;
    return puppet;
}

var emperor = new Emperor();

workDammit.assert(emperor === puppet, "The emeror is merely a puppet");
workDammit.assert(emperor.rules === false, "The puppet does not know how to rule");
