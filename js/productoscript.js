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
            {defaultContent: "<a href='eliminar'><i class='fa-solid fa-trash'></i></a><a href='editar'><i class='fa-solid fa-pen'></i></a><a href='pdf'><i class='fa-solid fa-file-pdf'></i></a>"},
        ],
        "responsive": true,
    });

});
