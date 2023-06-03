/*Efecto inicio sesion*/
const $btnSignIn= document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),
    $signUp = document.querySelector('.sign-up'),
    $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

/*Validacion del apartado registrar*/
function registrar() {
    nombre = document.getElementById("nombre").value;
    correo1 = document.getElementById("correo1").value;
    pass1 = document.getElementById("pass1").value;

    //COMPROBACION DEL CAMPO NOMBRE
    if(nombre.length == 0){
        alert("Escribe un nombre");
        document.miFormulario.nombre.focus();
        return false;
    }

    //COMPROBACION DEL CAMPO CORREO
    if(correo1.length == 0){
        alert("Escribe un correo");
        document.miFormulario.correo1.focus();
        return false;
    }

    //COMPROBACION DEL CAMPO CONTRASEÑA
    if(pass1.length == 0){
        alert("Escribe una contraseña");
        document.miFormulario.pass1.focus();
        return false;
    }
    alert("*** DATOS CORRECTOS. *** \n *** Tu cuenta se ha creado correctamente. ***");
    document.miFormulario.submit();
}



/*Validacion del apartado iniciar sesion*/
function sesion() {
    correo2 = document.getElementById("correo2").value;
    pass2 = document.getElementById("pass2").value;

    //COMPROBACION DEL CAMPO CORREO
    if(correo2.length == 0){
        alert("Escribe un correo");
        document.miFormulario2.correo2.focus();
        return false;
    }

    //COMPROBACION DEL CAMPO CONTRASEÑA
    if(pass2.length == 0){
        alert("Escribe una contraseña");
        document.miFormulario2.pass2.focus();
        return false;
    }
    alert("*** DATOS CORRECTOS. *** \n *** Se esta iniciando sesion en su cuenta. ***");
    document.miFormulario2.submit();
}



/*Validacion del apartado enviar datos*/
function enviarFormulario() {
    nombre3 = document.getElementById("nombre3").value;
    correo3 = document.getElementById("correo3").value;
    mensaje = document.getElementById("mensaje").value;

    //COMPROBACION DEL CAMPO NOMBRE
    if(nombre3.length == 0){
        alert("Escribe un nombre");
        document.miFormulario3.nombre3.focus();
        return false;
    }

    //COMPROBACION DEL CAMPO CORREO
    if(correo3.length == 0){
        alert("Escribe un correo");
        document.miFormulario3.correo3.focus();
        return false;
    }

    //COMPROBACION DEL CAMPO CORREO
    if(mensaje.length == 0){
        alert("Escribe un mensaje");
        document.miFormulario3.mensaje.focus();
        return false;
    }
    alert("*** DATOS CORRECTOS. *** \n *** Se ha enviado tu solicitud correctamente. ***");
    document.miFormulario3.submit();
}