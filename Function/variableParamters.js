 som=(arr)=> { //just because there's no parameters doesn't mean you can't pass a parameter
    let soma=0
    for(i in arr){
        soma+=arr[i];
    }
    return soma;
}
console.log(som([5,6,"Teste"])) //mixing types works
