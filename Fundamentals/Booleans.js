let isActive=false
console.log(isActive)
isActive=true
console.log(isActive)
isActive=1
console.log(!!isActive) //double inverse, to get true or false
console.log(!!' ')
console.log(!![])//all whole numbers, strings, infinite, arrays, all true. Only 0 is false
console.log(!!(isActive=true)) //equality is not double equals, single equals
console.log(!!'')//empty string, NaN, and null are false