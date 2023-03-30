var agora = new Date()
var ano = agora.getFullYear()
var mes = agora.getMonth()
var dia = agora.getDate()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var resultadoPrograma = document.querySelector("#resultadoPrograma")
var btnCliqueAqui = document.querySelector("#btnCliqueAqui")
var mensagem = ""
var cumprimento = ""
var mesExtenso = ""

btnCliqueAqui.addEventListener("click", verificaDataHora)

function verificaDataHora(){
    if(hora >= 18){
        cumprimento = "Boa noite!"
    }else if((hora >= 12) && (hora < 18)){
        cumprimento = "Boa tarde!"
    }else if(hora >= 6){
        cumprimento = "Bom dia!"
    }

    /*if(mes == 0){
        mesExtenso = "janeiro"
    }
    if(mes == 1){
        mesExtenso = "fevereiro"
    }
    if(mes == 2){
        mesExtenso = "março"
    }
    if(mes == 3){
        mesExtenso = "abril"
    }
    if(mes == 4){
        mesExtenso = "maio"
    }
    if(mes == 5){
        mesExtenso = "junho"
    }
    if(mes == 6){
        mesExtenso = "julho"
    }
    if(mes == 7){
        mesExtenso = "agosto"
    }
    if(mes == 8){
        mesExtenso = "setembro"
    }
    if(mes == 9){
        mesExtenso = "outubro"
    }
    if(mes == 10){
        mesExtenso = "novembro"
    }
    if(mes == 11){
        mesExtenso = "dezembro"
    }*/

    switch(mes){
        case 0:
            mesExtenso = "janeiro"
            break
        case 1:
            mesExtenso = "fevereiro"
            break
        case 2:
            mesExtenso = "março"
            break
        case 3:
            mesExtenso = "abril"
            break
        case 4:
            mesExtenso = "maio"
            break
        case 5:
            mesExtenso = "junho"
            break
        case 6:
            mesExtenso = "julho"
            break
        case 7:
            mesExtenso = "agosto"
            break
        case 8:
            mesExtenso = "setembro"
            break
        case 9:
            mesExtenso = "outubro"
            break
        case 10:
            mesExtenso = "novembro"
            break
        case 11:
            mesExtenso = "dezembro"
            break
        default:
            mesExtenso = "[Erro] mês inválido"
    }

    mensagem = `<p>Hoje é ${dia} do mês de ${mesExtenso} do ano ${ano}!</p>`
    mensagem += `Agora são ${hora} horas e ${minutos} minutos!</p>`
    mensagem += `<h2>${cumprimento}</h2>`
    resultadoPrograma.innerHTML = mensagem
}

