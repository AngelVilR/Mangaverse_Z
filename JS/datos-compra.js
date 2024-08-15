function validarCedula(cedula){
    var expresion = /^\d{9}$/

  return expresion.test(cedula);
}

function validarNombre(nombre){
    if(nombre == ""){
        return false;
      }else{
        return true;
    }
}


function validarDireccion(direccion){
    if(direccion ==""){
      return false;
    }else{
      return true;
    }
  }


  function valiarTelefono(numero) {
    var expresion = /^\d{8}$/
    return expresion.test(numero);
  }
  

  function validarCorreo(email){
    var expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return expresion.test(email);
  }


  function validarCedula(codigo){
    var expresion = /^\d{5}$/

  return expresion.test(codigo);
}


