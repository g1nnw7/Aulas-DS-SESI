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
function remove(){
    let usuario = document.getElementById("userDelete").value;
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(pos == -1){
        alert ("Usuário não encontrado");
    }
    else{
        bancoDeDados.splice(pos, 1);
        alert("Usuário excluído com sucesso!");
    }
    document.getElementById("userDelete").value = null;
}
function edit(){
    let username = document.getElementById("userEdit").value;
    let pos = bancoDeDados.indexOf(username.toUpperCase());
    if(pos == -1){
        alert("Usuário não encontrado no banco de dados!");
    }
    else{
        let editavel = prompt("Digite o susbitituto:").toUpperCase();
        bancoDeDados[pos] = editavel;
        alert("Usuário alterado com sucesso");
    }
    document.getElementById("userEdit").value = null;
}
