function func(max=1000,delta=5) {
    let actual=10
    this.accelerate= ()=>{ //method declaration
        actual+=delta
        if(actual>max){
            console.log("too fast")
            actual=actual-delta
        }
    }
    this.getActual=()=>{ return actual}
}
const uno= new func
uno.accelerate()
console.log(uno.getActual())