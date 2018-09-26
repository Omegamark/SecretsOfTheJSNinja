var samurai = (() => "Tomoe")() // Evaluates to the string "Tomoe", implied return statement.
var ninja = (()=>{"Yoshi"})()   // Evaluates to "Undefined", due to the curly braces there is no implied return statement.

console.log(samurai)
console.log(ninja)