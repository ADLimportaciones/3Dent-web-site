<template>
    <section id="Encabezado">
        <div id="toggle">
            <div class="menu-toggle" @click="toggleMenu">☰</div>
         </div>
        <router-link to="/" @click="closeMenu()">
        <button  id="contenedor-logo">
            <img src="/assets/3dent.png" alt="3Dent" height="65rem">
        </button>
        </router-link>
        <div :class="['contenedor-botones', 'nav-links', { active: isMenuOpen }]">
            <router-link to="/" @click="toggleMenu"><button class="Botones-encabezado" id="botonInicio">inicio</button></router-link>
            <router-link to="/Us" @click="toggleMenu"><button class="Botones-encabezado" id="botonNosotros">Nosotros</button></router-link>
            <router-link to="/Services" @click="toggleMenu"><button class="Botones-encabezado" id="botonServicios">servicios</button></router-link>
            <router-link to="/Sedes" @click="toggleMenu"><button class="Botones-encabezado" id="botonSedes">Sedes</button></router-link>
            <router-link to="/Contact" @click="toggleMenu"><button class="Botones-encabezado" id="botonContacto">Contacto</button></router-link>
        </div>
    </section>
</template>

<script>
import { ref } from "vue";  
export default {
  name: 'HeaderPage',
  setup() {
    const isMenuOpen = ref(false);
    const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value; };
    const closeMenu = () => { isMenuOpen.value = false; };

    return {isMenuOpen, toggleMenu, closeMenu };
  },
}
</script>

<style>
#toggle{
    display: none;
}
#Encabezado{
    display: flex;
    justify-content: space-between;
    align-items: center; 
    background-color: white;
    height: 6rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    margin-bottom: 200px;
}

#contenedor-logo{
    height: 90%;
    margin: 10px 50px 10px 130px;
    background-color: transparent;
    color: transparent;
    border-color: transparent;
    border-radius: 30%;

}

#contenedor-logo:hover{
    background-color: #A7A9AC;
}

.contenedor-botones{
    display: flex;
    justify-content: center;
    align-items: center; 
    border: 2px solid transparent;
    height: 90%;
    margin: 0px 100px 0px 50px;
}

.Botones-encabezado {
    font-size: 20px;
    width: 130px;
    height: 60%;
    border-radius: 20px;
    background: transparent;
    border: 2px solid transparent;
    color: black;
    padding: 0px 15px;
    margin: 0px 5px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
}

.Botones-encabezado::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0px;
    width: 80%;
    height: 3px;
    background-color: transparent;
    transition: background-color 0.3s;
    transform: translateX(-50%); /* Centra el subrayado */
}

.Botones-encabezado:hover::after {
    background-color:#2E3093;
}
@media (max-width: 1030px) {
    #Encabezado{
        height: 12vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 6px;
    }
    #contenedor-logo{
        margin: 0 1% 0 20% !important;
    }
    .contenedor-botones{
        margin: 0 !important;
    }
    .Botones-encabezado {
        width: 100px !important;
        padding: 0 !important;
        margin: 0 !important;
    }
}

@media (max-width: 600px) {
    #Encabezado{
        height: 16vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 6px;
    }
    #toggle{
        display: flex;
        width: auto;
        height: 50px;
        font-size: 50px;
        margin: 0 5%;
    }
    .nav-links {
        position: absolute;
        top: 68px;
        background: white;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        display: none;
        width: 100%;
        height: auto;
        z-index: 9999;
        padding-bottom: 1rem;
    }

    .nav-links.active {
        display: flex;
    }

    #contenedor-logo{
        height: fit-content;
        margin: 0 50px 0 0% !important;
    }
    .contenedor-botones{
        margin: 0 !important;
        flex-direction: column;
    }
}
</style>