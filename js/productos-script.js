$(document).ready(function () {
    var table = $("#lista-productos").DataTable({ // Inicialización del datatable
        "language": {
            url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json",
        },
        "ajax":{  
            url: "../controller/productos_controller.php?op=listar",
            type: "GET",
            datatype: "json",
            dataSrc: "",
        },
        "columns": [
            {data: "id"},
            {data: "producto"},
            {data: "cantidad"},
            {data: "precio_venta"},
            {data: null,
                defaultContent: "<button class='delete' id='delete' value=''><i class='fa-solid fa-trash'></i></button> <button class='edit'><i class='fa-solid fa-pen'></i></button>" ,
                orderable: false,
            }
        ],
        "responsive": true,

    });

    get_info_delete("#lista-productos tbody", table); // Función borrar
    form_submit(table); // Función añadir
    get_info_edit("#lista-productos tbody", table);
});

// AÑADIR DATOS

/* Función para añadir datos */

var form_submit = function(table){
    $("#form-new-producto").submit(function(e){
        e.preventDefault();
        var producto_nombre = $("#producto").val();
        var cantidad = $("#cantidad").val();
        var precio = $("#precio").val();
        let parametros = { "producto": producto_nombre, "cantidad": cantidad, "precio_venta": precio}
        console.log(parametros);
        $.ajax({
            data: parametros,
            url: '../controller/productos_controller.php?op=add',
            type: 'POST',
            success: function(){
                Swal.fire({
                    title: 'Añadido!',
                    text: producto_nombre + ' fue añadido correctamente',
                    icon: 'success',
                    background: '#1a203a',
                    color: '#fff',
                });
                modal_cerrar();
                table.ajax.reload();
            }
        })
    })
}

// ELIMINAR DATOS 

/* Función para el botón eliminar */
var get_info_delete = function(tbody, table){
    $(tbody).on("click", "button.delete", function(){
        var data = table.row($(this).parents("tr")).data();
        var producto = $("#lista-productos #delete").val(data.id);
        var id_producto = data.id;
        console.log(id_producto);
        alerta_eliminar(id_producto);

/* Petición ajax para eliminar el producto */

        function eliminar_producto(id_producto) {
            let parametros = { "id":id_producto }
            $.ajax({
                data: parametros,
                url: '../controller/productos_controller.php?op=eliminar',
                type: 'POST',
                success:function(){
                    Swal.fire({
                            title: '¡Borrado con éxito!',
                            text: data.producto + ' fue borrado con éxito',
                            icon: 'success',
                            background: '#1a203a',
                            color: '#fff',
                    })
                },
            })
        }

/* Función para mostrar la alerta de confirmación */
        function alerta_eliminar(id_producto) {
            Swal.fire({
                title: '¿Está seguro de eliminar el producto?',
                text: 'El producto ' + data.producto + '(' + data.id +') será eliminado',
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
                    eliminar_producto(id_producto); // Llamado a la petición ajax
                    table.ajax.reload(); // Recarga de la tabla 
                }
            })
        }
    });
};

// EDITAR DATOS

var get_info_edit = function(tbody, table){
    $(tbody).on("click", "button.edit", function(){
        var data = table.row($(this).parents("tr")).data();
        var id = $("#lista-productos #delete").val(data.id);
            producto = $("#producto").val(data.producto);
            cantidad = $("#cantidad").val(data.cantidad);
            precio = $("#precio").val(data.precio_venta);

        modal_abrir();

        //console.log(data);
    });
}