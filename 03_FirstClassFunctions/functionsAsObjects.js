// Function literal
function ninjaFunction() {}
// Assigned to variable
var ninjaFunction = function() {}
// As an array entry
ninjaArray.push(function() {})
// As a property of another object
ninja.data = function() {}
// Passed as arguments to other functions
function call(ninjaFunction) {
    ninjaFunction();
}
call(function() {})
// Returns as a new function
function returnNewNinjaFunction() {
    return function() {}
}
// Functions can possess properties that can be dynamically created and assigned
var ninjaFunction = function() {}
ninjaFunction.name = "Hattori Hanzo"