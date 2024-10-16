let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', '...images/pride-fc.jpg')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */

// Varios atributos, 1 por linha
titulo.style.color = 'red' 
titulo.style.backgroundColor = 'black'
titulo.style.padding = '0.625rem'

// Varios atributos, 1 comando para todas linhas
let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'azul')
// Remoção de atributos
box[0].removeAttribute('class')

// MODOS DE COR //

let tela = document.querySelector('main')
let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    //event.preventDefaut()
    console.log('modo dark')
    tela.classList.add('dark')
    tela.classList.remove('light')
}

function modoLight() {
    //event.preventDefaut()
    console.log('modo light')
    tela.classList.remove('dark')
    tela.classList.add('light')
}