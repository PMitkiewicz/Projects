class point{};
console.log(typeof point) //classes are also funcitons 

function printsum(a,b){
    console.log(a+b)
}
printsum(2,1)
printsum(1) ///return NaN
printsum(1,2,35,5) //just taked the first two

/// javascript is flexible

const func= function(a,b){
    return a+b
}
const subtraction=(a,b)=>a-b ///arrow function instead of (a){b} do a=>b