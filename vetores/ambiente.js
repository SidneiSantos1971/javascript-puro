let num = [5, 2, 10, 20, 45, 60, 81, 102, 205, 100]
/*
for(let i = 0; i < num.length; i++){
    console.log(`Na posição ${i} é o número ${num[i]}`)
} */

for(let i in num){
    if(num.indexOf(100) == i){
        console.log(`Para cada posição ${i} é o número ${num[i]} ******`)
    }else{
        console.log(`Para cada posição ${i} é o número ${num[i]}`)
    }
}

