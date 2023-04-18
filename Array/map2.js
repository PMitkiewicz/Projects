const shoppingcart=[
    '{"names": "eraser", "price": 3.45}',
    '{"names": "pen", "price": 2.45}',
    '{"names": "paper", "price": 4.45}'
]

const arr=shoppingcart.map((item)=>{
    const obj=JSON.parse(item)
    return obj.price
})
console.log(arr)