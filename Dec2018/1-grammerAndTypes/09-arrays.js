//Arrays = has [] brackets can hold multiple data tyapes and great for listing

let students = ['tony', 'marshall', 'randy', 'ray', 23, true, ['ryan', 'iesha']]
    
console.log(typeof students)
console.log(students instanceof Array)
console.log(students[2])
console.log(students[6][0])
console.log(students[6][1])

//go into the nested array and get 'iesha'
//print out 'hello iesha, you look nice today
console.log(`hello ${students[6][1]},you look nice today`)

let food = ['pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];
    for(f in food){
    //console.log(food[f])
    }
food.push('porkchop')
for(f in food){
    console.log(food[f])
    }
    //.splice delets stuff
    //.pop() deletes last stuff
    
    //.forEach is a better looping meathod
let food = ['pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog']
food.forEach(f => {console.log(f); })

let movie = ['dieHard', 'starWars', 'lionKing', 'findingForrester']
movie.forEach(m => {console.log(m) })

//creat movie list
//use .forEach to list movie
//add another movie at end
// and replace one movie with another
let movie = ['dieHard', 'starWars', 'lionKing', 'findingForrester']
    movie.push('elf')
    movie.splice(3,1, 'shawshank')   
movie.forEach(m => {console.log(m) })

//.length 

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple']
    console.log(colors.length)
console.log(typeof colors.toString())

let movie = ['dieHard', 'starWars', 'lionKing', 'elf']
    movie.reverse(0, 1, 2, 3)
    movie.forEach(m => {console.log(m) })