const bars = document.getElementById("bars")
const nav = document.getElementById("nav")
const main = document.querySelector("main")
const all= document.querySelector("*")

bars.addEventListener("click", ()=> {
    nav.classList.toggle("active-nav")
    all.classList.toggle("noscroll")
    main.addEventListener("click", ()=>{
        nav.classList.remove("active-nav")
        all.classList.remove("noscroll")
    })
})

const allImages = ["images/1.jpg", "images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"]
const btnAtras = document.getElementById("atras")
const btnAdelante = document.getElementById("adelante")
const contenedor = document.getElementById("sliders-container")

btnAdelante.addEventListener("click", adelante)
btnAtras.addEventListener("click", anterior)

var imgActual = 1
var imgSiguiente = 2
const cantidadImg = allImages.length
//carga de imagenes

var etiquetasImg = []

function rehabilitarAdelante(){
    btnAdelante.addEventListener("click", adelante)
}
function rehabilitarAtras(){
    btnAtras.addEventListener("click", anterior)
}

for (let index = 0; index < cantidadImg; index++) {
    let elementoCreado = document.createElement("img")
    elementoCreado.classList.add("img-slider")
    elementoCreado.classList.add("ocultas")
    contenedor.appendChild(elementoCreado)
    elementoCreado.src=allImages[index]
    elementoCreado.id="img"+(index+1)
    let etiqueta = document.getElementById("img"+(index+1))
    etiquetasImg.push(etiqueta)
}

let imagenPrincipal = document.getElementById("img1")
imagenPrincipal.classList.remove("ocultas")
imagenPrincipal.classList.add("principal")

let imagenSiguiente = document.getElementById("img2")
imagenSiguiente.classList.remove("ocultas")
imagenSiguiente.classList.add("siguiente")

function adelante() {
    btnAdelante.removeEventListener("click", adelante)
    setTimeout(rehabilitarAdelante, 1000)

    imagenPrincipal.classList.remove("principal")
    imagenPrincipal.classList.add("ocultas")

    imagenSiguiente.classList.remove("siguiente")
    imagenSiguiente.classList.add("principal")

    imgActual++
    imgSiguiente++
    
    if (imgActual === (cantidadImg+1)){
        imgActual = 1
    }
    if (imgSiguiente === (cantidadImg+1)){
        imgSiguiente = 1
    }

    imagenPrincipal = document.getElementById("img"+imgActual)
    imagenSiguiente = document.getElementById("img" + imgSiguiente)
    imagenSiguiente.classList.add("siguiente")
    imagenSiguiente.classList.remove("ocultas")
    
}

function anterior() {
    btnAtras.removeEventListener("click", anterior)
    setTimeout(rehabilitarAtras, 1000)

    imagenPrincipal.classList.remove("principal")
    imagenPrincipal.classList.add("siguiente")

    imagenSiguiente.classList.remove("siguiente")
    imagenSiguiente.classList.add("ocultas")

    imgActual--
    imgSiguiente--
    
    if (imgActual === 0){
        imgActual = cantidadImg
    }
    if (imgSiguiente === 0){
        imgSiguiente = cantidadImg
    }

    imagenPrincipal = document.getElementById("img"+imgActual)
    imagenSiguiente = document.getElementById("img"+imgSiguiente)

    imagenPrincipal.classList.remove("ocultas")
    imagenPrincipal.classList.add("principal")

}