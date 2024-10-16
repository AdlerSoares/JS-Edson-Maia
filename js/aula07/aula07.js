/* Desafio 01 */
let lutador = 'Fedor Vladimirovich Emelianenko'
let nacionalidade = 'Russo'
let idade = 44
let peso = 106
let altura = 1.83

/* document.write(`<div class = 'card'>
    <h2>Lutador</h2>
    <img src = '../images/fedor-2015.jpg>
    <p>${lutador}</p>
    <p>${nacionalidade}</p>
    <p>${idade} anos</p>
    <p>${peso} Kg</p>
    <p>${altura} M</p>
    </div>`)

var data = new Date()
var agora = data.getDay()
console.log(data) */

let jogo = {
    titulo: 'League of Legends - LOL',
    desenvolvedor: 'Riot Games',
    anoLancamento: 2009
}

document.write(`<div class='jogo'>
    <h2>Jogo</h2>
    <span>Título</span>
    <p>${jogo.titulo}</p>
    <span>Desenvolvedor</span>
    <p>${jogo.desenvolvedor}</p>
    <span>Ano do Lançamento</span>
    <p>${jogo.anoLancamento}</p>
    <\div>
    `)