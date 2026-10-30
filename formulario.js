const nombre = document.getElementById("name"),
email = document.getElementById("email"),
pass = document.getElementById("password"),
form = document.getElementById("form"),
parrafo = document.getElementById("warnings");

form.addEventListener("submit", e =>{
    e.preventDefault();
    let warnings = "";
    let aux = false;
    let expreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = "";
    if(nombre.value.length < 6){
        warnings += "El nombre no es valido <br>";
        aux = true;
    }
    if(!expreg.test(email.value)){
        warnings += "El correo no es valido <br>";
        aux = true;
    }
    if(pass.value.length < 6){
        warnings += "La contraseña no es valida <br>";
        aux = true;
    }
    if(aux){
        parrafo.innerHTML = warnings;
    }
})