// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias
const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] },
];


for( let usuario of usuarios ){
  console.log(` O ${usuario.nome} trabalha com ${usuario.tecnologias}` )
}