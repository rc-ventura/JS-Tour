function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var resultado = document.getElementById("resultado")
    
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
 
    }else {
        
        var fsex = document.getElementsByName("radsex")
        var idade = ano - (fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
                
            if (fsex[0].checked) {
                 genero = "Homem"
                
                 if (idade >=0 && idade <10) {

                    //Criança
                    img.setAttribute("src", "criança-h.png")

                 }else if (idade < 21){

                    //Jovem
                    img.setAttribute("src", "jovem-h.png")

                 }else if (idade < 50) {

                    //Adulto
                    img.setAttribute("src", "adulto-h.png" )

                 }else {

                    // idoso
                    img.setAttribute("src", "idoso-h.png" )

                 }

                } 
                 
            else  {  genero = "Mulher"
        
                if (idade >=0 && idade <10) {

                    //Criança
                    img.setAttribute("src", "criança-m.png")

                }else if (idade < 21){

                    //Jovem
                    img.setAttribute("src", "jovem-m.png")

                }else if (idade < 50) {

                    //Adulto
                    img.setAttribute("src", "adulto-m.png" )

                }else {
                    // idoso
                    img.setAttribute("src", "idoso-m.png" )

             }

        
        }

        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.style.textAlign = "center"
        resultado.style.font = "16pt Arial "
        resultado.appendChild(img)
        
    }
}