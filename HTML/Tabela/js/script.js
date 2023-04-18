console.log("Hello World")

addRows=(report)=>{
    report.forEach((report)=>{
    let table = document.getElementById('tabela')
    let row= table.insertRow(table.rows.length)
    let cell1=row.insertCell(0)
    cell1.innerHTML=report.transaction
    let cell2=row.insertCell(1)
    cell2.innerHTML=report.error
    })

}


    

const route=[{
    transaction:1,
    error:"error1"
},
{
    transaction:2,
    error:"error2"
}]
       