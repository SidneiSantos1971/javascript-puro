var btnVerificar = document.querySelector("#btnVerificar")

btnVerificar.addEventListener('click', calcular)

function calcular(){
    var velocidade = document.querySelector("#txtVel")
    var resultado = document.querySelector("#res")
    var vel = Number(velocidade.value)

    resultado.innerHTML = `Sua velocidade atual é de ${vel}km/h!`

    if(vel > 60){
    resultado.innerHTML += `<br>`
    resultado.innerHTML += `Você será <strong>multado</strong>! Ultrapassou a velocidade de 60km!`   
    }
}