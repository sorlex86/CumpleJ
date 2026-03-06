let intentos = 3
let confettiLanzado = false

/* ---------------- PREGUNTA ---------------- */

function verificarRespuesta(){

let r = document.getElementById("respuesta").value

if(r == 3){

location.href = "login.html"

}else{

document.getElementById("error").innerText = "Respuesta incorrecta"

}

}

/* ---------------- LOGIN ---------------- */

function checkPassword(){

const correctPassword = "Anima affine"

let input = document.getElementById("password").value

if(input === correctPassword){

location.href = "app.html"

}else{

intentos--

document.getElementById("error").innerText =
"Incorrecto. Intentos restantes: " + intentos

if(intentos <= 0){

location.href = "index.html"

}

}

}

/* ---------------- CARTAS ---------------- */

const cartas = {

triste:
"Si hoy te sientes un poco rota, recuerda que no estás sola. Siempre puedes venir conmigo.",

enojada:
"Tu enojo también es válido, aquí tienes un lugar seguro para sacarlo.",

estresada:
"Si todo se siente demasiado, tómate un momento. No tienes que poder con todo hoy.",

feliz:
"Ojalá este momento feliz dure mucho… y si no, que vuelvan muchos más.",

gomitas:
"Cuando quieras solo échame una llamada y te las consigo antes de las 6 de la tarde."

}

function abrirCarta(tipo){

let texto = cartas[tipo]

document.getElementById("textoCarta").innerText = texto

document.getElementById("sobre").classList.remove("abierto")

}

function abrirSobre(){

let sobre = document.getElementById("sobre")

sobre.classList.toggle("abierto")

}

/* ---------------- LOGROS ---------------- */

const logros = [

{img:"images/1.png",texto:"Felicidades sobreviviste más de un año"},

{img:"images/5.png",texto:"Has pasado los 5 años con éxito tú puedes con más"},

{img:"images/10.png",texto:"Dios ya son 10, tu primera década, eso campeona"},

{img:"images/15.png",texto:"15 edad difícil pero tú puedes con eso y más"},

{img:"images/20.png",texto:"Órale ya son 20, tu segunda década con vida, TQN"},

{img:"images/Artista.png",texto:"Por ser la mejor artista del maldito mundo"},

{img:"images/Fuerte.png",texto:"Por ser una de las personas más fuertes que conozco"},

{img:"images/Guapa.png",texto:"Por ser la más guapa de todo el mundo"},

{img:"images/Inteligente.png",texto:"Por ser la persona más inteligente que Einstein"}

]

function cargarLogros(){

let contenedor = document.getElementById("logrosGrid")

if(!contenedor) return

logros.forEach(l=>{

let div = document.createElement("div")

div.innerHTML = `
<img src="${l.img}">
<p>${l.texto}</p>
`

contenedor.appendChild(div)

})

}

document.addEventListener("DOMContentLoaded",cargarLogros)

/* ---------------- VALES ---------------- */

function usarVale(nombre){

if(localStorage.getItem(nombre) == "usado"){

alert("Este vale ya fue usado")

return

}

localStorage.setItem(nombre,"usado")

let numero = "5215610910911"

let texto = "Quiero usar el vale: " + nombre

window.open(
"https://wa.me/"+numero+"?text="+encodeURIComponent(texto)
)

}

/* ---------------- REGALO ---------------- */

function abrirRegalo(){

let box = document.querySelector(".gift-box")

let mensaje = document.getElementById("mensajeRegalo")

box.classList.toggle("open")

mensaje.classList.toggle("hidden")

if(confettiLanzado) return

confettiLanzado = true

for(let i=0;i<40;i++){

let conf = document.createElement("div")

conf.className = "confetti"

conf.style.left = Math.random()*100 + "vw"

conf.style.background =
"hsl(" + Math.random()*360 + ",100%,50%)"

conf.style.animationDuration =
(Math.random()*3+2) + "s"

document.body.appendChild(conf)

setTimeout(()=>conf.remove(),5000)

}

}
