function myObject(){}
    console.log(myObject.prototype)

const obj1= new myObject
const obj2= new myObject
console.log(obj1.__proto__===obj2.__proto__)
console.log(myObject.prototype===obj1.__proto__)
myObject.prototype.nome="anonymous"