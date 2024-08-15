/* Agregar el producto desde detalle */
function AgregarProdCarritoDet() {
    var oProd = CrearProdDet();
    if (!oProd) {
        return;
    }
    GuardarProdLocalDet(oProd);
}

function CrearProdDet() {
    var BtnProd = document.getElementById('AgregarProdCarrito');
    var IDProducto = BtnProd.dataset.idProd;

    var Titulo = document.getElementById('TituloProd').textContent;

    var Cantidad = document.getElementById('CantidadProducto').value;

    if (!ValidarCantidad(Cantidad)) {
        return;
    }

    var Precio = document.getElementById('PrecioProd').textContent;
    Precio = Precio.substring(1, Precio.length);

    var Subtotal = Precio * Cantidad;

    var oLibro = {
        IDProducto,
        Titulo,
        Cantidad,
        Precio,
        Subtotal
    };

    return oLibro;
}

function GuardarProdLocalDet(element) {
    var ListaProdComprar = new Array();
    if (localStorage.getItem('CompraProds')) {
        ListaProdComprar = JSON.parse(localStorage.getItem('CompraProds'));
    }

    if (ListaProdComprar.length > 0) {
        let index = ListaProdComprar.findIndex((oTempLib) => oTempLib.IDProducto == element.IDProducto);

        if (index != -1) {
            ListaProdComprar[index].Cantidad = element.Cantidad;
            ListaProdComprar[index].Subtotal = element.Cantidad * element.Precio;
            $.notify("¡Se ha modificado la cantidad de este producto!", "success");
        } else {
            ListaProdComprar.push(element);
            $.notify("¡Se ha agregado el producto al carrito!", "success");
        }

    } else {
        ListaProdComprar.push(element);
        $.notify("¡Se ha agregado el producto al carrito!", "success");
    }

    localStorage.setItem('CompraProds', JSON.stringify(ListaProdComprar));
    console.log(JSON.parse(localStorage.getItem('ListaProdComprar')));    
}

function ValidarCantidad(pCant) {
    if (pCant) {
        if ((pCant > 0) && (pCant < 31)) {
            return true
        }
        $.notify("¡La cantidad digitada no es válida!\nDebe de seleccionar una cantidad entre 1 a 99", "warn");
        return false;
    } else {
        $.notify("Debe de digitar una cantidad", "warn");
        return false;
    }

}
/* ----------------------------------------------------------------------------------------------------------------------------- */

/* Agregar el producto desde el catálgo */
function AgregarProdCarritoCat(element) {
    var oProd = CrearProdCat(element);
    GuardarProdLocalCat(oProd);
}

function CrearProdCat(element) {    
    var ComponentHTML = $(element).closest('div.Producto-Item');

    var IDProducto = element.dataset.id;

    var Titulo = $(ComponentHTML).find('.Titulo_Item').text();

    var Cantidad = 1;

    var Precio = $(ComponentHTML).find('.Precio_Item').text();;
    Precio = Precio.substring(1, Precio.length);

    var Subtotal = Precio * Cantidad;

    var oLibro = {
        IDProducto,
        Titulo,
        Cantidad,
        Precio,
        Subtotal
    };

    return oLibro;
}

function GuardarProdLocalCat(element) {
    var ListaProdComprar = new Array();
    if (localStorage.getItem('CompraProds')) {
        ListaProdComprar = JSON.parse(localStorage.getItem('CompraProds'));
    }

    if (ListaProdComprar.length > 0) {
        let index = ListaProdComprar.findIndex((oTempLib) => oTempLib.IDProducto == element.IDProducto);

        if (index != -1) {
            ListaProdComprar[index].Cantidad += 1 ;
            ListaProdComprar[index].Subtotal = ListaProdComprar[index].Cantidad * element.Precio;
            $.notify("¡Se ha agregado el producto al carrito!", "success");
        } else {
            ListaProdComprar.push(element);
            $.notify("¡Se ha agregado el producto al carrito!", "success");
        }

    } else {
        ListaProdComprar.push(element);
        $.notify("¡Se ha agregado el producto al carrito!", "success");
    }

    localStorage.setItem('CompraProds', JSON.stringify(ListaProdComprar));
    console.log(JSON.parse(localStorage.getItem('ListaProdComprar')));    
}

/* ----------------------------------------------------------------------------------------------------------------------------- */

