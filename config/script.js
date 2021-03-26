var numerosecreto = parseInt(Math.random(1) * 10)
var tentativas = 10

while(tentativas > 0) {
    var chute = parseInt(prompt("Digite um número entre 0 e 10"))

    if(numerosecreto == chute){
        alert("ACERTOU!")
        break
    } else if (chute > numerosecreto) {
        alert("O número secreto é Menor")
        tentativas = tentativas -1
    } else if (chute < numerosecreto) {
        alert("O número secreto é Maior")
        tentativas = tentativas -1
    } 
} 

if (chute != numerosecreto) {
    alert(`Suas tentativas acabaram. O numero secreto era ${numerosecreto}`)
}
