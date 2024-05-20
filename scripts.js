let imagem = document.querySelector('.starbucks')
let circle = document.querySelector('.circle')

function changeImage(endereco){
    imagem.src = endereco
}

function changeColor(cor){
    circle.style.background = cor
}
