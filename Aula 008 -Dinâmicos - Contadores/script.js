
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

    let inicio = Number(document.getElementById("inicio").value)
    let final = Number(document.getElementById("final").value)
    let passo = Number(document.getElementById("passo").value)
    let resultado = document.getElementById("resultado")
    let arr = []


     //validação

        if (inicio == 0 || final == 0 || passo == 0){   // Como eu já converti transformei a String em um Number) Assim não preciso usar nem value e nem length
            alert("[ERRO] Faltam dados!")

        }   if (passo <= 0) {
            alert("[ERRO] Passo inválido! Consideramos PASSO = 1")
            passo = 1
        }

            
          if ( inicio < final) {


            
                    for ( i = inicio; i <= final; i += passo) {   //contagem crescente
    
                    arr.push(i)     //  resultado.innerHTML += ${c} + \u{1F449} Assim coloco individualmente um numero com um emoji e imprimo no html ( Mas não uso lista)
            }


        } else { 
                    for ( i = inicio; i >= final; i -= passo) {   //contagem regressiva

                        arr.push(i)
                    }
            
            
                }
        
    resultado.innerHTML =  ` A sequência tem esses elementos <strong> ${arr}  </strong> `
}



/*  Criar uma aplicação que conte através de uma sequência inicio e uma final e pule de 2 em 2

1- input inicio
2 - input final
3- input de pulos
3- botão contar 
4- fazer um laço de repetição

i = inicio
max = final
caluclo = incrementar com o input de pulos

var i = inicio; inicio < max; i += pulo {
    
}

*/