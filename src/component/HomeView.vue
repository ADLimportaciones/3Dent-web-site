<template>
<section id="Inicio">
        <section id="Pasarela-de-imagenes">
            <p class="titulo-Color">Sonrisas radiantes<br>  comienzan con una<br>planificación<br>precisa.</p>
            <router-link to="/Sedes"><button class="botonInteractivo" id="botonVisitanos">Visitanos</button></router-link>
        </section>

        <section id="Caracteristicas">
            <h1 class="title">Radiologia oral de alta calidad</h1>
            <h2 class="Subtitle-color">Precision que marcan la diferencia en la salud oral.</h2>
            <div id="Diferenciadores">
                <div class="Diferenciador">
                    <img src="/assets/Ubicación.png" alt="Simbolo-ubicacion">
                    <p class="parrafos">Nos ubicamos estratégicamente en las mejores zonas, cercanas a los principales consultorios para brindarte un acceso conveniente y rápido a nuestros servicios.</p>
                </div>
                <div class="Diferenciador">
                    <img src="/assets/reloj.png" alt="Simbolo-reloj">
                    <p class="parrafos">¡Estamos aquí para ti! Contamos con un amplio horario de atención de lunes a sábado para adaptarnos a tus necesidades y brindarte el mejor servicio cuando más lo necesites.</p>
                </div>
                <div class="Diferenciador">
                    <img src="/assets/Medalla.png" alt="Simbolo-logro">
                    <p class="parrafos">Nos esforzamos continuamente para asegurarnos de que cada uno de nuestros clientes reciba un servicio excepcional que cumpla con los más altos estándares de calidad."</p>
                </div>
                <div class="Diferenciador">
                    <img src="/assets/Avion.png" alt="Simbolo-avion">
                    <p class="parrafos">Nuestros servicios garantizan resultados con entrega inmediata, proporcionándote la información que necesitas de manera rápida y eficiente.</p>
                </div>
                <div class="Diferenciador">
                    <img src="/assets/Bolsa-de-compra.png" alt="Simbolo-bolsa">
                    <p class="parrafos">Ofrecemos una variedad de paquetes de productos diseñados para satisfacer las necesidades tanto de los odontólogos como de los pacientes. Encuentra la solución perfecta para ti.</p>
                </div>
                <div class="Diferenciador">
                    <img src="/assets/Camara.png" alt="Simbolo-camara">
                    <p class="parrafos">Nuestras imágenes son líderes en calidad y funcionalidad. Experimenta la diferencia con nuestros equipos de última generación.</p>
                </div>
            </div>
        </section>

        <section id="Productos-destacados">
            <h1 class="title">Servicios destacados</h1>
            <div id="Servicios-inicio">
                <router-link to="/Services" class="boton-servicio" id="Radiografia-panoramica">Radiografía panoramica</router-link>
                <router-link to="/Services" class="boton-servicio" id="Tomografia">Tomografía</router-link>
                <router-link to="/Services" class="boton-servicio" id="Estudio-fotografico">Estudio fotografico</router-link>
                <router-link to="/Services" class="boton-servicio" id="Escaneo-intraoral">Escaneo intraoral</router-link>
            </div>
            <router-link to="/Services" id="MAS-PRODUCTOS">Mas servicios</router-link>
        </section>
    </section>
</template>

<script>

</script>

<style>
#Pasarela-de-imagenes{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-image: url('./assets/Imagen-inicial.png');
    background-size: cover; /* Hace que la imagen cubra todo el fondo */
    background-position: center; /* Centra la imagen */
    background-repeat: no-repeat; /* Evita que la imagen se repita */
    width: 100%;
    height: 50vw; 
    text-align: right;
}
#Caracteristicas{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 2%;
}

#Diferenciadores{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
}

.Diferenciador{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    margin: 1% 5%;
}
.Diferenciador > p {
    text-align: center;
} 

#Servicios-inicio{
    display: flex;
    flex-wrap: wrap;
    margin: 0% 3%;
    justify-content: center;
    width: 90%;
}
.boton-servicio{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: transparent;
    border: none;
    border-radius: 30px;
    width: 500px;
    height: 300px;
    padding: 2.5%;
    margin: 2.5%;
    font-size: 48px;
    color: #818C8D;
    text-decoration: none;
}

.boton-servicio:hover{
    background-color: #A7A9AC;
}

#MAS-PRODUCTOS{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #03B6AB3B;
    border: none;
    border-radius: 30px;
    width: 350px;
    height: 90px;
    font-size: 48px;
    color: #818C8D;
    text-decoration: none;
}

#MAS-PRODUCTOS:hover{
    background-color: #A7A9AC;
}

#Radiografia-panoramica{
    background-image: url('../../public/assets/panoramicCard.svg');
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;
}

#Tomografia{
    background-image: url('../../public/assets/tomoCard.svg');
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;
}
#Estudio-fotografico{
    background-image: url('../../public/assets/photoCard.svg');
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;
}
#Escaneo-intraoral{
    background-image: url('../../public/assets/scanCard.svg');
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;
}

@media (max-width: 600px) {
    .Diferenciador{
        width: 90%;
    }
    .Diferenciador img {
        width: 80px;
        height: 80px;
    }
    .boton-servicio {
        height: 200px;
        font-size: 35px;
    }
    #MAS-PRODUCTOS{
        font-size: 35px;
    }
}
</style>