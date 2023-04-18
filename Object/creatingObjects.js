//literals
const obj1={
    car: "mercedes",
    house: "mansion"
}
// Object in JS
console.log(typeof(Object)) //given function,used for creation
const obj2=new Object
obj2.car="mercedes"
obj2.house="mansion"
//can also make your own constructor
const product=(value1,value2)=>{
    return({car: value1,house: value2})
}
const obj3=product("mercedes","mansion")
console.log(obj1,obj2,obj3)
//factory function
factory=(a,b,c)=>{
    return{
        a,b,c,
        getData:()=>{
            return(a+b+c)
        }
    }
}
const first= factory(1,2,3)
const second= factory(4,5,6)
console.log(first.getData(),second.getData())
//object.create() is a thing
const child=Object.create(null)
child.name="Ari"
console.log(child.name)
//converting JSON to object
const jsonObj=JSON.parse('{"Name":"Ari"}')
console.log(jsonObj)