document.addEventListener('DOMContentLoaded', () => {
    const UrlParam = new URLSearchParams(window.location.search);
    const IDProd = UrlParam.get('id');

    if (IDProd) {
        MostrarDetProducto(IDProd);
    }
});

function MostrarDetProducto(id) {
    var Libro = ListaProductos.find((Lib) => id == Lib.ID);
    if (Libro) {
        /* Carusel de imagenes */
        var CaruselCont = document.getElementById('GaleriaImg');
        CaruselCont.innerHTML = `
        <div class="carousel-item active">
            <img src="${Libro.GaleriaImg[0] ? Libro.GaleriaImg[0] : "./IMG/Imagen_No_Encontrada.png"}" class="d-block w-100" alt="Imagen #1 de ${Libro.NombreLibro}">
        </div>
        
        <div class="carousel-item">
            <img src="${Libro.GaleriaImg[1] ? Libro.GaleriaImg[1] : "./IMG/Imagen_No_Encontrada.png"}" class="d-block w-100" alt="Imagen #2 de ${Libro.NombreLibro}">
        </div>

        <div class="carousel-item">
            <img src="${Libro.GaleriaImg[2] ? Libro.GaleriaImg[2] : "./IMG/Imagen_No_Encontrada.png"}" class="d-block w-100" alt="Imagen #3 de ${Libro.NombreLibro}">
        </div>        
        `;
        
        /* Información Productos */
        var Titulo = document.getElementById('TituloProd');
        Titulo.textContent = Libro.NombreLibro ? Libro.NombreLibro : 'No registrado';

        var Calif = document.getElementById('CalificacionProd');
        Calif.src = Libro.Resenna;
        Calif.alt = `Calificación del producto ${Libro.NombreLibro}`;

        var Autor = document.getElementById('AutorProd');
        Autor.innerHTML = `<b>Autor: </b>${Libro.Autor ? Libro.Autor : 'No registrado'}`;

        var Edit = document.getElementById('EditorialProd');
        Edit.innerHTML = `<b>Editorial: </b>${Libro.Editorial ? Libro.Editorial : 'No registrado'}`;

        var ISBN = document.getElementById('ISBNProd');
        ISBN.innerHTML = `<b>ISBN: </b>${Libro.ISBN ? Libro.ISBN : 'No registrado'}`;

        var Anno = document.getElementById('AnnoProd');
        Anno.innerHTML = `<b>Año de publicación: </b>${Libro.AnnoPublicacion ? Libro.AnnoPublicacion : 'No registrado'}`;

        var Idiom = document.getElementById('IdiomaProd');
        Idiom.innerHTML = `<b>Idioma: </b>${Libro.Idioma ? Libro.Idioma : 'No registrado'}`;

        var Categ = document.getElementById('CategoriasProd');
        for (let i = 0; i < Libro.Categorias.length; i++) {
            const Badge = document.createElement('span');
            Badge.classList.add('badge');
            Badge.classList.add('rounded-pill');
            Badge.classList.add('bg-primary');
            Badge.classList.add('CategoriasEspacio');
            Badge.textContent = Libro.Categorias[i];
            Categ.append(Badge);
        }

        var Descrip = document.getElementById('DescripProd');
        Descrip.textContent = (Libro.Descripcion ? Libro.Descripcion : 'No posee descripción este producto');

        var TiemproEnt = document.getElementById('TiempoProd');
        TiemproEnt.innerHTML = `<b>Tiempo de entrega:</b> ${Libro.TiempoEntrega}`;

        var Entrega = document.getElementById('EntregaOpcProd');
        Entrega.innerHTML = `<b>Opciones de entrega:</b> ${Libro.OpcionesEntrega}`

        var Garantia = document.getElementById('GaranProd');
        Garantia.innerHTML = `<b>Garantía del producto:</b> ${Libro.Garantia}`;


        /* Información de compra */

        var Precio = document.getElementById('PrecioProd');
        Precio.innerHTML = `<b>&#x20a1;${Libro.Precio}</b>`;

        var Disponibilidad = document.getElementById('Stock');
        Disponibilidad.textContent = Libro.Stock;

        /* Agregar carrito ProdDet */
        var AgregarProd = document.getElementById('AgregarProdCarrito');
        AgregarProd.dataset.idProd = Libro.ID;
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
  
  function limiteDigitos(inputElement) {
    inputElement.addEventListener('input', function() {
      const value = this.value;
      
      // Asegurarse de que el valor sea un número y no esté vacío
      if (value !== '' && !isNaN(value)) {
        // Limitar el valor a la longitud máxima de dígitos
        if (value.length > 2) {
          this.value = value.slice(0, 2);
        }
      }
    });
  }