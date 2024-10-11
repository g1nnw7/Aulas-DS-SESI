programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real t, r
    caracter opcao
    escreva("Que conversão deseja fazer?\nDigite 1 para: Celsius para Fahrenheit\nDigite 2 para: Fahrenheit para Celsius\nDigite 3 para: Celsius para Kelvin\nDigite 4 para: Kelvin para Celsius\nDigite 5 para: Fahrenheit para Kelvin\nDigite 6 para: Kelvin para Fahrenheit\n")
    leia (opcao)
    se (opcao==1){
      escreva("Digite a temperatura em Celsius\n")
      leia(t)
    r=(t*1.8)+32
    escreva ("A sua temperatura em Fahrenheit é:"+mat.arredondar(r, 2))
    } 
    senao se(opcao==2){
      escreva("Digite a temperatura em Fahrenheit\n")
      leia(t)
      r=(t-32)*(5/9)
escreva ("A sua temperatura em Celsius é:"+mat.arredondar(r, 2))
    }
    senao se (opcao==3){
      escreva("Digite a temperatura em Celsius\n")
      leia(t)
      r=t+273.15
      escreva ("A sua temperatura em Kelvin é:"+mat.arredondar(r, 2))
    }
    senao se (opcao==4){
      escreva("Digite a temperatura em Kelvin\n")
      leia(t)
      r=t-273.15
      escreva ("A sua temperatura em Celsius é:"+mat.arredondar(r, 2))
    }
    senao se (opcao==5){
      escreva("Digite a temperatura em Fahrenheit\n")
      leia(t)
      r=((t-32)*(5/9))273.15
      escreva ("A sua temperatura em Kelvin é:"+mat.arredondar(r, 2))
    }
    senao se (opcao==6){
      escreva("Digite a temperatura em Kelvin\n")
      leia(t)
      r=(t-273.15)*(9/5)+32
      escreva ("A sua temperatura em Fahrenheit é:"+mat.arredondar(r, 2))
    }
    senao{
      escreva("Opção inválida, saindo do sistema!")
    }
  }
}
