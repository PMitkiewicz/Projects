console.log(typeof String) //all functions have prototype
String.prototype.reverse=function(){ //can use to creat new methods 
    return this.split('').reverse().join('') 
}
console.log("Pedro Mitkiewicz".reverse())