let intentos = 3

function verificarRespuesta(){

let r=document.getElementById("respuesta").value

if(r==3){
location.href="index.html"
}else{
document.getElementById("error").innerText="Respuesta incorrecta"
}

}

function checkPassword(){

const correctPassword="Anima affine"

let input=document.getElementById("password").value

if(input===correctPassword){

location.href="app.html"

}else{

intentos--

document.getElementById("error").innerText="Incorrecto. Intentos restantes: "+intentos

if(intentos<=0){
location.href="index.html"
}

}

}

function abrirRegalo(){

let box=document.querySelector(".gift-box")

box.classList.toggle("open")

}
