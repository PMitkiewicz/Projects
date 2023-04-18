const weight1=1.0
const weight2=Number("2.0")

console.log(weight1,weight2)
console.log(typeof(weight2)=='number')

const rating1=9.7138
const rating2=6.4831
const mean = (weight1*rating1+weight2*rating2)/(weight1+weight2)
console.log(
    mean.toFixed(2),mean.toString(2), typeof mean
) //round, binary, type