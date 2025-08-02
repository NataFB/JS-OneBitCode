document.getElementById('sessionBtn').addEventListener('click', function(){
  const input = document.getElementById('session')
  window.sessionStorage.setItem('info', input.value) //* ou apenas sessionStorage
  input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', function(){
  const info = sessionStorage.getItem('info')
  alert('A informação salva é: ' + info)
})

document.getElementById('localBtn').addEventListener('click', function(){
  const input = document.getElementById('local') //* ou apenas localStorage
  window.localStorage.setItem('text', input.value)
  input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
  const t = localStorage.getItem('text')
  alert('O texto salvo no local storage é: ' + t )
})

document.getElementById('cookieBtn').addEventListener('click', function(){
  const input = document.getElementById('cookie')
  //? cookieName=value; expires=UTCStringDate; path=/;
  const cookie = 'info=' + input.value + ';'
  const expiration = 'expires=' + new Date(2025,11, 7) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
})