sums=(a,b,c)=>{
    a=a||1
    b=b||1
    c=c||1
    return a+b+c
}
console.log(sums(),sums(1,2,3),sums(3),sums(0,0,0)) //0 becomes false, which breaks things
sums2=(a,b,c)=>{
    a= isNaN(a) ? 1:a
    b= isNaN(b) ? 1:b
    c= isNaN(c) ? 1:c //strategy to deal with above problem
    return a+b+c
}
console.log(sums2(),sums2(1,2,3),sums2(3),sums2(0,0,0))

sums3=(a=1,b=1,c=1)=>{ // using defaults (this is the best way)
    return a+b+c
}

console.log(sums3(),sums3(1,2,3),sums3(3),sums3(0,0,0))