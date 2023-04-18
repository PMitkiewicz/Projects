const obj={val1:1,val2:2}
console.log(Object.keys(obj),Object.values(obj)) //Object has these functions, call the instance in the ()
Object.entries(obj).forEach(([k,v])=>{ //version of for items
    console.log(`${k}:${v}`)
})

Object.defineProperty(obj,"birthDate",{
    inumerate: true, //shows up in keys because true
    writable: false, //can't be changed right now
    value: "07/26/2002"
})
const obj2={val:"1"}
const obj3={val2:"2"}
const obj1=Object.assign(obj2,obj3,obj)
console.log(obj1)
Object.freeze(obj) //stops changes
