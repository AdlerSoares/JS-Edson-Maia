/* Aula 10 Funções ou Metodos no JS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelectorAll('box')

/* Funções sem parametros e sem retorno (procedures) */
function olaMundo() {
    document.write('Olá Mundo sem retorno<br>')
}

/* Funções sem parametros e com retorno (function) */
function olaMundo2() {
    return 'Olá Mundo com retorno<br>'
}

// CHAMAR A FUNCAO = executar ela
olaMundo()
document.write(olaMundo2())

let x = 2
let y = 1
let mensagem = 'Jesus Cristo é o Salvador'

/* Funções com parametros e sem retorno */
function somar(a, b){
    document.write((a + b) + '<br>')
}

/* Funções com parametros e com retorno */
function somar2(c, d){
    return c + d
}
somar(x, y)
somar(10, 5)

document.write(`<p>${somar2(x, y)}</p>`)
document.write(`<p>${somar2(5,2)}</p>`)
titulo.addEventListener('click', function(){
    console.log('Clicou no titulo')
})

const olaMundoArrow = () => document.write('Olá Mundo Arrow')
olaMundoArrow()