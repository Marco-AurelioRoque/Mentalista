var palpitePessoa = document.querySelector(".chute").value

var tentativas = 10

function verificarChute() {
    if(palpitePessoa == parseInt(Math.random(1) * 10)) {
        console.log("ACERTOU!")
        
    } else {
        console.log("ERROU!")
    }
}