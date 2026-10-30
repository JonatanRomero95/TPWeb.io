const nombre = document.getElementById("name"),
email = document.getElementById("email"),
pass = document.getElementById("password"),
form = document.getElementById("form"),
elementoPadre = document.querySelector(".form"),
nombrep = document.createElement("p"),
emailp = document.createElement("p"),
passp = document.createElement("p"),
nombreAlert = document.createTextNode("El nombre no es valido"),
emailAlert = document.createTextNode("El correo no es valido"),
passAlert = document.createTextNode("La contraseña no es valida");

form.addEventListener("submit", e =>{
    e.preventDefault();
    let expreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length < 6){
        elementoPadre.appendChild(nombrep);
        nombrep.appendChild(nombreAlert);
    }else if(elementoPadre.contains(nombrep)){
        elementoPadre.removeChild(nombrep);
    }

    if(!expreg.test(email.value)){
        elementoPadre.appendChild(emailp);
        emailp.appendChild(emailAlert);
    }else if(elementoPadre.contains(emailp)){
        elementoPadre.removeChild(emailp)
    }

    if(pass.value.length < 6){
        elementoPadre.appendChild(passp);
        passp.appendChild(passAlert);
    }else if(elementoPadre.contains(passp)){
        elementoPadre.removeChild(passp);
    }
})