// Booleans
// What is a Boolean?
var on = true;
console.log(on); //true
let off = false;
console.log(off); //false

//boolean can represent: true/false, yes/no, on/off

//Null = empty value (not 0; not undefined)
var empty = null;
console.log(empty); //null

var undef = undefined; // never do this in code
console.log(undef); // undefined

let grass;
console.log(grass); // underfined

// Numbers
var degrees = 90;
console.log(degrees);

var precise = 999999999999999; // 15 9's
console.log(presice); //9999999999999999

var rounded = 99999999999999999; //One more 9
console.log(rounded); //1000000000000000

var notQuite = 0.2 + 0.1;
console.log(notQuite); //0.30000000000000004

var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard); // 0.3

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo); //double quotes single quotes

//Numbers vs Strings
let first = 1050 + 100; //1150
let second = '1050' + '100';//quotes make it text it wont do math

console.log(first);
console.log(second);
console.log(typeof first);
console.log(typeof second); //typeof tells you what you are working with

/*
addition vs Concatenation

when JS sees combing two or more numbers, it adds the values together using the built-in
math functionality; when it sees adding together one or more strings, it changes and the plus
sign becomes an assignment operator-- it smashe the values together without trying to 
synthesize the values
*/

let third = 1050 + '100'

console.log(third); //1050100
console.log(typeof third); // string


var firstName = 'Nick';
var lastName = 'Brown';
var houseNumber = '4601';
var street = 'Cavendish';
var city = 'Indianapolis';
var state = 'Indiana';
var zipcode = '46220';

console.log(firstName,lastName,houseNumber,street,city,state,zipcode);

// Objects
/*
What is an object?

A container that can hold multiple datatypes

Denoted by{}
Has keys and values (color (key): 'blue (value)), seperated with a colon
Each key seperated with a comma
*/
let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
    };
    console.log(burritosNow);
    console.log(typeof burritosNow); //object
    /*
    Arrays are great for lists

    Denoted by []
    has values ('blue', 'green', 'yellow'), seperated with commas
    /*

    var burritos = ['large, 4, true];
    console.log(burritos); //['large, 4, true]

    console.log(typeof burritos); //object
    */

