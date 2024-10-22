let bancoDeDados = [];
function add(){
    let usuario = document.getElementById("username").value;
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if( pos== -1){
        bancoDeDados.push(usuario.toUpperCase());
        alert ("Usuário cadastrado com sucesso!");
    }
    else{
        alert("Este usuário já foi cadastrado!");
        
    }
    document.getElementById("username").value = null;
}
function login(){
    let usuario = document.getElementById("user").value;
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(pos == -1){
        alert("Usuário não cadastrado!");
    }
    else{
        alert("Bem vindo ao sistema!");  
    }
    document.getElementById("user").value = null;
}