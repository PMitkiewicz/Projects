const treaterrorandthrow=(error)=>{
    throw{
        name: error.name,
        msg: error.message,
        date: new Date //creating attributes to be thrown, using error properties
    }
}

const func= (obj)=>{
    try{
        console.log(obj.names.toUpperCase()+'!!!')
    }
    catch (e){

        console.log("error") //works like c++
        treaterrorandthrow(e)
    }
    finally{
        console.log("final") //runs no matter what
    }
}
 const obj1={nome: "Ashley"}
 const obj2={names:"Ari"}
func(obj1)
 func(obj2)
