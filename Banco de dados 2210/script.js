let bancoDeDados = [];
function add(){
    let usuario = {
    username:document.getElementById("username").value.toUpperCase(),
    password:document.getElementById("senha").value
    }
    if( existe(usuario.username)== false){ 
        bancoDeDados.push(usuario);
        alert ("Usuário cadastrado com sucesso!");
    }
    else{
        alert("Este usuário já foi cadastrado!");
        
    }
    document.getElementById("username").value = null;
    document.getElementById("senha").value = null;
}
function login(){
    let usuario = document.getElementById("userLogin").value.toUpperCase();
    let senha = document.getElementById("pass").value;
    if(autentica(usuario, senha) == false){
        alert("Falha de autenticação");
    }

        else{
            alert("Bem vindo ao sistema!");  
        }

    document.getElementById("userLogin").value = null;
    document.getElementById("pass").value = null;
}
function remove(){
    let usuario = document.getElementById("userDeletar").value.toUpperCase();
    let senha = document.getElementById("removePass").value;

    if(autentica(usuario, senha) == false){
        alert ("Usuário não encontrado!");
    }
    else {
        bancoDeDados.splice(pos, 1);
        alert("Usuário excluído com sucesso!");
        }
        document.getElementById("userDelete").value = null;
    }
function edit(){
    let username = document.getElementById("userEdit").value;
    
    if(existe(usuario.userEdit)==false){
        alert("Usuário não encontrado no banco de dados!");
    }
    else{
        let novoValor = prompt("Digite o susbitituto:").toUpperCase();
        bancoDeDados[pos] = novoValor;
        alert("Usuário alterado com sucesso");
    }
    document.getElementById("userEdit").value = null;
}
function existe(username){
   for(let usuario of bancoDeDados){
    if(usuario.username == username){
        return true;
    }
}
return false;
}
function autentica(username, password){
    for(let usuario of bancoDeDados){
        if(usuario.username == username && usuario.password == password){
            return true;
        }
    }
    return false
}

