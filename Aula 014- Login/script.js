



function islogado (){   //funcao que cria um storage login ( Está Logado Sim ou Não)
  return window.localStorage.getItem("login")

}


function deslogar () {

noLoginUser= document.getElementById("noLogin")
yesLoginUser =  document.getElementById("yesLogin")

window.localStorage.removeItem("login")
noLoginUser.style.visibility = "visible"
yesLoginUser.style.visibility = "hidden"

}


function logar () {

  noLoginUser = document.getElementById("noLogin")
  yesLoginUser = document.getElementById("yesLogin")
  let username = document.getElementById("username").value
  let password = document.getElementById("password").value

  let users = []

  if(window.localStorage.getItem("users")) {
  users = JSON.parse(window.localStorage.getItem("users")) 
}

  for (let i =0; i < users.length; i++) {

    if (users[i].username == username &&  users[i].password == password){

      window.localStorage.setItem("login", document.getElementById("username").value)
    

    noLoginUser.style.visibility = "hidden"
    yesLoginUser.style.visibility = "visible"
    break
  }
  
  }

}

function criarUsuarioNovo() {

  let username = document.getElementById("newUser").value
  let password = document.getElementById("newPassword").value
  let mensagem = document.getElementById("mensagem")
  let users = []

  if ( window.localStorage.getItem("users)")){

    users = JSON.parse(window.localStorage.getItem("users"))
  
  
  }

  users.push({username: username, password: password})
  window.localStorage.setItem("users", JSON.stringify(users))
  mensagem.innerHTML += "<div> Usuário Criado </div>" 
  //mensagem.innerHTML = ""






}
