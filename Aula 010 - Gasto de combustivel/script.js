function verificar () {

      var distancia = Number(document.getElementById('dis').value)
      var consumo =  Number(document.getElementById("con").value)
      var preco = Number(document.getElementById("preco").value)
      var resultado = document.getElementById("resultado")

      var calculo = (distancia / consumo) * preco

      resultado.innerHTML = `Seu consumo total será de ${calculo} reais.`
           


     }
    
    


/*      */