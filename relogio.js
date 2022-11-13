//Pegar a hora e minuto do sistema

const hora = new Date().getHours()
const minutos = new Date().getMinutes();
//Pegar a div da foto

let msg = document.getElementById('msg')

let foto = document.getElementById('foto')

//pegar a imagem

var img = document.querySelector('#image')

let corpo = document.querySelector('body')

//dizer que horas são

//mudar a foto de acordo com a hora

//mudar o background de acordo com a hora

function carregar() {
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora > 6 && hora <= 12){
        //bom dia
        img.innerHTML = '<img src="images/manha.png">';
        corpo.style.background = "#9a8667"
        
    } else if (hora > 13 && hora < 17){
        //boa tarde
        img.innerHTML = '<img src="images/tarde.png">'
        corpo.style.background = '#8cd0eb'
    } else {
        //boa noite
        img.innerHTML = '<img src="images/noite.png">'
        corpo.style.background = '#2a2a2c'
    }
}
