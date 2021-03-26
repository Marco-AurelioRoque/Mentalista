
//Numero secreto
var numeroSecreto = parseInt(Math.random(1) * 10)
//Cute
var chute = document.getElementById('chute')
//Tentativas
var tentativas = 10
//While
while(tentativas > 0) {
    //Function onclick verificar
    function verificarchute(){
        document.getElementById('verificar')

        if(numeroSecreto == chute) {
            alert("Acertou, parabens!")
        } else if(numeroSecreto > chute) {
            alert("O número secreto é menor")
            tentativas = tentativas -1
        } else if (numeroSecreto < chute) {
            alert("O número secreto é maior")
            tentativas = tentativas -1
        }
    }

}
//Numero secreto diferente...
if(numeroSecreto != chute){
    alert("Suas tentativas acabram. O número secreto era " + numeroSecreto)
}
