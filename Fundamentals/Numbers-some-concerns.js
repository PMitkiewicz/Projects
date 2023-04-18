console.log(7/0.000) //not an error, Infinity is a type
console.log("10"/2) //weakly typed, so can convert
console.log("10,"/2)//not a number, must onyl be number inside
console.log(0.1+0.7) //floating point, so slight inprecision
// console.log(10.toString()) doesn't work with literals
console.log(10.345.toFixed(2)) //methods like toFIxed only works on numbers
