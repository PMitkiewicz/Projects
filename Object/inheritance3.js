const father={names:"Pedro",height: "6 foot 5 inches"}
const mother={names:"Ari", height: "5 foot 3 inches"}
const child1=Object.create(mother)
console.log(child1.names)
const child2= Object.create(mother,{
    names: {value: "Prudence",writable: false, enumerate: true}
})

console.log(child2.names)
console.log(`${child2.names} is ${child2.height} tall `)