let values = [7.7,"yes",Math,true,6]
console.log(values)
console.log(values[7]) //just undefined
values[2]=2 //can do assignment
console.log(values[2])
values[10]=6
console.log(values)//can add to later index, will give empty items
console.log(values.pop())//pop also works, deletes last tiem of array and returns it
delete values[0] //delete works like python
console.log(values)
values.push(2) //push works like push back in c++
console.log(values)
