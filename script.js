let intentos = 3
let confettiLanzado = false

/* pregunta */

function verificarRespuesta(){

let r = document.getElementById("respuesta").value

if(r == 3){

location.href = "login.html"

}else{

document.getElementById("error").innerText = "Respuesta incorrecta"

}

}

/* login */

function checkPassword(){

const correctPassword = "Anima affine"

let input = document.getElementById("password").value

if(input === correctPassword){

location.href = "app.html"

}else{

intentos--

document.getElementById("error").innerText = "Incorrecto. Intentos restantes: " + intentos

if(intentos <= 0){

location.href = "index.html"

}

}

}

/* cartas */

function abrirSobre(){

let sobre = document.getElementById("sobre")

if(sobre){
sobre.classList.toggle("abierto")
}

}

/* vales */

function usarVale(nombre){

if(localStorage.getItem(nombre) == "usado"){
alert("Este vale ya fue usado")
return
}

localStorage.setItem(nombre,"usado")

alert("Vale usado: " + nombre)

}

/* regalo */

function abrirRegalo(){

let box = document.querySelector(".gift-box")

if(box){
box.classList.toggle("open")
}

if(confettiLanzado) return

confettiLanzado = true

for(let i = 0; i < 40; i++){

let conf = document.createElement("div")

conf.className = "confetti"

conf.style.left = Math.random()*100 + "vw"

conf.style.background = "hsl(" + Math.random()*360 + ",100%,50%)"

conf.style.animationDuration = (Math.random()*3+2) + "s"

document.body.appendChild(conf)

setTimeout(()=>conf.remove(),5000)

}

}
