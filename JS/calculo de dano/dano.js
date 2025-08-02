const atacante = prompt("qual o nome do personagem atacante?")
const poderDeAtaque = parseFloat(prompt("Qual o poder de ataque?"))

const defesa = prompt("qual o nome do personagem defesa?")
let pontoDeVida = parseFloat(prompt("Qual o ponto de vida?"))
const poderDeDefesa = parseFloat(prompt("Qual o seu poder de defesa?"))
const possuiEscudo = prompt("Possui escudo? sim ou não")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "não") {
  danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontoDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defesa)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defesa + "\nPontos de vida: " + pontoDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
) 