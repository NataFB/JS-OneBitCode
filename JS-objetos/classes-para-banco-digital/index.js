const App = require("./App")

App.createUser("nata@email.com", "Nata Barbosa")
App.createUser("moon@email.com", "Moon Barbosa")
App.createUser("manu@email.com", "manu Barbosa")

App.deposit("nata@email.com", 100)

App.transfer("nata@email.com", "moon@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("manu@email.com", 2000, 24)

console.log(App.findUser("nata@email.com"))
console.log(App.findUser("nata@email.com").account)
console.log(App.findUser("moon@email.com"))
console.log(App.findUser("moon@email.com").account)
console.log(App.findUser("manu@email.com"))
console.log(App.findUser("manu@email.com").account.loans[0].installments)