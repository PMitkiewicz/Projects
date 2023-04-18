const person=()=>{
    this.age=0
    setInterval(()=>{
        this.age++
        console.log(this.age)//arrow functions are easier to work with scope and this
    },1000)
}
person()