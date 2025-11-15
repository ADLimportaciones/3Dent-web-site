<template>
<section id="Nosotros">
        <div id="quienesSomos">
            <div id="quien">
                <h1 class="title">
                    ¿ Quienes somos ?
                </h1>
                <img class="contenedor" src="/assets/Panoramica Nosotros.jpg" alt="Panoramica-Nosotros">
            </div>
            <p id="textNosotros" class="parrafos">
                Somos mucho más que una empresa de diagnóstico y tecnología de punta. Somos un equipo apasionado de profesionales de la salud bucal y expertos en imágenes médicas comprometidos con la excelencia y la atención al cliente. <br>s
                En un mundo en constante evolución, entendemos que la innovación es clave. Es por eso que invertimos constantemente en equipos de radiología oral de última generación para brindar imágenes 3D detalladas y diagnósticos precisos. Nuestra tecnología nos permite estar a la vanguardia de la industria y proporcionar resultados que respaldan tratamientos efectivos. 
            </p>
        </div>
        <div id="misionVision">
            <div class="tarjetaMisionVision">
                <h2 class="title">Misión</h2>
                <p class="parrafos">Nuestra visión en 3Dent es liderar la industria de la radiología oral, siendo reconocidos como el estándar de excelencia en diagnósticos y atención al cliente en todo el sector de la salud bucal. <br>
                    Nos esforzamos por establecer relaciones de confianza a largo plazo con nuestros pacientes, brindándoles no solo resultados excepcionales sino también una experiencia cálida y personalizada en cada visita. Queremos ser conocidos por nuestra dedicación a comprender las necesidades únicas de cada paciente y por proporcionar un entorno en el que se sientan valorados y atendidos.</p>
            </div>
            <div class="tarjetaMisionVision">
                <h2 class="title">Visión</h2>
                <p class="parrafos">Nuestra misión es simple pero poderosa: contribuir al bienestar oral de nuestros pacientes a través de imágenes confiables y un servicio excepcional. Creemos que cada sonrisa es única y merece la atención más precisa y personalizada posible. Por lo tanto, hemos hecho de la tecnología de última generación y la calidad de atención al cliente nuestros pilares fundamentales. <br>
                Este es el corazón de 3Dent. Somos una empresa que valora la calidad, la tecnología y la atención al cliente por igual. Estamos aquí para cuidar de tu salud bucal, proporcionando diagnósticos precisos que respaldan sonrisas saludables y felices.</p>
            </div>
        </div>
        <div id="Carrusel-Nosotros">
            <div class="Carrusel-item"><img src="/assets/Carrusel-1.png" alt="Imagen1"></div>
            <div class="Carrusel-item"><img src="/assets/Carrusel-2.png" alt="Imagen2"></div>
            <div class="Carrusel-item"><img src="/assets/Carrusel-3.png" alt="Imagen3"></div>
            <div class="Carrusel-item"><img src="/assets/Carrusel-1.png" alt="Imagen4"></div>  
        </div>

        <div id="Valores">
            <div id="Titulo-valores"><h1 class="title">Valores</h1></div>
            <p class="parrafos"> <span class="parrafo-color">Calidad:</span> El compromiso con la calidad es un valor que guía todas nuestras acciones. Estamos dedicados a mantener los más altos estándares en la industria de la radiología oral, desde la precisión de nuestras imágenes hasta la integridad de nuestro servicio. Nos esforzamos por la mejora continua, la capacitación constante de nuestro equipo y la adhesión a las mejores prácticas en la atención al paciente.</p>
            <p class="parrafos"><span class="parrafo-color">Innovación y Desarrollo:</span> Buscamos constantemente nuevas formas de mejorar nuestros servicios y procesos. Fomentamos un ambiente que alienta la creatividad y la búsqueda de soluciones innovadoras para desafíos médicos y tecnológicos.</p>
            <p class="parrafos"><span class="parrafo-color">Ética y Responsabilidad:</span> Nos comprometemos a actuar con integridad en todas nuestras interacciones, manteniendo los más altos estándares éticos en nuestra práctica profesional y en el manejo de la información de nuestros pacientes. Valoramos la privacidad y la confidencialidad de los datos de nuestros pacientes y nos esforzamos por cumplir con todas las regulaciones y normativas aplicables.</p>
        </div>
    </section>
</template>

<script>

</script>

<style>
    #textNosotros{
        display: flex;
        font-size: 25px;
        text-align: justify;
        line-height: 1.6;
        margin: 1%;
    }

    #misionVision{
        display: flex;
        width: 70%;
        align-items: stretch;
    }

    .tarjetaMisionVision{   
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 2%;
        padding: 1% 2%;
        border: solid #2E3093;
        background-color: #9FCACD1A;
        border-radius: 50px;
    }

    .tarjetaMisionVision p{
        font-size: 24px;
        line-height: 1.6;
        text-align: justify;
    }

    #Carrusel-Nosotros{
        display: flex;
        width: 70vw;
        overflow-x: auto    ;
    }

    Carrusel-item {
        flex: 0 0 auto;
        scroll-snap-align: center; 
    }

    .Carrusel-item img {
        max-width: 100vw;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    @media (max-width: 1000px) {
        #quienesSomos{
            display: flex;
            flex-direction: column;
        }
        #misionVision{
            width: 90%;
        }
    }
    @media (max-width: 600px){
        #quienesSomos{
            width: 90% !important;
        }
        #textNosotros{
            font-size: 15px;
        }
        #misionVision{
            flex-direction: column;
        }
        .tarjetaMisionVision p {
            font-size: 15px;
        }
        #Valores{
            margin-top: 5% !important;
        }
    }
</style>