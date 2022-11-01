function lançar() {
    
    var lancamentos = document.getElementById("num")
    var resultado = document.getElementById("resultado")
    var label1 = document.querySelector("p.label")
    var label2 = document.getElementById("visible")
    

    for (var i = 0; i < Number(lancamentos.value); i++) {
    
        resultado.innerHTML = Math.floor( 1 + 6*Math.random() * lancamentos.value)  //  somei todos os resultados


            label1.innerHTML= ""                        //limpei a label de class = label
            label2.style.visibility = "visible"         // torenei visivel a label escondida de id label
            lancamentos.value = ""                      // limpei o numero do input
            lancamentos.focus()                         // coloquei foco no input

            // armazena cada resultado em uma lista ( document.createList (li)

            //variavel auxiliar que soma os lançamentos e no final imprimi o lançamento final .
}
      // edição no script do resultado
      resultado.style.textAlign = "center"            
      resultado.style.font = "50pt Arial "
      resultado.style.color = "red"
      resultado.style.marginTop = "50px"

      
           
}


/*var lancamentos = 100
resultado = 0

for (i=0; i< lancamentos; i++){
   
   resultado = Math.floor( 1 + 6*Math.random())
   console.log(resultado) 

    
     /*switch (resultado){

        case 1:

                document.getElementById("resultado").src= "face1.png"
                break
      
            case 2:

                document.getElementById("resultado").src= "face2.png"
                break

            case 3:

                document.getElementById("resultado").src= "face3.png"
                 break

            case 4:

                 document.getElementById("resultado").src= "face4.png"
                 break

            case 5:
                
                document.getElementById("resultado").src= "face5.png"
                break

            case 6: 

                 document.getElementById("resultado").src= "face6.png"
                 break  

                 */






