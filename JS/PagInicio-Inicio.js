function DetalleLibro(id) {
    window.location.href = `Detalle-Producto.html?id=${id}`;
}

function ProdsMasVendido(data) {
    var ListaLibro = document.getElementById('ContenedorPadreProds');
    ListaLibro.innerHTML = '';

    for (let i = 2; i < 5 ; i++) {
        const Libro = data[i];
        const ContenedorLib = document.createElement('div');
        ContenedorLib.classList.add('col')

        Card = `        
          <div id="ContenedorLibro" class="card mb-3 Caja_Cards_Princ Producto-Item">
            <div id="ContenedorTitulo" class="card-header">
                <h3 id="TituloLibro" class="Titulo_Item">${Libro.NombreLibro}</h3>
              </div>

            <div id="ContenedorImagen">
                <img id="ImagenLibro" src="${Libro.ImagenDestacada ? Libro.ImagenDestacada : "./IMG/Imagen_No_Encontrada.png"}" alt="Portada del libro ${Libro.NombreLibro}">
              </div>

            <div id="ContenedorCompras" class="card-body Caja_Cards_Body">            
                <p id="PrecioLibro" class="card-text Precio_Item">&#x20a1;${Libro.Precio}</p>                                
                  <button id="VerMas" type="button" class="btn btn-secondary Button_Detalle" onclick="DetalleLibro(${Libro.ID})">Ver más detalles</button>
              </div>
          </div>        
        `
        ContenedorLib.innerHTML = Card;
        ListaLibro.append(ContenedorLib);
    }
}

document.addEventListener("DOMContentLoaded", () =>{
    ProdsMasVendido(ListaProductos);
})