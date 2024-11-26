function carregou(){
    console.log('Pagina carregada com sucesso!')
}
function rolouPagina(){
    console.log('Pagina rolando')
}
function focou(){
    console.log('Foco no titulo')
}
function focoNoCampo(){
    console.log('Foco no campo de texto')
}
function semFocoNoCampo(){
    console.log('Saiu o foco do campo de texto')
}

// Evento de teclado para contar a quantidade de teclas
let letras = document.getElementById('cxtexto')
function avisarQueTeclou(){
    let numLetras = 1 // length começa com 0, é preciso +1
    console.log(`Está teclando ${letras.value.length + numLetras}`)
}

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')

// Mouseover a seta do mouse esta no element
botao1.addEventListener('mouseover', () => {
    console.log('Foco no botão 1')
})

//Focusout ou blur quando sair do foco
botao2.addEventListener('blur', function(){
    console.log('Foco no botão 2')
})

// 1 click do mouse
botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Clicou no botão Enviar')
})
