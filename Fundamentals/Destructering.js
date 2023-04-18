const person={
    names: 'Ari',
    age: '19',
    address: {
        State: 'Michigan',
        City: 'Troy'
    }
}

const {names, age}=person //when const and then {}, that means destructuring
console.log(names,age)//takes name and age from person, stores it in variables name and age
console.log(person) //object is unchanged
person.wellHumored=true
console.log(person)
const {lastname='Mustafaraj',wellHumored=True,Albanian}=person //defaults for destructing
console.log(lastname, wellHumored,Albanian) //gives undefined when no default and key not found
const {address:{state,city}}=person //can get an object from within an object
// const {account:{agency,number}}=person || child object is not existent, this gives an error


//Destructuring Arrays
const [a]=[10] //this is destructuring
console.log(a)
const [n1, ,n3,n4,n5, ,n6=0]=[1,2,3,4]
console.log(n1,n3,n4,n5,n6) //variables inside arrays, takes given values in order, can have default
const [, [,grade]]=[1,[2,3]] //empty first element, second elemnt is an array with first element nothing, second element grade
console.log(grade)

//Destructuring with function
function rand({min=0,max=1000}){
    if (min>max) [min,max]=[max,min]
    const value=Math.random() * (max-min)+min
    return Math.floor(value)
} //parameter has a destructuring operator
console.log(rand({max:50,min:40})) //parameters given using destructuring
const obj={max:50,min:40}
console.log(rand(obj)) //same thing, using destructuring in an object
console.log(rand([50,40])) //this also works