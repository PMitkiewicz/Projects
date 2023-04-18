let compareWithThis= function (param){
    console.log(this===param)
}
compareWithThis(global) //it is global if function keyword is used (in this context in VScode)
 //in node global variable is called global
const obj={}
compareWithThis=compareWithThis.bind(obj)
compareWithThis(obj) //this in the context of the funciton has been changed
const compareWithThisArrow= (param)=>console.log(this===param) //doesn't point to global

compareWithThisArrow(global) //arrow function points to the modue
compareWithThisArrow(module.exports) //module.exports is this in the arrowfunction context (and in normal context)
