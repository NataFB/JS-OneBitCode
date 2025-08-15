//* Cria um temporizador: setTimeout

console.log("Progrma iniciado!")

//const timeoutId = setTimeout(() => {
//  console.log("3 segundos se passaram desde que o programa foi iniciado")
//}, 3000) //contagem é feita em milisegundos

//clearTimeout(timeoutId) //exclui o timeout e não espera o tempo

//* Cria um intervalo de tempo: setInterval
//* executa o codigo continuamente em loop

let seconds = 0

const intervalId = setInterval(() => {
  seconds += 3
  console.log(`Se passaram ${seconds} segundos.`)
  if(seconds > 10) {
    clearInterval(intervalId) // exclui o intervalo e assim encerra o processo de repetição
    console.log("Tempo esgotado! Encerrando...")
  }
}, 1000 * 3)