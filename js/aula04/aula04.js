/* Arquivo JS aula 04 Array */

let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10, 20, 30)
let meses = ['Jan', 'Fev', 'Mar', 'Abr']
var test = Array(10)
test[0] = 'Oi'
test[9] = 'Tudo bem?'
test[20] = 'Opa!'
meses[0] = 'Janeiro'

// ADICIONAR no final (PUSH) = empurre
produtos.push('Açucar')
codigos.push(40, 50, 60, 70)
meses.push('Mai', 'Jun', 'Ago', '07')

//REMOVER no final (POP) = estourar
produtos.pop()
codigos.pop()
meses.pop()
meses.pop()

//ADICIONAR no inicio (UNSHIFT)
produtos.unshift('Uva', 'Maça')

//REMOVER do inicio (SHIFT)
produtos.shift()

//REMOVER de uma posição especifica (SPLICE) = emendar
//Posição inicial, quantos remover
codigos.splice(1, 3)

//COPIAR array (SLICE) = fatiar porção
let meses1 = meses.slice()
let meses2 = meses.slice(0, 3)

// TAMANHO array (LENGTH) = comprimento
meses.length
meses1.length
meses2.length

// spreed operator ...
let teste = [...produtos, 'Ovo', 'Pera']
