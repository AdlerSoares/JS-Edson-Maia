let produto = 'Arroz'
let quant = 2
let precoUnitario = 4.99
let precoTotal = quant * precoUnitario

document.write(`Preço Total R$ ${precoTotal}<br>`)
document.write(`Preço Total ${precoTotal.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}<hr>`)

const nome = 'Edson Maia'
const peso = 83.5
const altura = 1.75
const imc = peso / (altura * altura)

document.write(`IMC: ${imc}<br>`)
document.write(`IMC: ${imc.toFixed(2)}`)