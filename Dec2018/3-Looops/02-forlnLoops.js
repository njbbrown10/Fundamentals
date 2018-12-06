let student = { name: "Nick", awesome: true, course: "JavaScript"};

for(item in student){
    console.log(item); // key is name and "Nick" is the value
    console.log(student[item])
}

let catArray = [ 'tabby', 'burmese', 'ragdoll', 'tortie' ];
for(cat in catArray){
    console.log(cat);
}

// make first letter cap
let name = 'nick';
let capName;

for(let letter in name){
    if(letter == 0){
        capName = name[letter].toUpperCase();
    } else {
        capName += name[letter];
    }
}
console.log(capName);

