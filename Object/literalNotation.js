const a=1
const b=2
const c=3
obj1={a:1,b:2,c:3}
obj2={a,b,c} //the object uses the value of the variable I gave
console.log(obj1,obj2) //they are the same
const att="name"
const val="Ari"
const obj3={}
obj3[att]=val //takes the value of the variable when [] is used
console.log(obj3)
const obj4={[att]:val}
console.log(obj4)