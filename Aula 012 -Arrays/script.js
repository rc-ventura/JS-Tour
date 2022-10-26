
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




function criarArray(){    // Metodo cria um Array List

    var qtd = Number(document.getElementById("qtd").value)
    var min = Number(document.getElementById('min').value)
    var max = Number(document.getElementById ("max").value)
 
    let resultado = document.getElementById ("resultado")

    let numeros = []
    for ( var i = min; i <= qtd; i++) {
      
        numeros.push (verificar(min, max))

  }
     numeros.sort(function (a,b)  {

          if (a > b) return 1;
          if (a < b ) return -1;
          return 0
     })

     resultado.innerHTML = `O Array resultante possui os seguintes elementos: <p>[${numeros}] </p>` 

}

 // (1) function arrow ->      numeros.sort ((a,b) => a-b); 
 //  (2)   function arroz ->   numeros.sort(a,b) => {
  //                            if(a > b) return 1;  if (a < b) return -1 ;  return 0;
 


  function verificar(min, max) {

     Math.ceil(min)
     Math.floor(max)
  
  return Math.floor(Math.random() * (max - min + 1)) + min

  }


/*  
Temos três inputs 

1- input quantidade de elementos de um array
2- input min - indice {nMin] - primeiro elemento
3- input max - indice [nMax] - ultimo elemento (n-1)

4- Fazer uma função  que crie numeros aleartorios em um arry
    4.1- Usar a função MATH RANDOM no intervalor min e Max
    multiplicar a função pela subtraçção do Max-Min  e adicionar as extremidades .

    ex valor max 10  min 2 

    sub = 8 

    function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  
  return Math.floor(Math.random() * (max - min + 1)) + min;

       for  quantidade de vezes

       resultado = verificar(min, max)
}       lista Array add = resultado   

    documene create elewmnt ( novo elemento)




    var resultado = document.createElement("resultado");
            resultado.innerText = numero_random;
            novaLista.push(li);
novaLista.push(resultado)*;
Leonardo Brito21:04
for ( i = 0; i < laços; i++)
var numero_random = verificar(min,max);
var resultado = document.createElement("resultado");
            resultado.innerText = numero_random;
            novaLista.push(resultado);
*/

