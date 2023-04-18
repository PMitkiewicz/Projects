const person={
    greeting: 'Good morning!',
    speak(){ //you can just name a function without the :
        console.log(this.greeting)
    }
}
person.speak()
const speak=person.speak
 //out of scope, the this is not the same as when the function was declared

const speakforperson=person.speak.bind(person) //passes person as argument to bind, make the this of speak always be person when called as speakfor person
speakforperson()
speak() //speak is still undefined, this for speak is not changed