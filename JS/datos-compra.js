document.addEventListener('DOMContentLoaded', () => {
  LlenarComboMesYAnno();

});
/* Variables */
/* ---------------------------------------------------------------------------------------------- */
var id = document.getElementById("IDCliente");
var nombre = document.getElementById("NombreCliente");
var correo = document.getElementById("CorreoCliente");
var telefono = document.getElementById("TelefonoCliente");

var envio = document.getElementById("EnvioPostal");
var recoger = document.getElementById("RecogidoTienda");

var codigoPostal = document.getElementById("PostalCliente");
var direccionCliente = document.getElementById("DireccionCliente");

var paquete = document.getElementById("paquete");

var tarjeta = document.getElementById("Ntarjeta");
var cvv = document.getElementById("cvv");

var mes = document.getElementById("TarjetaMes");
var ano = document.getElementById("TarjetaAnno");

/* Validaciones */
/* ---------------------------------------------------------------------------------------------- */
function validarCedula(cedula) {
  var expresion = /^\d{9}$/

  if (!expresion.test(cedula)) {
    id.classList.add("is-invalid");
    return false;
  } else {
    id.classList.remove("is-invalid");
    return true;
  }
}

function validarNombre(cliente) {
  if (cliente == "") {
    nombre.classList.add("is-invalid");
    return false;
  } else {
    nombre.classList.remove("is-invalid");
    return true;
  }
}

function validarDireccion(direccion) {
  if (direccion == "") {
    direccionCliente.classList.add("is-invalid");
    return false;
  } else {
    direccionCliente.classList.remove("is-invalid");
    return true;
  }
}

function validarTelefono(numero) {
  var expresion = /^\d{8}$/
  if (!expresion.test(numero)) {
    telefono.classList.add("is-invalid");
    return false;
  } else {
    telefono.classList.remove("is-invalid");
    return true;
  }
}

function validarCorreo(email) {
  var expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!expresion.test(email)) {
    correo.classList.add("is-invalid");
    return false;
  } else {
    correo.classList.remove("is-invalid");
    return true;
  }
}

function validarCodigo(codigo) {
  var expresion = /^\d{5}$/

  if (!expresion.test(codigo)) {
    codigoPostal.classList.add("is-invalid");
    return false;
  } else {
    codigoPostal.classList.remove("is-invalid");
    return true;
  }
}

function validarTarjeta(ntarjeta) {
  var expresion = /^\d{16}$/

  if (!expresion.test(ntarjeta)) {
    tarjeta.classList.add("is-invalid");
    return false
  } else {
    tarjeta.classList.remove("is-invalid");
    return true;
  }
}

function validarCVV(codigo) {
  var expresion = /^\d{3}$/

  if (!expresion.test(codigo)) {
    cvv.classList.add("is-invalid");
    return false;
  } else {
    cvv.classList.remove("is-invalid");
    return true;
  }
}

function validarMes(mm) {
  if (mm.value == "") {
    mes.classList.add("is-invalid");
    return false;
  } else {
    mes.classList.remove("is-invalid");
    return true;
  }
}

function validarAno(year) {
  if (year.value == "") {
    ano.classList.add("is-invalid");
    return false;
  } else {
    ano.classList.remove("is-invalid");
    return true;
  }
}

function actualizarCampos() {
  if (recoger.checked) {
    paquete.style.display = 'none';        
    paquete.classList.remove('scale-up-center')
    
  } else {
    paquete.style.display = 'block';
    paquete.classList.add('scale-up-center')          
  }
}

function tipoTarjeta(bin) {
  var ImgTarjetaHTML = document.getElementById('ImagenTTarjeta');
  ImgTarjetaHTML.innerHTML = '';
  if (bin.length >= 6) {    
    numero = bin.substring(0, 6);    
    fetch(`https://data.handyapi.com/bin/${numero}`)
      .then(response => response.json())
      .then(data => {        
        if (data.Scheme == "VISA") {          
          ImgTarjetaHTML.innerHTML = `<img src="./IMG/Imagen_Visa.jpg" alt="Imagen del logo de Visa"></img>`          
        }
        if (data.Scheme == "MASTERCARD") {
          ImgTarjetaHTML.innerHTML = `<img src="./IMG/Imagen_MasterCard(1).jpg" alt="Imagen del logo de Mastercard"></img>`          
        }
      })
  }
}

function aplicarValidaciones() {
  var validacion = true;

  if (!validarCedula(id.value)) {
    validacion = false;
  }

  if (!validarNombre(nombre.value.trim())) {
    validacion = false;
  }

  if (!validarCorreo(correo.value.trim())) {
    validacion = false;
  }

  if (!validarTelefono(telefono.value.trim())) {
    validacion = false;
  }

  if (envio.checked) {
    if (!validarCodigo(codigoPostal.value.trim())) {
      validacion = false;
    }

    if (!validarDireccion(direccionCliente.value.trim())) {
      validacion = false;
    }
  }

  if (!validarTarjeta(tarjeta.value.trim())) {
    validacion = false;
  }

  if (!validarCVV(cvv.value.trim())) {
    validacion = false;
  }

  if (!validarMes(mes)) {
    validacion = false;
  }

  if (!validarAno(ano)) {
    validacion = false;
  }

  return validacion;
}

/* Eventos */
/* ---------------------------------------------------------------------------------------------- */
envio.addEventListener("change", actualizarCampos);
recoger.addEventListener("change", actualizarCampos)

document.getElementById("enviar").addEventListener("click", () => {
  var validacion = true;
  validacion = aplicarValidaciones();
  if (validacion) {    
    GuardarInfoLocal();
    window.location.href = './FacturaProds.html'
  }
})

telefono.addEventListener("keydown", function (event) {
  if (
    event.key === 'Backspace' ||
    event.key === 'Delete' ||
    event.key === 'ArrowLeft' ||
    event.key === 'ArrowRight' ||
    event.key === 'Tab'
  ) {
    return;
  }

  if (!/^[0-9]$/.test(event.key)) {
    event.preventDefault();
  }
})

codigoPostal.addEventListener("keydown", function (event) {
  if (
    event.key === 'Backspace' ||
    event.key === 'Delete' ||
    event.key === 'ArrowLeft' ||
    event.key === 'ArrowRight' ||
    event.key === 'Tab'
  ) {
    return;
  }

  if (!/^[0-9]$/.test(event.key)) {
    event.preventDefault();
  }
})

tarjeta.addEventListener("keydown", function (event) {
  if (
    event.key === 'Backspace' ||
    event.key === 'Delete' ||
    event.key === 'ArrowLeft' ||
    event.key === 'ArrowRight' ||
    event.key === 'Tab'
  ) {
    return;
  }

  if (!/^[0-9]$/.test(event.key)) {
    event.preventDefault();
  }
})

cvv.addEventListener("keydown", function (event) {
  if (
    event.key === 'Backspace' ||
    event.key === 'Delete' ||
    event.key === 'ArrowLeft' ||
    event.key === 'ArrowRight' ||
    event.key === 'Tab'
  ) {
    return;
  }

  if (!/^[0-9]$/.test(event.key)) {
    event.preventDefault();
  }
})

tarjeta.addEventListener("blur", () => {
  tipoTarjeta(tarjeta.value.trim());
})

/* Llenar combos de mes y año */
/* ---------------------------------------------------------------------------------------------- */
function LlenarComboMesYAnno() {
  for (let i = 1; i <= 12; i++) {
    const OptionTemp = document.createElement('option')
    OptionTemp.textContent = i;
    mes.append(OptionTemp);
  }

  for (let i = 2024; i <= 2036; i++) {
    const OptionTemp = document.createElement('option')
    OptionTemp.textContent = i;
    ano.append(OptionTemp);
  }
}

/* Guardar datos en local */
/* ---------------------------------------------------------------------------------------------- */
function GuardarInfoLocal() {
  /* Info cliente */
  var CedCliente = document.getElementById('IDCliente').value;
  var NombCliente = document.getElementById('NombreCliente').value;
  var CorreoCliente = document.getElementById('CorreoCliente').value;
  var TelCliente = document.getElementById('TelefonoCliente').value;

  var PostalHTML = document.getElementById('PostalCliente').value;
  var DireccionHTML = document.getElementById('DireccionCliente').value;

  var PostalCliente = (PostalHTML ? PostalHTML : 'No registrado');
  var DirCliente = (DireccionHTML ? DireccionHTML : 'No registrado');

  var TipoPaqCliente;

  if (envio.checked) {
    TipoPaqCliente = "Por envío postal"
  } else {
    TipoPaqCliente = "Recogerlo en tienda"
  }

  var oClienteInfo = {    
    CedCliente,
    NombCliente,
    CorreoCliente,
    TelCliente,
    TipoPaqCliente,
    PostalCliente,
    DirCliente
  };

  /* Info tarjeta */
  var NumTarjeta = document.getElementById('Ntarjeta').value;
  var MesTarjeta = mes.value;
  var AnoTarjeta = ano.value;
  var CosSegtarjeta = document.getElementById('cvv').value;

  var oTarjeta = {
    NumTarjeta,
    MesTarjeta,
    AnoTarjeta,
    CosSegtarjeta
  }

  var oFactura = { Cliente: oClienteInfo, Tarjeta: oTarjeta };
  var ListaFacturas = new Array();
  ListaFacturas.push(oFactura);

  localStorage.setItem('Facturas', JSON.stringify(ListaFacturas));
  console.log(JSON.parse(localStorage.getItem('Facturas')))
}