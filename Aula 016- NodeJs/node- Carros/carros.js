
class Carros {

    constructor(cor, marca, gastoMedio){
        
        this.cor = cor;
        this.marca = marca;
        this.gastoMedio = gastoMedio;
    }

    calculaGasto(preco, distancia) {
        
        let res = (distancia * this.gastoMedio) * preco
        return res

    }
}


 let carro1 = new Carros ("branca", "fiat", 1/10);
 console.log( carro1.calculaGasto(6,200));
 
 