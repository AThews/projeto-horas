//Pegar a hora do sistema

const hora = new Date().toLocaleTimeString();

//Pegar a div e o corpo do html
let div = document.getElementById('foto');
let corpo = document.body()


//dizer que horas são

div.innerHTML = `Agora são ${hora}.`

//mudar a foto de acordo com a hora

//mudar o background de acordo com a hora