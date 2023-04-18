const products=[
    {names:"Macbook",price:5000,powerful:true},
    {names:"iphone",price:2000,powerful:false},
    {names:"airpods",price:500,powerful:true},
    {names:"ipad",price:1000,powerful:true}
]
console.log(products.filter((p)=>{return (p.price>=1000 & p.powerful==true)}
))
//can also filter twice, like you can map twice
