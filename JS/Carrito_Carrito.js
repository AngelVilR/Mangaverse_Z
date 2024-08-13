function AgregarProdCarrito() {
    var BtnProd = document.getElementById('AgregarProdCarrito');
    var IDProducto = BtnProd.dataset.idProd;

    var Titulo = document.getElementById('TituloProd').textContent;
    var Cantidad = document.getElementById('CantidadProducto').value;    
    var Precio = document.getElementById('PrecioProd');    

    ValidarCantidad(Cantidad)

    /* CONTINUAR TRABAJANDO CON EL SISTEMA DE CARRITO */
}


function ValidarCantidad(pCant){
    if (pCant) {
        if ((pCant > 0) && (pCant < 100)) {
            /* VER COMO COLOCAR LAS ALERTAS EN JS Y HTML */
        }
        
    }

}