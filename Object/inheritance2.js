const grandpa={attr1:"A"}//prototype of grandpa is Object.prototype
const dad={__proto__:grandpa,attr2:"B"}
const child={__proto__:dad,attr3:"C"}
Object.prototype.attr0="~"
console.log(child.attr1) //found in prototypes
console.log(child.attr0)//will find in great grandpa Object.prototype

const car={
    currentSpeed: 0,
    maxSpeed: 100,
    accelerate(acceleration){
        if(this.currentSpeed+acceleration>=this.maxSpeed){
            console.log("too fast")
        }
        else{
            this.currentSpeed=this.currentSpeed+acceleration
        }
    },
    status(){
        return `Speed is ${this.currentSpeed}, with speed limit ${this.maxSpeed}`
    },
}
const ferrari={
    maxSpeed: 200,
    acceleration:20,
    status(){
        return super.status()
    },
    accelerate(acceleration){
        return super.accelerate(acceleration)
    }
}
Object.setPrototypeOf(ferrari,car)
ferrari.accelerate(ferrari.acceleration)
console.log(ferrari.status()) //don't use arrow functions hwen doing inheritance like this