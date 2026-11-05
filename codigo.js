let peliculas = [
    {
        imagen:"banner_peliculas/lore.jpg",
        pagina:"paginas/peli8.html",
        titulo:"La maldicion del bosque"
    },
    {
        imagen:"banner_peliculas/antman.jpg",
        pagina:"paginas/peli3.html",
        titulo:"Ant man"
    },{
        imagen:"banner_peliculas/scream6.jpg",
        pagina:"paginas/peli2.html",
        titulo:"Scream 6"
    },{
        imagen:"banner_peliculas/the_mill.jpg",
        pagina:"paginas/peli6.html",
        titulo:"The mill"
    }
]

let contador = 0;
let timer;

function autoplay(){
    let img = document.querySelector(".img-carrusel")
    let link = document.querySelector(".link-carrusel")
    if(contador < peliculas.length - 1){
        contador++
    }else{
        contador = 0
    }
    img.src = peliculas[contador].imagen
    img.title = peliculas[contador].titulo
    link.href = peliculas[contador].pagina
}

function carrusel(contenedor){
    timer = setInterval(autoplay, 4000)

    contenedor.addEventListener("click", e => {
        let atras = contenedor.querySelector(".anterior"),
        adelante = contenedor.querySelector(".siguiente"),
        img = contenedor.querySelector(".img-carrusel"),
        link = contenedor.querySelector(".link-carrusel"),
        tgt = e.target;

        if(tgt === atras){
            clearInterval(timer)
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
            timer = setInterval(autoplay, 4000)
        }else if(tgt === adelante){
            clearInterval(timer)
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
            timer = setInterval(autoplay, 4000)
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector(".contenedor_carrusel");
    carrusel(contenedor);

    // esto pone el año en el footer
    let footer = document.querySelector(".footer-container");
    let año = document.createElement("p");
    año.appendChild(document.createTextNode("© " + new Date().getFullYear() + " Cine en Casa"));
    footer.appendChild(año);
})
