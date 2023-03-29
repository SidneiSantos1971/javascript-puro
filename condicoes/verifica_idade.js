var nome = document.querySelector("#nome")
var email = document.querySelector("#email")
var txtIdade = document.querySelector("#idade")
var cidade = document.querySelector("#cidade")
var checkLembrar = document.querySelector("#lembrar")
var cidade = document.querySelector("#cidade")
var btnEnviar = document.querySelector("#btnEnviar")
var resultadoModal = document.querySelector("#resultadoModal")

function verificarIdade() {
    var mensagem = ""
    var idade = Number.parseInt(txtIdade.value)
    if (idade < 16) {
        mensagem = "Você ainda não pode votar!"
    } else if (((idade >= 16) && (idade < 18)) || (idade >= 65)){
        mensagem = "Você pode votar pois nessa idade o voto é facultativo!"
    }else if (idade >= 18) {
        mensagem = "O voto é obrigatório na sua idade!"
    } else {
        mensagem = "Idade inválida!"
    }

    if (checkLembrar.checked) {
        mensagem += "<br>Favor me lembrar!"
    }

    resultadoModal.innerHTML += `<p>Nome: ${nome.value}</p>`
    resultadoModal.innerHTML += `<p>Email: ${email.value}</p>`
    resultadoModal.innerHTML += `<p>Idade: ${idade}</p>`
    resultadoModal.innerHTML += `<p>Cidade: ${cidade.value}</p>`
    resultadoModal.innerHTML += `<p>Mensagem: ${mensagem}</p>`
}

btnEnviar.addEventListener("click", verificarIdade)


