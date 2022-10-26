

function relatorio(){
    class Aluno {
    
        constructor (id, nota) {
             this.id = id;
             this.nota = nota;

    }

        get Nota() {
            return this.nota
        }
        
       // `é possivel criar uma função  aluo (id, nota) com seu constructor
        
      //  Aluno.prototype.toString = function AlunoToString() {
      //   var ret = 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
    //    return ret;

      //  }
    }

let listAlunos = []
for ( var i = 1; i <= 20; i++){
    let novoAluno = new Aluno (i, Math.floor(Math.random()* 100))
    listAlunos.push(novoAluno)
}

function status(nota){
    return (nota >=70 ? "Aprovado" : "Reprovado")
}


let resultado = document.getElementById("resultado")
resultado.innerHTML = "Nota dos alunos <br> <br>"
let aprovados = 0

// resultado.innerHTML =  resultado.innerHTML + listaAlunos.toString()   - por que o método toString não 

for (let i =0; i < listAlunos.length; i++) {
resultado.innerHTML = resultado.innerHTML + (`Aluno Nº ${listAlunos[i].id} - Nota ${listAlunos[i].Nota} - Status ${status(listAlunos[i].Nota)}` + "<br>")
           
            if (status(listAlunos[i].Nota) == "Aprovado") {
                aprovados ++
            }

}  // poderia testar um to string ?
 
resultado.innerHTML = resultado.innerHTML + (`<p> APROVADOS ${Math.floor((aprovados/listAlunos.length)*100)}% | REPROVADOS ${Math.floor(((listAlunos.length-aprovados)/listAlunos.length)*100)}% </p>` + "<br>")

}



/*   Criar uma class aluno 
     Criar um array 
     Adicionar cada objeto aluno no array alunos
     criar uma função randômica para numero, nota de alunos
     Criar uma função de calcula a situação do aluno, aprovado ou reprovado
     Retornar em um relatorio o resultado em HTML com um to string ( testar)
     retonar uma estatistica em um html no rodapé   */