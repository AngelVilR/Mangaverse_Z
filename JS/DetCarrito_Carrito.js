function ProcesarCompra() {
  var ListaCarrito = JSON.parse(localStorage.getItem('CompraProds'));
  var Validacion = true;
  if (ListaCarrito && ListaCarrito.length != 0) {
    ListaCarrito.forEach(Prod => {
      const CantidadTemp = Prod.Cantidad;
      if (!ValidarCantidad(CantidadTemp)) {
        Validacion = false;

      }
    });

    if (Validacion) {
      window.location.href = './Datos-Compra.html';
    }

  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "¡Debe de tener productos en el carrito para continuar!",
      showConfirmButton: false,
      timer: 1500
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  MostrarDetCarrito();
});

/* Mostrar la lista de carrito en el carrito */
function MostrarDetCarrito() {
  var Detalle = document.getElementById('DetalleProd');
  Detalle.innerHTML = "";


  var FilaProdHTML = "";
  var TotalProdItems = 0;
  var MontoTotal = 0;

  var NombreLocal = "";
  var CantidadLocal = 0;
  var PrecioLocal = 0;
  var SubtotalLocal = 0;
  var CarritoLocal = JSON.parse(localStorage.getItem('CompraProds'));

  if (CarritoLocal) {
    CarritoLocal.forEach(elementX => {
      TotalProdItems += elementX.Cantidad;
    });

    CarritoLocal.forEach(elementY => {
      NombreLocal = elementY.Titulo;
      CantidadLocal = elementY.Cantidad;
      PrecioLocal = elementY.Precio;
      SubtotalLocal = elementY.Subtotal;
      const Tempdiv = document.createElement('div');
      Tempdiv.classList.add('Centrado');

      FilaProdHTML = `        
            <div>
              <h6>${NombreLocal}</h6>
            </div>

            <div class="Cantidad_Caja">
              <input type="number" class="form-control" id="CantidadProd" value="${CantidadLocal}" min="1" max="99" onchange="ActualizarCantProd(this)" onkeydown="NoNegativos(event)" data-id="${elementY.IDProducto}">
            </div>

            <div>
              <h6 id="PrecioProd">&#x20a1;${PrecioLocal}</h6>
            </div>

            <div>
              <h6 id="SubtotalProd">&#x20a1;${SubtotalLocal}</h6>
            </div>
            
            <div>        
                <div class="dropdown">
                  <button class="dropbtn"><img id="TresPuntos" src="./IMG/tres-puntos.png" alt="Icono de tres puntos"></button>
                  <div class="dropdown-content">
                    <button id="EliminarProd" type="button" onclick="EliminarProd(${elementY.IDProducto})"><i id="IconoTrash" class="bi bi-trash"></i>Eliminar</button>
                  </div>
                </div>            
            </div>                             
            `;

      MontoTotal += SubtotalLocal;

      Tempdiv.innerHTML = FilaProdHTML;
      Detalle.append(Tempdiv);

      var BarraSep = document.createElement('hr');
      BarraSep.classList.add('my-4');
      Detalle.append(BarraSep);
    });

    var TotalHTML = document.getElementById('Total_Pagar');
    TotalHTML.textContent = `₡${MontoTotal}`;
  }
}

function EliminarProd(pIdProd) {
  Swal.fire({
    title: "Eliminar producto",
    text: "¿Estás seguro de querer eliminar este producto de tú carrito de compras?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "¡Sí, quiero eliminarlo!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Eliminado",
        text: "¡El producto ha sido eliminado de tú carrito correctamente!",
        icon: "success"
      });

      var CarritoLocal = JSON.parse(localStorage.getItem('CompraProds'));
      if (CarritoLocal) {
        let index = CarritoLocal.findIndex((i) => i.IDProducto == pIdProd);;
        CarritoLocal.splice(index, 1);
      }
      localStorage.setItem('CompraProds', JSON.stringify(CarritoLocal));
      MostrarDetCarrito();
    }
  });

}

function ActualizarCantProd(element) {
  var idProd = element.dataset.id;
  var CantidadNew = element.value;
  var CarritoLocal = JSON.parse(localStorage.getItem('CompraProds'));

  if (CantidadNew <= 0 || CantidadNew.trim() != '') {
    EliminarProd(idProd);
    return;
  } else {

    if (CarritoLocal) {
      let index = CarritoLocal.findIndex((oProd) => oProd.IDProducto == idProd);
      CarritoLocal[index].Cantidad = CantidadNew;
      CarritoLocal[index].Subtotal = CantidadNew * CarritoLocal[index].Precio;
    }

    localStorage.setItem('CompraProds', JSON.stringify(CarritoLocal));
    MostrarDetCarrito();
  }
}


function ValidarCantidad(pCant) {
  if (pCant) {
    if ((pCant > 0) && (pCant < 100)) {
      return true
    }
    Swal.fire({
      position: "center",
      icon: "error",
      title: "¡La cantidad digitada no es válida!",
      showConfirmButton: false,
      timer: 1500
    });
    return false;
  } else {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Debe de digitar una cantidad para agregar el producto",
      showConfirmButton: false,
      timer: 1500
    });
    return false;
  }
}


function NoNegativos(event) {
  if (
    event.key === 'Backspace' ||
    event.key === 'Delete' ||
    event.key === 'ArrowLeft' ||
    event.key === 'ArrowRight' ||
    event.key === 'Tab'
  ) {
    return;
  }

  if (!/^\d{1,2}$/.test(event.key)) {
    event.preventDefault();
    console.log("Funciona");
  } 

}
