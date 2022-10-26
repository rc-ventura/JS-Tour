function verificar(){

        let inicio = new Date().getTime()

    var fatorial = Number(document.getElementById("fatorial").value)
    var resultado = document.getElementById("resultado")
    
    var calculo = fatorial
    var index = fatorial -1
    for (var i = index; i > 1 ; i--){

        calculo = calculo * i  // calculo *=i
    }

    let fim = new Date().getTime()
    resultado.innerHTML = `${fatorial}! = ${calculo} - essa operação durou ${fim - inicio} milisegundos`



}







/*  Logica por detrás 

1- Fazer uma verificação em um input que só aceita nuemros 
2- Pegue o input guarde uma variavel 

var fatorial = 5;
var resultado = fatorial;
var primeiroMultipicador = fatorial - 1;
for (var i = primeiroMultipicador; i > 1; i--) {
    resultado *= i;
}
console.log(resultado);

3 - imprima em uma html a vriavel resultadodata
4-  cria uma variavel que chame a função date para um cronometro (hh:mm:ss)

5- Ou  faça duas variaveis no inicio do função e guarde segundos na data1 e chame a função no final e guarde em date .. faça a subtração de date2 - date1  e imprima no html


*/