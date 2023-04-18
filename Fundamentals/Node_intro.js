const a=5
global.b=123
this.c=456
console.log(a,global.b,this.c,module.exports.c) //this is module exports, global and this can be called in this scope
console.log(module.exports===this) //this is true
//in Node, every file is a module. Therefore the current scope (this) is module exports