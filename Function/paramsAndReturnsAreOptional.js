area=(width,height)=>{
    const area= width * height
    if(area>20){
        console.log(`Area of ${area} too big`)
    }
    else{
        console.log(area)
        return area
    }
}
area(2,20)
area()//NaN
area(2,2,2,2,2,2)//uses first 2
console.log(area(2,2)) //logs and returns
console.log(area(2,20)) //returns nothing, undefined
//can return, not return, parameter, no parameter, in one function