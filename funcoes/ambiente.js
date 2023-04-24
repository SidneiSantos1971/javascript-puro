
let n = 0.0

function parImpar(n){
    if(n % 2 == 0){
        return `par`
    }else{
        return `impar`
    }
}

let res = parImpar(101)

console.log(res)