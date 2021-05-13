var palpitePessoa = document.querySelector(".chute").value
var numeroSecreto = parseInt(Math.random(1) * 10)
var tentativas = 10
var resultado = document.querySelector(".resultado-palpite")

function verificarChute() {
    if(palpitePessoa == numeroSecreto) {
        resultado.innerHTML = "Você acertou";
        
    } else {
        resultado.innerHTML = "você errou!";
    }
}