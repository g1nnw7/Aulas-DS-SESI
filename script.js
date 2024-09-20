function ex1038(){
    //ler o código
    let codigo = Number(prompt("Digite o código:"));
    //ler a quantidade
    let quantidade = Number(prompt("Quantidade:"))
    //definir o preço do produto
    let preco
    if(codigo == 1){
        preco = 4
        let total
        total = preco * quantidade
        alert ("Ficou R$"+total)
    }
    else if(codigo == 2){
        preco = 4.5
        let total
        total = preco * quantidade
        alert ("Ficou R$"+total)
    }
    else if(codigo == 3){
        preco = 5
        let total
        total = preco * quantidade
        alert ("Ficou R$"+total)
    }
    else if(codigo == 4){
        preco = 2
        let total
        total = preco * quantidade
        alert ("Ficou R$"+total)
    }
    else if(codigo == 5){
        preco = 1.5
        let total
        total = preco * quantidade
        alert ("Ficou R$"+total)
    }
    else {
        alert ("Ta vendo essa prr de número no cardápio? fdp🤬")
    }
    
}
function exddd(){
    let ddd =  Number(prompt("Digite seu DDD:"))
    if(ddd == 61){
        alert ("Você é de Brasília!")
    }
    else if(ddd == 71){
        alert ("Você é de Salvador!")
    }
    else if(ddd == 11){
        alert ("Você é de São Paulo!")
    }
    else if(ddd == 21){
        alert ("Você é do Rio de Janeiro!")
    }
    else if(ddd == 32){
        alert ("Você é de Juiz de fora!")
    }
    else if(ddd == 19){
        alert ("Você é de Campinas!")
    }
    else if(ddd == 27){
        alert ("Você é de Juiz de Vitória!")
    }
    else if(ddd == 31){
        alert ("Você é de Belo Horizonte!")
    }
    else{
        alert ("Seu DDD não está cadastrado!")
    }
    }
function ex1015(){
  let x = Number(prompt("Digite o valor dp seu eixo X"));
  let y = Number(prompt("Digite o valor do seu eixo y"));
  if(x > 0 && y > 0){
    alert ("Primeiro Quadrante!");
  } 
  else if (x > 0 && y < 0){
    alert ("Segundo Quadrante!");
  }
  else if (x < 0 && y > 0){
    alert ("Terceiro Quadrante!");
  }
  else if (x < 0 && y < 0){
    alert ("Quarto Quadrante!");
  }
  else {
    alert ("Quadrante não definido!")
  }
}
