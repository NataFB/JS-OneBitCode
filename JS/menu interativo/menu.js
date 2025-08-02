let opcao = ""

do {
 opcao = prompt ("seja bem vindo\n" +
  "\nEscolha uma das opções abaixo:" +
  "\n1. opção Um" +
  "\n2. opção Dois" +
  "\n3. opção três" +
  "\n4. opção quatro" +
  "\n5. Encerrar"
 )

 switch (opcao) {
  case "1":
    alert("Voce escolheu a opção 1")
    break
  case "2":
    alert("Voce escolheu a opção 2")
    break
  case "3":
    alert("Voce escolheu a opção 3")
    break
  case "4":
    alert("Voce escolheu a opção 4")
    break
  case "5":
    alert("Voce escolheu encerrar.")
    alert("Encerrando")
    break
  default:
    alert("Opção inválida")
 }
} while (opcao !== "5")