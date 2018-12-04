console.log("hello world")

//cmd ? highlighted : comment out
/*ghagihg
ghagha
ghagah*/
//console.log is a great tool to debug later down the line. For now we're going to use it as a learning oppertunity

var a = 1;
var A = 2;

console.log(A);

var b = 1;
var b = 2;
console.log(b); //var takes the lastest example so loging this is 2

let c = 3;
c = 4;
console.log(c); // let is sticker and wont read the most recent

var firstName = 'Nick';
const lastName = 'Brown';// const will never let you change const
console.log(firstName,lastName);// a comma will put a space between items
firstName = 'Max';
console.log(firstName,lastName);

/*
Declarations are the LEFT SIDE of a variable
    It is simply the var x
    It is on the left side of the assigment operator (=)

Initializations are the RIGHT SIDE of variable
    It sets the value of the variable
    It incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
*/

var x; 
console.log('Declaration;', x);

x = 10;
console.log('Initialization 1;', x);//In is saying it equals that value

var y = 'Hello';
console.log('Both',x,y)
