<template>
<section id="Servicios">
        <div id="Encabezado-Servicios">
            <img class="contenedor" src="/assets/Inicio-servicios.png" alt="Radiofia-muestra">
            <div id="info-servicios">
                <h1 class="title">Servicios</h1>
                <p class="parrafos">
                    Descubra nuestros completos paquetes de servicios de radiología oral, diseñados para ofrecerle lo mejor en tecnología y atención de alta calidad. Cada paquete está cuidadosamente elaborado para cubrir todas sus necesidades diagnósticas con precisión y eficacia. 
                </p>
            </div>
        </div>
        
        <div id="Lista-Servicios">
            <div class="CategoriasServicios">
                <div class="Texto-Servicios">
                    <h1 class="title">Radiografia extraoral</h1>
                    <ul class="parrafo-color2">
                        <li>Panoramica</li>
                        <li>Perfil</li>
                        <li>Antero posterior / Postero anterior</li>
                        <li>ATM Boca abierta / Boca cerrada</li>
                        <li>Submenton</li>
                        <li>Senos paranasales</li>
                        <li>Carpograma</li>
                    </ul>
                </div>
                <img class="contenedor2" src="/assets/Categoria-Radiografia extraoral.png" alt="Panoramica">
            </div>

            <div class="CategoriasServicios">
                <div class="Texto-Servicios">
                    <h1 class="title">Radiologia intraoral</h1>
                    <ul class="parrafo-color2">
                        <li>Periapical parcial</li>
                        <li>Periapical milimetrada</li>
                        <li>Periapical completo</li>
                        <li>Coronales 4</li>
                        <li>Coronales 2</li>
                    </ul>
                </div>
                <img class="contenedor2" src="/assets/Categoria-Radiologia intraoral.png" alt="Periapicales">
            </div>

            <div class="CategoriasServicios">
                <div class="Texto-Servicios">
                    <h1 class="title">Tomografia 3D</h1>
                    <ul class="parrafo-color2">
                        <li>Zona 3 dientes</li>
                        <li>Maxilar superior o Inferior</li>
                        <li>Bimaxilar</li>
                        <li>Maxilo</li>
                        <li>ATM boca cerrada</li>
                        <li>Senos paranasales</li>
                    </ul>
                </div>
                <img class="contenedor2" src="/assets/Categoria-Tomografia.png" alt="Tomografias">
            </div>

            <div class="CategoriasServicios">
                <div class="Texto-Servicios">
                    <h1 class="title">Paquetes de Ortodoncia</h1>
                    <ul class="parrafo-color2">
                        <li>Panoramica</li>
                        <li>Perfil</li>
                        <li>Fotografias</li>
                        <li>Modelos de estudio</li>
                        <li>Cefalometria</li>
                        <li>Escaneo Intraoral</li>
                    </ul>
                </div>
                <img class="contenedor2" src="/assets/Categoria-Paquetes de Ortodoncia.png" alt="Tomografias">
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style>
    #Encabezado-Servicios{
        display: flex;
        width: 70%;
    }

    #Lista-Servicios{
        display: flex;
        flex-direction: column;
        width: 70%;
    }
    .contenedor{
        width: 448px;
        height: 501px;
        object-fit: cover;
        object-position: 25% left;
        border-radius: 30px;
    }

    .contenedor2{
        width: 513px;
        height: 320px;
        object-fit: cover;
        border-radius: 30px;
        margin: 2% 5% 2% 5%;
    }

    @media (max-width: 1000px) {
        .contenedor{
        width: 300px;
        height: auto;
        }
        .contenedor2{
            width: 350px;
            height: auto;
        }
        #Encabezado-Servicios, #Lista-Servicios{
            width: 90%;
        }
    }
    @media (max-width: 1000px) {
        .contenedor{
        width: 300px;
        height: auto;
        }
        .contenedor2{
            width: 350px;
            height: auto;
        }
        #Encabezado-Servicios, #Lista-Servicios, .CategoriasServicios{
            flex-direction: column;
            align-items: center;
            width: 90%;
        }
    }
</style>