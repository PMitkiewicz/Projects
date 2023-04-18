const ferrari={
    horsepower:2000,
    color:"red"
}
console.log(ferrari.__proto__) //no special parent object rn
console.log(ferrari.__proto__===Object.prototype)
console.log(Object.prototype.__proto__) //prototype is the final parent