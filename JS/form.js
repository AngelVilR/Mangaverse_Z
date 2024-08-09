  function validarNumero(numero){
    var expresion = /^\d{8}$/
    
    return expresion.test(numero);
  }
    

  // Example starter JavaScript for disabling form submissions if there are invalid fields
/* (() => {
  'use strict' */

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  /* const forms = document.querySelectorAll('.needs-validation') */

  // Loop over them and prevent submission
/*   Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

      const telefonoInput = form.querySelector('#Itelefono');
      const Nvalido = validarNumero(telefonoInput.value);

      telefonoInput.classList.remove('is-invalid', 'is-valid');
      form.classList.remove('was-validated');

      if (!form.checkValidity() || !Nvalido) {
        event.preventDefault()
        event.stopPropagation()

        if(!Nvalido){
          telefonoInput.classList.add('is-invalid');
        }else{
          telefonoInput.classList.add('is-valid');
        }
 */
        /* telefonoInput.classList.add('is-invalid'); */
      /* } *//* else{
        telefonoInput.classList.remove('is-invalid');
      }
 */
/*       form.classList.add('was-validated')
    }, false)
  })
})()

 */



/* function validarNumero(numero){
  var expresion = /^\d{8}$/
  var telefono = document.getElementById("Itelefono");

  if(!expresion.test(numero)){
    telefono.className = "is-invalid";
  }else{
    telefono.className = "is-valid";
  }
}
  

var boton = document.getElementById("enviar");

boton.addEventListener("click", validarNumero(document.getElementById("Itelefono").value)); */
function valiarTelefono(numero){
var expresion = /^\d{8}$/

if(expresion.test(numero)){
  telefono.classList.remove('is-invalid');
  alert("telefono valido")
}else{
  telefono.classList.add('is-invalid');
  alert("telefono no valido")
}
  return expresion.test(numero);
}



function validarCorreo(email){
  var expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if(expresion.test(email)){
    correo.classList.remove('is-invalid');
    alert("correo valido" + "true");
    return true;
    
  }else{
    correo.classList.add('is-invalid');
    alert("correo no valido " + "false");
    return false;
    
  }
  alert(correo.value);
}
  

var formulario = document.getElementsByClassName("formulario");

var correo = document.getElementById("Iemail");
var nombre = document.getElementById("Inombre");
var fecha = document.getElementById("Ifecha");
var telefono = document.getElementById("Itelefono");
var motivo = document.getElementById("cmbMotivo");
var mensaje = document.getElementById("Imensaje");


document.querySelector(".formulario").addEventListener("submit", (event) => {
  event.preventDefault();
 

  let validacion = true;

  if(!valiarTelefono(telefono.value.trim())){
    validacion = false;
  }
  
  if(!validarCorreo(correo.value.trim())){
    validacion = false;
  }

  if(!validarNombre(nombre.value.trim())){
    validacion = false;
  }

  if(!validarMensaje(mensaje)){
    validacion = false;
  }

  if(!validarCombo(motivo)){
    validacion = false;
  }

  if(!validarFecha(fecha)){
    validacion = false;
  }


  if(!validacion){
    event.preventDefault();
  }
});

function validarNombre(texto){
  if(!texto.value){
    nombre.classList.add('is-invalid');
    alert("nombre vacio");
    return false;
  }else{
    nombre.classList.remove('is-invalid');
    alert("nombre aceptado");
    return true;
  }
}


function validarMensaje(texto){
  if(!mensaje.value){
    mensaje.classList.add('is-invalid');
    alert("vacio");
    return false;
  }else{
    mensaje.classList.remove('is-invalid');
    alert("aceptado");
    return true;
  }
}


/* function EliminarError(){
correo.classList.remove('is-invalid');
nombre.classList.remove('is-invalid');
fecha.classList.remove('is-invalid');
telefono.classList.remove('is-invalid');
motivo.classList.remove('is-invalid');
mensaje.classList.remove('is-invalid');
} */


function validarCombo(combo){
  if(combo.value === ""){
    motivo.classList.add('is-invalid');
    alert("seleccione opcion");
    return false;
  }else{
    motivo.classList.remove('is-invalid');
    alert("combo seleccionado");
    return true;
  }
}



function validarFecha(date){
  if(!date.value){
    motivo.classList.add('is-invalid');
    alert("Debe digitar la fecha");
    return false;
  }else{
    if(calcularEdad(date) >= 18){
      fecha.classList.remove('is-invalid');
      alert("mayor de 18");
      return true;
    }else{
      alert("menor de 18");
      return false;
    }
  }
}


function calcularEdad(date){
  var fechaNacimiento = new Date(date.value);
  var fechaActual = new Date();
  
  var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  if(fechaNacimiento.getMonth() >= fechaActual.getMonth()  &&  fechaNacimiento.getDate() >= fechaActual.getDate()){
    edad--;
  }

  return edad;
}