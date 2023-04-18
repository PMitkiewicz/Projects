const approved=["Ari","Ariola","Ashley"]

approved.forEach((names,index)=>{ //forEach takes an arrow funciton, camelcase
    console.log(names,index+1)
})
const print=(names)=>console.log(names,approved.indexOf(names))
approved.forEach(print)