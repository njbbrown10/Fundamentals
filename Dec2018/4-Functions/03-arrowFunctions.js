function coffee(){
    console.log('I always need coffee')
}

coffee()



//fat arrow function
let coffee = () => {
    console.log('coffee is great')
}

//one-line fat arrow function or consise fat arrow function

let dogs = () => console.log('i like dogs')

dogs()

//for consise fat arrow funciotns the return is implied

/********************************************************* */

//Returns

function capitalizeName(name) {
    let capName = '';
    for (let h in name){
        if(h == 0){
            capName += name[h].toUpperCase();
        } else {
            capName += name [h].toLowerCase();
        }
    }
    //console.log(capName)
    return capName
}
 const newName = capitalizeName('hoMer')

 console.log( newName + ' how are you')

 function tipCalc(bill) {
     tip = (bill * 0.2)
     return tip.tofixed(2)
 }

 let totalTip = tipCalc(20.00)
 console.log(totalTip)