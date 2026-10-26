let peliculas = [
    {
        imagen:"../imagenes peliculas/lore.png",
        pagina:"../paginas/peli8.html",
        titulo:"La maldicion del bosque"
    },
    {
        imagen:"../imagenes peliculas/antman.jpeg",
        pagina:"../paginas/peli3.html",
        titulo:"Ant man"
    },{
        imagen:"../imagenes peliculas/scream6.jpg",
        pagina:"../paginas/peli2.html",
        titulo:"Scream 6"
    },{
        imagen:"../imagenes peliculas/the-mill.png",
        pagina:"../paginas/peli6.html",
        titulo:"The mill"
    }
]

let contador = 0;

function carrusel(contenedor){
    contenedor.addEventListener("click", e => {
        let atras = contenedor.querySelector(".anterior"),
        adelante = contenedor.querySelector(".siguiente"),
        img = contenedor.querySelector(".img-carrusel"),
        link = contenedor.querySelector(".link-carrusel"),
        tgt = e.target;

        if(tgt === atras){
            if(contador > 0){
                img.src = peliculas[contador - 1].imagen;
                img.title = peliculas[contador - 1].titulo;
                link.href = peliculas[contador - 1].pagina;
                contador --;
            }else{
                img.src = peliculas[peliculas.length - 1].imagen;
                img.title = peliculas[peliculas.length - 1].titulo;
                link.href = peliculas[peliculas.length - 1].pagina
                contador = peliculas.length - 1;
            }
        }else if(tgt === adelante){
            if(contador < peliculas.length - 1){
                img.src = peliculas[contador + 1].imagen;
                img.title = peliculas[contador + 1].titulo;
                link.href = peliculas[contador + 1].pagina;
                contador ++;
            }else{
                img.src = peliculas[0].imagen;
                img.title = peliculas[0].titulo;
                link.href = peliculas[0].pagina;
                contador = 0;
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector(".conteiner");
    carrusel(contenedor);
})