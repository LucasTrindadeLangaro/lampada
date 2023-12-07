var img = document.getElementById('lampada')
var id = 0
function liga() {
    var liga = document.getElementById('liga')
    img.src = './src/image/ligada.png'
    id = 1
}

function desliga() {
    var desliga = document.getElementById('desliga')
    img.src = './src/image/desligada.png'
    id = 2
}

function quebra() {
    var quebra = document.getElementById('quebra')
    img.src = './src/image/quebrada.png'
    id = 3  
}

// precisa ser feito um ajuste: quando a lamapada estiver quebrada (id =3), e for clicado no botao "ligar" ou "desligar", precisa aparecer uma mensagem dizendo, voce precisa concertar a lampada e depois disso sera habilitado um botao "concertar" e ai vai voltar para a imagem "desligada" e id = 2