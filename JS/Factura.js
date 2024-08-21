document.addEventListener('DOMContentLoaded', () => {
    MostrarFactura();
    localStorage.removeItem('CompraProds');
    localStorage.removeItem('Facturas');
})

function MostrarFactura() {
    /* Info cliente */
    var ListaFactura = JSON.parse(localStorage.getItem('Facturas'));

    if (ListaFactura) {
        document.getElementById('IDClien').innerHTML = `<b>Cédula del cliente: </b>${ListaFactura[0].Cliente.CedCliente}`
        document.getElementById('NombreClien').innerHTML = `<b>Nombre del cliente: </b>${ListaFactura[0].Cliente.NombCliente}`
        document.getElementById('CorreoClien').innerHTML = `<b>Correo electrónico: </b>${ListaFactura[0].Cliente.CorreoCliente}`
        document.getElementById('TelefonoClien').innerHTML = `<b>Teléfono: </b>${ListaFactura[0].Cliente.TelCliente}`
        document.getElementById('PostalClien').innerHTML = `<b>Código postal: </b>${ListaFactura[0].Cliente.PostalCliente}`
        document.getElementById('DirClien').innerHTML = `<b>Dirección destino: </b>${ListaFactura[0].Cliente.DirCliente}`

        var fechaAct = new Date();
        var day = fechaAct.getDate();
        var mes = fechaAct.getMonth() + 1;
        var year = fechaAct.getFullYear();

        var FechaNueva = day + "/"+ mes + "/"+ year;

        document.getElementById('FechaClien').innerHTML = `<b>Fecha de compra: </b>${FechaNueva}`;
        document.getElementById('PaqClien').innerHTML = `<b>Tipo de envío: </b>${ListaFactura[0].Cliente.TipoPaqCliente}`;
    }

    /* Lista productos */
    var Carrito = JSON.parse(localStorage.getItem('CompraProds'));
    var Resumen = document.getElementById('ResumemDet');
    Resumen.innerHTML = '';
    FilaProd = "";

    var Total = 0;
    if (Carrito) {
        Carrito.forEach(Prod => {
            var NombreProd = Prod.Titulo;
            var CantitdadProd = Prod.Cantidad;
            var PrecioProd = Prod.Precio;
            var SubtotalProd = Prod.Subtotal;
            const TempDiv = document.createElement('div');
            TempDiv.classList.add('FlexDetalle');

            FilaProd = `
                        <nav>
                            <p>${NombreProd}</p>
                        </nav>

                        <nav>
                            <p>${CantitdadProd}</p>
                        </nav>

                        <nav>
                            <p>&#x20a1;${PrecioProd}</p>
                        </nav>

                        <nav>
                            <p>&#x20a1;${SubtotalProd}</p>
                        </nav>            
            `;
            Total += SubtotalProd;
            TempDiv.innerHTML = FilaProd;
            Resumen.append(TempDiv);
        });
        document.getElementById('Total').innerHTML = `&#x20a1;${Total}`;
    }
}

document.getElementById('BtnInicio').addEventListener('click', () =>{
    localStorage.removeItem('CompraProds');
    localStorage.removeItem('Facturas');
});