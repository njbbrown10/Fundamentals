/********************************
SWITCH
switch staments helps us choose between several options for a variable and a deafault
Four main parts to a switch statement
switch, argument being evaluated
case, one of the options for the var to be
break, this breaks us out of the switch statement once we hit our case
default, the default if we dont hit one of our cases, not neccesary:
***************************** */

let friend ='Bob';

switch (friend) {
    case "Nick":
        console.log('Hey Nick, when are you going rock climning');
        break;
    case 'Dave':
        console.log('Hey Dave,how is Cooper');
        break;
    case 'Alex':
        console.log('Hey Alex, when are we playing DnD');
        break;
    default:
        console.log(`Im sorry, ${friend}, but do I know you`);
}

let friend = 'Tina';

switch (friend) {
    case 'Nick':
        console.log('eat my shorts');
    break;
    case 'Beef':
        console.log('what up homie');
    break;
    default:
    console.log(`${friend}, dont tase me bro`);
}

//switch with multiplt conditions:

let yep = -8

switch (true) {
    case (yep < 0 && yep > -10):
        console.log('worked');
        break;
    case (yep > 0):
        console.log('worked!');
        break;
    default:
        console.log('didnt work');
}

/********************************** */
//Ternary = A great way to write a single line for a if/ if else statement

let x = 6;

(x>0) ? console.log("yes") : console.log("no")


if (x == 0) {
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

let x = 7;
(x == 0) ? console.log("hello") : (x < 0) ? console.log("hi") : console.log("goodbye")

let age = 30;
    (age >= 25) ? console.log("yay you can rent a car") : (age >= 21) ? console.log("yay you can drink") : (age >= 18) ? console.log("yay you can vote") : console.log("sorry your to young for fun");

