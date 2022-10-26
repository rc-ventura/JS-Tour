
function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
    if (charCode != 8 && charCode != 9) {
        // charCode 48 equivale a 0   
        // charCode 57 equivale a 9
        if (charCode < 48 || charCode > 57) {
            return false;

        }
    }
}

function verificar(){

    var min = Number(document.getElementById("min").value)
    var max = Number(document.getElementById("max").value)
    var resultado = document.getElementById("resultado")

    if (min < max) {

        let contador = 0

        for ( var i = min; i < max; i ++) {
             if (i % 6 == 0) {
                contador ++
             }
        }

        resultado.innerHTML = `Número(s) que atende(m) o requisito: <strong>${contador} </strong>`

    }

    else {
        alert("[ERRO] O número máximo é menor que o mínimo. ")
    }


}




/*  Logica por detrás 

1- Devemos fazer uma veridicação para aceitar apenas numeros


2- Devemos fazer outra verificação para checar se o input está entre  o minimo e o máximo estipulados


3-   Criar um contador que pegue o min e max dos respectivos inputs , guarde em duas variaveis . ( IF)

4- Para fazer a contagem precisamos que :

    4.1 - Faça um for com i = numMin com numMax e incrementando 
    4.2 - faça uma condicional para verificar se o num MIn tem resto 0 com 6  incremente um novo contador
    4.2 - guarde o contadpr em um avariavel
    4.3 - pegue o variavel e insira no html

*/
