function person(){
    this.age=0
    x=()=>{
        this.age++
        console.log(this.age)
    }
    setInterval(x,1000);{

    }
}

new person