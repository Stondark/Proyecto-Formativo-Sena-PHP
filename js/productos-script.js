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

    get_info_delete("#lista-productos tbody", table);
});
/* Función para el botón eliminar */
var get_info_delete = function(tbody, table){
    $(tbody).on("click", "button.delete", function(){
        var data = table.row($(this).parents("tr")).data();
        var producto = $("#lista-productos #delete").val(data.id);
        var id_producto = data.id;
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
                        title: '¡Eliminado!',
                        text: data.producto + ' fue eliminado correctamente',
                        icon: 'success',
                        background: '#1a203a',
                        color: '#fff',
                    })
                }
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

