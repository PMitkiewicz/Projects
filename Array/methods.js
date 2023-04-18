const players=["Lebron","Curry","Giannis","Jokic","Embiid"] //unlike objects, can't add new things to a const array
players.pop() //removes last array
players.push("Tatum")
console.log(players)
players.shift() //removes first element of the array
console.log(players)
players.unshift("Doncic") //ads a new player to the beggining of an array
console.log(players)
players.splice(4,1,"Durant","Kawhi") //assigns given index the given value in order
console.log(players)
players.splice(5,"Lillard") //can't be used to add new element
console.log(players)
players.splice(4)
console.log(players) //just giving index removes the element at that index
const top3=players.slice(1,4) //index before the closing is the last one read, like ranges in python and C++
console.log(top3)