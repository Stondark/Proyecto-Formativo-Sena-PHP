$(document).ready(function () {
    var table = $("#lista-ventas").DataTable({ // Inicialización del datatable
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
                            return "<span class='entregado'>"+data+"</span>";
                        case "Cancelado":
                            return "<span class='cancelado'>"+data+"</span>";    
                        case "En proceso":
                            return "<span class='espera'>"+data+"</span>";
                    }
                }
            },
            {data: "total"},
            {data: null,
                defaultContent: "<button class='delete' id='delete' value=''><i class='fa-solid fa-trash'></i></button> <button class='edit'><i class='fa-solid fa-pen'></i></button> <button class='pdf'><i class='fa-solid fa-file-pdf'></i></button>" ,
                orderable: false,
            }
        ],

        "responsive": true,

    });

    get_info_delete("#lista-ventas tbody", table);
});
/* Función para el botón eliminar */
var get_info_delete = function(tbody, table){
    $(tbody).on("click", "button.delete", function(){
        var data = table.row($(this).parents("tr")).data();
        var ventas = $("#lista-ventas #delete").val(data.id_venta);
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

/* Función para mostrar la alerta de confirmación */
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