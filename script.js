
function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var horaAgora = data.getHours() + 'h:' + data.getMinutes()

msg.innerHTML = `Agora são ${horaAgora}min <br>`
if(hora >= 0 && hora < 12){
    window.document.body.style.background = '#FFDEAD'
    img.src = 'fotomanha.jpeg'
    msg.innerHTML += `Bom dia`

}else if(hora >= 12 && hora <18){
    window.document.body.style.background = '#BDB76B'
    img.src = 'fototarde.jpeg'
    msg.innerHTML += `Boa tarde`
}else{
    window.document.body.style.background = '#808080'
    img.src = 'fotonoite.jpeg'
    msg.innerHTML += `Boa noite`
}
}