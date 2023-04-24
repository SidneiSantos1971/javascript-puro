let amigo = {
    nome: 'Sidnei José', 
    idade: 51, 
    peso: 82.7, 
    sexo: 'm', 
    engordar(p){
        console.log(`Engordou!`)
        this.peso += p
    } }

    amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}kg!`)