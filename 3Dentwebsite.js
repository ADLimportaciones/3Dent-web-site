const seccionEncabezado = document.getElementById("Encabezado")
const seccionInicio = document.getElementById("Inicio")
const seccionContacto = document.getElementById("Contacto")
const seccionNosotros = document.getElementById("Nosotros")
const seccionProductos = document.getElementById("Productos")

const botonInicio = document.getElementById("botonInicio")
const botonNosotros = document.getElementById("botonNosotros")
const botonProductos = document.getElementById("botonProductos")
const botonContacto = document.getElementById("botonContacto")
const botonCerrar = document.querySelectorAll('.BotonesCerrar')
const botonlogo = document.getElementById("contenedor-logo")

const imagenes = document.querySelectorAll(".pasarela");
const intervalo = 3000
const totalImagenes = imagenes.length;

const coloresDeFondo = ['#f7f7f6', '#f7f7f6','#FFFFFF','#FFFFFF','#FFFFFF'];
const inputs = document.querySelectorAll('input[type="radio"]');
const ventanasEmergentes =document.querySelectorAll('.Ventana-Emergente')
let currentIndex = 0; // Iniciar con la primera imagen visible
let autoChange = setInterval(showNextImage, intervalo); // Cambiar imagen cada 5 segundos

seccionProductos.style.display = "none"
seccionNosotros.style.display = "none"  

botonInicio.addEventListener("click", pestañaInicio)
botonNosotros.addEventListener("click", pestañaNosotros)
botonProductos.addEventListener("click", PestañaProductos)
botonContacto.addEventListener("click", pestañaContacto)
botonlogo.addEventListener("click",pestañaInicio)
botonCerrar.forEach(boton => {
    boton.addEventListener("click",cerrarVentana)
})

// Detector de evento de clic inputs de productos
inputs.forEach(input =>{
    input.addEventListener("click", function(){
        ventanaEmergente(input.id);
    });
});

function pestañaInicio(){
    window.scrollTo(0, 0)
    cerrarVentana()
    seccionInicio.style.display = "block"
    seccionProductos.style.display = "none"
    seccionNosotros.style.display = "none"
    seccionContacto.style.display = "flex"    
}

function pestañaNosotros(){
    window.scrollTo(0, 0)
    cerrarVentana()
    seccionInicio.style.display = "none"
    seccionProductos.style.display = "none"
    seccionNosotros.style.display = "flex" 
    seccionContacto.style.display = "flex"   
}

function PestañaProductos(){
    window.scrollTo(0, 0);
    cerrarVentana()
    seccionInicio.style.display = "none"
    seccionProductos.style.display = "flex"
    seccionNosotros.style.display = "none" 
    seccionContacto.style.display = "flex"   
}

function pestañaContacto(){
    window.scrollTo(0, 0);
    cerrarVentana()
    seccionInicio.style.display = "none"
    seccionProductos.style.display = "none"
    seccionNosotros.style.display = "none" 
    seccionContacto.style.display = "flex"
    seccionContacto.style.paddingTop = "10vw"
}


function initSlider() {
    imagenes.forEach((img, index) => {
        img.style.display = index === currentIndex ? "block" : "none";

        document.getElementById("Pasarela-de-imagenes").style.backgroundColor = coloresDeFondo[currentIndex];
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImagenes;
    updateImageVisibility();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImagenes) % totalImagenes;
    updateImageVisibility();
}

function updateImageVisibility() {
    imagenes.forEach((img, index) => {
        img.style.display = index === currentIndex ? "block" : "none";

        document.getElementById("Pasarela-de-imagenes").style.backgroundColor = coloresDeFondo[currentIndex];
    });
    // Reiniciar el temporizador cada vez que el usuario cambia la imagen manualmente
    clearInterval(autoChange);
    autoChange = setInterval(showNextImage, intervalo);
}

function ventanaEmergente(InputId){
    if (InputId.startsWith("inicio")) {
        InputId = InputId.substring(6);
        PestañaProductos()
    } else{
        InputId = InputId
    }
    const AbrirVentana=document.getElementById(InputId + "-Ventana") 
    AbrirVentana.style.display = "block"
}

function cerrarVentana(){
    ventanasEmergentes.forEach(ventana => {
        ventana.style.display = "none";
        window.scrollTo(0, 0);
    })
}

window.addEventListener("load", initSlider)