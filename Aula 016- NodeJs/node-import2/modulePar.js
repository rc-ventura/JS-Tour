let lista = [5 , 6, 3 , 2, 10 , 9];



function acharPar(lista){

    let listaPar = [];
    
    for (let i = 0; i < lista.length; i++) {

        if (lista[i] % 2 == 0) {
            listaPar.push(lista[i]);

        }
    } 
    console.log(listaPar);
} 

//acharPar(lista);

module.exports = {acharPar};
  
