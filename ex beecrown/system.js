function ex1008(){
    let id, horas, valorHora, salario;
    id = Number(prompt("Digite seu id"))
    horas = Number(prompt("Quantas horas você trabalhou?"))
    valorHora = Number (prompt("Quanto você ganha por hora?"))
    salario = horas*valorHora
    alert("ID: " + id + "\nSalário: R$" + salario.toFixed(2))
}
function ex1009(){
    let nome, salarioF, vendaEf, custoV, com, bonus, salarioG
    nome = prompt("Digite seu Nome")
    salarioF = Number(prompt("Digite seu salário fixo"))
    vendaEf = Number(prompt("Digite quantas vendas você efetuou"))
    custoV = Number(prompt("Digite o valor de cada venda"))
    com = vendaEf*custoV
    bonus = com * 0.15
    salarioG = bonus + salarioF
    alert("Olá "+nome+", o seu bônus mensal foi de: R$"+com+", e como você tem uma porcentagem de 15%, seu salário ficou: R$"+salarioG)
}
function ex1010(){
    let cod1, num1, val1, cod2, num2, val2, valorT1, valorT2, valorInteiro
    cod1 = Number(prompt("Digite o código da primeira peça"))
    num1 = Number(prompt("Digite quantas peças dessas você quer comprar"))
    val1 = Number(prompt("Digite o valor da primeira peça"))
    cod2 = Number(prompt("Digite o código da segunda peça"))
    num2 = Number(prompt("Digite a quantidade de peças que você quer comprar"))
    val2 = Number(prompt("Digite o valor da segunda peça"))

    valorT1 = num1*val1
    valorT2 = num2*val2
    valorInteiro = valorT1 + valorT2

    alert("O seu primeiro produto de código " + cod1+", e o seu segundo produto de código "+ cod2 +", ficaram no valor de: R$" + valorInteiro)
}
function ex1038(){
    /*Ler o código
    Ler a quantidade
    Definir o preço do produto

    Calcular o valor da conta(preço*quantidade)*/
    let codigo = Number(prompt("Digite o código"))
    let quantidade = Number(prompt("Quantidade"))
    let preco
    if(codigo == 1){
        preco = 4
    }
    else if(codigo == 2){
        preco = 4.5
    }
    else if(codigo == 3){
        preco = 5
    }
    else if(codigo == 4){
        preco = 2
    }
    else if(codigo == 5){
        preco = 1.5
    }
    else{
        alert("Escolhe o número certo")
    }
    let valor = preco*quantidade
    alert("Sua conta ficou de R$"+valor.toFixed(2))
}
function ex1050(){
    let ddd = (prompt("Digite seu DDD"))
    if(ddd == 61){
        alert("Você é de Brasília")
    }
    else if(ddd == 71){
        alert("Voce é de Salvador")
    }
    else if(ddd == 11){
        alert("Você é de São Paulo")
    }
    else if(ddd == 21){
        alert("Você é do Rio de Janeiro")
    }
    else if(ddd == 32){
        alert("Você é de juiz de Fora")
    }
    else if(ddd == 19){
        alert("Você é de Campinas")
    }
    else if(ddd == 27){
        alert("Você é de Vitória")
    }
    else if(ddd == 31){
        alert("Você é de Belo Horizonte")
    }
    else{
        alert("Seu DDD não está cadastrado")
    }
}
function ex1115(){
    let x = (prompt("Digite o valor do seu eixo X"))
    let y = (prompt("Digite o valor do seu eixo y"))
    if(x > 0 && y > 0){
        alert("Suas cordenadas estão no primeiro quadrante")
    }
    else if(x > 0 && y < 0){
        alert("Suas cordenadas estão no segundo quadrante")
    }
    else if(x < 0 && y > 0){
        alert("Suas cordenadas estão no terceiro quadrante")
    }
    else if(x < 0 && y < 0){
        alert("Suas cordenadas estão no quarto quadrante")
    }
}
function ex1142(){
    let cont = 1
    let contagemPum = 0
    let limitePums = Number(prompt("Quantos PUMs?"))
    let balde = ''
    while(contagemPum < limitePums){
        if(cont % 4 != 0){
            console.log(cont)
            balde += cont + ' '
        }
        else{
            console.log("PUM")
            contagemPum++
            balde += cont + " PUM\n"
        }
        cont ++
    }
    alert (balde)
}