let weather = 75

if (weather < 70) {
    console.log('wear a jacket');
} else {
    console.log('No jacket necessary!')
}

let name = 'Nick';

if (name =='Nico') {
    console.log('hello, my name is Nick')
} else {
    console.log('hello, what is your name?')
}

//capitaliz the first letter

let name = 'tyleR';

if(name[0] == name[0].toUpperCase()) {
    firstLetter = name[0] + name.slice(1).toLowerCase()
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetters);
}

palindrome("eye");

function palindrome(str) {
    let reversed = str.split("").reverse().join("");
    console.log(reversed) 
        if (reversed === str) {
            console.log('Alright it is a palindrome');
        } else {
            if(reversed !== str)
            console.log('Sorry not a palindrome')
        }
    }