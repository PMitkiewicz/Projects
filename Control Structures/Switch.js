const printresult=(grade)=>{
    switch (Math.floor(grade)){ //switch is a function, depending on the parameter's value, its case runs
        case 10:
        case 9:
            console.log('Honors') //because case 10 doesn't have an expression, case 9 runs if it's 10
            break
        case 8: case 7:
            console.log('Passes')
        case 6: case 5: case 4: case 3: case 2: case 1: case 0:
            console.log('Fails')
        default:
            console.log('Not a grade')
    }
}
printresult(9.9)