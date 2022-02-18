function trocar() {
    document.getElementById("logo-img").src=("assets/img/LOGO2-site.png")  
}

function trocar2() {
    document.getElementById("logo-img").src=("assets/img/LOGO-site.png")
}

function trocar3() {
    document.getElementById("img-foot").src=("assets/img/LOGO2-site.png")
}
function trocar4() {
    document.getElementById("img-foot").src=("assets/img/LOGO-site.png")
}

let nome = document.getElementById("nome-modal")
let nick = document.getElementById("nick-modal")

const conteudo = document.getElementById('textparamudar')

function confirmar() {
    nome = nome.value.toString()
    nick = nick.value.toString()
    conteudo.innerHTML = `Fala ${nome}, tranquilo? um pedido de amizade vai ser enviado pra ${nick}, fica ligado!` 
    
}


