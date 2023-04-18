const names='Ariola'
const con='Hello '+ names+'!'
const template= `
    Hello 
    ${names}!`//use simple quotations, dollar sign and {} takes away string
    console.log(con,template)
    console.log(`1+1=${1+1}`)
    const up =text=> text.toUpperCase()+`!`
    console.log(`Ei...${up(`cuidado`)}`)