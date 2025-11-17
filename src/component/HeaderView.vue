<template>
    <section id="encabezado">
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
#toggle {
    display: none;
}

#encabezado {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 10vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding-top: 10px;
    border-bottom: 5px solid #46B5BE;
}

#contenedor-logo {
    height: 95px;
    background-color: transparent;
    border: none;
    margin-left: 5vw;
}
#contenedor-logo img {
    height: 100%;
}

.contenedor-botones {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    height: 90%;
    margin: 0 70px 0 50px;
}

.Botones-encabezado {
    font-size: 20px;
    width: 130px;
    height: auto;
    background: transparent;
    border: none;
    color: black;
    padding: 0 15px;
    margin: 0 5px;
    position: relative;
    cursor: pointer;
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
    transform: translateX(-50%);
}
.Botones-encabezado:hover::after {
    border-bottom: 2px #2E3093 ;
    background-color: #2E3093;
}

@media (max-width: 1000px) {
    .Botones-encabezado{
        padding: 0;
        margin: 0 10px;
        width: auto;
    }
    #contenedor-logo {
        margin: 5px;
    }
    .contenedor-botones {
        margin: 0 5px;
    }
}

@media (max-width: 650px) {
    #toggle {
        display: flex;
        height: 50px;
        font-size: 50px;
        margin-left: 5%;
    }

    .nav-links {
        position: absolute;
        top: 12vh;
        background: white;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        display: none;
        width: 100%;
        height: auto;
        padding-bottom: 1rem;
    }

    .nav-links.active {
        display: flex;
    }
    #contenedor-logo {
        margin-right: 25px;
    }
}

</style>