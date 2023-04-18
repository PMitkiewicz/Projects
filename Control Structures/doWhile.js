const getRandomBetween= (min=10,max=1000)=>{
    const value= Math.random()*(max-min)+min
    return Math.floor(value)
}
 let option=3
 do{ //do makes it run at least once
    option=option-1
    console.log('yes')
 }while (option  != -1)