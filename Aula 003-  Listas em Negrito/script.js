function verificar(){

         console.log("entrei");
        var nome = document.getElementById("nome");
        var lista = document.querySelector(".listaDeNomes");
        var listaDeNomes = lista.querySelectorAll("li");
        var novaLista = [];

        for (var i = 0; i < listaDeNomes.length; i++) {
          var nomeAtual = listaDeNomes[i].textContent;
          if (nome.value == nomeAtual) {
            var li = document.createElement("li");
            var strong = document.createElement("strong");
            strong.innerText = nomeAtual;
            li.appendChild(strong);
            novaLista.push(li);

          } else {
            var li = document.createElement("li");
            li.innerText = nomeAtual;
            novaLista.push(li);
          }
        }
        lista.innerText = "";
        for (var i = 0; i < novaLista.length; i++) {
            lista.appendChild(novaLista[i]);
        }
        console.log(novaLista)
      }






/*  Logica por detrás 

Tenho que pegar o texto do input e comparar com minha lista 

1- Preciso pegar o input guardar em uma variável
2- Depois precisar pegar as duas primeiras letras da String guardada na variável*
3- Depois eu faço uma verificação. Essas letras são iguais as primeiras letras de minha lista
4- se For igual entao coloque em negrito/
5- se não for nõa faça nada ou mande uma msg de não tem elemento */