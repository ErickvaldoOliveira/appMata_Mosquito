//Declaração de variáveis globais
var altura = 0
var largura = 0
var pontosVida = 1
var tempo = 15

//Ajustando o nível de dificuldade de cada opção do jogo
var tempoMosquito = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'facil') {
    //1500
    tempoMosquito = 1500
} else if(nivel === 'normal') {
    //1000
    tempoMosquito = 1000
} else if(nivel === 'dificil') {
    //750
    tempoMosquito = 750
}

//Declaração de uma função para delimitar o espaço do campo de jogo
function campoJogoBrowser() {
    altura = window.innerHeight
    largura = window.innerWidth 
}

campoJogoBrowser()

//Controlando o fluxo de tempo do cronômetro da aplicação
var cronometro = setInterval(function() {

    tempo--
    
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

//Declaração de uma função para fazer com que o mosquito apareça em diversas posições aleatoriamente
//Método (Math.random)
function mosquitoAleatorio() {

    //Removendo o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //Controlando os pontos de vida
        if(pontosVida > 3) {

            window.location.href = 'gameOver.html'
        } else {
            document.getElementById('coracao' + pontosVida).src = "img/coracao_vazio.png"

            pontosVida++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //Criando o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

//Declarando uma função para definir tamanhos aleatórios para o mosquito
function tamanhoAleatorio() {
    var tamanho = Math.floor(Math.random() * 3)

    switch(tamanho) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

//Declarando uma função para definir um lado aleatório para o mosquito
function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)

    switch(lado) {
        case 0:
            return 'esquerdo'

        case 1:
            return 'direito'

    }
}