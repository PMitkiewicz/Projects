const students=[
    {names: "Ari",grade:3.8,honors:true},
    {names: "Pedro",grade:3.75,honors: true},
    {name: "Steven",grade:3.0,honors: false}
]
const result=students.map(a=>a.grade).reduce((acumulator,actual)=>{ //reduce iterates through and does something to each succesive value, holding the value in the return
 console.log(actual,acumulator)
 return acumulator=actual+acumulator
})
console.log(result)
