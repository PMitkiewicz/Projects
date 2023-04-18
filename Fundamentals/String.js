const school="MSU"

console.log(school.charAt(2))
console.log(school.charAt(3)) //no error, chill language, returns empty
console.log('school'.concat(school).concat("!")) //concat puts things together
console.log(school.replace(/\w/g,'a'))
console.log('maria,anna,pedro'.split(/./))//split works like Python with an array
// the /\/ and /./ stuff is rejects, look up later