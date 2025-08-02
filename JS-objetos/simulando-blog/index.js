const Author = require("./Author")

const john = new Author("John Doe")

const post = john.writePost("Título do Post", "BLABLABLA...")

post.addComment("Natanael", "Muito Bom")

console.log(john)
console.log(post)