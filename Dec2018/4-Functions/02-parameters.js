//Parameters are like empty stroage boxes we can name them whatever we want
//They need to use the same name inside of the function.
//We can also have multiple different parameters for a single function. We provide
//the parameter when we call our function

function pet(animal){
    console.log(`i have a ${animal} for a pet`)
}

pet('dog')

function name(first, last){
    let wholename = first + ' ' + last;
    console.log(`Hello my name is ${wholename}.`)
}

name("max", "powers")

