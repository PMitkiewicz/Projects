//Imperative
//Given an array called students
const students=[
    {grade: 10},
    {grade:0}
]
let total=0
for(let i=0;i<students.length;i++){
    total=total+students[i].grade
}

//Declarative
const getGrade=(i,arr)=>arr[i].grade
const sum=(total,current)=>{total+current}
const total2=students.map(getGrade).reduce(sum)
//imperative only solves the problem at hand, imperative creates reusable functions