$(document).ready(function () {
    var table = $("#lista-productos").DataTable({
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
            //{defaultContent: "<button><i class='fa-solid fa-trash'></i></button><a href='editar'><i class='fa-solid fa-pen'></i></a><a href='pdf'><i class='fa-solid fa-file-pdf'></i></a>"},
        ],
        "responsive": true,

    });

    get_info_delete("#lista-productos tbody", table);
});
var get_info_delete = function(tbody, table){
    $(tbody).on("click", "button.delete", function(){
        var data = table.row($(this).parents("tr")).data();
        var producto = $("#lista-productos #delete").val(data.id);
        console.log(data);
        console.log(producto);
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
                Swal.fire({
                    title: '¡Eliminado!',
                    text: data.producto + ' fue eliminado correctamente',
                    icon: 'success',
                    background: '#1a203a',
                    color: '#fff',
                })

            }
        })
    });
};
