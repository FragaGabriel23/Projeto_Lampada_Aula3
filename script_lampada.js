var lamp = window.document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('img/lampada_quebrada') > -1
}

function ligar(){
    if(!estaQuebrada()){
    lamp.src = 'img/lampada_ligada.svg'
    }
}

function desliga(){
    if(!estaQuebrada()){
    lamp.src = 'img/lampada_desligada.svg'
    }
}

lamp.addEventListener('click', quebrar)
function quebrar(){
    lamp.src = 'img/lampada_quebrada.svg'
    
}