async function imc(weight, height){
  if (typeof weight !== 'number' || typeof height !== 'number'){
    return Promise.reject('arguments must be of type number')
  }
  return weight / (height * height)
}

async function showImc (weight, height){
  try {
    console.log('calculando...')

    const result = await imc(weight, height)

    console.log(`O resultado do IMC foi de ${result}.`)

    if(result < 18.5){
      console.log('Situação: Abaixo do Peso')
    }else if(result < 25){
      console.log('Situação: Normal')
    }else if(result < 30) {
      console.log('Situação: Sobrepeso')
    }else if (result <40){
      console.log('Situação: Obesidade')
    }else{
      console.log('Situação: Obesidade Grave')
    }

  } catch (error) {
    console.log(error)
  }
}

showImc(63.5, 1.66)