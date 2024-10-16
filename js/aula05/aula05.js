/* Arquivo JS aula 05 Objetos */

//CRIAR OBJETO
let pessoa = {
    nome: 'Edson',
    idade: 40,
    peso: 83.5,
    altura: 1.75,
    doador: false
}

let produtos = {
    descricao: [],
    preco: []
}

const carros = {
    marca: ['Ford', 'Fiat', 'GM'],
    modelo: ['Ka', 'Uno', 'Corsa'],
    ano: [1999, 2005, 2010]
}
 // Acessar propriedade usando .
 /* pessoa.nome
 pessoa.idade
 pessoa.altura */

 // Operação IMC = Peso / (altura*altura)
 let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

 // .toFixed(x) - Limita o numero de casas decimais
 console.log(`IMC: ${imc.toFixed(2)}`)

 // Alterar / Atualizar valor de propriedade
 pessoa.nome = 'Edson Maia'
 produtos.descricao = ['Arroz']
 produtos.preco = [4.99]
 // Usando o spreed operator para acrescentar na array sem modificar
 produtos.descricao = [...produtos.descricao, 'Feijão', 'Trigo']
 produtos.preco = [...produtos.preco, 9.99, 4.79]
