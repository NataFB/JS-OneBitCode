const turista = prompt("Qual o seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("Voce visitou alguma cidade? (sim/não)")

while (continuar === "sim") {
  let cidade = prompt ("Qual o nome da cidade visitada?")
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Voce visitou alguma outra cidade? (sim/não)")
}

alert(
  "Turista: " + turista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)