var formulario = document.getElementsByClassName("formulario");

var correo = document.getElementById("Iemail");
var nombre = document.getElementById("Inombre");
var fecha = document.getElementById("Ifecha");
var telefono = document.getElementById("Itelefono");
var motivo = document.getElementById("cmbMotivo");
var mensaje = document.getElementById("Imensaje");
var rdbMasculino = document.getElementById('optionsRadios1')

function valiarTelefono(numero) {
  var expresion = /^\d{8}$/

  if (expresion.test(numero)) {
    telefono.classList.remove('is-invalid');
  } else {
    telefono.classList.add('is-invalid');
  }
  return expresion.test(numero);
}



function validarCorreo(email){
  var expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if(expresion.test(email)){
    correo.classList.remove('is-invalid');
    return true;
    
  }else{
    correo.classList.add('is-invalid');
    return false;
    
  }
  alert(correo.value);
}
  




document.querySelector(".formulario").addEventListener("submit", (event) => {
  event.preventDefault();

  let validacion = true;

  if(!valiarTelefono(telefono.value.trim())){
    validacion = false;
  }
  
  if(!validarCorreo(correo.value.trim())){
    validacion = false;
  }

  if(!validarNombre(nombre)){
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
    return;
  }

  Swal.fire({
    position: "center",            
    icon: "success",
    title: "Se ha enviado el formulario de contacto",
    showConfirmButton: false,
    timer: 1500
  });
  VaciarInputs();

});

function validarNombre(texto){
  if(!texto.value.trim()){
    nombre.classList.add('is-invalid');
    return false;
  }else{
    nombre.classList.remove('is-invalid');
    return true;
  }
}


function validarMensaje(texto){
  if(!mensaje.value.trim()){
    mensaje.classList.add('is-invalid');
    return false;
  }else{
    mensaje.classList.remove('is-invalid');
    return true;
  }
}

function validarCombo(combo){
  if(combo.value === ""){
    motivo.classList.add('is-invalid');
    return false;
  }else{
    motivo.classList.remove('is-invalid');
    return true;
  }
}

function validarFecha(date){
  if(!date.value){
    fecha.classList.add('is-invalid');
    return false;
  }else{
    if(calcularEdad(date) >= 18){
      fecha.classList.remove('is-invalid');
      return true;
    }else{
      fecha.classList.remove('is-invalid');
      
      Swal.fire({
        position: "center",            
        icon: "warning",
        title: "Lo sentimos",
        text: "Las compras en la tienda online Mangaverse Z se limitan a personas mayores de 18 años",
      });
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


function VaciarInputs() {
  correo.value = "";
  nombre.value = "";
  fecha.value = undefined;
  rdbMasculino.checked = true;
  telefono.value = "";
  motivo.value = "";
  mensaje.value = "";
}