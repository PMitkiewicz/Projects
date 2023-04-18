arr1=[1,2,3,4,5]
arr1.forEach(arr1=>console.log(arr1))
notasBaixas=arr1.filter((nota)=>{return nota<3})
console.log(notasBaixas)

// document.getElementsByClassName('body')[0].onclick=(e)=>{
//     console.log("Event has occured")
// }will get elements onclick in browser