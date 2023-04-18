const sequence={
    _val:1, //underscore denominates a privae variable or constant
    get value(){return this._val++}, //needs to because ++ is after
    set value(value){this._val=value}
}
console.log(sequence.value)//get means not a function
sequence.value=900
console.log(sequence.value) //get returns a value when called as a method, set allows assignment of a value as a method