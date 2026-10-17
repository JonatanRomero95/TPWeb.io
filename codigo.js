var imagenes = ["../imagenes peliculas/lore.png", "../imagenes peliculas/antman.jpeg", "../imagenes peliculas/scream6.jpg", "../imagenes peliculas/the-mill.png"];
var contador = 0;

function carrusel(contenedor){
    contenedor.addEventListener("click", e => {
        let atras = contenedor.querySelector(".anterior"),
        adelante = contenedor.querySelector(".siguiente"),
        img = contenedor.querySelector("img"),
        tgt = e.target;

        if(tgt === atras){
            if(contador > 0){
                img.src = imagenes[contador - 1];
                contador --;
            }else{
                img.src = imagenes[imagenes.length - 1];
                contador = imagenes.length - 1;
            }
        }else if(tgt = adelante){
            if(contador < imagenes.length - 1){
                img.src = imagenes[contador + 1];
                contador ++;
            }else{
                img.src = imagenes[0];
                contador = 0;
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector(".conteiner");
    carrusel(contenedor)
})