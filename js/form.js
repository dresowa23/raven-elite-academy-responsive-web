document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

const nombre = document.getElementById("nombre").value.trim();
const apellido = document.getElementById("apellido").value.trim();
const email = document.getElementById("email").value.trim();
const telefono = document.getElementById("telefono").value.trim();


if (nombre === "" || apellido === "" || email === "" || telefono === "" ){
    alert("Faltan campos por rellenas");
    return;
}

const nombreRegex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]{3,40}$/;

if(!nombreRegex.test(nombre)){
    alert("El nombre solo puede contener letras y espacios(3 a 40 caracteres)");
    return;


}
const apellidoRegex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]{4,60}$/;

if(!apellidoRegex.test(apellido)){
    alert("El apellido solo puede contener letras y espacios(4 a 60 caracteres)");
    return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

if(!emailRegex.test(email)){
    alert("El email no es valido. Pon un formato valido");
    return;
}

const telefonoRegex = /^[0-9]{9}$/;

if(!telefonoRegex.test(telefono)){
    alert("El telefono no es valido. Pon un formato valido");
    return;
}

alert("Formulario enviado correctamente");
this.reset();

})