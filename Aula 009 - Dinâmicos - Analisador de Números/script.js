
let num = document.getElementById("num")
let select = document.getElementById("select")
let resultado = document.getElementById("resultado")
let numeros = []

function isValidacao (n) {
    if ( Number(n) >= 1 && Number(n) < 100) {

         return true 

    } else {
        
        return false
    }
}

function inList (n , l) {

    if (l.indexOf(Number(n)) != -1) {

        return true

    } else {

        return false
    }
}

function adicionar() {

    if (isValidacao(num.value) && !inList( num.value, numeros)) {

        numeros.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `O valor ${num.value} foi adicionado.`
        select.appendChild(item)
        resultado.innerHTML = ""
        

    } else {

        alert("Valor inválido ou já encontrado na lista")
    }

    num.value = ""
    num.focus()


}

function finalizar(){


    if (numeros.length == 0){
        alert("Adicione elementos antes de finalizar")

    } else {

        let maior = 0; let menor = 0 ; let total = 0; let soma = 0; let media = 0

        total = numeros.length

        for (i  in numeros ) {

            soma += numeros[i]

         
            if (numeros[i] > maior)
            maior = numeros[i]
            

        }

        numeros.sort()
        menor = numeros[0]
        media = soma / total

        resultado.innerHTML = ""
        resultado.innerHTML += ` <p> Existe(m) <strong> ${total} </strong> elemento(s) adicionado(s). </p>`
        resultado.innerHTML += ` <p>O menor elemento adicioando foi <strong> ${menor}.  </strong> </p>`
        resultado.innerHTML +=  `<p>O maior elemento adicionado foi <strong> ${maior} . </strong> </p>` 
        resultado.innerHTML += ` <p> A soma dos elementos é igual a <strong> ${soma} </strong>. </p>`
        resultado.innerHTML += ` <p> A media dos elementos é igual a <strong> ${media} </strong>. </p>`

    
    }
    

}