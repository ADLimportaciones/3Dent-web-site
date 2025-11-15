<template>
    <section id="Contacto">
        <h1 class="title">Contacto</h1>
        <div  id="datos-contacto">
            <form action="https://formspree.io/f/xnnqpono" method="POST" id="datos">
            <div>
                <h1 class="parrafos">Nombre*</h1>
                <input type="text" id="nombre" name="nombre" class="imput-text"></input>

                <h1 class="parrafos">Email*</h1>
                <input type="text" id="email" name="email" class="imput-text"></input>
                <h1 class="parrafos">Mensaje*</h1>
                <input type="text" id="mensaje" name="mensaje" class="imput-text"></input>
            </div>
            <button class="sendBoton" type="submit">Enviar</button>
            </form>
            <div id="información-contacto">
                <p class="parrafos">Si tienes alguna pregunta o consulta, no dudes en ponerte en contacto con nosotros.</p>
                <p class="parrafo-color">+57 319 7236527<br>
                    Carrera 15 # 90 - 20<br>
                    info@3dent.com</p>  
            <div id="socialMedia">
                <a href="https://www.3dent.com.co/">
                    <img src="/assets/instagram.svg"></img>
                </a>
                <a href="https://www.3dent.com.co/">
                    <img src="/assets/facebook.svg"></img>
                </a>
                <a href="https://www.3dent.com.co/">
                    <img src="/assets/whatssap.svg"></img>
                </a>
            </div>        
            
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style>
#Contacto{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 100vw;
    height: auto;
    padding: 10px 10px 10px 10px; 
}

#datos-contacto{
    display: flex;
    width: 70%;
}

#datos{
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 2%;
    align-items: flex-end;
}

#datos h1{
    text-align: end;
}
#datos > div input{
    width: 32vw;
    border: 2px solid #2E3093;
}

#datos > div input:last-child{
    height: 150px;
}

#información-contacto{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 8%;
    font-size: 29px;
    padding: 0 1rem;
    width: auto;
}

#información-contacto p{
    width: 60%;
}

#información-contacto p:nth-child(2){
    text-align: center;
}

.sendBoton {
    width: 217px;
    height: 79px;
    background-color: transparent;
    border: 3px solid #2E3093;
    border-radius: 25px;
    color: #2E3093;
    font-size: 40px;
    margin: 2rem 0;
}

.sendBoton:hover{
    background-color: #A7A9AC;
}

#socialMedia{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
#socialMedia a{
    margin: 0 20px;
}

@media (max-width: 1000px){
    #datos-contacto{
        width: 90%;
    }
}

@media (max-width: 600px){
    #datos-contacto{
        width: 100%;
        flex-direction: column;
    }
    #datos{
        width: 85%;
    }
    #datos > div input {
        width: 80vw;
    }
    .sendBoton{
        width: 130px;
        height: 60px;
        font-size: 30px;
    }
    #socialMedia a {
        margin: 0 1%;
    }
    #información-contacto {
        margin: 0 0 25% 0;
    }
    #información-contacto p {
        margin: 0.5rem 0;
    }
}
</style>