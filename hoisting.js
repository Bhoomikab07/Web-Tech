//declare a var above their scope of accessing
console.log(a);

console.log(c());
var a = "Opened....";

function c(){
console.log("in function...");
}
