function carregar() {
var mensagem = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()

mensagem.innerHTML = `Agora são ${hora}:${minuto} horas!`
// if (minuto < 10){
//     minuto = 0 + minuto
// }

if (hora >= 0 && hora < 12){
    //bom dia
    img.src = './imagens/manhã.jpg'
    document.body.style.background = '#FED677'
} else if (hora >= 12 && hora <= 18) {
    //boa tarde
    img.src = './imagens/tarde.jpg'
    document.body.style.background = '#5F3219'
} else {
    //boa noite
    img.src = './imagens/noite.jpg'
    document.body.style.background = '#00596C'
}
}