$(document).ready(function () {
    var table = $("#lista-table").DataTable({ // Inicialización del datatable
        "language": {
            url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json",
        },
        "ajax":{  
            url: "../controller/ventas_controller.php?op=listar",
            type: "GET",
            datatype: "json",
            dataSrc: "",
        },
        "columns": [
            {data: "id_venta"},
            {data: "nombre_cliente"},
            {data: "numero"},
            {data: "direccion"},
            {data: "producto"},
            {data: "cantidad"},
            {data: "tipo_envio"},
            {data: "nombre"},
            {data: "estado",
                render: function(data, type, row){
                    switch (data) {
                        case "Entregado":
                            return "<span class='whatsapp'>"+data+"</span>";
                        case "Cancelado":
                            return "<span class='delete'>"+data+"</span>";    
                        case "En proceso":
                            return "<span class='edit'>"+data+"</span>";
                    }
                }
            },
            {data: "total"},
            {data: null,
                defaultContent: "<button class='delete' id='delete' value=''><i class='fa-solid fa-trash'></i></button> " +
                    "<button class='edit'><i class='fa-solid fa-pen'></i></button> " +
                    "<button class='pdf' id='pdf' value=''><i class='fa-solid fa-file-pdf'></i></button>",
                orderable: false,
            }
        ],

        "responsive": true,

    });

    get_info_delete("#lista-table tbody", table);
    get_info_pdf("#lista-table tbody", table);
    get_info_submit(table);
});


/* Función para el botón eliminar */
var get_info_delete = function(tbody, table){
    $(tbody).on("click", "button.delete", function(){
        var data = table.row($(this).parents("tr")).data();
        var ventas = $("#lista-table #delete").val(data.id_venta);
        var id_deventa = data.id_venta;
        alerta_eliminar(id_deventa);

/* Petición ajax para eliminar la venta */

        function eliminar_producto(id_deventa) {
            let parametros = { "id_venta":id_deventa }
            $.ajax({
                data: parametros,
                url: '../controller/ventas_controller.php?op=eliminar',
                type: 'POST',
                success:function(){
                    Swal.fire({
                        title: '¡Eliminado!',
                        text: 'La venta de ' + data.nombre_cliente + ' fue eliminada correctamente',
                        icon: 'success',
                        background: '#1a203a',
                        color: '#fff',
                    })
                }      
            })
        }

/* Función para mostrar la alerta de confirmación de eliminar */
        function alerta_eliminar(id_deventa) {
            Swal.fire({
                title: '¿Está seguro de eliminar la venta?',
                text: 'La venta del cliente ' + data.nombre_cliente + '(' + data.id_venta +') será eliminado',
                icon: 'warning',
                background: '#1a203a',
                color: '#fff',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#EB5160',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Sí, elimínalo'
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminar_producto(id_deventa); // Llamado a la petición ajax
                    table.ajax.reload(); // Recarga de la tabla 
                }
            })
        }
    });
};

var get_info_pdf = function (tbody,table){
    $(tbody).on("click","button.pdf",function () {
        var data = table.row($(this).parents("tr")).data();
        var id_venta = data.id_venta;
        var cliente = data.nombre_cliente;
        var direccion = data.direccion;
        var producto = data.producto;
        var cantidad = data.cantidad;
        var total = data.total;
        $.post("../views/invoice.php", {idVenta:id_venta,nombreCliente:cliente}, function (data){
            if(data != null){
                window.location.href = "../views/invoice.php?idVenta=" + id_venta + "&nombreCliente="+cliente+ "&productoa=" + producto + "&cantidad="+ cantidad +
                "&total=" + total;
            }
        });

    });
}

// Cargar productos

function load_productos(){
    $.ajax({
        url: '../controller/ventas_controller.php?op=info',
        type: 'POST',
    })
    .done(function(res){
        $("#select_list").html(res);
    })
}

function load_vendedores(){
    $.ajax({
        url: '../controller/ventas_controller.php?op=vendedores',
        type: 'POST',
    })
    .done(function(res){
        $("#vendedores_list").html(res);
    })
}



/* Función para añadir datos */

var get_info_submit = function(table){
    const btn_add = document.getElementById("abrir-nuevo");
    $(btn_add).on("click", function(){
        load_productos();
        load_vendedores()
        Swal.fire({
            title: 'Añadir nuevo producto',
            html:' <form id="form-new-insert">' +
                '<label for="">CLIENTE</label>'+
                '<input type="text" id="cliente" name="cliente" class="swal2-input">'+

                '<label for="">NÚMERO</label>'+
                '<input type="text" id="numero" name="numero" class="swal2-input" >'+

                '<label for="">DIRECCIÓN</label>'+
                '<input type="text" id="direccion" name="direccion" class="swal2-input">'+

                '<select class="swal2-input" id="select_list"></select>'+

                '<label for="">CANTIDAD</label>'+
                '<input type="text" id="cantidad" name="cantidad" class="swal2-input">'+

                '<select class="swal2-input" id="vendedores_list"></select>'+

                '<select class="swal2-input" id="envio">'+
                '<option value="1">Contraentrega</option>'+
                '<option value="2">Almacén</option>'+
                '<option value="3">Interrapidísimo</option>'+
                '</select>'+
                
                '<select class="swal2-input" id="estado">'+
                '<option value="1">Entregado</option>'+
                '<option value="2">Cancelado</option>'+
                '<option value="3">En proceso</option>'+
                '</select>'+

                '<label for="">TOTAL</label>'+
                '<input type="text" id="total" name="total" class="swal2-input">'+

                '</form>',
            focusConfirm: false,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                let cliente = document.getElementById('cliente').value
                let numero = document.getElementById('numero').value
                let direccion = document.getElementById('direccion').value
                let cantidad = document.getElementById('cantidad').value
                let total = document.getElementById('total').value
                if(!cliente || !numero || !direccion || !cantidad || !total){
                    Swal.showValidationMessage("Ingrese valores en los campos vacíos");
                } else if(isNaN(numero)|| isNaN(cantidad) || isNaN(total)){
                    Swal.showValidationMessage("Ingrese únicamente números");
                }
                return true;
            }
        }).then((result) =>{
            if(result.isConfirmed){
                if(result){
                    ajax_newprod();
                    table.ajax.reload();
                }
            }
        })
    })
    

    function ajax_newprod(){

        var cliente = Swal.getPopup().querySelector("#cliente").value;
        var numero = Swal.getPopup().querySelector("#numero").value.replace(/\./g, '');
        var direccion = Swal.getPopup().querySelector("#direccion").value;
        var producto = Swal.getPopup().querySelector("#select_list").value;
        var cantidad = Swal.getPopup().querySelector("#cantidad").value.replace(/\./g, '');
        var vendedores = Swal.getPopup().querySelector("#vendedores_list").value;
        var envio = Swal.getPopup().querySelector("#envio").value;
        var estado = Swal.getPopup().querySelector("#estado").value;
        var total = Swal.getPopup().querySelector("#total").value.replace(/\./g, '');

        let parametros = { "cliente": cliente, "numero": numero, "direccion": direccion, "producto": producto,
                            "cantidad": cantidad, "vendedores": vendedores, "envio": envio, "estado": estado, "total":total
        }
        $.ajax({
            data: parametros,
            url: '../controller/ventas_controller.php?op=add',
            type: 'POST',
            success: function(){
                Swal.fire({
                    title: 'Añadido!',
                    text: 'La venta fue añadida correctamente',
                    icon: 'success',
                    background: '#1a203a',
                    color: '#fff',
                });
            },
            beforeSend: load_ajax("el producto se está añadiendo"),
        })
    }

}