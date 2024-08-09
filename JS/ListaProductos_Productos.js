document.addEventListener('DOMContentLoaded', () => {
    /* Lista de todos los productos */
    ListaLibros(ListaProductos);

    /* Lista de los productos por categoria */
    ListaLibrosXCategorias();
    $('#FiltroXCategorias').change(function () {
        var TempCategoria = $(this).val();
        var filtro;
        if (TempCategoria === 'all') {
            filtro = ListaProductos;
        } else {
            filtro = ListaProductos.filter(function (lib) {
                return lib.Categorias.includes(TempCategoria);
            });
        }
        ListaLibros(filtro);
    });

    /* Lista de los productos por Editorial */
    LlenarSelectEditorial();
    $('#FiltroXEditorial').change(function () {
        var TempEditorial = $(this).val();
        var filtro;
        if (TempEditorial === 'all') {
            filtro = ListaProductos;
        } else {
            filtro = ListaLibrosXEditorial(TempEditorial);
        }
        ListaLibros(filtro);
    });


    /* Lista de los productos por idioma */
    $('#FiltroXIdioma').change(function () {
        var TempOpcion = $(this).val();
        var filtro = [];

        if (TempOpcion === 'all') {
            filtro = ListaProductos;
        } else {
            switch (TempOpcion) {
                case 'espannol':
                    filtro = ListaLibrosXIdioma('Español');
                    break;
                case 'ingles':
                    filtro = ListaLibrosXIdioma('Inglés');
                    break;
            }
        }
        ListaLibros(filtro);
    });
});

//Función para abrir el detalle dependiendo del libro
function DetalleLibro(id) {
    window.location.href = `Detalle-Producto.html?id=${id}`;
}

//Función para mostrar los libros 
function ListaLibros(data) {
    var ListaLibro = document.getElementById("Lista-Libros");
    ListaLibro.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        const Libro = data[i];
        const ContenedorLib = document.createElement('div');
        ContenedorLib.classList.add('col')

        Card = `        
          <div id="ContenedorLibro" class="card mb-3 Caja_Cards_Princ">
            <div id="ContenedorTitulo" class="card-header">
                <h3 id="TituloLibro">${Libro.NombreLibro}</h3>
              </div>

            <div id="ContenedorImagen">
                <img id="ImagenLibro" src="${Libro.ImagenDestacada ? Libro.ImagenDestacada : "./IMG/Imagen_No_Encontrada.png"}" alt="Portada del libro ${Libro.NombreLibro}">
              </div>

            <div id="ContenedorCompras" class="card-body Caja_Cards_Body">
                <p id="PrecioLibro" class="card-text">&#x20a1;${Libro.Precio}</p>
                <a href="./Detalle-Producto.html"><button id="VerMas" type="button"
                    class="btn btn-secondary Button_Detalle"  onclick="DetalleLibro(${Libro.ID})">Ver más detalles</button></a>
                <button id="AgregarCarrito" type="button" class="btn btn-secondary Button_Compra">Agregar al
                  carrito</button>
              </div>
          </div>        
        `
        ContenedorLib.innerHTML = Card;
        ListaLibro.append(ContenedorLib);
    }
}

/* Función para mostrar los libros de acuerdo a su categoría */
function ListaLibrosXCategorias() {
    var Select = $('#FiltroXCategorias');
    var ListCategorias = [];

    $.each(ListaProductos, function (index, libro) {
        $.each(libro.Categorias, function (indez, Categorias) {
            if ($.inArray(Categorias, ListCategorias) === -1) {
                ListCategorias.push(Categorias);
                Select.append('<option value="' + Categorias + '">' + Categorias + '</option>');
            }
        });
    });
}

/* Función para mostrar los libros de acuerdo a su Editorial */
function LlenarSelectEditorial() {
    var Select = $('#FiltroXEditorial');
    var ListEditorial = [];
    ListaProductos.forEach(Lib => {
        const valorLib = Lib.Editorial.replace(/ /g, "_");
        if (ListEditorial.length === 0) {
            ListEditorial.push(valorLib);
            Select.append('<option value="' + valorLib + '">' + Lib.Editorial + '</option>');
        }
        else {
            let count = 0;
            ListEditorial.forEach(edit => {
                if (valorLib === edit) {
                    count++;
                }
            });

            if (count == 0) {
                ListEditorial.push(valorLib);
                Select.append('<option value="' + valorLib + '">' + Lib.Editorial + '</option>');
            }
        }
    });
}

function ListaLibrosXEditorial(Opc) {
    var ListaEdit = [];
    ListaProductos.forEach(lib => {
        const TempEdit = Opc.replace("_", " ")
        if (lib.Editorial === TempEdit) {
            ListaEdit.push(lib);
        }
    });
    return ListaEdit;
}

/* Función para mostrar los libros de acuerdo a su Idioma */
function ListaLibrosXIdioma(OpcValor) {
    var ListaIdioma = [];
    for (let i = 0; i < ListaProductos.length; i++) {
        const Lib = ListaProductos[i];
        if (Lib.Idioma === OpcValor) {
            ListaIdioma.push(Lib);
        }
    }
    return ListaIdioma;
}