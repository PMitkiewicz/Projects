//this, also know as self in python, refers to the object (not referring to the javascript dictionary object) whose scope you are in (function, class, javascript object, etc)
//in javascript, this can vary depending on how a function is called
console.log(this)
x= function(){
    console.log(this)
}
x()
//in a browser, this points to a the window. In vscode, it often points to an empty object
//with an arrow function, this does not change. this changes with traditional functions
x= ()=>{
    console.log(this)
}
x()