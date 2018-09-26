function Samurai(name) {
    var weapon = "katana";

    this.getWeapon = function() {
        return weapon;
    }

    this.getName = function() {
        return name;
    }

    this.message = name + " wielding a " + weapon;

    this.getMessage = function() {
        return this.message;
    }
 }

//  var samurai = new Samurai("Hattori");

//  console.log(samurai.getWeapon());
//  console.log(samurai.getName());
//  console.log(samurai.getMessage());

getNinja();
getSamurai();

function getNinja() {
    return "Yoshi";
}
var getSamurai = () => "Hattori";
