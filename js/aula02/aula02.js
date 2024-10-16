/*
Arquivo JS Externo
*/

document.write('Olá Mundo!')
console.log('Outro Olá Mundo!')
// alert('Olá mundo com Alerta')

let mensagem = 'Minha mensagem'
let mensagem2 = 'Outra mensagem'
let meuPeso = 83.5
let minhaAltura = 1.75
let minhaIdade = 40
let ehDoador = false
let teste = null

/* Criar CONSTANTES (LETRA MAIUSC preferencialmente) e aribuir valor */
const PI = 3.1415
const TAXA = 0.5

teste = 'Algum conteúdo'

/* Escrever conteudo de variaveis e constantes */
document.write(mensagem)
document.write(mensagem2)
document.write(meuPeso)
document.write(minhaAltura)
document.write(minhaIdade)
document.write(ehDoador)
document.write(teste)
document.write(PI)
document.write(TAXA)

/* Concatenar */

document.write('<p>Mensagem: ' + mensagem + '</p>')
document.write(`Mensagem2: ${mensagem2}`)
document.write(`<p>PI - ${PI}</p>`)