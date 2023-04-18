//Functions in Javascript are a higher order function, or first class citizen
//It is treated as data, and thus can be returned, passed as a parameter, etc
function func1(){} //literal function
func2= ()=>{console.log("Ari")} //defining it to a varaible
const array=[func3=()=>{},func2,func1] //functions can be held in an array
console.log(array)
 const obj={
     falar: ()=>{
         console.log("Hello World") //functions can be values in an object
     }
 }

obj.falar()
run=(func2)=>{
    func2()
}
run(func2)

func4=()=>{
    return(func=()=>{
        console.log("Ariola") //can declare a function inside a function
    })
}
(func4())() //function returns a function, calling function twice