const seccionEncabezado = document.getElementById("Encabezado");
const seccionInicio = document.getElementById("Inicio");
const seccionContacto = document.getElementById("Contacto");
const seccionNosotros = document.getElementById("Nosotros");
const seccionServicios = document.getElementById("Servicios");
const seccionSedes = document.getElementById("Sedes")

const botonInicio = document.getElementById("botonInicio");
const botonNosotros = document.getElementById("botonNosotros");
const botonServicios = document.getElementById("botonServicios");
const botonSedes = document.getElementById("botonSedes")
const botonContacto = document.getElementById("botonContacto");
const botonVisitanos = document.getElementById("botonVisitanos");
const botonlogo = document.getElementById("contenedor-logo");
const botonCerrar = document.querySelectorAll('.BotonesCerrar');

const inputs = document.querySelectorAll('input[type="radio"]');
const ventanasEmergentes = document.querySelectorAll('.Ventana-Emergente');

window.addEventListener("load", function() {
    seccionServicios.style.display = "none";
    seccionNosotros.style.display = "none";

    botonInicio.addEventListener("click", pestañaInicio);
    botonNosotros.addEventListener("click", pestañaNosotros);
    botonServicios.addEventListener("click", pestañaServicios);
    botonSedes.addEventListener("click", pestañaSedes)
    botonContacto.addEventListener("click", pestañaContacto);
    botonlogo.addEventListener("click", pestañaInicio);
    botonVisitanos.addEventListener("click", pestañaSedes);
    botonCerrar.forEach(boton => {
        boton.addEventListener("click", cerrarVentana);
    });

    // Detector de evento de clic inputs
    inputs.forEach(input => {
        input.addEventListener("click", function() {
            ventanaEmergente(input.id);
        });
    });
});

function pestañaInicio() {
    window.scrollTo(0, 0);
    cerrarVentana();
    seccionInicio.style.display = "block";
    seccionServicios.style.display = "none";
    seccionNosotros.style.display = "none";
    seccionSedes.style.display = "none";
    seccionContacto.style.display = "flex";
}

function pestañaNosotros() {
    window.scrollTo(0, 0);
    cerrarVentana();
    seccionInicio.style.display = "none";
    seccionServicios.style.display = "none";
    seccionNosotros.style.display = "flex";
    seccionSedes.style.display = "none";
    seccionContacto.style.display = "flex";
}

function pestañaServicios() {
    window.scrollTo(0, 0);
    cerrarVentana();
    seccionInicio.style.display = "none";
    seccionServicios.style.display = "flex";
    seccionNosotros.style.display = "none";
    seccionSedes.style.display = "none";
    seccionContacto.style.display = "flex";
}

function pestañaSedes() {
    window.scrollTo(0, 0);
    cerrarVentana();
    seccionInicio.style.display = "none";
    seccionServicios.style.display = "none";
    seccionNosotros.style.display = "none";
    seccionSedes.style.display = "flex";
    seccionContacto.style.display = "flex";
}

function pestañaContacto() {
    window.scrollTo(0, 0);
    cerrarVentana();
    seccionInicio.style.display = "none";
    seccionServicios.style.display = "none";
    seccionNosotros.style.display = "none";
    seccionSedes.style.display = "none";
    seccionContacto.style.display = "flex";
    seccionContacto.style.paddingTop = "10vw";
}

function ventanaEmergente(InputId) {
    if (InputId.startsWith("inicio")) {
        InputId = InputId.substring(6);
        pestañaServicios();
    }
    const AbrirVentana = document.getElementById(InputId + "-Ventana");
    AbrirVentana.style.display = "block";
}

function cerrarVentana() {
    ventanasEmergentes.forEach(ventana => {
        ventana.style.display = "none";
        window.scrollTo(0, 0);
    });
}