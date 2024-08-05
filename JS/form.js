

   (() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        let isValid = form.checkValidity();
  
        // Check for custom validation on the phone number field
        const telefonoField = form.querySelector('#Itelefono');
        if (telefonoField) {
          // Custom validation for phone number
          const telefonoValue = telefonoField.value;
          if (!/^\d+$/.test(telefonoValue)) {
            telefonoField.setCustomValidity('Por favor, ingrese solo números.');
            isValid = false;
          } else {
            telefonoField.setCustomValidity('');
          }
        }
  
        if (!isValid) {
          event.preventDefault();
          event.stopPropagation();
        }
  
        form.classList.add('was-validated');
      }, false)
    })
  })() 



/*   var campoTel = document.getElementById("Itelefono").value; */

  function validaTelefono(){
    if (!/^\d+$/.test(campoTel)) {
      /* telefonoField.setCustomValidity('Telefono no valido'); */
      alert("telefono no valido");
      return
      isValid = false;
    } else {
      /* telefonoField.setCustomValidity('Error'); */
      alert("error");
    }
  }

/*   var boton = document.getElementById("enviar");
  boton.addEventListener("click", validaTelefono()); */



  