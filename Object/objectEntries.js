const obj={
    name: 1,
    property: 2
}
console.log(Object.entries(obj))
console.log(Object.entries(obj).map((O)=>{
    return O.map(val=>String(val))
})) //code to make everything strings
