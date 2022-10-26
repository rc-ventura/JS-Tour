function load(){

    var data = new Date()
    var hora = data.getHours()
    var msg = document.getElementById("msg").innerHTML = `Agora são ${hora} horas`
    var img = document.getElementById("imagem")
   
    
    if (hora >= 00 && hora < 12) {
        //Bom dia 
        img.src = "img/manha-p.png"
        document.body.style.background = "#bfa898 "
        document.getElementById("dia").innerHTML = "BOM DIA! "
        
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src = "img/tarde-p.png"
        document.body.style.background = "#8f532b"
        document.getElementById("dia").innerHTML = "BOA TARDE!"


    } else {
        // Boa noite 
        img.src = "img/noite-p.png"
        document.body.style.background = "#104794 "
        document.getElementById("dia").innerHTML = "BOA NOITE! "

        }


}