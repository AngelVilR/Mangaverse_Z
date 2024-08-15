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
            <!-- Nombre del producto -->
            <div>
              <h6>${NombreLocal}</h6>
            </div>
            <!-- Cantidad -->
            <div class="Cantidad_Caja">
              <input type="number" class="form-control" id="CantidadProd" value="${CantidadLocal}" min="1" max="99">
            </div>
            <!-- Precio -->
            <div>
              <h6 id="PrecioProd">&#x20a1;${PrecioLocal}</h6>
            </div>
            <!-- Subtotal -->
            <div>
              <h6 id="SubtotalProd">&#x20a1;${SubtotalLocal}</h6>
            </div>

            <!-- Boton eliminar -->
            <div>        
                <div class="dropdown">
                  <button class="dropbtn"><img id="TresPuntos" src="./IMG/tres-puntos.png" alt="Icono de tres puntos"></button>
                  <div class="dropdown-content">
                    <button id="EliminarProd" type="button"><i id="IconoTrash" class="bi bi-trash" onclick="EliminarProd(${elementY.IDProducto})"></i>Eliminar</button>
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
  var CarritoLocal = JSON.parse(localStorage.getItem('CompraProds'));
  if (CarritoLocal) {
    let index = CarritoLocal.findIndex((i) => i.IDProducto == pIdProd);;
    CarritoLocal.splice(index,1);    
  }
  localStorage.setItem('CompraProds', JSON.stringify(CarritoLocal));
  console.log("SE HA ELIMINADO EL PRODUCTO")
  MostrarDetCarrito();  
}