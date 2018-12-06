//functions are a set of statements that preform a task or calculates a value

//declaration

function hi(){
    console.log('hi!');
}

//expression

let hi = function hi(){
    console.log('I already said hi!');
}

//declarations = hoisted
//expressions != hoisted

//function calling all yuo need is the name of function with the () after

function jams(){
    for(let i = 1;i < 11; i++){
    console.log(i)
    }
}

jams()

let arr = ['this', 'is', 'really', 'cool']

function arrList(){
    for(list of arr){
        console.log(list);
    }
}
//
arrList()