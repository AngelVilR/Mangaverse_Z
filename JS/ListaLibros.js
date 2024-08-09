document.addEventListener('DOMContentLoaded', () => {
    ListaLibros(ListaProductos);

}
)

/* Función para abrir el detalle dependiendo del libro */
function DetalleLibro(id) {
    window.location.href = `Detalle-Producto.html?id=${id}`;
}

/* Función para mostrar los libros de acuerdo a su categoría */
function ListaLibros(data) {
    var ListaLibro = document.getElementById("Lista-Libros");
    ListaLibro.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        const Libro = data[i];
        const ContenedorLib =  document.createElement('div');
        ContenedorLib.classList.add('col')

        Card = `        
          <div id="ContenedorLibro" class="card mb-3 Caja_Cards_Princ">
            <h3 id="TituloLibro" class="card-header">${Libro.NombreLibro}</h3>          
            <img id="ImagenLibro" src="${Libro.ImagenDestacada ? Libro.ImagenDestacada : "./IMG/Imagen_No_Encontrada.png"}" alt="Portada del libro ${Libro.NombreLibro}">
            <div class="card-body Caja_Cards_Body">
              <p id="PrecioLibro" class="card-text">&#x20a1;${Libro.Precio}</p>
              <button id="VerMas" type="button" class="btn btn-secondary Button_Detalle" onclick="DetalleLibro(${Libro.ID})" >Ver más detalles</button>
              <button id="AgregarCarrito" type="button" class="btn btn-secondary Button_Compra">Agregar al carrito</button>
            </div>
          </div>        
        `   
        ContenedorLib.innerHTML = Card;
        ListaLibro.append(ContenedorLib);
    }
}
