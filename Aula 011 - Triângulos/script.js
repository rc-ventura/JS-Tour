
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

 let ladoA = Number(document.getElementById("ladoA").value)
 let ladoB = Number(document.getElementById("ladoB").value)
 let ladoC = Number(document.getElementById("ladoC").value)
 var resultado = document.getElementById("resultado")
 var resposta = ""

  if (ladoA == ladoB && ladoB == ladoC) {

      resposta = "equilátero"

    } else if  (ladoA != ladoB && ladoA !== ladoC && ladoC !== ladoB) {

      resposta = "escaleno"

    } else {
    
      resposta = "isósceles"
  }

  resultado.innerHTML = `O triângulo é: <strong>${resposta}</strong>`

 }



  /*  Pegar os lados no input 
  
   conveter pra inteiro 
   
   fazer uma verificação para saber se pode ser triângulo 
   
   se SIM segundo verificação testar para ver se é um trinagulo* é equilatero?/ é isoceles é escaleno 

    resultado =   è um traingulo (tipo)


    Se não for alert dizendo que não é triangulo 
*/